
export function addgood(data) {
    // console.log(data);
    return{
        type:'CART_ADD',
        data
    }
}
export function delgood(data) {
    return{
        type:'CART_DEL',
        data
    }
}

export function getgoodsnum(data) {
    return{
        type:'CART_GOODS_NUM',
        data
    }
}