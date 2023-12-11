//包含过个接口请求函数

import ajax from "./ajax"

const BASE_URL = 'http://localhost:3000'
// const BASE_URL = '/api'

export const reqAddress = () => ajax (`${BASE_URL}/address`)


export const reqCatergorys = () => ajax (`${BASE_URL}/catergorys`)


export const reqShops = () => ajax (`${BASE_URL}/shops`)
// export const reqAddress = () => ajax ()