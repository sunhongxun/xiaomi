import React, {Component} from 'react';

class LoginUserName extends Component {
    render() {
        return (
            <div className={'login_username'}>
                <ul>
                    <li className={''}><input type="text" placeholder={'邮箱/手机号码/小米ID'}/></li>
                    <li><input type="password"  placeholder={'密码'}/></li>
                    <li><button id={'login_but'}>登录</button></li>
                </ul>
            </div>
        );
    }
}

export default LoginUserName;