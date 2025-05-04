import { useState } from "react";

const SocialButton = () => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showReadingCircles, setShowReadingCircles] = useState(false);

  const leaderboardData = [
    {
      id: 1,
      name: "User 1",
      rank: 1,
      avatar: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "User 2",
      rank: 2,
      avatar: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "User 3",
      rank: 3,
      avatar: "https://via.placeholder.com/80",
    },
  ];

  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
    setShowReadingCircles(false);
  };

  const toggleReadingCircles = () => {
    setShowReadingCircles(!showReadingCircles);
    setShowLeaderboard(false);
  };

  return (
    <div style={{ marginLeft: "2rem", position: "relative" }}>
      <h1>Readathon</h1>
      <h2 style={{ color: "grey", fontSize: "18px", marginTop: -25 }}>
        Connect with friends and join reading circles
      </h2>

      <div className="card">
        <button onClick={toggleLeaderboard}>Leaderboard</button>
        <button onClick={toggleReadingCircles}>Reading Circles</button>
        <button>Friends</button>
        <button>Add Friends</button>
        <button>Join Reading Circle</button>
      </div>

      {/* Leaderboard Popup */}
      {showLeaderboard && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            maxWidth: "800px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "20px",
            marginTop: "20px",
            zIndex: 10,
            border: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>April Reading Rank</h2>
            <button
              onClick={toggleLeaderboard}
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "300px",
              marginTop: "30px",
            }}
          >
            {/* Second Place */}
            <div
              style={{
                position: "relative",
                width: "120px",
                height: "200px",
                backgroundColor: "#e0e0e0",
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#c0c0c0",
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                2
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <img
                  src={leaderboardData[1].avatar}
                  alt={leaderboardData[1].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* First Place - Taller */}
            <div
              style={{
                position: "relative",
                width: "120px",
                height: "260px",
                backgroundColor: "#e0e0e0",
                marginRight: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#daa520", // gold color
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                1
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <img
                  src={leaderboardData[0].avatar}
                  alt={leaderboardData[0].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Third Place */}
            <div
              style={{
                position: "relative",
                width: "120px",
                height: "160px",
                backgroundColor: "#e0e0e0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#cd7f32", // bronze color
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                3
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                }}
              >
                <img
                  src={leaderboardData[2].avatar}
                  alt={leaderboardData[2].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reading Circles Popup */}
      {showReadingCircles && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            maxWidth: "800px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            padding: "20px",
            marginTop: "20px",
            zIndex: 10,
            border: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>Reading Circles</h2>
            <button
              onClick={toggleReadingCircles}
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
              margin: "20px 0",
            }}
          >
            <p style={{ color: "#888" }}>No reading circles to display</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialButton;
