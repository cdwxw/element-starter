<template>
  <div id="main">

    <el-container>
      <el-header>
        <el-input v-model="search" placeholder="请输入搜索内容" clearable>
          <template slot="append">{{ json1.length }} 个结果</template>
        </el-input>
      </el-header>
      <el-main>
<!--        <img src="./assets/logo.png" />-->
        <el-backtop target=".el-main" :visibility-height="100"></el-backtop>
        <el-empty v-if="json1.length === 0" description="暂无数据"></el-empty>
        <div v-if="json1.length === 0" class="" style="width:100%;display:flex;flex-direction:row;flex-wrap:wrap;">
          <div v-for="(item, index) in json2" :key="index">
            <table style="margin-bottom:50px;">
              <tr v-for="(value, key) in item" :key="key" style="height:15px;line-height:15px;">
                <td v-show="index%2==0" style="box-shadow: 0 0 5px #000;">{{ key }}</td>
                <td style="box-shadow: 0 0 5px #000;">{{ value }}</td>
              </tr>
            </table>
          </div>
        </div>
        <el-card class="box-card" v-if="json1.length > 0" v-for="(value, key, index) in json1" :key="item">
          <el-row>
            <el-tag v-if="value.type === 'single'">【单选】</el-tag>
            <el-tag type="success" v-else-if="value.type === 'multiple'">【多选】</el-tag>
            <el-tag type="warning" v-else-if="value.type === 'judgement'">【判断】</el-tag>
            <b> {{ key + 1 }}. {{ value.title }}</b>
          </el-row>
          <el-row class="box-card-option" v-for="b in value.choices" :key="choice">
            <span>{{ b.flag }}</span>
            <span>{{ b.content }}</span>
          </el-row>
          <el-row style="color:#F56C6C;">
            <b>正确答案：{{ value.expect.join('') }}</b>
          </el-row>
        </el-card>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import json1 from './assets/1.json'
import json2 from './assets/2.json'
// 创建一个新的 Vue 实例
export default {
  data() {
    return {
      json1: json1,
      json2: json2,
      search: ''
    }
  },
  watch: {
    search: function (val) {
      this.json1 = json1.filter((item) => {
        return item.title.indexOf(val) !== -1
      })
    }
  }
}
</script>

<style>
.el-header {
  position: relative;
  width: 100%;
  height: 60px;
}

.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}

.el-main {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.box-card {
  background-color: #E4E7ED;
  font-size: 14px;
  margin: 10px 5px;
  border: 1px solid #DCDFE6;
  border-radius: 10px;
}

.box-card-option {
  margin: 5px 20px;
}
</style>