import { useState } from "react";

const SocialButton = () => {
  const [onLeaderboard, setLeaderboard] = useState(false);
  const [onReadingCircles, setReadingCircles] = useState(false);
  const [onFriends, setFriends] = useState(false);

  const leaderboardChart = [
    {
      id: 1,
      rank: 1,
      name: "Amelie",
      profile: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      rank: 2,
      name: "Olina",
      profile: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      rank: 3,
      name: "Chris",
      profile: "https://via.placeholder.com/80",
    },
  ];

  const toggleLeaderboard = () => {
    setLeaderboard(!onLeaderboard);
    setReadingCircles(false);
    setFriends(false);
  };
  const toggleReading = () => {
    setLeaderboard(false);
    setReadingCircles(!onReadingCircles);
    setFriends(false);
  };
  const toggleSetFriends = () => {
    setLeaderboard(false);
    setReadingCircles(false);
    setFriends(!onFriends);
  };

  return (
    <div style={{ marginLeft: "2rem", position: "relative" }}>
      <h1>Readathon</h1>
      <h2 style={{ color: "grey", fontSize: "18px", marginTop: -25 }}>
        Connect with friends and join reading circles
      </h2>

      <div className="card">
        <button onClick={toggleLeaderboard}>Leaderboard</button>
        <button onClick={toggleReading}>Reading Circles</button>
        <button onClick={toggleSetFriends}>Friends</button>
      </div>

      {onLeaderboard && (
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
                  src={leaderboardChart[1].profile}
                  alt={leaderboardChart[1].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

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
                  backgroundColor: "#daa520",
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
                  src={leaderboardChart[0].profile}
                  alt={leaderboardChart[0].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

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
                  backgroundColor: "#cd7f32",
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
                  src={leaderboardChart[2].profile}
                  alt={leaderboardChart[2].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {onReadingCircles && (
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
              onClick={toggleReading}
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

      {onFriends && (
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
            <h2>Friends</h2>
            <button
              onClick={toggleSetFriends}
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
            <p style={{ color: "#888" }}>No Friends to display</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialButton;
