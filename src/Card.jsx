import React from "react";
import Image from "./Image";



function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                   <Image imgsrc={props.imgsrc}/>
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h1 className="card_title">{props.sname}</h1>
                        <a href={props.link} target="_blank" rel="noreferrer"><button>Watch Now</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;