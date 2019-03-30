<template>
  <div class="header">
    <div class="back-icon" @click="goBack">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <div class="header-title">{{title}}</div>
    <div class="right-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-nav-gengduo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="scss" src="./assets/style" scoped></style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  @Component({
    props: {
      title: String
    }
  })
  export default class MHeader extends Vue{
    mounted() {
      console.log(this.title)
    };
    goBack(){
      this.$router.go(-1);
    }
  }
</script>


