<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router='router'>
    <el-menu-item v-for="(menuItem, key) in menuItems" :key="key" :index="menuItem.index">
      {{ menuItem.title }}
    </el-menu-item>
    <el-submenu index="/api">
      <template slot="title">API DEMO</template>
      <el-menu-item index="/clans">clans</el-menu-item>
      <el-menu-item index="2-3">players</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      router: true,
      menuItems: [
        {
          title: 'COC',
          index: '/',
        }
      ]
    }
  },
  computed: {
    activeIndex () {
      return this.$route.path
    }
  }
}
</script>

<style>

</style>
