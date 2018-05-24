<template>
  <div class="text-center">
    <img src="~/assets/img/gear.png" width="300">
    <h1> API Test </h1>
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

<style>

</style>
