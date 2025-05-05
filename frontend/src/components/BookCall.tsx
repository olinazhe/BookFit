import { createContext, useContext, useState } from "react";
import { BookData } from "@full-stack/types";

interface BookContextType {
    readBooks: BookData[];
    handleRead: (book: BookData) => void;
  }

const defaultValue: BookContextType = {
    readBooks: [],
    handleRead: () => {}
  };
  
const BookContext = createContext<BookContextType>(defaultValue);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [readBooks, setReadBooks] = useState<BookData[]>([]);

  function handleRead(book: BookData) {
    console.log('hi');
    setReadBooks([...readBooks, book]);
    console.log(`Marked book "${book.title}" as "Read"`);
    console.log({readBooks});
  }

  return (
    <BookContext.Provider value={{ readBooks, handleRead }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
    const context = useContext(BookContext);
    return context  
}
  




