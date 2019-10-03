import React, {Component} from 'react';
import { Card, WingBlank ,List,Icon,  WhiteSpace} from 'antd-mobile';
import './goodsDetail.css'
import Back from "../back/back";
import util from "../util";
import {connect} from "react-redux";
import {addgood} from "../../actions/cart";
import {Link} from "react-router-dom";
import {successToast} from "../../common/js/toast/toast";

const Item = List.Item;

class GoodsDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:{},
            num:1,
            id:0
        };
        this.addcar = this.addcar.bind(this)
    }
    componentDidMount() {
        let shopid = this.props.match.params.shopid;
        this.getGoodbyId(shopid);
    }
    addcar(event){
        let {id,num} = this.state;
        let {addgood} = this.props;
        addgood({
            id,
            num
        });
        successToast('添加成功');
    };
    getGoodbyId=(shopid)=>{
        fetch(`${util}/api/buygoods/${shopid}`)
            .then(res=>res.json())
            .then((data)=>{
                if(data !== undefined){
                    this.setState({
                        data:data,
                        id:data.shopid
                    });
                }
            })
    };
    
    render() {
        let dat  = this.state.data;
        return (
            <div className={'goods'}>
                <Back/>
                <div className={'goods_img'}>
                    <img src={dat.picurl} height={'100%'} width={'100%'} alt=""/>
                </div>
                <div className={'goods_content'}>
                    <div className={'hea'}>
                        <div>秒杀价￥1999</div>
                        <div>倒计时 12:59:00</div>
                    </div>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Header
                                title={dat.title}
                            />
                            <Card.Body>
                                <div>{dat.des}</div>
                            </Card.Body>
                            <Card.Footer content={<div style={{display:'inline',color:'#ff4a00',fontSize:'0.5rem'}}>
                                {dat.symbol}{dat.price}</div>}  />
                        </Card>
                        {/*<WhiteSpace size="lg" />*/}
                    </WingBlank>
                    <List >
                            <Item
                                thumb={require('../../common/images/yixuan.png')}
                                arrow="horizontal"
                                // onClick={this.showActionSheet}
                            >{dat.title}</Item>

                            <Item
                                thumb={require('../../common/images/yixuan.png')}
                                arrow="horizontal"
                                onClick={() => {}}
                            ><span>北京市</span><span>东城区</span><span style={{color:'red'}}>
                                有现货</span>
                            </Item>
                      

                        <Item
                            className={'list_item'}
                            arrow="horizontal"
                            onClick={() => {}}
                        >
                            <span className={'span'}>
                                <Icon  className={'icon'} type={'check-circle-o'}/><span>小米自营</span>
                            </span >
                            <span className={'span'}>
                                <Icon className={'icon'} type={'check-circle-o'}/><span>小米发货</span>
                            </span>
                            <span className={'span'}>
                                <Icon  className={'icon'} type={'check-circle-o'}/><span>7天无理由退货</span>
                            </span>
                        </Item>

                    </List>
                </div>
                <div className={'addcar'}>
                    <div >
                        <ul className={'item'}>
                            <li><Link to={'/'}><i className={'iconfont icon-shouye1'}/><div>首页</div></Link></li>
                            <li><Link to={'/shopcar'}><i className={'iconfont icon-gouwuche-01'}/><div>购物车</div></Link></li>
                        </ul></div>
                    <button onClick={this.addcar}>加入购物车</button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {hh:state}
};
const mapDispatchToProps = {
    addgood
};
GoodsDetail = connect(mapStateToProps,mapDispatchToProps)(GoodsDetail);
// export default GoodsDetail
export default GoodsDetail;