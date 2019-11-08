<template>
  <div class="main">
    <div class="header">
      <i class="cubeic-calendar"></i>
      <div class="cube-input">
        <cube-input
          v-model="searchValue"
          placeholder="知乎影月风"
          type='text'
          :maxlength='10'
          :autocomplete='true'
          :clearable='true'
        ></cube-input>
      </div>

      <i class="cubeic-message"></i>
    </div>
    <div class="tab-bar">
      <cube-tab-bar
        ref="tabNav"
        v-model="selectedLabel"
        :data="tabLabels"
        :showSlider='true'
      >
        <cube-tab
          v-for="item in tabLabels"
          :label="item.label"
          :key="item.value"
        >
          <div>{{item.label}}</div>
        </cube-tab>

      </cube-tab-bar>
    </div>
    <cube-slide
      ref="slide"
      :loop="false"
      :initial-index="initialIndex"
      :auto-play="false"
      :show-dots="false"
      :options="slideOptions"
      @scroll="scroll"
      @change="changePage"
    >
      <cube-slide-item>
        <cube-scroll :options="scrollOptions">
          <guanzhu></guanzhu>
        </cube-scroll>
      </cube-slide-item>
      <cube-slide-item>
        <cube-scroll :options="scrollOptions">
          <Recommend></Recommend>
        </cube-scroll>
      </cube-slide-item>
      <cube-slide-item>
        <cube-scroll :options="scrollOptions">
          <Hot></Hot>
        </cube-scroll>
      </cube-slide-item>
      <cube-slide-item>
        <cube-scroll :options="scrollOptions">
          <Star></Star>
        </cube-scroll>
      </cube-slide-item>

      <!-- </div> -->

    </cube-slide>

  </div>
</template>

<script>
import guanzhu from "@/components/main/GuanZhu.vue";
import Recommend from "@/components/main/Recommend";
import Hot from "@/components/main/Hot";
import Star from "@/components/main/Star";
import {findIndex} from "@/utils/utils";
export default {
  components: { guanzhu, Recommend, Hot, Star },
  data() {
    return {
      contents: [],
      selectedLabel: "关注",
      searchValue: "guanzhu",
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        /* lock y-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      scrollOptions: {
        /* lock x-direction when scrolling horizontally and  vertically at the same time */
        directionLockThreshold: 0
      },
      tabLabels: [
        {
          label: "关注",
          value: "guanzhu"
        },
        {
          label: "推荐",
          value: "recommend"
        },
        {
          label: "热榜",
          value: "hot"
        },
        {
          label: "星星",
          value: "star"
        }
      ]
    };
  },
  computed: {
    initialIndex() {
      let index = 0;
      index = findIndex(
        this.tabLabels,
        item => item.label === this.selectedLabel
      );
      return index;
    }
  },
  created() {},
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ path: "/login" });
      });
    },
    scroll(pos) {
      const x = Math.abs(pos.x);
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth;
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth;
      const deltaX = (x / slideScrollerWidth) * tabItemWidth;
      this.$refs.tabNav.setSliderTransform(deltaX);
    },
    changePage(current) {
      this.selectedLabel = this.tabLabels[current].label;
      console.log(current);
    }
  }
};
</script >

<style lang="stylus" scoped>
.tab-slide-container {
  position: fixed;
  top: 74px;
  left: 0;
  right: 0;
  bottom: 0;
}

.contextlist {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.tab-bar {
  width: 100%;
  height: 30px;
}

.cube-input {
  width: 100%;
}

.header {
  height: 1rem;
  line-height: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2px 2px;

  i {
    margin: 0 10px;
    font-size: 0.8rem;
  }
}

.card {
  .contextlist {
    font-weight: 900;
    font-size: 0.5rem;
    text-align: left;
    justify-content: flex-start;
  }

  .biaopan {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .zhaiyao {
    font-size: 0.4rem;
  }
}
</style>
