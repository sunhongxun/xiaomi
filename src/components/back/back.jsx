import React, {Component} from 'react';
import {goback} from "../util";
import'./back.css'
class Back extends Component {
    render() {
        return (
            <div className={'backAndfen'}>
                <div onClick={goback}><i className={'iconfont icon-zuobian1'}/></div>
                <div><i className={'iconfont icon-fenxiang'}/></div>
            </div>
        );
    }
}

export default Back;