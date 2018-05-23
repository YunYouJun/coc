<template>
  <el-card>
    test
  </el-card>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get(`players/#Q0V9UYCV`)
    // return { title: data.title }
    return data
  }
}
</script>

<style>

</style>
