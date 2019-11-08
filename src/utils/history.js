const history = {
     _history:[],
    install(Vue){
        Object.defineProperty(Vue.prototype,'$routerHistory',{
            get(){
                return history
            }
        })
    },
    push(path){
        this._history.push(path)
    },
    pop(){
        this._history.pop()
    },
    canBack(){
        return this._history.length > 1
    }
    
}
export default  history