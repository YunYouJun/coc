<template>
  <div>
    <el-card>
      <el-input placeholder="请输入内容" v-model="clanTag" @keyup.enter.native="getClanInfo">
        <template slot="prepend">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="部落标签" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <div></div>
          <el-button slot="append" icon="el-icon-search" @click="getClanInfo"></el-button>
        </template>
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
      clanInfo: {}
    }
  },
  mounted () {
    this.getClanInfo()
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