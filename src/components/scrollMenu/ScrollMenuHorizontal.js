import ScrollMenu from "react-horizontal-scrolling-menu";
import React from "react";
import '../../screens/results/Results.css'
import themes from '../../utils/themes.js';
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const MenuItem = ({text, selected}) => {
    return <div className={`menu-item2 ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = (list, selected) =>
    Object.values(themes).map(el => {
        const onClick = () => console.log('original onClick ', name);
        return <MenuItem text={el.name} key={el.name} selected={selected} onClick={onClick}/>;
    });

const Arrow = ({text, className}) => {
    return <div className={'arrows'}>{text}</div>;
};
Arrow.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export const ArrowLeft = Arrow({text: '<', className: 'arrow-prev'});
export const ArrowRight = Arrow({text: '>', className: 'arrow-next'});

export default class ScrollMenuHorizontal extends React.Component {

    state = {
        alignCenter: true,
        clickWhenDrag: false,
        dragging: true,
        hideArrows: true,
        hideSingleArrow: true,
        itemsCount: themes.length,
        selected: 'item1',
        scrollToSelected: true,
        translate: undefined,
        transition: 0.4,
        wheel: true,
        showList: true,
        inertiascrolling: false,
        slowdownFactor: 0.25,
    };

    constructor(props) {
        super(props);
        this.menu = null;
        this.menuItems = Menu(themes, this.state.selected);
    }

    componentDidUpdate(prevProps, prevState) {

        const {alignCenter} = prevState;
        const {alignCenter: alignCenterNew} = this.state;
        if (alignCenter !== alignCenterNew && this.menu) {
            this.menu.setInitial();
            this.menu.forceUpdate();
            this.forceUpdate();
        }
    }

    onUpdate = ({translate}) => {
        console.log(
            // `onUpdate: translate: ${translate} firstItemVisible: ${firstItemVisible}, lastItemVisible: ${lastItemVisible}`
            `onUpdate: translate: ${translate}`
        );
        this.setState({translate});
    };

    onSelect = key => {
        console.log(`onSelect: ${key}`);
        this.setState({selected: key});
    };


    render() {

        const {
            alignCenter,
            clickWhenDrag,
            hideArrows,
            dragging,
            hideSingleArrow,
            selected,
            translate,
            transition,
            wheel,
            scrollToSelected,
            inertiascrolling,
            slowdownFactor,
        } = this.state;

        const menu = this.menuItems;

        return (
            <div className={'categoriesTopContainer'}>
                <ScrollMenu
                    ref={el => (this.menu = el)}
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    hideArrows={hideArrows}
                    hideSingleArrow={hideSingleArrow}
                    transition={+transition}
                    onUpdate={this.onUpdate}
                    onSelect={this.onSelect}
                    scrollToSelected={scrollToSelected}
                    selected={selected}
                    scrollBy={0}
                    translate={translate}
                    alignCenter={alignCenter}
                    dragging={dragging}
                    clickWhenDrag={clickWhenDrag}
                    wheel={wheel}
                    inertiaScrolling={inertiascrolling}
                    inertiaScrollingSlowdown={slowdownFactor}
                    rtl={false}
                />
            </div>
        );
    }
}
