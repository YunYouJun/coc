<template>
  <div>
    <el-card shadow="hover">
      <el-input placeholder="请输入玩家标签" v-model="playerTag" @keyup.enter.native="getPlayerInfoByTag(playerTag)">
        <template slot="prepend">玩家标签</template>
        <el-button slot="append" icon="el-icon-search" @click="getPlayerInfoByTag(playerTag)"></el-button>
      </el-input>
    </el-card>
    <hr>
    <el-card shadow="hover">
      <template v-if="playerInfo">
        <display-data :data="playerInfo"></display-data>
      </template>
      <template v-else>

      </template>
    </el-card>
  </div>
</template>

<script>
import utils from '~/plugins/utils'
import DisplayData from '~/components/demo/DisplayData'

export default {
  components: {
    DisplayData
  },
  data () {
    return {
      playerTag: '#Q0V9UYCV',
      playerInfo: ''
    }
  },
  mounted () {
    this.getPlayerInfoByTag(this.playerTag)
  },
  methods: {
    getPlayerInfoByTag (playerTag) {
      if (!playerTag) return
      let self = this
      return this.$axios.get('api/players/' + utils.tagify(playerTag))
      .then(function(res){
        self.playerInfo = res.data
        return res.data
      })
      .catch(function(e){
        if (e.response.data) {
          return e.response.data.reason
        }
      })
    }
  }
}
</script>

<style scoped>
.el-card {
  overflow: auto;
}
</style>
