import { useBookContext } from "./BookCall";
import { ReadBooksCard } from "./ReadBooksCard"

const BooksReadCard = () => {
  const { readBooks } = useBookContext();
  console.log("readBooks:", readBooks);

  return (
    <div className="trackingCard">
      <h1>Books Read</h1>
      <h4>Books you have read over the past year</h4>
      <ReadBooksCard />
    </div>
  );
};
export default BooksReadCard;
