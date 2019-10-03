import React, {Component} from 'react';
import Header from "../Header/header";
import Banner from "../banner/banner";
import FenleiNav from "../fenleiNav";
import Index from "../xinpin";
import Release from "../xinpin/release";
import XiaomiList from "../xiaomiList/xiaomiList";
import Footer from "../footer/footer";
import LazyLoad from 'react-lazyload';
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <LazyLoad height={200}>
                    <Banner/>
                    <FenleiNav/>
                    <Index/>
                </LazyLoad>
                <Release/>
                <LazyLoad height={200}>
                    <XiaomiList/>

                </LazyLoad>

                <Footer/>
            </div>
        );
    }
}

export default Home;