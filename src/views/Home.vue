<template>
  <div class="home">
      <van-nav-bar title="商城" class="nav">
          <van-icon name="search" slot="left" />
          <van-icon name="arrow" slot="right" />
      </van-nav-bar>
    <van-swipe :autoplay="3000">
        <van-swipe-item class="swipe-item" v-for="(image, index) in images" :key="index">
          <img v-lazy="image.image1" alt=""> 
        </van-swipe-item>
    </van-swipe> 
    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in hotProducts" :key="index">
          <div class="hot-swiper-content">
             <img :src="item.img" alt="">
             <div> {{item.name}} </div>
             <div>￥{{item.price}}</div>
             <div>{{item.company}}</div>
             <div>{{item.city}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
 import 'swiper/dist/css/swiper.css'
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
        // 热门商品
        hotProducts: [
        {
          name: "   汽油动力手推割杆机 养殖场专用青储割晒机",
          img:
            "http://img47.nongjx.com/2/20180628/636657846366213316507_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   手扶带牧草收割机 青储高杆作物割晒机价格",
          img:
            "http://img47.nongjx.com/2/20180628/636657846396789904965_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   不缠秧的花生果子收割机 手扶马铃薯收获机",
          img:
            "http://img48.nongjx.com/2/20180628/636657836692623289517_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   高港区手扶车带动土豆收获机收山芋机器",
          img:
            "http://img49.nongjx.com/2/20180511/636616318740584319169_198_170_5.jpg",
          price: "1900",
          company: "  山东曲阜宏燊工贸有限公",
          city: "曲阜市"
        },
        {
          name: "   拖拉机带多功能割晒机 玉米高粱杆子收割机",
          img:
            "http://img50.nongjx.com/2/20180628/636657846333452686281_198_170_5.jpg",
          price: "3260",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   厂家直销大型花生收获机 地下薯类挖收机",
          img:
            "http://img48.nongjx.com/2/20180628/636657834205779466463_198_170_5.jpg",
          price: "2800",
          company: "  曲阜市润众机械制造有限",
          city: "曲阜市"
        },
        {
          name: "   地瓜土豆杀秧机",
          img:
            "http://img49.nongjx.com/2/20180906/636718188965915110193_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   地瓜杀秧机",
          img:
            "http://img49.nongjx.com/2/20180906/636718188987287247797_198_170_5.jpg",
          price: "2380",
          company: "  曲阜市汇林机械有限公司",
          city: "曲阜市"
        },
        {
          name: "   自走式大型花生去秧机 花生除秧自动装袋机",
          img:
            "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2582",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   高效省人工花生摘果机 全新多功能去秧机",
          img:
            "http://img48.nongjx.com/2/20180715/636672620827383254579_198_170_5.jpg",
          price: "2581",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   河北邢台花生摘果机 自动装袋脱果机图片",
          img:
            "http://img48.nongjx.com/2/20180715/636672620803202789496_198_170_5.jpg",
          price: "2580",
          company: "  曲阜金源机械设备有限公",
          city: "济宁市"
        },
        {
          name: "   大型花生收获机规格 链条式方便花生挖果机",
          img:
            "http://img47.nongjx.com/2/20180926/636735768787313154613_198_170_5.jpg",
          price: "3260",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   家用节能花生摘果机 自动装袋花生分离机",
          img:
            "http://img50.nongjx.com/2/20180926/636735749293114513986_198_170_5.jpg",
          price: "3460",
          company: "  曲阜浩发机械有限公司",
          city: "济宁市"
        },
        {
          name: "   牵引式苞米杆打包机生产定制",
          img:
            "http://img67.nongjx.com/2/20170627/636341765014077992756_198_170_5.jpg",
          price: "面议",
          company: "  曲阜四达机械设备有限公",
          city: "济宁市"
        }
      ],
      //显示3个
      swiperOption:{
          slidesPerView: 3
      },
         active: 0
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>
<style lang="scss">
body{
  height: 2000px;
}
.nav{
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  z-index:999;
}
.hot{
  margin-top:0.2rem;
  background:#fff;
  &-title{
    width:100%;
    height:0.5rem;
    line-height: 0.5rem;
    padding-left:0.2rem;
    box-sizing: border-box;//头尾由于热门商品不固定
  }
  &-swiper-content{
    img{
      width:2rem;
      height: 2rem;
    }
  }
}

</style>
