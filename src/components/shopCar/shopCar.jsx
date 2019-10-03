import React, {Component} from 'react';
import {List,Stepper , Checkbox,Toast} from "antd-mobile";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {offline} from "../../common/js/toast/toast";
import Top from "../Header/top";
import Notgoods from "./notgoods";

import './shopcar.css'
import url from "../util";

import {addgood,delgood,getgoodsnum} from "../../actions/cart";

class ShopCar extends Component {
    constructor(props){
        super(props);
        this.state={
            goods:[],
            price:0,
            count:0
        }
        // this.totalPrice = this.totalPrice.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            Toast.hide();
        }, 3000);
        this.getdata();
        this.totalPrice()
    }

    //获取初始化数据
    getdata= ()=>{
        let {buyCount} = this.props.car;
        let {goods} = this.state;
        let shopids = Object.keys(buyCount);
        shopids.forEach((item,index)=>{
            if( !isNaN(item)){
                fetch(`${url}/api/buygoods/`+item)
                    .then(res=>res.json())
                    .then((data)=>{
                        data['num'] = buyCount[item];   //存储没见商品的数量
                        goods.push(data);
                        this.setState({
                            goods
                        },)
                    })
            }

        });
        this.getResult()
    };
    getResult= (event)=>{
        let time = setTimeout((event)=>{
            clearTimeout(time);
            this.totalPrice()
        },200)
    };
    //计算商品数量和总金额
    totalPrice= ()=>{
        // let {getgoodsnum} = this.props;
        let price = 0;
        let count = 0;
        let goods = this.state.goods;
       for(let key of goods){
            price += key.num * key.price;
           count += key.num;
       }
        this.setState({
            price,
            count
        })
        //todo
        // getgoodsnum({numCount:count})
        //  此action是提交state数据  需要时调用 此功能在购物车已经实现 所以先关闭
    };
    //修改购买数量
    updateNum=(val,index)=>{
       if(val === 10){
           offline('最多购买10件');
           return
       }
        let {goods} = this.state;
        let {addgood} = this.props;
       let value = goods[index].num;
        let id = goods[index].shopid;
        if(val > value){
           goods[index].num++;
           this.setState({
               goods
           });
           addgood({
                id,
               num:1
           })
       }else {
             if(goods[index].num){
                 goods[index].num--;
                 this.setState({
                     goods
                 });
                 addgood({
                     id,
                     num:-1
                 })
             }
        }
        this.totalPrice()
    };
    removeGoods= (index)=>{
        let goods = this.state.goods;
        let {delgood} = this.props;
        delgood(goods[index].shopid);
        goods.splice(index,1);
        this.setState({goods});

        this.totalPrice()
    };
    render() {
        let {goods,price,count} = this.state;
        return (
            <div>
                <Top/>
               <div className={'shopcar'}>
                   <List>
                       {
                           goods.length ? (
                               goods.map((item,index)=>{
                                   return (
                                       <List.Item
                                           key={index}
                                           thumb={
                                               <Checkbox/>
                                           }
                                           wrap={true}
                                       >
                                           <img className={''} src={item.picurl} width={'100%'} height={'100%'} alt={item.title}/>
                                           <div >
                                               <div className={'buy_title'} >{item.title}</div>
                                               <div><span style={{marginRight:'5px'}}>售价:</span><span style={{color:'#797979',fontSize:'0.25rem'}}>{item.symbol}{item.price}</span></div>
                                               <div className={'num'} >
                                                   <Stepper
                                                       style={{  }}
                                                       showNumber
                                                       max={10}
                                                       min={0}
                                                       defaultValue={item.num}
                                                       onChange={(val)=>this.updateNum(val,index)}
                                                   />
                                                   <i className={'iconfont icon-shanchu'} onClick={()=>this.removeGoods(index)}/>
                                               </div>
                                           </div>
                                       </List.Item>

                                   )
                               })
                           ) : <Notgoods/>
                       }
                   </List>
                   {
                       goods.length ? (
                           <div className={'buy_footer'}>
                               <div className={'buy_span'}><span >共{count}件 金额：</span><div>{price} <span>元</span></div></div>
                               <div style={{color:'',fontSize:'0.35rem',}}><Link to={'/'}>继续购物</Link></div>
                               <div><button className={'buy_button'}> 去结算</button></div>
                           </div>
                       ) : ''
                   }

               </div>

            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {car:state}
};
const mapDispatchToProps = {
    addgood,
    delgood,
    getgoodsnum
};
ShopCar = connect(mapStateToProps,mapDispatchToProps)(ShopCar);
export default ShopCar;