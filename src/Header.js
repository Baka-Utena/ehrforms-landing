import React, {Component} from "react";
import MenuItem from "./MenuItem";
import classNames from "classnames";
import ButtonShowModal from "./ButtonShowModal";

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.menuToggle = this.menuToggle.bind(this);

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
            windowWidth: '',
            menuVisible: false
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
                product: '',
                how: '',
                features: '',
                contact: ''
            };
            newMenuState[curSection] = "active";
            this.setState({ activeMenuItem: newMenuState });
        }
    }

    handleClickOnLogo(e) {
        e.preventDefault();
        window.scrollTo({top: 0, left: 0, behavior:"smooth", block: "start"});
    }

    menuToggle() {
        this.setState({menuVisible: !this.state.menuVisible});
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
                    <div className="logo" onClick={ this.state.activeMenuItem.top !== 'active' ? this.handleClickOnLogo : null }/>
                    <ul className={classNames("menu", {"is-visible": this.state.menuVisible})}>
                        {menuItems}
                    </ul>
                    <ButtonShowModal
                        onClick={this.props.closeModal}
                        visible={this.state.activeMenuItem.top !== 'active'}/>
                    <i className="material-icons header__hamb" onClick={this.menuToggle}>
                        menu
                    </i>
                </div>
            </div>
        )
    }
}

export default Header;
