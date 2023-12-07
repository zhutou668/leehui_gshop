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
    async getAddress ({commit}){
        //发送异步ajax请求

       const result = await reqAddress()
        //提交mutations
        const address = result
        // console.log(posts) 
        commit(RECEIVE_ADDRESS,{address})
    },

    async getCatergorys ({commit}){
        //发送异步ajax请求

       const result = await reqCatergorys()
        //提交mutations
        const catergorysList = result
        let catergorysMin = []
        const catergorysArr = []
        // console.log(posts) 
         catergorysList.forEach(c => {
                if (catergorysMin.length < 8) {
                    catergorysMin.push(c)
                }
                if (catergorysMin.length === 8)
                {
                    catergorysArr.push(catergorysMin)
                    catergorysMin= []
                }
        });

        const catergorys = catergorysArr

        commit(RECEIVE_CATERGORYS,{catergorys})
    }
 }