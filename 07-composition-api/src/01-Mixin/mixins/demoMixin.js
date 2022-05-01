export const demoMixin = {
  data(){
    return {
      message:'hello Mixin'
    }
  },methods: {
    foo(){
      console.log('mixin for foo')
    }
  },
  created() {
    console.log('执行了mixin 的 created')
  },
};
