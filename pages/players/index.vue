<template>
  <div>
    <el-input placeholder="请输入玩家标签" v-model="playerTag" @keyup.enter.native="getPlayerInfoByTag(playerTag)">
      <template slot="prepend">{{ $t('player.tag') }}</template>
      <el-button slot="append" icon="el-icon-search" @click="getPlayerInfoByTag(playerTag)"></el-button>
    </el-input>
    <hr>
    <template v-if="playerInfo">
      <player-info :playerInfo="playerInfo"></player-info>
    </template>
    <template v-else>
      <div class="text-center">
        输入玩家标签进行搜索~
      </div>
    </template>
  </div>
</template>

<script>
import utils from '~/plugins/utils'
import PlayerInfo from '~/components/player/PlayerInfo'

export default {
  data () {
    return {
      playerTag: '',
      playerInfo: ''
    }
  },
  components: {
    PlayerInfo
  },
  mounted () {

  },
  methods: {
    getPlayerInfoByTag (playerTag) {
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

<style>

</style>