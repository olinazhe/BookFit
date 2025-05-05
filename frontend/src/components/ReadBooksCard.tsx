import { useState } from "react";
import { FormEvent } from "react";
import { BookData } from "@full-stack/types";
import { useBookContext } from "./BookCall";

export function ReadBooksCard () {
    const [book, setBooks] = useState<BookData[]>([]); // State for storing books from server

    try {
        fetch(
            `{BACKEND_BASE_PATH/api/read/addReadBooks/${book}`, {
                method: "PUT",
                headers: {
                    'contend-tupe': 'application/jason',
                },
                //body: JASON.
            }
        ).then((res) => res.jason())
        .then((a) => setBooks(a))
        .catch((error) => {
            console.log("Errored", error)
        })
    } catch(error) {
        console.log(error);
    }
  
    return (
      <div>
          books
          {book.map((b) => (
            <li key={b.id}>
              {b.title}
            </li>
          ))}
      </div>
    );
  }