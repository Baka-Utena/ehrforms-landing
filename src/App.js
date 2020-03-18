import React from 'react';
import './App.scss';
import Form from "./Form";
import Modal from "./Modal";
import Header from "./Header";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            scrollFirstScreen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFirstScreenDetection = this.scrollFirstScreenDetection.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFirstScreenDetection = this.scrollFirstScreenDetection.bind(this));
    }

    scrollFirstScreenDetection() {
        const FIRSTSCREENHEIGHT = 760;
        this.setState({scrollFirstScreen: (window.pageYOffset > FIRSTSCREENHEIGHT)});
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return (
            <>
                <Header
                    closeModal={e => { this.showModal() }}
                >
                </Header>
                <div className="section section1">
                    <div className="container section1__container">
                        <h1 className="section1__header">Solution for building openEHR based applications fast</h1>
                        <div className="section1__infogr"/>
                        <button className="btn btn_white"
                                onClick={e => {
                                    this.showModal();
                                }}>
                            Request a demo
                        </button>
                    </div>
                </div>
                <span id="product"/>
                <div className="section section2">
                    <div className="container section2__container">
                        <h2 className="section__header">We solve the following problems</h2>

                        <div className="blocks">
                            <div className="blocks__item">
                                <div className="blocks__top">
                                    Developing forms based on openEHR is really time consuming because of template
                                    complicity – validation rules, bulky composition structure
                                </div>
                                <div className="blocks__bottom">
                                    WYSIWYG form builder is based on openEHR
                                    <hr/>
                                    Visual elements are loosely coupled with openEHR model via bindings
                                </div>
                            </div>
                            <div className="blocks__item">
                                <div className="blocks__top">
                                    Forms reflecting openEHR template structure are overloaded and it takes too much
                                    time to
                                    fill out to the clinician composition structure
                                </div>
                                <div className="blocks__bottom">
                                    Compact forms with easy to operate structure
                                    <hr/>
                                    Decision support when user interacts with user interface
                                    <hr/>
                                    Various ways to speed up filling of same blocks or dependent fields
                                </div>
                            </div>
                            <div className="blocks__item">
                                <div className="blocks__top">
                                    Low reusability of UI logic for similar archetypes in different forms and products
                                </div>
                                <div className="blocks__bottom">
                                    Reusable widgets for archetypes available in different forms
                                </div>
                            </div>
                            <div className="blocks__item">
                                <div className="blocks__top">
                                    Forms have to be built by frontend developers, with knowledge of openEHR
                                    specification
                                    in all its sophistication
                                </div>
                                <div className="blocks__bottom">
                                    Forms built for multiple openEHR compositions from different templates
                                    <hr/>
                                    Various purposes visual components libraries from third party developers
                                </div>
                            </div>
                        </div>

                        <div className="example">

                        </div>
                    </div>
                </div>
                <span id="how"/>
                <div className="section section3">
                    <div className="container">
                        <h2 className="section__header">How it works</h2>
                        <div className="blocks-arrows">
                            <div className="blocks-arrows__item">
                                <div className="blocks-arrows__arrow">
                                    1
                                </div>
                                Start by creating a form using your openEHR template(s)
                            </div>
                            <div className="blocks-arrows__item">
                                <div className="blocks-arrows__arrow">
                                    2
                                </div>
                                Customize it with any logic you need to meet UX requirements
                            </div>
                            <div className="blocks-arrows__item">
                                <div className="blocks-arrows__arrow">
                                    3
                                </div>
                                Swiftly integrate form into your end user application
                            </div>
                            <div className="blocks-arrows__item">
                                <div className="blocks-arrows__arrow">
                                    4
                                </div>
                                Save Compositions into your CDR
                            </div>
                        </div>
                    </div>
                </div>
                <span id="features"/>
                <div className="section section4">
                    <div className="container">
                        <h2 className="section__header">Key features</h2>
                        <div className="columns">
                            <div className="columns__item">
                                <ul className="list-markered">
                                    <li className="list-markered__item">Simple form building process with maximum
                                        reusability and
                                        versatility in the process, that is possible without deep knowledge of openEHR
                                        specification
                                    </li>
                                    <li className="list-markered__item">WYSIWYG UI building tool</li>
                                    <li className="list-markered__item">Flexible components loosely coupled with EHR
                                        template
                                    </li>
                                </ul>
                            </div>
                            <div className="columns__item">
                                <ul className="list-markered">
                                    <li className="list-markered__item">Rich component library with enough components to
                                        build most
                                        complicated forms
                                    </li>
                                    <li className="list-markered__item">Most complicated components can be used - smart
                                        user
                                        assistan, 3D
                                        elements, charts
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section5">
                    <div className="container section5__container">
                        <div className="columns-3">
                            <div className="columns-3__item">
                                <div className="columns-3__img columns-3__img_1"/>
                                <div className="columns-3__header">10</div>
                                <div className="columns-3__text">
                                    applications developed and upgraded using EHR Forms
                                </div>
                            </div>
                            <div className="columns-3__item">
                                <div className="columns-3__img columns-3__img_2"/>
                                <div className="columns-3__header">200+</div>
                                <div className="columns-3__text">
                                    Forms created
                                </div>
                            </div>
                            <div className="columns-3__item">
                                <div className="columns-3__img columns-3__img_3"/>
                                <div className="columns-3__header">~30 000</div>
                                <div className="columns-3__text">
                                    clinicians and medical specialists are using these forms every day
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span id="contact" name="contact"/>
                <div className="footer">
                    <div className="container footer__container">
                        <div className="copyright">
                            <span>Copyright 2020</span>
                            <div className="logo-small"/>
                        </div>
                        <Form/>
                    </div>

                </div>
                <Modal onClose={this.showModal} show={this.state.show}/>
            </>
        );
    }
}

export default App;
