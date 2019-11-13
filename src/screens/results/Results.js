import React, {Component} from 'react';
import {Breakpoint, BreakpointProvider} from 'react-socks';
import ScrollMenuHorizontal from '../../components/scrollMenu/ScrollMenuHorizontal'
import topImage from '../../assets/download.jpeg'
import {Icon} from 'antd';
import './Results.css'

class Results extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {

        return (
            <BreakpointProvider>
                <Breakpoint small down>
                    <div className={'categoriesContainer'}>
                        <ScrollMenuHorizontal/>
                    </div>
                    <div id={'footer'}>
                        <div id={'footerImages'}>
                            <Icon type="filter" />
                            <Icon type="search" />
                        </div>
                    </div>
                </Breakpoint>


                <Breakpoint medium up>
                    <div>
                        <div className={'topImageContainer'}>
                            {/*<img src={topImage} />*/}
                            <h1 id={'numberOfResults'}>700 Resultaten</h1>
                        </div>

                        <div className={'categoriesContainer'}>
                            <ScrollMenuHorizontal/>
                        </div>
                    </div>
                </Breakpoint>


            </BreakpointProvider>
        );
    }
}

export default Results;
