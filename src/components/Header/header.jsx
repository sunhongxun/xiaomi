import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div>
                <header className={'index_header'}>
                    <div className={'logo'}>
                        <img src={require('../../common/images/logo.png')} alt=""/>
                    </div>
                    <div className={'search'}>
                        <input type="text" placeholder={'搜索商品名称'}/>
                        <i className={'iconfont icon-sousuo'}/>
                    </div>
                    <div className={'login'}>
                        <Link to={'/myInfo'} >
                            <i className={'iconfont icon-gerenzhongxin'}/>
                        </Link>

                    </div>
                </header>
            </div>
        );
    }
}

export default Header;