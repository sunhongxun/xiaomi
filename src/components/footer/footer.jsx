import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {TabBar } from "antd-mobile";
import './index.css'
import {getgoodsnum} from "../../actions/cart";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
            num:0
        };
    }
    componentDidMount() {
        this.getshopNum()
    }

    getshopNum=()=>{
        let {num} = this.state;
        let {buyCount} = this.props.shopNum;
        let keys = Object.keys(buyCount);
        keys.forEach((item)=>{
            num += buyCount[item];
        });
        this.setState({
            num
        });
    };
    render() {
        let {num} = this.state;
        return (
            <div className={'footer'} >
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title={
                           '首页'
                        }
                        key="shouye"
                        icon={
                            <Link to={'/'}><i className={'iconfont icon-shouye1'}/></Link>
                        }
                        selectedIcon={<i className={'iconfont icon-shouye1'}/>}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Link to={'/'}><i className={'iconfont icon-fenlei'}/></Link>
                        }
                        selectedIcon={<i className={'iconfont icon-fenlei'}/>}
                        title={
                            '分类'
                        }
                        key="fenlei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<Link to={'/shopcar'}><i className={'iconfont icon-gouwuche-01'}/></Link>}
                        selectedIcon={<i className={'iconfont icon-gouwuche-01'}/>}
                        title={
                            '购物车'
                        }
                        key="gouwuc"
                        badge={num}
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <Link to={'/myInfo'}><i className={'iconfont icon-gerenzhongxin'}/></Link>
                        }
                        selectedIcon={<i className={'iconfont icon-gerenzhongxin'}/>}
                        title={
                          ' 我的'
                        }
                        key="my"
                        dot
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });

                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {shopNum:state}
};
const mapDispatchToProps = {
    getgoodsnum
};
Footer = connect(mapStateToProps,mapDispatchToProps)(Footer);
export default Footer;