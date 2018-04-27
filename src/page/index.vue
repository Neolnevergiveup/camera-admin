<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>
      <el-container :style="{height: (winHeight - 60) + 'px'}">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)" :style="{height: (winHeight - 60) + 'px'}">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
                <i></i>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>设备管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-3">GPRS</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="2-4">LORA</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>摄像头管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-3" @click="$router.push('/farm');">农场</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <el-menu-item index="3-4" @click="$router.push('/aquatic');">水产</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      winWidth: null,
      winHeight: null
    };
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted: function () {
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
  }
};
</script>

<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }

</style>
