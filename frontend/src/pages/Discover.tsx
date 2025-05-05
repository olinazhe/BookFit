import SearchBar from "../components/SearchBar";
import {BookProvider} from "../components/BookCall";

const UpdateBooksPage = () => (
  <body>
    <div className="flex-container-column">
      <h1>Search Books</h1>
    </div>
    <div className="flex-container-row">
      <BookProvider>
        <SearchBar />
      </BookProvider>
    </div>
  </body>
);

export default UpdateBooksPage;
