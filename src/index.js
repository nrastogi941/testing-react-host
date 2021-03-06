import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"
import Sdata from "./Sdata";
import "./index.css"

function ncard(val) {
  return (
    <Card
      key={val.id }
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style">Top 5 Netflix And Amazon Series</h1>

    {Sdata.map(ncard)}

  </>

  , document.getElementById("root")
);