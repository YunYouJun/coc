<template>
  <div>
    <el-table
      :data="memberList"
      stripe
      style="width: 100%">
      <el-table-column
        type="index"
        width="40"
        fixed>
      </el-table-column>
      <el-table-column
        v-for="(item, key) in member"
        :key="key"
        :sortable="item.sortable"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ClanMember',
  props: ['memberList'],
  data () {
    return {
      member: [{
        prop: 'tag',
        label: '标签',
        width: 120
      }, {
        prop: 'name',
        label: '昵称',
        width: 180
      }, {
        prop: 'role',
        label: '职位',
        width: 100
      }, {
        prop: 'expLevel',
        label: '等级',
        width: 100,
        sortable: true
      }, {
        prop: 'trophies',
        label: '奖杯',
        width: 100,
        sortable: true
      }, {
        prop: 'versusTrophies',
        label: '夜世界',
        width: 100,
        sortable: true
      }, {
        prop: 'donations',
        label: '捐兵数',
        width: 100,
        sortable: true
      }, {
        prop: 'donationsReceived',
        label: '收兵数',
        width: 100,
        sortable: true
      }]
    }
  }
}
</script>

<style>

</style>
