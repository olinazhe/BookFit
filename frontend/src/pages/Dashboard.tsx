import Card from "../components/tracking-cards";
import BooksReadCard from "../components/readBooks";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [viewing, setViewing] = useState(null);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    setCurrentMonth(months[date.getMonth()]);
    setCurrentYear(date.getFullYear().toString());
  }, []);
  const yearlyUpdate = () => {
    setViewing(viewing === "yearly" ? null : "yearly");
  };
  const monthlyUpdate = () => {
    setViewing(viewing === "monthly" ? null : "monthly");
  };

  return (
    <body>
      <div className="flex-container-column">
        <h1>Reading Dashboard</h1>
        <h3>Track your reading progress and achievements</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            id="small-box"
            onClick={yearlyUpdate}
          >
            Yearly
          </button>
          <button
            id="small-box"
            onClick={monthlyUpdate}
          >
            Monthly
          </button>
        </div>
      </div>
      {viewing === "yearly" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "1200px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            marginTop: "10px",
            zIndex: 10,
            border: "3px solid rgb(35, 156, 8)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2>{currentYear} Reading Statistics</h2>
            <button
              onClick={yearlyUpdate}
              style={{
                border: "none",
                fontSize: "20px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              x
            </button>
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px"}}>
            <Card title="Books Read" num="100" />
            <Card title="Goals Completed" num="0" />
            <Card title="Reading Streaks" num="45" />
            <Card title="Average Rating" num="4.2" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <BooksReadCard />
          </div>
        </div>
      )}
      {viewing === "monthly" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            maxWidth: "1200px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            marginTop: "10px",
            zIndex: 10,
            border: "3px solid rgb(35, 156, 8)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2>{currentMonth} Reading Statistics</h2>
            <button
              onClick={monthlyUpdate}
              style={{
                border: "none",
                fontSize: "20px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              x
            </button>
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <Card title="Books Read" num="8" />
            <Card title="Goals Completed" num="2" />
            <Card title="Reading Streaks" num="15" />
            <Card title="Pages Read" num="1,245" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <BooksReadCard />
          </div>
        </div>
      )}
      {!viewing && (
        <div
          className="flex-container-row"
          style={{ justifyContent: "center", marginTop: "40px" }}
        >
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              border: "1px black",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              maxWidth: "600px",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>
              BookFit Statistics Dashboard
            </h3>
            <p style={{ color: "grey" }}>
              View your Yearly and Monthly statistics. Stay BookFit!
            </p>
          </div>
        </div>
      )}
    </body>
  );
};

export default HomePage;
