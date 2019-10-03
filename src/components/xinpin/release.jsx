import React, {Component} from 'react';
import {Link} from "react-router-dom";
import url from "../url";


class Release extends Component {
    constructor(props){
        super(props);
        this.state={
            img1:{}
        }
    }
    componentDidMount() {
        this.getImg()
    }
    getImg= (event)=>{
        fetch(`${url}/api/conference`)
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    img1:data.data
                })
            });
    };

    render() {
        let {img1} = this.state;
        return (
            <div style={{width:'100%'}}>
                <Link to={`/goodsDetail/${img1.shopid}`}>
                    <img src={img1.picurl} width={'100%'} alt={img1.title}/>
                </Link>

            </div>
        );
    }
}

export default Release;