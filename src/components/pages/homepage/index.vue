<template>
  <div>
    <m-header title="我的社区"></m-header>
    <div class="sns-header">
      <nb-list top-space="none">
        <nb-list-item :height='132'>
          <div class="img-src">
            <img :src="defaultImg"/>
            <div class="user-group haiboshi"></div>
          </div>
          <div class="user-name">
            <div class="name">千年股东</div>
            <div class="tips">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-guanzhu"></use>
              </svg>
                33&nbsp;&nbsp;
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fensi"></use>
              </svg> 99万+
            </div>
          </div>
          <div class="is-fans">
            <span>主页</span>&nbsp;
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
          </div>
        </nb-list-item>
      </nb-list>
    </div>
    <div class="dh20"></div>
    <div class="topic-area">
      <div class="area-title">
        <img src="./assets/img/topic@2x.png"/>
        <span>热议话题</span>
      </div>
      <div class="topic-list" ref="topic-list">
        <div class="topic-item">
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
        <div class="topic-item topic-item-1">
          <div class="topic-title">2222苹果在中国下跌2666666666%，为何股份...</div>
          <div class="active-num">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-huaticanyurenshu"></use>
              </svg> 35.3万人已参与话题
          </div>
          <div class="topic-button">
            <button>立即参与</button>
          </div>
        </div>
        <div class="topic-item topic-item-2">
          <div class="topic-title">3333苹果在中国下跌2666666666%，为何股份...</div>
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
    <div class="dh20"></div>
    <div class="active-user">
      <div class="active-title">为你精心推荐了以下用户</div>
      <nb-list>
        <nb-list-item :height="120">
          <div class="img-src">
              <img :src="defaultImg"></img>
              <div class="user-group haiboshi"></div>
            </div>
            <div class="user-name">
              <div class="name">千年股东</div>
              <div class="tips">这里是推荐理由这里是推荐理由</div>
            </div>
            <div class="add-fans">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xuanzhong-"></use>
              </svg>
            </div>
        </nb-list-item>
      </nb-list>
      <div class="go-sns">关注并开启社区之旅</div>
    </div>
  </div>
</template>
<style lang="scss" src="./assets/style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MHeader from '@module/header'
  import defaultImg from './assets/img/man@2x.png'
  import Siema from './assets/siema';
  @Component({
    components: {
      MHeader
    },
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    cardIndex = 0;
    mounted() {
      // this.defaultImg = defaultImg;
      this.topicSlider = new Siema({
        selector: this.$refs['topic-list'],
        startIndex: this.cardIndex,
        onChange: () => {
          // 滑动卡片修改卡片index
          this.cardIndex = this.topicSlider.currentSlide;
          // 将换一换的分页回到0
          // this.listPage = 0;
        }
      });
    }
  }
</script>