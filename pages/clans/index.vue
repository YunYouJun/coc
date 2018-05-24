<template>
  <div>
    <el-card>
      <el-input placeholder="请输入内容" v-model="clanTag" @keyup.enter.native="getClanInfo">
        <template slot="prepend">部落标签</template>
        <el-button slot="append" icon="el-icon-search" @click="getClanInfo"></el-button>
      </el-input>
    </el-card>
    <hr>
    <el-card>
      <pre>
        {{ clanInfo }}
      </pre>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: 'clans',
      clanTag: '#28VPJVGC',
      clanInfo: {},
      prefix: 'https://api.clashofclans.com/v1/'
    }
  },
  mounted () {
    this.getClanInfo()
  },
  methods: {
    async getClanInfo () {
      let clanInfo = await this.$axios.get(this.prefix + 'api/clans/' + this.clanTag.replace('#', '%23'))
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