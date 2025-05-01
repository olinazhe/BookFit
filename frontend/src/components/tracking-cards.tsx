const Card = ({ title, num }: { title: string; num: string }) => {
  return (
    <div className="trackingCard">
      <h4>{title}</h4>
      <h1>{num}</h1>
    </div>
  );
};

export default Card;
