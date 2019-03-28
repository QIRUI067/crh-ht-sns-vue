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
      <div class="topic-list">
        <div class="topic-title">苹果在中国下跌2666666666%，为何股份...</div>
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
    <div class="dh20"></div>
  </div>
</template>
<style lang="scss" src="./assets/style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MHeader from '@module/header'
  import defaultImg from './assets/img/man@2x.png'
  @Component({
    components: {
      MHeader
    },
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    mounted() {
      // this.defaultImg = defaultImg;
    }
  }
</script>