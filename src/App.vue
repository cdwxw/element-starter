<template>
  <div id="main">

    <el-container>
      <el-header>
        <el-input v-model="search" placeholder="请输入搜索内容" clearable>
          <template slot="append">{{ json_1036.length }} 个结果</template>
        </el-input>
      </el-header>
      <el-main>
        <el-backtop target=".el-main" :visibility-height="100"></el-backtop>
        <el-empty v-if="json_1036.length === 0" description="暂无数据"></el-empty>
        <div v-if="json_1036.length === 0" class="" style="width:100%;display:flex;flex-direction:row;flex-wrap:wrap;">
          <div v-for="(item, index) in json2" :key="index">
            <table style="margin-bottom:50px;">
              <tr v-for="(value, key) in item" :key="key" style="height:15px;line-height:15px;">
                <td v-show="index%2==0" style="box-shadow: 0 0 5px #000;">{{ key }}</td>
                <td style="box-shadow: 0 0 5px #000;">{{ value }}</td>
              </tr>
            </table>
          </div>
        </div>
        <el-card class="box-card" v-if="json_1036.length > 0" v-for="(item, index) in json_1036" :key="item">
          <el-row>
            <el-tag type="primary" v-if="item.question_type === 9">【{{ item.show_type_name }}】</el-tag>
            <el-tag type="success" v-else-if="item.question_type === 8">【{{ item.show_type_name }}】</el-tag>
            <el-tag type="warning" v-else-if="item.question_type === 5">【{{ item.show_type_name }}】</el-tag>
            <el-tag type="info" v-else>【单选题】</el-tag>
            <b> {{ index + 1 }}. </b><span v-html="replaceS2(item.question_title)"></span>
          </el-row>
          <el-row class="box-card-option" v-for="(o, index) in item.option" :key="option">
            <span v-if="index === 0">A {{ replaceS2(o) }}</span>
            <span v-else-if="index === 1">B {{ replaceS2(o) }}</span>
            <span v-else-if="index === 2">C {{ replaceS2(o) }}</span>
            <span v-else-if="index === 3">D {{ replaceS2(o) }}</span>
            <span v-else-if="index === 4">E {{ replaceS2(o) }}</span>
            <span v-else-if="index === 5">F {{ replaceS2(o) }}</span>
            <span v-else-if="index === 6">G {{ replaceS2(o) }}</span>
          </el-row>
          <el-row style="color:green;">
            <b>答案：{{ item.answer.join('') }}</b>
          </el-row>
          <el-row style="color:orange;">
            <b>解析：</b><span v-html="replaceS2(item.analyze)"></span>
          </el-row>
        </el-card>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import json1 from './assets/1.json'
import json2 from './assets/2.json'
import json_1036 from './assets/SystemArchitectureDesigner/1036_计算机系统基础.json'
// 创建一个新的 Vue 实例
export default {
  data() {
    return {
      json_1036: json_1036.data.data.question,
      json1: json1,
      json2: json2,
      search: ''
    }
  },
  watch: {
    search: function (val) {
      this.json_1036 = json_1036.data.data.question.filter((item) => {
        return item.question_title.indexOf(val) !== -1
      });
    }
  },
  computed: {
    replaceS2: () => (url) => url.replaceAll('://s2.', '://s1.')
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