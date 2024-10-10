import React from "react";

interface Props {
  title?: string;
  description?: string;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <h1>Card {props.title}</h1>
      <p>{props.description ? props.description : "lorem ipsum"}</p>
      <button className="card-btn">Click me</button>
    </div>
  );
};

export default Card;
