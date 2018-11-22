<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ul class="footer">
      <li class="footer-item">
        <router-link to='/' >首页</router-link>
      </li>
      <li class="footer-item">
        <router-link to='/category'>分类</router-link> 
      </li>
      <li class="footer-item">
        <router-link to='/cart'>购物车</router-link>
      </li>
      <li class="footer-item">
         <router-link to='/profile'>我的</router-link> 
      </li>
    </ul> -->
    <van-tabbar v-model="active">
       <van-tabbar-item icon="shop" to='/' >首页</van-tabbar-item>
       <van-tabbar-item icon="records" to='/category'>分类</van-tabbar-item>
       <van-tabbar-item icon="cart-o" to='/cart'>购物车</van-tabbar-item>
       <van-tabbar-item icon="contact" to='/profile'>我的</van-tabbar-item>
    </van-tabbar>
    

  </div>
</template>
<script>
export default {
    data(){
      return{
        active: 0
      }
    }
}
</script>



<style lang="scss">
.footer{
  background: #eeeeee;
  display:flex;
  position:fixed;
  bottom:0;
  width:100%;
  height:1rem;
  line-height:1rem;
  &-item{
  flex:1;
  text-align: center;
  }
}
.swipe-item{
  height:1.5rem;
  img{
    width: 100%;
  }
}



</style>
