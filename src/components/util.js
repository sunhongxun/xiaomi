let util = `http://47.100.98.54:9020`;

let shopTools = {};
let shop = JSON.parse(window.localStorage.getItem("shopinfo") || "{}");

function goback(){
    window.history.go(-1)
}
shopTools.addthing = function (good) {
    // 判断商品是否存在
    if(shop[good.id]){
        console.log(shop[good.id]);
        shop[good.id] += good.num;

    }else {
        shop[good.id] = good.num
    }
    this.saveShop();
};

shopTools.delthing = function (id) {
    delete shop[id];
    this.saveShop()
};

shopTools.getthing = function(){
    return JSON.parse(window.localStorage.getItem("shopinfo") || '{}')
};

shopTools.saveShop = function () {
    window.localStorage.setItem("shopinfo",JSON.stringify(shop))
};
export {shopTools,goback}
export default util;