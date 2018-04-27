<template>
  <div class="farm">
    <div>
      <el-button type="primary" @click="dialogVisible = true;">添加摄像头</el-button>
      <el-button type="danger">删除摄像头</el-button>
    </div>
    <el-table
      :data="tableData5"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <!--<el-form label-position="left" inline class="demo-table-expand">-->
            <!--<el-form-item label="商品名称">-->
              <!--<span>{{ props.row.name }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="所属店铺">-->
              <!--<span>{{ props.row.shop }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="商品 ID">-->
              <!--<span>{{ props.row.id }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="店铺 ID">-->
              <!--<span>{{ props.row.shopId }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="商品分类">-->
              <!--<span>{{ props.row.category }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="店铺地址">-->
              <!--<span>{{ props.row.address }}</span>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="商品描述">-->
              <!--<span>{{ props.row.desc }}</span>-->
            <!--</el-form-item>-->
          <!--</el-form>-->
        </template>
      </el-table-column>
      <el-table-column label="产品 ID" prop="product_id"></el-table-column>
      <el-table-column label="产品MAC" prop="mac"></el-table-column>
      <el-table-column label="产品UID" prop="uid"></el-table-column>
      <el-table-column label="推流地址" prop="uid"></el-table-column>
      <el-table-column label="播放地址" prop="uid"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">添加</el-button>
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small">查询</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加摄像头"
      :show-close="false"
      :center="true"
      :visible.sync="dialogVisible"
      width="540px">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./farm.js"></script>

<style scoped lang="scss">
</style>
