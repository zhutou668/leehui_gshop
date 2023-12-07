//直接更新state的多个方法的对象
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATERGORYS
} from './mutations-type'

 export default {
    [RECEIVE_ADDRESS] (state,{address}){
        state.address = address
    },

    [RECEIVE_CATERGORYS] (state,{catergorys}){
        state.catergorys = catergorys
        console.log( state.catergorys) 
    }
 }