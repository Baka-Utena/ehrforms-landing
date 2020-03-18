import React, {Component} from "react";
import TextField from "./Textfield";
import classNames from "classnames";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                email: '',
                phone: ''
            },
            errors: {}
        }
    }

    handleChange(field, e) {
        console.log('11');
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    handleClickOnInput(field, e) {
        let initialPlaceholder = e.target.placeholder;
        console.log(initialPlaceholder);
        e.target.placeholder = '';
    }

    fieldValidation(fieldName, e) {
        let fields = this.state.fields;
        fields[fieldName] = e.target.value;
        let errors = {};

        if (!fields[fieldName]) {
            errors[fieldName] = "Cannot be empty";
        }

        this.setState({errors, fields});
        /*
                switch (field) {
                    case "name":
                        if (!fields["name"]) {
                            errors["name"] = "Cannot be empty";
                            this.setState({errors: errors});
                        }
                        if (typeof fields["name"] !== "undefined") {
                            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                                errors["name"] = "Only letters";
                            }
                        }
                        break;
                    default:
                        break;
                }*/

    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
            this.setState({errors: errors});

        } else if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            console.log("Form submitted");
        } else {
            console.log("Form has errors.")
        }

    }

    render() {
        return (
            <>
                <form name="contactform" className={classNames("form", this.props.classes)}
                      onSubmit={this.contactSubmit.bind(this)}>
                    <h3 className="form__header">Have a question about EHR Forms?</h3>
                    <div className="form__caption">
                        Ask it here and we will get back to you as soon as we can
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col-2">
                            <TextField name="name"
                                       placeholder="Name"
                                       required
                                       onChange={this.handleChange.bind(this, "name")}
                                       onClick={this.handleClickOnInput.bind(this, "name")}
                                       value={this.state.fields["name"]}
                                       error={this.state.errors["name"]}
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col-2 is-nessesary">
                            <TextField name="email"
                                       placeholder="E-mail"
                                       required
                                       onChange={this.handleChange.bind(this, "email")}
                                       error={this.state.errors["email"]}
                            />
                        </div>
                        <div className="form__col form__col-2">
                            <TextField name="phone"
                                       placeholder="Phone"
                                       onChange={this.handleChange.bind(this, "phone")}
                                       /*error={this.state.errors["phone"]}*/
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col">
                            <textarea className="textarea"
                                      placeholder="Message"/>
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_flex">
                            <button className="btn btn_primary">Submit</button>
                            <div className="form__legend">* - Fields are required</div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default Form;
