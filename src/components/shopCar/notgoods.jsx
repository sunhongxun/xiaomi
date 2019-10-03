import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './notgoods.css'
class Notgoods extends Component {
    render() {
        return (
            <div className={'notgoods'}>
                <img src={require('../../common/images/gouwuc.png')} alt=""/>
                <span>购物车还是空的</span>
                <Link to={'/'}><button>去看看</button></Link>
            </div>
        );
    }
}

export default Notgoods;