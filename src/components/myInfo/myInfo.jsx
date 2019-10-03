import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './myInfo.css'
import { List } from 'antd-mobile';
import Footer from "../../components/footer/footer";


const Item = List.Item;

class MyInfo extends Component {

    render() {
        return (
            <div className={'myInfo'}>
                <div className={'myInfo_header'}>
                    <img src={require('../../common/images/touxiang.jpeg')} alt=""/>
                    <div className={'myInfo_content'}>
                        <div><Link to={'/login'}>登录/注册</Link></div>
                        {/*<div>21213</div>*/}
                    </div>
                </div>
                <List  className="my-list">

                    <Item extra="全部订单" arrow="horizontal" onClick={() => {}}>我的订单</Item>

                </List>
                <div className={'myInfo_pay'}>
                    <ul>
                        <li><a href={'/'} className={'active'}>
                            <i className={'iconfont icon-daifukuan'}/>
                            <div>待付款</div>
                        </a></li>
                        <li><a href="/">
                            <div>
                                <i className={'iconfont icon-daishouhuo'}/>
                                <div>待收货</div></div>
                        </a></li>
                        <li><a href="/">
                            <div>
                                <i className={'iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-'}/>
                                <div>退换修</div></div>
                        </a></li>

                    </ul>
                </div>
                <div className={'myInfo_list'}>
                    <List >

                        <Item
                            thumb={require('../../common/images/vip.png')}
                            onClick={() => {}}
                            arrow="horizontal"
                        >
                            会员中心
                        </Item>
                        <Item
                            thumb={require('../../common/images/quan.png')}
                            onClick={() => {}}
                            arrow="horizontal"
                        >
                          我的优惠
                        </Item>
                        <Item
                        thumb={require('../../common/images/fuwu.png')}
                        onClick={() => {}}
                        arrow="horizontal"
                    >
                        服务中心
                    </Item> <Item
                        thumb={require('../../common/images/home.png')}
                        onClick={() => {}}
                        arrow="horizontal"
                    >
                        小米之家
                    </Item> <Item
                        thumb={require('../../common/images/tongdao.png')}
                        onClick={() => {}}
                        arrow="horizontal"
                    >
                       F码通道
                    </Item> <Item
                        thumb={require('../../common/images/shezhi.png')}
                        onClick={() => {}}
                        arrow="horizontal"
                    >
                       设置
                    </Item>
                    </List>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default MyInfo;