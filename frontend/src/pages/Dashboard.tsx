import React from "react";
import Card from "../components/tracking-cards";
import BooksReadCard from "../components/readBooks"; 

const HomePage = () => (
  <body>
    <div className="flex-container-column">
      <h1>Reading Dashboard</h1>
      <h3>Track your reading progress and achievements</h3>
      <p id="small-box"> Yearly </p>
    </div>
    <div className="flex-container-row">
      <Card title="Books Read" num="100" />
      <Card title="Goals Completed" num="100" />
      <Card title="Goals Completed" num="100" />
      <Card title="Goals Completed" num="100" />
    </div>
    <div className="flex-container-row">
      <BooksReadCard />
    </div>
  </body>
);

export default HomePage;
