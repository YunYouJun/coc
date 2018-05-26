<template>
  <div class="footer">
    <hr>
    <el-row>
      <el-col :span="24">
        <nuxt-link to="/about">
          <el-button size="mini" type="text">{{ $t('about.title') }}</el-button>
        </nuxt-link>
      </el-col>
    </el-row>
    <br>
    <vue-about-me :copyright="copyright"></vue-about-me>
  </div>
</template>

<script>
import VueAboutMe from '~/components/VueAboutMe'
export default {
  name: 'MainFooter',
  data () {
    return {
      copyright: {
        name: 'COC',
        repoName: 'coc',
        author: 'YunYouJun',
        logo: 'fas fa-cloud'
      }
    }
  },
  components: {
    VueAboutMe
  }
}
</script>

<style>
.footer {
  padding: 10px;
  text-align: center;
}
</style>
