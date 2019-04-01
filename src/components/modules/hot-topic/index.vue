<template>
  <div class="topic-area">
    <div class="area-title">
      <img src="@assets/img/topic@2x.png"/>
      <span>热议话题</span>
    </div>
    <div class="topic-list" ref="topic-list">
      <div class="topic-item" :class="'topic-item-'+i" v-for="(topic,i) in topicList" :key="i">
        <div class="topic-title">1111苹果在中国下跌2666666666%，为何股份...</div>
        <div class="active-num">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huaticanyurenshu"></use>
            </svg> 35.3万人已参与话题
        </div>
        <div class="topic-button">
          <button>立即参与</button>
        </div>
      </div>
    </div>
    <!-- 卡片分页圆点 -->
    <div class="pagination">
      <i v-for="(card, i) in [1,2,3]" :key="i"
        :class="{active: cardIndex === i}"
      ></i>
    </div>
  </div>
</template>
<style lang="scss" src="./assets/style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import Siema from '@lib/siema';
  @Component({
    props: {
      topicList:Array
    }
  })
  export default class MHeader extends Vue{
    cardIndex = 0;
    mounted() {
      this.topicSlider = new Siema({
        selector: this.$refs['topic-list'],
        startIndex: this.cardIndex,
        onChange: () => {
          // 滑动卡片修改卡片index
          this.cardIndex = this.topicSlider.currentSlide;
        }
      });
    }
  }
</script>


