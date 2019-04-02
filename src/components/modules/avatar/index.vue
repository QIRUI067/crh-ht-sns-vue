<template>
  <div class="user-avatar">
    <div :class="'img-src img_size_'+size">
      <img :src="avatar || defaultImg"/>
      <div :class="'user-group user_type_'+userType"></div>
    </div>
  </div>
</template>
<style lang="scss" src="./assets/style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import defaultImg from '@assets/img/man@2x.png'
  @Component({
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