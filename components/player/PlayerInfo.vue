<template>
  <div>
    <el-card shadow="hover">
      <display-data :data="playerInfo"></display-data>
    </el-card>
  </div>
</template>

<script>
import DisplayData from '~/components/demo/DisplayData'

export default {
  props: ['playerInfo'],
  head () {
    return {
      title: this.$t('player.info') + ' | ' + this.playerInfo.name,
      meta: [
        { hid: 'description', name: 'description', content: this.playerInfo.name }
      ]
    }
  },
  data () {
    return {

    }
  },
  components: {
    DisplayData
  }
}
</script>

<style lang="scss" scoped>
.right-info {
  float: right;
  padding-right: 10px; 
}
</style>
