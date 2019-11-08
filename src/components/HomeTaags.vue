<template>
  <div class="tags">
    <div class="tags-item" >
         <ul class="tabs">
          <li>
            <router-link to="/">
              <div class="activeHead">首页</div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="activeHead">发现</div>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <div class="activeHead">等你来答</div>
            </router-link>
          </li>
        </ul>
        
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss">
.tags{
    background: red;
    .tags-item{
        background: blue;
    }

}
</style>
