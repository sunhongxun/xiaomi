import React from 'react';
import './index.css'
import {Route,Switch} from "react-router-dom";
import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.css';
import ShopCar from "./components/shopCar/shopCar" ;
import GoodsDetail from "./components/goodsDetail/goodsDetail";
import MyInfo from "./components/myInfo/myInfo";
import Not404 from "./components/notfound/not404";
import Home from "./components/home/home";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/myInfo'} component={MyInfo}/>
            <Route path={'/goodsDetail/:shopid'} component={GoodsDetail}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/shopcar'} component={ShopCar}/>
            <Route  component={Not404}/>
        </Switch>
    </div>
  );
}

export default App;
