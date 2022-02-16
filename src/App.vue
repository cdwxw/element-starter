<template>
  <div id="main">

    <el-container>
      <el-header>
        <el-input v-model="search" placeholder="请输入搜索内容" clearable>
          <template slot="append">{{ items.length }} 个结果</template>
        </el-input>
      </el-header>
      <el-main>
        <el-backtop target=".el-main" :visibility-height="100"></el-backtop>
        <el-empty v-if="items.length === 0" description="暂无数据"></el-empty>
        <div v-if="items.length === 0" class="" style="width:100%;display:flex;flex-direction:row;flex-wrap:wrap;">
          <div v-for="(item, index) in tableData" :key="index">
            <table :style="[index%2==0?shadowStyles:shadowStyles]">
              <tr v-for="(value, key) in item" :key="key">
                <td v-show="index%2==0" style="width:50%;height:10px;line-height:10px;box-shadow: 0 0 1px #000;">{{ key }}</td>
                <td style="width:50%;box-shadow: 0 0 1px #000;">{{ value }}</td>
              </tr>
            </table>
          </div>
        </div>
        <el-card class="box-card" v-if="items.length > 0" v-for="(value, key, index) in items" :key="item">
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
import Store from './store'

// 创建一个新的 Vue 实例
export default {

  data() {
    return {
      shadowStyles:{'margin-bottom':'20px','width':'100%','box-shadow': '0 0 10px #000'},
      noneShadowStyles:{'margin-bottom':'20px','width':'100%'},
      tableData: [],
      search: '',
      items: Store.fetch()
    }
  },
  created() {
    axios
        .get('../static/1.json')
        .then((res) => {
          Store.save(res.data)
          this.items = Store.fetch()
        })
    axios
        .get('../static/2.json')
        .then((res) => {
          this.tableData = res.data
        })
  },
  watch: {
    search: function (val) {
      this.items = Store.fetch().filter((item, i) => {
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