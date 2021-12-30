<template>
  <div class="warpper">
    <el-tree ref="tree" :data="TreeData" node-key="id" :key="treeKey" current-node-key :props="defaultProps"
             highlight-current @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ParmentData: null,
      TreeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {id: 9, label: '三级 1-1-1'},
                {id: 10, label: '三级 1-1-2'}
              ]
            }
          ]
        }, {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }
          ]
        }, {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }
          ],
          show: true
        }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeKey: '',
    }
  },
  created() {
    this.$nextTick(function () {
      this.$data.TreeData.forEach(row => {
        if (row.show) {
          this.$refs.tree.setCurrentKey(row.id);
          this.$refs.tree.store.nodesMap[row.id].expanded = true;
        }
      })
    })
  },
  methods: {
    handleNodeClick: function (data, checked) {
      // 点击事件
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
  }
}
</script>

<style scoped>
.warpper .el-tree--highlight-current /deep/ .el-tree-node.is-checked > .el-tree-node__content {
  background-color: gray;
  color: #409EFF;
}

.warpper .el-tree--highlight-current /deep/ .el-tree-node.is-current > .el-tree-node__content {
  background-color: #909399;
  color: #67C23A;
}
</style>