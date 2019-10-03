import React, {Component} from 'react';
import Button from "../button/button";
import {Link} from "react-router-dom";
import util from "../util";



class XiaomiList extends Component {

    state={
        dataMiList:[]
    };

    componentDidMount() {
        this.getMiList();
    }
    getMiList= ()=>{
        fetch(`${util}/api/goods`)
            .then(res=>res.json())
            .then((data)=>{
                if(data.status === 200){
                    this.setState({
                        dataMiList:data.data
                    })
                }
                // console.log(data)
            })
    };
    render() {
        let dat = this.state.dataMiList;
        return (
            <div className={'list'}>
                <ul className={'list_ul'}>
                    {
                        dat.length > 0 && dat.map((item,index)=>{
                            return (
                                <li key={item.id}>
                                    <Link to={`/goodsDetail/${item.shopid}`}>
                                        <img src={item.picurl} width={'100%'} alt="" title={''}/>
                                        <div className={'phone_info'}>
                                            <h4 className={'hopne_name'}>{item.title}</h4>
                                            <div className={'phone_brief'}>{item.des}</div>
                                            <div className={'phone_price'}>{item.symbol}{item.price} <span>{item.font} </span></div>
                                            <Button/>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }


                </ul>
            </div>
        );
    }
}

export default XiaomiList;