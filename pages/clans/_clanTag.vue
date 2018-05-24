<template>
  <div>
    <el-card>
      <template v-if="clanInfo">
        <el-table
          :data="clanInfo.memberList"
          stripe
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
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
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  asyncData ({ params, $axios }) {
    return $axios.get(`api/clans/%23${params.clanTag}`)
    .then((res) => {
      return {
        clanInfo: res.data,
      }
    })
    .catch((e) => {
      return {
        reason: e.response.data.reason
      }
    })
  },
  data () {
    return {
      clanInfo: '',
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
        width: 100
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
  },
  mounted () {
    this.getClanInfo
  },
  methods: {
    async getClanInfo () {
      let clanInfo = await this.$axios.get('api/clans/' + this.clanTag.replace('#', '%23'))
      .then(function(res){
        console.log(res)
        return res.data
      })
      .catch(function(e){
        console.log(e)
        if (e.response.data) {
          return e.response.data.reason
        }
      })
      this.clanInfo = clanInfo
    }
  }
}
</script>

<style>

</style>