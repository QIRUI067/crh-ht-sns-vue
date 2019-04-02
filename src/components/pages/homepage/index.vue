<template>
  <div>
    <m-header title="我的社区" :right-icon="true"></m-header>
    <refresh :on-refresh="onRefresh" :on-infinite="onInfinite"  :loading-text="loadingText">
      <div class="sns-header">
        <nb-list top-space="none">
          <nb-list-item :height='132'>
            <avatar avatar="" userType="2" size="66"/>
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

      <div class="active-user">
        <div class="active-title">为你精心推荐了以下用户</div>
        <nb-list top-space="none">
          <nb-list-item :height="120">
            <avatar avatar="" userType="2" size="76"/>
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
      <div class="sns-body">
        <div class="no-content" v-if="false">
          <div class="no-img"></div>
          <div>暂无内容</div>
        </div>
        <div class="comment-list">
          <div class="list-title">朋友动态</div>
          <div class="comment-item" v-for="i in [1,2,3]" :key="i">
            <div class="comment-head">
              <avatar avatar="" userType="2" size="66"/>
              <div class="user-name">
                <div class="name">千年股东
                  <div class="xunzhang">{{i}}枚</div>
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
        </div>
      </div>
    </refresh>
  </div>
</template>
<style lang="scss" src="./style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import MHeader from '@module/header'
  import Avatar from '@module/avatar'
  import HotTopic from '@module/hot-topic'
  import defaultImg from '@assets/img/man@2x.png'
  import Refresh from '@module/refresh';

  @Component({
    components: {
      MHeader,
      HotTopic,
      Refresh,
      Avatar
    },
  })
  export default class HomePage extends Vue {
    defaultImg = defaultImg;
    checked = false;
    loadingText = "加载加载"
    onInfinite(done){
      setTimeout(()=>{
        this.loadingText ="我是有底线的"
        done();
      },2000)
    };
    onRefresh(done){
      setTimeout(() => {
        done();
      }, 1500);
    };
    addFans(){
      console.log("2111")
      this.checked = !this.checked;
    };
    goMyPage(){
      // this.$router.push("/follow");
      this.$router.push("/fans");
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