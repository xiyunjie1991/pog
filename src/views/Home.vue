<template>
  <div class="home">
    <div class="header-out">
      <div class="header">
        <i
          v-if="$routerHistory.canBack()"
          class="cubeic-back"
          @click="goBack"
        ></i>
        <H1> {{title}}</H1>
      </div>
    </div>
    <div class="home-view">
      <router-view />
    </div>
    <cube-tab-bar
      v-model="selectLabel"
      :data="tabs"
      @change="changeHandler"
    >
      <cube-tab
        v-for="(item, index) in tabs"
        :icon="item.icon"
        :label="item.value"
        :key="index"
      >
        <div>{{item.label}}</div>
      </cube-tab>
    </cube-tab-bar>

  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      selectLabel: "/",
      title: "",
      tabs: [
        {
          label: "Home",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "Cart",
          value: "/cart",
          icon: "cubeic-mall"
        },
        {
          label: "about",
          value: "/about",
          icon: "cubeic-person"
        }
      ]
    };
  },
  watch: {
    $route(route, from) {
      this.selectLabel = route.path;
      this.title = route.meta.title;
      console.info("router.title", this.$route.meta.title);
    }
  },
  mounted() {},
  created() {
    this.selectLabel = this.$route.path;
    this.title = this.$route.meta.title;
  },
  methods: {
    handelTabclick(a, b) {},

    goBack() {
      this.$router.goBack();
    },
    clickHandler() {},
    changeHandler(value) {
      this.$router.push(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.cube-tab {
  position: relative;
}
.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #edf0f4;
}

.cube-tab-bar-slider {
  top: 0;
}
.home-view {
  padding-bottom: 30px;
}
.header {
  height: 0.5rem;
  text-align: center;
  position: relative;
  line-height: 0.5rem;
  backface-visibility: hidden;
  i {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 15px;
    color: #fc9153;
  }
}
</style>
