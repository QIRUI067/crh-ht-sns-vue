<template>
  <div>
    <m-header title="我关注的人"></m-header>
    <div class="active-user" v-if="true">
      <div class="active-title">你可能想关注</div>
      <nb-list top-space="none">
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
            <button class="fans" v-if="isFans" @click="cancelFollow">互相关注</button>
            <button class="not-fans" v-if="!isFans" @click="cancelFollow">已关注</button>
          </div>
        </nb-list-item>
      </nb-list>
    </div>
  </div>
</template>
<style lang="scss" src="./style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MHeader from '@module/header'
  import defaultImg from '@assets/img/man@2x.png'
  @Component({
    components: {
      MHeader
    },
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    cardIndex = 0;
    isFans = true;
    mounted() {
    };
    cancelFollow(){
      this.$App.refs.modal.confirm(`<div style='text-align: center'>确定取消关注？</div>`, {
        onOk: () => {
          console.log("clickOk")
        }
      });
    };
  }
</script>