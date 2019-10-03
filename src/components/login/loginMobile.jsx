import React, {Component} from 'react';

class LoginMobile extends Component {
    render() {
        return (
                <div className={'login_midder'}>
                    <ul>
                        <li className={''}><span style={{color:'#767676',margin:'0 10px',fontSize:'0.35rem'}}>86 > </span><input type="text" placeholder={'手机号码'}/></li>
                        <li><input type="text"  placeholder={'短信验证码'}/><button style={{fontSize:'0.35rem',border:0,backgroundColor:'white'}}  className={'list_item'}>获取验证码</button></li>
                        <li><button id={'login_but'}>立即登录注册</button></li>
                    </ul>
                </div>
        );
    }
}

export default LoginMobile;