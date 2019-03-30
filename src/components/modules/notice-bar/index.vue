<template>
  <div class="header" v-if="isOpen">
    <div class="back-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi"></use>
      </svg>
    </div>
    <div class="header-title">{{content}}</div>
    <div class="right-icon" @click="closeNotice">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-guanbi"></use>
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
      content: String
    }
  })
  export default class MHeader extends Vue{
    isOpen = true;
    mounted() {
      console.log(this.content)
    };
    closeNotice(){
      this.isOpen = false;
    }
  }
</script>


