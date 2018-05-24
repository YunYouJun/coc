<template>
  <div>
    <el-card>
      <el-input placeholder="请输入内容" v-model="playerTag" @keyup.enter.native="getPlayerInfo">
        <template slot="prepend">玩家标签</template>
        <el-button slot="append" icon="el-icon-search" @click="getPlayerInfo"></el-button>
      </el-input>
    </el-card>
    <hr>
    <el-card>
      <pre>
        {{ playerInfo }}
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerTag: '#Q0V9UYCV',
      playerInfo: {}
    }
  },
  mounted () {
    this.getPlayerInfo()
  },
  methods: {
    async getPlayerInfo () {
      let playerInfo = await this.$axios.get('api/players/' + this.playerTag.replace('#', '%23'))
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
      this.playerInfo = playerInfo
    }
  }
}
</script>

<style>

</style>
