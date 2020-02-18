import React from "react";
import classNames from "classnames";

function TextField({name, onChange, onBlur, placeholder, required, error}) {
    return (
        <>
            <div className={classNames("textfield", {'is-required': required})}>
                <input
                    type="text"
                    className="textfield__input"
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}/>
                    <div className="textfield__error">{error}</div>
            </div>

        </>
    );
}

export default TextField;
