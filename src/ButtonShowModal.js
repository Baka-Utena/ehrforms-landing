import React from "react";

function ButtonShowModal({onClick}) {
    return (
        <button className="btn btn_white"
                onClick={onClick}>
            Request a demo
        </button>
    )
}

export default ButtonShowModal;
