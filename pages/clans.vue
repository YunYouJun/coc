<template>
  <div>
    <el-card>
      <el-input placeholder="请输入内容" v-model="clanTag" @keyup.enter.native="getClanByTag">
        <template slot="prepend">部落标签</template>
        <el-button slot="append" icon="el-icon-search" @click="getClanByTag"></el-button>
      </el-input>
    </el-card>
    <hr>
    <nuxt-child :clanInfo="clanInfo"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clanTag: '',
      clanInfo: ''
    }
  },
  mounted () {

  },
  methods: {
    getClanByTag () {
      this.$router.push('/clans/' + this.clanTag.replace('#', ''))
    },
  }
}
</script>

<style>

</style>
