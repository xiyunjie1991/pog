
import {login} from '@/service/user'
import {setToken,getToken,removeToken} from "@/utils/auth.js"
export default {
  state: {
    userInfo:{},
    token:getToken()
  },
  mutations: {
    SET_TOKEN:(state,token) =>{
        state.token = token
    },
    setLogin(state, val) {
      state.isLogin = val.success
      state.userInfo = val.userinfo
    },
    setLogout(state, val) {
      state.isLogin = val.success
      state.userInfo = val.userinfo
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return  login(userInfo).then( ({token,userinfo}) =>{
            if(token){
                commit('setLogin',{success:true,userinfo})
                setToken(token)
                return {success:true,userinfo}
            }
            return  {success:false,userinfo}
        }) 
    },
    logout({commit}){
      localStorage.removeItem("token") 
      commit('setLogout',{success:false,userinfo:null})
    },
    resetToken({commit}){
      return new Promise(resolve =>{
          commit("SET_TOKEN","")
          removeToken()
          resolve()
      })
    }
 
    
  }
}
