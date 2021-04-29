import React from "react";

import classes from "./Modal.module.css";

const modal = (props) => {
    return (
        <div className={props.show ? classes.modal : classes.modal + " " + classes.close}>
            <h3>Share your amazing story!</h3>
            <label>Upload your Picture</label>
            <input type="file" /><br />
            <label>First Name</label><br />
            <input type="text" /><br />
            <label>Last Name</label><br />
            <input type="text" /><br />
            <label>Share your story</label>
            <textarea type="text" />
            <label>What did you interact with Vasiti as ?</label>
            <input type="radio" value="Customer" name="Customer" />
            <input type="radio" value="Customer" name="Customer" />
            <button onClick={props.clicked}>Share your story</button>
        </div>
    );
}

export default modal;