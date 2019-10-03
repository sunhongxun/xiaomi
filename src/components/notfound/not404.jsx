import React, {Component} from 'react';
import './notfound.css'
class Not404 extends Component {
    render() {
        return (
            <div className={'notfound'}>
                <img src={require('../../common/images/404.3ec06ef.jpg')} alt=""/>
                <div style={{textAlign:'center',margin:'10px',fontSize:'0.3rem'}}>哦，页面不见了</div>
            </div>
        );
    }
}

export default Not404;