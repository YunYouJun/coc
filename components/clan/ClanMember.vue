<template>
  <div>
    <el-table
      :data="memberList"
      stripe
      show-summary
      highlight-current-row
      :summary-method="getSummaries"
      :default-sort="{prop: 'donations', order: 'descending'}"
      style="width: 100%">

      <el-table-column
        type="index"
        width="40"
        fixed>
      </el-table-column>

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="right" label-width="120px">
            <el-form-item v-for="(item, key) in expandInfo" :key="key" :label="item.label">
              <el-tag>
                {{ props.row[item.prop] }}
              </el-tag>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column
        v-for="(item, key) in member"
        :key="key"
        :width="item.width"
        :fixed="item.fixed"
        :filters="item.filters"
        :filter-method="item.filterMethod"
        :sortable="item.sortable"
        :prop="item.prop"
        :label="item.label"
        >
          <template slot-scope="scope">
            <el-tag v-if="item.prop==='role'"
              :type="roleType(scope.row.role)"
              >{{ $t('player.role.' + scope.row.role) }}</el-tag>
            <template v-else-if="item.prop==='name'">
              <img class="league-icon" :src="scope.row.league.iconUrls.tiny">
              &nbsp;
              <span>{{ scope.row[item.prop] }}</span>
            </template>
            <template v-else>
              {{ scope.row[item.prop] }}
            </template>
          </template>
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
      member: [
        {
          prop: 'name',
          label: '昵称',
          width: 150,
          fixed: 'left'
        }, {
          prop: 'role',
          label: '职位',
          // width: 100,
          filters: [{ text: '首领', value: 'leader' }, { text: '副首领', value: 'coLeader' }, { text: '长老', value: 'admin' }, { text: '成员', value: 'member'}],
          filterMethod: this.filterTag,
          formatter: this.formatterRole,
        }, {
          prop: 'expLevel',
          label: '等级',
          // width: 100,
          sortable: true
        }, 
        {
          prop: 'trophies',
          label: '奖杯',
          // width: 100,
          sortable: true
        }, 
        {
          prop: 'versusTrophies',
          label: '夜世界',
          // width: 100,
          sortable: true
        },
        {
          prop: 'donations',
          label: '捐兵数',
          // width: 100,
          sortable: true
        }, {
          prop: 'donationsReceived',
          label: '收兵数',
          // width: 100,
          sortable: true
        }
      ],
      expandInfo: [
        {
            prop: 'tag',
            label: '标签',
        },
      ]
    }
  },
  methods: {
    roleType (role) {
      let type = 'info'
      switch (role) {
        case 'leader':
          type = 'dark'
          break
        case 'coLeader':
          type = 'success'
          break
        case 'admin':
          type = 'primary'
          break
        default:
          type = 'info'
          break
      }
      return type
    },
    filterTag(value, row) {
      return row.role === value;
    },
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'All'
          return;
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
        } else {
          sums[index] = 'N/A'
        }
      })
      sums[1] = 'N/A' // name
      return sums;
    },
  }
}
</script>

<style lang="scss" scoped>
.league-icon {
  width: 24px;
  cursor: pointer;
  vertical-align: -7px!important;
}
</style>
