import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './addcar.css'
class AddCar extends Component {

    constructor(props){
        super(props)
        console.log(this.props);
    }
    componentDidMount() {
        this.addcar()
    }

    addcar= (event)=>{
        let {num,id,data,add} = this.props;

        // num && this.props.dispatch((dispatch)=>{
        //         dispatch(
        //             add({id,num})
        //         )
        //     })


    };
    render() {
        return (
            <div className={'addcar'}>
                <div >
                    <ul className={'item'}>
                        <li><a href=""><i className={'iconfont icon-shouye1'}/><div>首页</div></a></li>
                        <li><a href=""><i className={'iconfont icon-gouwuche-01'}/><div><Link to={'/shopcar'}>购物车</Link></div></a></li>
                    </ul></div>
                <button onClick={this.addcar}>加入购物车</button>
            </div>
        );
    }
}

export default AddCar;