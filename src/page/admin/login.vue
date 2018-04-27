<template>
  <div class="login">
    <iframe src="/static/html/about4.html" frameborder="0" :style="{width: winWidth + 'px', height: winHeight + 'px' }"></iframe>
    <div class="from">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="昵称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.pwd" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="$router.push('/farm')">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      winWidth: null,
      winHeight: null,
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        pwd: ''
      }
    };
  },
  mounted: function () {
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
  }
};
</script>

<style scoped lang="scss">
  @import "./login.scss";
</style>
