<template>
  <div id="app">
    <router-view class="child-view" />
  </div>

</template>

<script>
import Home from "@/views/Home";
import axios from "axios";
export default {
  name: "app",
  components: { Home },
  data() {
    return {
     
    };
  },
  created() {

  },
  methods: {
   
    // logout(){
    //   this.$store.dispatch("logout").then( (v) =>{
    //     this.$router.push({path:'/login'})
    //   })
    // },
  }
};
</script>

<style >
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 30px;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.4rem;
}
body {
  padding: 0;
  margin: 0;
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
</style>
