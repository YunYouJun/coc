<template>
  <el-dropdown trigger="click" class='international' @command="handleSetLanguage">
    <span class="el-dropdown-link">
      <i class='fas fa-language international-icon'/><i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
    }
  }
}
</script>

<style scoped>
.international-icon {
  font-size: 30px;
  cursor: pointer;
  vertical-align: -5px!important;
}
</style>
