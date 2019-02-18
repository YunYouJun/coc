<template>
  <div>
    <div class="text-center">
      <h1>{{ $t('about.title') }}</h1>
      <p>
        <a href="https://github.com/YunYouJun/coc" target="_blank">
          https://github.com/YunYouJun/coc
        </a>
        <br>
        {{ $t('about.introduction') }}
      </p>
    </div>
    <hr>
    <el-card shadow="hover">
      <readme class="markdown-body"></readme>
    </el-card>
  </div>
</template>

<script>
import readme from '@/README.md'

export default {
  head () {
    return {
      title: this.$t('about.title'),
    }
  },
  components: {
    readme
  }
}
</script>

<style lang="scss" scoped>
.markdown-body {
  font-family: Lato, "PingFang SC", "Microsoft YaHei", Arial, sans-serif;
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
