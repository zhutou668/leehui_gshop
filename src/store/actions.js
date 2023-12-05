//通过mutation间接更新state的多个对象 

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATERGORYS
} from './mutations-type'

import {
    reqAddress,
    reqCatergorys
} from '../api'

 export default {
    //异步获取POSTS
    async getAddress ({commit,state}){
        //发送异步ajax请求
        console.log(state)
       const result = await reqAddress()
        //提交mutations
        const address = result
        // console.log(posts) 
        commit(RECEIVE_ADDRESS,{address})
    },

    async getCatergorys ({commit,state}){
        //发送异步ajax请求
        console.log(state)
       const result = await reqCatergorys()
        //提交mutations
        const catergorys = result
    
        // console.log(posts) 
        commit(RECEIVE_CATERGORYS,{catergorys})
    }
 }