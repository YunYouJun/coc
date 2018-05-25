<template>
  <div id="app">
    <el-main>

      <app-logo/>

      <h2 class="title">
        {{ title }}
      </h2>

      <el-row :gutter="20">
        <el-col :xs="{span:24}" :md="{span:4, offset:8}">
          <nuxt-link to="/demo">
            <el-button type="success" plain>API DEMO</el-button>
          </nuxt-link>
        </el-col>
        <el-col :xs="{span:24}" :md="{span:4}">
          <a
            href="https://github.com/YunYouJun/coc"
            target="_blank">
            <el-button type="dark" plain>GitHub</el-button>
          </a>
        </el-col>
      </el-row>

    </el-main>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  data () {
    return {
      title: 'COC'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'COC API Web' }
      ]
    }
  },
  components: {
    AppLogo
  }
}

//  百度统计
var _hmt = _hmt || []
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?53470e6df1d89e748bac170d373dbd0f"
  var s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(hm, s)
})()
</script>

<style scoped>
#app {
  text-align: center;
}

.el-col {
  padding: 10px;
}
</style>
