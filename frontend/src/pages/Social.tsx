import { useState } from "react";

const SocialButton = () => {
  const [onLeaderboard, setLeaderboard] = useState(false);
  const [onReadingCircles, setReadingCircles] = useState(false);
  const [onFriends, setFriends] = useState(false);
  const [onAddFriends, setAddFriends] = useState(false);
  const [onJoinReading, setJoinReading] = useState(false);

  const leaderboardChart = [
    { id: 1, rank: 1, name: "Amelie", profile: "/book.svg" },
  ];

  const toggleLeaderboard = () => {
    setLeaderboard(!onLeaderboard);
    setReadingCircles(false);
    setFriends(false);
    setAddFriends(false);
    setJoinReading(false);
  };
  const toggleReading = () => {
    setLeaderboard(false);
    setReadingCircles(!onReadingCircles);
    setFriends(false);
    setAddFriends(false);
    setJoinReading(false);
  };
  const toggleSetFriends = () => {
    setLeaderboard(false);
    setReadingCircles(false);
    setFriends(!onFriends);
    setAddFriends(false);
    setJoinReading(false);
  };
  const toggleAddFriends = () => {
    setLeaderboard(false);
    setReadingCircles(false);
    setFriends(false);
    setAddFriends(!onAddFriends);
    setJoinReading(false);
  };
  const toggleJoinReading = () => {
    setLeaderboard(false);
    setReadingCircles(false);
    setFriends(false);
    setAddFriends(false);
    setJoinReading(!onJoinReading);
  };

  return (
    <div style={{ marginLeft: "2rem" }}>
      <h1>Readathon</h1>
      <h2 style={{ color: "grey", fontSize: "18px", marginTop: -25 }}>
        Connect with friends and join reading circles
      </h2>

      <div className="card">
        <button onClick={toggleLeaderboard}>Leaderboard</button>
        <button onClick={toggleReading}>Reading Circles</button>
        <button onClick={toggleSetFriends}>Friends</button>
        <button onClick={toggleAddFriends}>Add Friends</button>
        <button onClick={toggleJoinReading}>Join Reading</button>
      </div>
      {}
    </div>
  );
};

export default SocialButton;
