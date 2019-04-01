<template>
  <div>
    <m-header title="我的粉丝"></m-header>
    <notice-bar content="你又增加了1个新粉丝，赶紧看看吧～" v-if="true"></notice-bar>
    <div class="active-user">
      <nb-list top-space="none" v-if="true">
        <nb-list-item :height="120" v-for="i in [1,2,3,4]" :key="i">
          <div class="img-src">
            <img :src="defaultImg"/>
            <div class="user-group haiboshi"></div>
          </div>
          <div class="user-name">
            <div class="name">千年股东</div>
            <div class="tips">这里是推荐理由这里是推荐理由</div>
          </div>
          <div class="add-fans">
            <button class="fans" v-if="isFans">互相关注</button>
            <button class="not-fans" v-if="!isFans">+ 关注</button>
          </div>
        </nb-list-item>
      </nb-list>
      <div class="no-fans" v-if="false">
        <div class="no-img"></div>
        <div>多发评论更容易被关注哦～</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MHeader from '@module/header'
  import NoticeBar from '@module/notice-bar'
  import defaultImg from '@assets/img/man@2x.png'
  @Component({
    components: {
      MHeader,
      NoticeBar
    },
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    cardIndex = 0;
    isFans = true;
    addFans(){
      console.log("2111")
      // this.checked = !this.checked;
    }
    mounted() {
    }
  }
</script>