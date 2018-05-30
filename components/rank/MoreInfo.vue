<template>
  <div>
    <el-table
      :data="clanMembersInfo"
      stripe
      show-summary
      highlight-current-row
      :summary-method="getSummaries"
      :default-sort="{prop: 'friendInNeed', order: 'descending'}"
      style="width: 100%">

      <el-table-column
        type="index"
        fixed>
      </el-table-column>

      <el-table-column
        prop="name"
        label="昵称"
        width="150"
        fixed="left"
        >
        <template slot-scope="scope">
          <template v-if="scope.row.league">
            <img class="league-icon" :src="scope.row.league.iconUrls.tiny">
          </template>
          <el-button type="text" @click="goToPlayerInfo(scope.row.tag)">
            {{ scope.row.name }}
          </el-button>
        </template>
      </el-table-column>

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="right" label-width="120px">
            <el-form-item label="标签">
              <el-tag>
                {{ props.row.tag }}
              </el-tag>
            </el-form-item>
            <el-form-item label="奖杯">
              <el-tag>
                {{ props.row.trophies }}
              </el-tag>
            </el-form-item>
            <el-form-item label="夜世界奖杯">
              <el-tag>
                {{ props.row.versusTrophies }}
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
            <template v-else>
              {{ scope.row[item.prop] }}
            </template>
          </template>
      </el-table-column>

      <el-table-column
        v-for="achievement in achievements"
        :key="achievement.prop"
        :width="achievement.width"
        :fixed="achievement.fixed"
        :filters="achievement.filters"
        :filter-method="achievement.filterMethod"
        :sortable="achievement.sortable"
        :prop="achievement.prop"
        :label="achievement.label"
        >
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import utils from '~/plugins/utils'

export default {
  name: 'ClanMember',
  props: ['clanTags'],
  data () {
    return {
      clanMembersInfo: [],
      member: [
        // {
        //   prop: 'tag',
        //   label: '标签',
        //   width: 120
        // },
        // {
        //   prop: 'name',
        //   label: '昵称',
        //   width: 150,
        //   fixed: 'left'
        // }, 
        {
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
        }, {
          prop: 'townHallLevel',
          label: '大本营',
          sortable: true,
        },
        // {
        //   prop: 'trophies',
        //   label: '奖杯',
        //   // width: 100,
        //   sortable: true
        // }, 
        // {
        //   prop: 'versusTrophies',
        //   label: '夜世界',
        //   // width: 100,
        //   sortable: true
        // },
        {
          prop: 'warStars',
          label: '战争星数',
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
        }, 
        {
          prop: 'attackWins',
          label: '攻击获胜',
          sortable: true
        },
        
      ],
      achievements: [
        {
          prop: 'gameChampion',
          label: this.$t('player.achievements.gameChampion'),
          sortable: true
        },
        {
          prop: 'friendInNeed',
          label: this.$t('player.achievements.friendInNeed'),
          sortable: true
        },
        {
          prop: 'sharingIsCaring',
          label: this.$t('player.achievements.sharingIsCaring'),
          sortable: true
        },
      ]
    }
  },
  watch: {
    clanTags () {
      this.clanMembersInfo = []
      this.getAllClanMembersInfo()
    }
  },
  methods: {
    goToPlayerInfo (playerTag) {
      this.$router.push({path: '/players/' + playerTag.replace('#', '')})
    },
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
        } else if (index === 2) {
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
    // get info
    getClanMemberListByTag (clanTag) {
      let self = this
      return this.$axios.get('api/clans/' + utils.tagify(clanTag) + '/members')
      .then(function(res){
        return res.data
      })
      .catch(function(e){
        if (e.response.data) {
          self.$message({
            showClose: true,
            message: self.$t('reason.' + e.response.data.reason),
            type: 'error'
          })
        }
        return e.response.data
      })
    },
    getPlayerInfoByTag (playerTag) {
      let self = this
      return this.$axios.get('api/players/' + utils.tagify(playerTag))
      .then(function(res){
        res.data.friendInNeed = res.data.achievements[14].value //  friend in need
        res.data.sharingIsCaring = res.data.achievements[23].value //  sharing is caring
        res.data.gameChampion = res.data.achievements[31].value   //  game champion
        return res.data
      })
      .catch(function(e){
        return e.response.data
      })
    },
    async getClanMembersInfo (clanTag) {
      let self = this
      let memberList = await this.getClanMemberListByTag(clanTag)
      for (let i = 0; i < memberList.items.length; i++) {
        this.getPlayerInfoByTag(memberList.items[i].tag)
          .then(function(res){
            let memberInfo = res
            self.clanMembersInfo = self.clanMembersInfo.concat(memberInfo)
          })
      }
    },
    async getAllClanMembersInfo () {
      console.log('get')
      for (let i = 0; i < this.clanTags.length; i++) {
        this.getClanMembersInfo(this.clanTags[i])       
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
