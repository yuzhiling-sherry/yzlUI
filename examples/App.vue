<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<demo></demo>
    <yzl-card imgSrc="one.jpg" summary="你好呀dfldjf;ldjfkljgfjglfjlgjflgflddjhfk到货反馈觉得很烦开始的～"></yzl-card>
    <yzl-card imgSrc="two.jpg" summary="你好呀～">
      <template v-slot:footer>
        <div class="footer">
          <div class="level">zhdfkd</div>
          <div class="level">3783</div>
        </div>
      </template>
    </yzl-card>
    <yzl-card imgSrc="three.jpg" :width="370" :imgHeight="90">
      减肥动力科技发达了减肥的女乘客都能穿
      <template v-slot:footer>
        <div class="footer">
          <div class="level">zhdfkd</div>
          <div class="level">3783</div>
        </div>
      </template>
    </yzl-card>
    <yzl-button type="warning" style="margin-left:5px;margin-top:10px"><img src="./assets/logo.png" style="width:20px;height:20px;" alt=""></yzl-button>-->
    <yzl-radio-group v-model='sex' group-disabled>
      <yzl-radio :value="sex" label="1" @click="sexClick">1</yzl-radio>
      <yzl-radio :value="sex" label="2" @click="sexClick">2</yzl-radio>
      <yzl-radio :value="sex" label="3" @click="sexClick">3</yzl-radio>
    </yzl-radio-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      sex:'2',
    }
  },
  methods:{
    sexClick(e){
      this.sex = e
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  padding:0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color:#888;
}
</style>
