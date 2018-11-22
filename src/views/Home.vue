<template>
  <div class="home">
    <van-nav-bar title="商城">
       <van-icon name="search" slot="left" />
       <van-icon name="arrow" slot="right" />
    </van-nav-bar>
      <van-swipe :autoplay="3000">
         <van-swipe-item class="swipe-item" v-for="(image, index) in images" :key="index">
           <img :src="image.image1" alt=""> 
      </van-swipe-item>
    </van-swipe>
   
  </div>
</template>

<script>
export default {
  data(){
    return{
        images:[
          {
            name:'one',
            image1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542903656442&di=2519ad70caa5ae48c67933c5881c560b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201502%2F04%2F20150204015933_x4zQR.jpeg',
          },
          {
            name:'two',
            image1:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542904647468&di=d54c756e438323327b0921637bd529ee&imgtype=0&src=http%3A%2F%2Fimg15.3lian.com%2F2015%2Ff2%2F48%2Fd%2F100.jpg',
          },
        ],
         active: 0
    }
  }
}
</script>
