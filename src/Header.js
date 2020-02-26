import React, {Component} from "react";
import MenuItem from "./scss/MenuItem";

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

        this.sections = {
                product: 'Product',
                how: 'How it works',
                features: 'Features',
                contact: 'Contact'
            };
        this.state = {
            activeMenuItem: {
                top: null,
                product: null,
                how: null,
                features: null,
                contact: null
            },
            positions: {
                product: '',
                how: '',
                features: '',
                contact: ''
            },
            windowWidth: ''
        };
    }


    handleResize() {
        this.setState({windowWidth: window.innerWidth});
        this.getAnchorPoints();
    };

    getAnchorPoints() {
        const curScroll = window.pageYOffset || document.documentElement.scrollTop;
        const headerHeight = document.querySelector('.header').offsetHeight;

        let newPos = {};
        for (let key in this.state.positions) {
            newPos[key] = this.state.positions[key];
        }
        for (let key in newPos) {
            newPos[key] = (document.getElementById(key).getBoundingClientRect().top + curScroll - headerHeight);
        }
        this.setState({positions: newPos});
    }

    handleScroll() {
        const curPos = window.scrollY;
        let curSection = null;

        if(curPos > (this.state.positions.contact - 2)) {
            curSection = 'contact';
        } else if(curPos > (this.state.positions.features - 2)) {
            curSection = 'features';
        } else if(curPos > (this.state.positions.how - 2)) {
            curSection = 'how';
        } else if(curPos > (this.state.positions.product - 2)) {
            curSection = 'product';
        } else {
            curSection = 'top';
        }

        if(this.state.activeMenuItem[curSection] !== "active") {

            const newMenuState = {
                top: '',
                Section1: '',
                Section2: '',
                Section3: ''
            };
            newMenuState[curSection] = "active";
            this.setState({ activeMenuItem: newMenuState });
        }
    }

    componentDidMount() {
        this.getAnchorPoints();
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const menuItems = [];
        for (var key in this.sections) {
            menuItems.push(<MenuItem itemName={key} itemTitle={this.sections[key]} itemPosition={this.state.positions[key]} active={this.state.activeMenuItem[key]}/>);
        }
        return (
            <div className="header">
                <div className="header__container">
                    <div className="logo"/>
                    <ul className="menu">
                        {menuItems}
                    </ul>
                    {this.props.button}
                </div>
            </div>
        )
    }
}

export default Header;
