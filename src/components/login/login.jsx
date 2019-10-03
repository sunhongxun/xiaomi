import React, {Component} from 'react';
// import {} from "antd-mobile";
import './login.css'
import LoginMobile from "./loginMobile";
import LoginUserName from "./loginUserName";



class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            loginChoose:true
        };

    }

   componentDidMount() {
       this.updateLoginBar()

   }

    updateLoginBar = ()=>{
       let that = this;
       let flag = true;
       let str = '用户名密码登录';
        let but = document.getElementById('subBar'),
            zhuc = document.getElementsByClassName('zhuc')[0];
        but.onclick = function(){
            console.log("1");
            that.setState({
                loginChoose:!flag
            });
            flag = !flag;
            flag ? str = '用户名密码登录' : str = '手机短信登录/注册';
            but.innerHTML = str;
            zhuc.classList.toggle('lig');
        };
    };

    render() {
        return (
            <div className={'login'}>
                <div className={'login_header'}>
                    <img src={require('../../common/images/logo1.png')} alt=""/>
                    <h2>小米账号登录</h2>
                </div>
                {
                    this.state.loginChoose ?  <LoginMobile/> : <LoginUserName/>
                }
                <div id={'submit'}>
                    <button id={'subBar'}>用户密码登录</button>
                </div>
                <div className={'zhuc lig'}>
                    <a href={'/'}> <span className={'line'}>立即注册</span></a><a href={'/'}><span>忘记密码?</span></a>
                </div>
                <div className={'other_login'}>
                    <div className={'text'}>其它方式登录</div>
                    <div className={'icon_login'}>
                        <i className={'iconfont icon-weibo'}/>
                        <i className={'iconfont icon-zhifubao1'}/>
                        <i className={'iconfont icon-weixin2'}/>
                    </div>

                </div>
                <div className={'login_footer'}>
                    <ul>
                        <li>繁体</li>
                        <li>简体</li>
                        <li>English</li>
                        <li>常见问题</li>
                        <li>隐私问题</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Login;