import Card from "../components/tracking-cards";
import BooksReadCard from "../components/readBooks";
const HomePage = () => (
  <body>
    <div className="flex-container-column">
      <h1>Reading Dashboard</h1>
      <h3>Track your reading progress and achievements</h3>
      <button id="small-box"> Yearly </button>
      <button id="small-box"> Monthly </button>
    </div>
    <div className="flex-container-row">
      <Card title="Books Read" num="100" />
      <Card title="Goals Completed" num="0" />
      <Card title="Goals Completed" num="0" />
      <Card title="Goals Completed" num="0" />
    </div>
    <div className="flex-container-row">
      <BooksReadCard />
    </div>
  </body>
);

export default HomePage;
