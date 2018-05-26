<template>
  <div class="text-center">
    <img src="~/assets/img/gear.png" width="300">
    <h1> API Test </h1>

    <el-row :gutter="20">
      <el-col :xs="{span:24}" :md="{span:4, offset:8}">
        <nuxt-link to="/demo/clans">
          <el-button type="primary" plain>clans</el-button>
        </nuxt-link>
      </el-col>
      <el-col :xs="{span:24}" :md="{span:4}">
        <nuxt-link to="/demo/players">
          <el-button type="info" plain>players</el-button>
        </nuxt-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'API'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'API Test' }
      ]
    }
  }
  // async asyncData ({ app }) {
  //   let { data } = await app.$axios.get(`players/%23Q0V9UYCV`)
  //   // return { title: data.title }
  //   return data
  // }
}
</script>

<style scoped>
.el-col {
  padding: 10px;
}
</style>
