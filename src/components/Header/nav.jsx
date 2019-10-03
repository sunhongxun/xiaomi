import React, {Component} from 'react';
import {Avatar,Input,Icon} from "antd";
class Nav extends Component {
    render() {
        return (
            <div className={'nav'}>
                <nav className={'scrollNav'}>
                    <div className={'scrollList'}>
                        <ul>
                            <li>推荐</li>
                            <li>手机</li>
                            <li>智能</li>
                            <li>电视</li>
                            <li>笔记本</li>
                            <li>家电</li>
                            <li>生活周边</li>
                        </ul>
                    </div>
                    <div className={'scrollIcon'}>
                        <Icon type="down" />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;