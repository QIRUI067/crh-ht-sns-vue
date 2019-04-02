<template>
  <div class="comment-item">
    <div class="comment-head">
      <avatar avatar="" userType="2" size="66"/>
      <div class="user-name">
        <div class="name">千年股东
          <div class="xunzhang">{{6}}枚</div>
        </div>
        <div class="time">昨天 23:66</div>
      </div>
    </div>
    <div class="comment-content">
      <ht-richtext-parser>
        <p>{[subject|1000|华为CFO孟晚舟被逮捕，美方究竟意欲何为？|加拿大应美要求逮捕华为CEO，任正非女儿孟晚舟，中国驻加使馆孟晚舟，中国驻加使馆孟晚舟，中国的的的d...]}</p>
      </ht-richtext-parser>
    </div>
    <div class="comment-num">
      <div class="pinglun-num">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg> 999
      </div>
      <div class="dianzan-num">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dianzan-weidianliang"></use>
        </svg> 888
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./assets/style" scoped></style>
<script>
  import Vue from 'vue';
  import Avatar from '@module/avatar'
  import Component from 'vue-class-component';
  import defaultImg from '@assets/img/man@2x.png'
  @Component({
    components: {
      Avatar
    },
    props: {
      avatar: String,
      userType: String,
      size: String
    }
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    mounted() {
    }
  }
</script>