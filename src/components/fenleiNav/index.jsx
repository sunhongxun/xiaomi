import React, {Component} from 'react';
import './index.css'
import {Link} from "react-router-dom";



import util from "../util";
class Index extends Component {
    state={
        datanav:[]
    };

    componentDidMount() {
        this.getNav();
    }
    getNav=()=>{
        fetch(`${util}/api/category`)
            .then(res=>res.json())
            .then((data)=>{
                if(data.status === 200){
                    this.setState({
                        datanav:data.data
                    })
                }
            })
    };
    render() {
        let {datanav} = this.state
        return (
            <div className={'fenleiNav'}>

                {
                    datanav.length > 0 && datanav.map((item,index)=>{
                        return (
                            <Link to={`/goodsDetail/+${item.shopid}`} key={item.id}>
                                <img src={item.picurl} alt={item.alt}/>
                            </Link>
                        )
                    })

                }


                {/*<div className={'nav_img'}>*/}
                {/*   */}
                {/*</div>*/}
            </div>
        );
    }
}

export default Index;