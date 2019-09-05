<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <br />   
    <div>
      <span>菜鸟驿站</span>
      <a-button class="button" size="large" @click="all">all</a-button>
      <!-- <a-button class="button" size="large" @click="reserved">已预约</a-button>
      <a-button class="button" size="large" @click="fetch">已取件</a-button>-->      
      <a-button class="button" size="large" @click="send">send</a-button>
      <a-button class="button" size="large" @click="reserve">预约</a-button>
    </div>
    <div id="info">
      <PackageInfo />
    </div>
  </div>
</template>

<script>
import PackageInfo from "./PackageInfo";
export default {
  name: "home",
  components: {
    PackageInfo
  },
  methods: {
     reserve() {
      this.$router.push("/reserve");
    },
    send() {
      this.$router.push("/send");
    },
    all() {
       this.$store.dispatch('queryPackages')
    }
  }
};
</script>
<style scoped>
span{
  margin-left: -100px;
  margin-right: 600px;
  font-size:20px
}
.button{
  margin-left: 10px;
  margin-right: 10px;
}
#info{
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 20px;
}
</style>