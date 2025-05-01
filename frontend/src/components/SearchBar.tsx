import { useState } from "react";
import { FormEvent } from "react";
import { BookData } from "@full-stack/types"

export default function SearchBar() {
  const [text, setText] = useState<string>(""); // State for search input
  const [books, setBooks] = useState<BookData[]>([]); // State for storing books from server
  const [error, setError] = useState<string | null>(null); // State for errors

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
        authors: item.volumeInfo.authors || []
      }));
      //console.log(formattedBooks)
      setBooks(formattedBooks); // Set the books state with server data
      console.log(books)
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
            <li key={book.id}>
              <strong>{book.title}</strong>
              <p>{book.authors.join(", ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}