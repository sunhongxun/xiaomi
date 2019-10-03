import {shopTools} from "../components/util";



export default function (state={},action) {
    let goods = action.data;
    switch (action.type) {
        case 'CART_ADD':
            shopTools.addthing(goods);
            return shopTools.getthing();
        case 'CART_DEL':
            shopTools.delthing(goods);
            return shopTools.getthing();
        case 'CART_GOODS_NUM':
            let newGoodsNum = Object.assign({},state,goods);
            return newGoodsNum;
        default:
            return shopTools.getthing()
    }
}