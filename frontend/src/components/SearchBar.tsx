import { useState } from "react";
import { FormEvent } from "react";
import { BookData } from "@full-stack/types";
import { useBookContext } from "./BookCall";


export default function SearchBar() {
  const [text, setText] = useState<string>(""); // State for search input
  const [books, setBooks] = useState<BookData[]>([]); // State for storing books from server
  const [error, setError] = useState<string | null>(null); // State for errors
  const { handleRead } = useBookContext(); // Track read books

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
              <button onClick={() => handleRead(book)}>Read</button>
              <button>Want to Read</button>
              <button>Reading</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
