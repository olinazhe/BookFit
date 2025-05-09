import { useState } from "react";
import { FormEvent } from "react";
import { BookData } from "@full-stack/types";

export default function SearchBar() {
  const [text, setText] = useState<string>(""); // State for search input
  const [books, setBooks] = useState<BookData[]>([]); // State for storing books from server
  const [error, setError] = useState<string | null>(null); // State for errors
  const getReadingCircleBooks = () => {
    const storedBooks = localStorage.getItem("readingCircleBooks");
    return storedBooks ? JSON.parse(storedBooks) : [];
  };
  const joinCircle = (book) => {
    // Return a function for the onClick handler
    return () => {
      // Get current reading circle books
      const circleBooks = getReadingCircleBooks();

      // Check if book is already in the circle to avoid duplicates
      if (!circleBooks.some((b) => b.id === book.id)) {
        // Add the new book
        circleBooks.push({
          id: book.id,
          title: book.title,
          authors: book.authors,
        });

        // Save back to localStorage
        localStorage.setItem("readingCircleBooks", JSON.stringify(circleBooks));

        // Show feedback to user
        alert(`Added "${book.title}" to your reading circle!`);
      } else {
        alert("This book is already in your reading circle!");
      }
    };
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("Search submitted");
    try {
      const response = await fetch(`http://localhost:8080/read?q=${text}`);
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      const formattedBooks = data.items.map((item: BookData) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors || [],
        thumbnail:
          item.volumeInfo?.imageLinks?.thumbnail ||
          item.volumeInfo?.imageLinks?.smallThumbnail ||
          null,
        description: item.volumeInfo?.description || "No description available",
      }));
      //console.log(formattedBooks)
      setBooks(formattedBooks); // Set the books state with server data
      console.log(books);
      //console.log(data.items[0]?.volumeInfo?.title || "No title found");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    }
  }

  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search book titles"
          className="search-bar__input"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit" className="search-bar__btn">
          Search
        </button>
      </form>
      {error && <div className="error">{error}</div>} {}
      <div className="content">
        <ul>
          {books.map((book) => (
            <li
              key={book.id}
              style={{
                margin: "20px 0",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ display: "flex", gap: "15px" }}>
                {/* Book cover image */}
                <div
                  style={{
                    minWidth: "120px",
                    height: "180px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  {book.thumbnail ? (
                    <img
                      src={book.thumbnail}
                      alt={`Cover of ${book.title}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        color: "#999",
                        fontSize: "12px",
                        textAlign: "center",
                      }}
                    >
                      No cover available
                    </span>
                  )}
                </div>
              </div>
              <strong>{book.title}</strong>
              <p>{book.authors.join(", ")}</p>
              <p>{book.description}</p>
              <button>Read</button>
              <button>Want to Read</button>
              <button>Reading</button>
              <button onClick={joinCircle(book)}>Join Reading Circle</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
