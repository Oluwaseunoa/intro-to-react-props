import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Oluwaseun"
      img="data:image/jpeg;base64,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"
      tel="+123 456 789"
      email="oluwaseun.beicks@gmail.com"
    />
    <Card
      name="Oluwaseun"
      img="data:image/jpeg;base64,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"
      tel="+123 456 789"
      email="oluwaseun.beicks@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
