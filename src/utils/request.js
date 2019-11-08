import axios from "axios"
import store from "@/store/store"

import { Message } from "element-ui";
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url基础地址，解决不同数据源url变化问题
    // withCredentials: true, // 跨域时若要发送cookies需设置该选项
    timeout: 5000 // 超时
  });
  service.interceptors.request.use(config => {
    // if (store.getters.token) {
    //     // 设置令牌请求头
    //     config.headers["X-Token"] = getToken();
    //   }
      return config;
  }, error => {
    // 请求错误预处理
    //console.log(error) // for debug
    return Promise.reject(error);
  })
  service.interceptors.response.use(
      response => {
          const res = response.data
          if(res.code !== 1){
              Message({
                  message:res.message || "error",
                  type:"error",
                  duration:2000
              })
       
          if(res.code === 10008 || res.code === 10012 || res.code === 10014){
            Message(
                {
                    message:res.message || "重新登陆",
                    type:"error",
                    duration:2000
                }
              ).then(() => {
                store.dispatch("user/resetToken").then(() => {
                  location.reload();
                });
              });
          }
          return Promise.reject(new Error(res.message || "Error"));
        }else{
          return res;
        }
      }
  )
  export default service;