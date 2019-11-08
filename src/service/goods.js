import request from '@/utils/request'
import {getDateStr} from '@/utils/utils'
import { resolve } from 'path'

export function getGoods() {
 return  request({
    url: '/goods/contents',
    method: 'get'
  }).then(({data})=>{
  
    data.map(v=>{
      v.time = getDateStr(v.time)
    })

    return  data
  })

 
}