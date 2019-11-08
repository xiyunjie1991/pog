<template>
  <div class="container">

    <div
      class="card"
      v-for="(item,index) in contents"
      :key="index"
    >

      <div class="card-hrader">
        <img
          class="imgUrl"
          :src="item.imgurl"
        >
        <div class="writer">
          <p>{{item.writer}} </p><br>
        </div>
        <div class="time">{{item.time}}</div>
      </div>
      <div class="contextlist">{{item.title}}</div>
      <div class="zhaiyao">{{item.zhaiyao}}</div>
      <div class="like">{{item.like}}</div>
      <div class="collect">{{item.collect}}</div>
    </div>
  </div>
</template>

<script>
import { getGoods } from "@/service/goods";
export default {
  data() {
    return {
      contents: []
    };
  },
  async created() {
    this.contents = await getGoods();
  },
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
.container {
  height: 100%;
  width: 100%;
  white-space: normal;

}

.card {
  padding: 20px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  .contextlist {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 900;
    font-size: 15px;
    text-align: left;
  }

  .card-hrader {
    position: relative;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #8590a6;
    font-size: 14px;

    .imgUrl {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }

    .writer {
      padding: 0 10px;
    }

    .time {
      position: absolute;
      right: 0;
    }
  }

  .biaopan {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .zhaiyao {
    font-size: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
