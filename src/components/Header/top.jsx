import React, {Component} from 'react';
import {NavBar, Icon } from "antd-mobile";

import {goback} from "../util";
class Top extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#ddd'}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={goback}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]}
                >购物车</NavBar>


            </div>
        );
    }
}

export default Top;