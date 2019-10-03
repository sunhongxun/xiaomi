import {createStore} from "redux";
import Reducers from "../reducers";

export default function(init){
    const store = createStore(
        Reducers,
        init,
        // window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    return store;
}
// let storeConfig = createStore();
