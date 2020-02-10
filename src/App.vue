<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  html,body{
    height: 100%;
    background: #fff;
  }
  .system{
    width: 100%;
    height: 24px;
  }
  #app {
    height: 100%;
  }
  input,button{
    outline: none;
  }
  .fl{
  	float: left;
  }
  .fr{
  	float: right;
  }
  .clearfix::after{
  	display: block;
  	content:'';
  	clear:both;
  }
  .auto-img{
    display: block;
    width: 100%;
  }
</style>
