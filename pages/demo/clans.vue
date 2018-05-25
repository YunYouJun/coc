<template>
  <div>
    <el-card shadow="hover">
      <el-input placeholder="请输入部落标签" v-model="clanTag" @keyup.enter.native="getClanInfoByTag(clanTag)">
        <template slot="prepend">
          <el-select v-model="select" placeholder="部落标签" @change="getClanInfoByTag(clanTag)">
            <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"></el-option>
          </el-select>
        </template>
        <el-button slot="append" icon="el-icon-search" @click="getClanInfoByTag(clanTag)"></el-button>
      </el-input>
    </el-card>
    <hr>
    <el-card shadow="hover">
      <display-data :data="clanInfo"></display-data>
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
      select: '',
      clanTag: '#28VPJVGC',
      options: [{
        label: '部落信息',
        value: ''
      }, {
        label: '成员列表',
        value: 'members',
      }, {
        label: '对战日志',
        value: 'warlog',
      }, {
        label: '当前部落战',
        value: 'currentwar',
      }],
      clanInfo: '',
    }
  },
  mounted () {
    this.getClanInfoByTag(this.clanTag)
  },
  methods: {
    getClanInfoByTag (clanTag) {
      let self = this
      return this.$axios.get('api/clans/' + utils.tagify(clanTag) + '/' + this.select)
      .then(function(res){        
        self.clanInfo = res.data
        return res.data
      })
      .catch(function(e){
        console.log(e)
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

<style scoped>
.el-select {
  width: 130px;
}
</style>