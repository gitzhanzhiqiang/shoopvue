// 店铺首页中部
<template>
  <div calss="theStoreHead">
    <div class="s-shopname" id="container">
      <div id="center">
        <div class="fl store">
          <img :src="storeIcon || baseHead">
          <h3 class="name">{{ storeName }} 欢迎您</h3>
        </div>
        <div class="fl tel">
          <img :src="tel">
          <span class="word">24小时服务热线</span>
          <span class="telphone">{{ storeTel || '0571-88030278' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
     data() {
          return {
                baseHead: require("@/assets/imagesRecode/images/storeLogo.png"),
                tel: require("@/assets/imagesRecode/images/tel.png")
          }
     },
     props: {
          // 店铺名
          storeName: {
               type: String,
          },
          // 店铺电话
          storeTel: {
               type: String,
          },
          // 店铺头像
          storeIcon: {
               type: String
          }
     }
};
</script>

<style style="scss" scoped>
.theStoreHead {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
}

#container {
     width: 100%;
     height: 100px;
     background: #E2231A;
     margin-top: 13px;
}


#center {
     width: 1200px;
     margin: 0 auto;
}

#center .store {
     width: 380px;
     height: 100px;
     line-height: 100px;
     position: relative;
}

#center .store img {
     position: absolute;
     top: 10px;
     left: 34px;
     width: 80px;
     height: 80px;
}

#center .store .name {
     display: inline-block;
     font-size: 18px;
     font-family: MicrosoftYaHei-Bold;
     color: #fff;
     margin-left: 153px;
     width: 700px;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
}

#center .tel {
     width: 790px;
     text-align: right;
     height: 100px;
     line-height: 100px;
}

#center .tel img {
     width: 20px;
     height: 16px;
}

#center .tel span {
     font-family: MicrosoftYaHeiLight;
     color: #fff;
}

#center .tel .word {
     font-size: 14px;
     font-weight: 300;
     margin: 0 18px 0 9px;
}

#center .tel .telphone {
     font-size: 16px;
     font-weight: bold;
}
</style>