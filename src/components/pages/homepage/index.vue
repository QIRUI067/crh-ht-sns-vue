<template>
  <div>
    <m-header title="我的社区" :right-icon="true"></m-header>
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
          <div class="is-fans" @click="goMyPage">
            <span>主页</span>&nbsp;
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo"></use>
            </svg>
          </div>
        </nb-list-item>
      </nb-list>
    </div>
    <div class="dh20"></div>
    <hot-topic :topic-list = "[0,1,2]"></hot-topic>
    <div class="dh20"></div>
    <div class="active-user" v-if="true">
      <div class="active-title">为你精心推荐了以下用户</div>
      <nb-list top-space="none">
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
            <svg class="icon" :class="checked?'checked':''" aria-hidden="true" @click="addFans">
              <use xlink:href="#icon-xuanzhong"></use>
            </svg>
          </div>
        </nb-list-item>
      </nb-list>
      <div class="dh120"></div>
      <div class="go-sns" @click="begainSns">关注并开启社区之旅</div>
    </div>
    <div class="sns-body" v-if="false">
      <div class="no-content" v-if="false">
        <div class="no-img"></div>
        <div>暂无内容</div>
      </div>
      <div class="comment-list">
        <div class="list-title">朋友动态</div>
        <div class="comment-item" v-for="i in [1,2,3]">
          <div class="comment-head">
            <div class="img-src">
              <img :src="defaultImg"></img>
              <div class="user-group haiboshi"></div>
            </div>
            <div class="user-name">
              <div class="name">千年股东
                <div class="xunzhang">{{i}}枚</div>
              </div>
              <div class="time">昨天 23:66</div>
            </div>
          </div>
          <div class="comment-content">
            <span>#这里是话题名称#</span> 这里评论内容，加拿大应美方要逮捕华为 CFO，任正非女儿孟晚舟，中国中国驻加 使馆强烈抗议抗议抗议抗议抗议抗议抗
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
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MHeader from '@module/header'
  import HotTopic from '@module/hot-topic'
  import defaultImg from '@assets/img/man@2x.png'
 
  @Component({
    components: {
      MHeader,
      HotTopic
    },
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    checked = false;
    addFans(){
      console.log("2111")
      this.checked = !this.checked;
    };
    goMyPage(){
      this.$router.push("/follow");
      // this.$router.push("/fans");
    };
    begainSns(){
      this.$App.refs.modal.alert('请至少关注一个用户哦～', {
        title:"温馨提示",
        okText:"好的",
        onOk: () => {
          console.log("clickOk")
        }
      });
    };
    mounted() {
    }
  }
</script>