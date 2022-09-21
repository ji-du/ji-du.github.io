Vue.config.productionTip = false//关闭生产提示
new Vue({
  el: '#app',
  data() {
    return {
      mes:'',
      input1:'',
    }
  },
  methods:{
    submit(){
      switch (this.input1) {
        case '王岩':
          this.mes = '老王傻逼'
          break;
        case '张俊杰':
          this.mes = '张狗垃圾'
          break;
        case '魏华龙':
          this.mes = '魏狗魏狗'
          break;
        case '俞昊':
          this.mes = '昊狗昊狗'
          break;
        case '张谋智':
          this.mes = '张狗张狗'
          break;
        case '苏云龙':
          this.mes = '苏狗苏狗'
          break;
        case '谢文浩':
          this.mes = '谢狗谢狗'
          break;
        case '姚孔虎':
          this.mes = '姚总威武'
          break;
        default:
          this.mes = '瞎几把输什么呢'
          break;
      }
    },
    inputChange(){
      if(!this.input1){
        this.mes = ''
      }
    }
  }
})