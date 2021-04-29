import React from "react";
import classes from "./Container.module.css";

const container = (props) => {
    return (
        <div>
            <div className={classes.containerDiv}>
                <img src={props.image} alt="divImage" />
                <h2>{props.name}</h2>
                <p>{props.location}</p>
                <button>{props.button}</button>
                <p>{props.body}</p>
            </div>
        </div>
    );
};

export default container;