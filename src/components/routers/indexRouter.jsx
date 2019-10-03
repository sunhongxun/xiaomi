import React, {Component} from 'react';
import {Route,BrowserRouter,Switch} from "react-router-dom";
import GoodsDetail from "../goodsDetail/goodsDetail";


class IndexRouter extends Component {
    render() {
        return (
            <div>
                <Switch>

                    <Route path={'/goodsDetail'} component={GoodsDetail}/>
                </Switch>

            </div>
        );
    }
}

export default IndexRouter;