<template>
  <div>
    <el-card shadow="hover">
      <el-input placeholder="请输入内容" v-model="clanTag" @keyup.enter.native="getClanInfoByTag(clanTag)">
        <template slot="prepend">部落标签</template>
        <el-button slot="append" icon="el-icon-search" @click="getClanInfoByTag(clanTag)"></el-button>
      </el-input>
    </el-card>
    <hr>
    <el-card shadow="hover">
      <template v-if="clanInfo">
        <clan-member :memberList="clanInfo.memberList"></clan-member>
      </template>
    </el-card>
  </div>
</template>

<script>
import utils from '~/plugins/utils'
import ClanMember from '~/components/clan/ClanMember'

export default {
  data () {
    return {
      clanTag: '',
      clanInfo: '',
    }
  },
  components: {
    ClanMember
  },
  methods: {
    getClanInfoByTag (clanTag) {
      let self = this
      return this.$axios.get('api/clans/' + utils.tagify(clanTag))
      .then(function(res){
        self.clanInfo = res.data
        return res.data
      })
      .catch(function(e){
        if (e.response.data) {
          self.$message({
            showClose: true,
            message: e.response.data.reason,
            type: 'error'
          })
        }
      })
    },
  }
}
</script>

<style>

</style>