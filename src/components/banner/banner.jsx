import React, {Component} from 'react';
import {Carousel,WingBlank  } from "antd-mobile";
import util from "../util";

import 'antd/dist/antd.css'
import './banner.css'
import {Link} from "react-router-dom";
class Banner extends Component {
    state = {
        dataBanner:[]
    };
    componentDidMount() {
        this.getBanner();



        // simulate img loading

    }
componentWillReceiveProps(nextProps, nextContext) {
}

    getBanner= ()=>{
        fetch(`${util}/api/banner`)
            .then(res=>res.json())
            .then((data)=>{
                if(data.status === 200){
                    this.setState({
                        dataBanner:data.data
                    })
                }
                // console.log(data)
            })
    };
    render() {
        return (
            <div className={'banner'}>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.dataBanner.length > 0 && this.state.dataBanner.map((item,index) => {
                            return(
                                <Link to={`/goodsDetail/${item.shopid}`}
                                    key={item.id}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={item.picurl}
                                        alt={item.alt}
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                        }}
                                    />
                                </Link>
                            )})}
                    </Carousel>
                </WingBlank>
            </div>
        );
    }
}

export default Banner;
