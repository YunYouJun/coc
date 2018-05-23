<template>
  <div class="footer">
    <hr>
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
        name: 'coc',
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
