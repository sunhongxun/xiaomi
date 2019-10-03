import React, {Component} from 'react';
import './xinpin.css'
import {Link} from "react-router-dom";
import url from "../url";



class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        this.getDate()
    }

    getDate= ()=>{
        fetch(`${url}/api/recommend`)
            .then(res=>res.json())
            .then((data)=>{
                this.setState({
                    data:data.data
                })
            })
    }
    render() {
        let shopid = this.state.data.shopid;
        return (
            <div className={'xinpin'}>
                <div>
                    <Link to={`/goodsDetail/${shopid}`}>
                        <img className={'juli juliR'} src={require('../../common/images/MIx3.jpg')} alt=""/>
                    </Link>
                    <Link to={`/goodsDetail/${shopid}`}>
                        <img className={'juliR'} src={require('../../common/images/note7.jpg')} alt=""/>
                    </Link>
                </div>
                <div>
                    <Link to={`/goodsDetail/${shopid}`}>
                        <img className={'juli '} src={require('../../common/images/shoufa.jpg')} alt=""/>
                    </Link>
                    <Link to={`/goodsDetail/${shopid}`}>
                        <img className={'juli'} src={require('../../common/images/tehui.jpg')} alt=""/>
                    </Link>
                    <Link to={`/goodsDetail/${shopid}`}>
                        <img src={require('../../common/images/note_pro.jpg')} alt=""/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Index;