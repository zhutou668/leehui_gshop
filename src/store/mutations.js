//直接更新state的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATERGORYS,
    RECEIVE_SHOPS,
} from './mutations-type';

export default {
    [RECEIVE_ADDRESS](state, { address }) {
        state.address = address;
    },

    [RECEIVE_CATERGORYS](state, { catergorys }) {
        state.catergorys = catergorys;
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops;
        console.log(shops);
    },
};
