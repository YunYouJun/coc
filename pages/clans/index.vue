<template>
  <div>
    <el-input placeholder="请输入内容" v-model="clanTag" @keyup.enter.native="getClanInfoByTag(clanTag)">
      <template slot="prepend">部落标签</template>
      <el-button slot="append" icon="el-icon-search" @click="getClanInfoByTag(clanTag)"></el-button>
    </el-input>
    <hr>
    <template v-if="clanInfo">
      <clan-info :clanInfo="clanInfo"></clan-info>
    </template>
    <template v-else>
      <div class="text-center">
        输入部落标签进行搜索~
      </div>
    </template>
  </div>
</template>

<script>
import utils from '~/plugins/utils'
import ClanInfo from '~/components/clan/ClanInfo'

export default {
  data () {
    return {
      clanTag: '',
      clanInfo: '',
    }
  },
  components: {
    ClanInfo
  },
  methods: {
    getClanInfoByTag (clanTag) {
      if (!clanTag) return
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
            message: self.$t('reason.' + e.response.data.reason),
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