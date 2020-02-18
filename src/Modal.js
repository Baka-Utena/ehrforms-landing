import Form from "./Form";
import React, {Component} from "react";

class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <>
                <div className="modal" onClose={e => {
                    this.onClose(e);
                }}>
                    <div className="modal__background" onClick={this.onClose}/>
                    <div className="modal__wrapper">
                        <Form classes="light"/>
                    </div>
                </div>
            </>
        )
    }

};

export default Modal;
