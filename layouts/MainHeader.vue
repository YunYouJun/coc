<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router='router'>
    <el-menu-item v-for="(menuItem, key) in menuItems" :key="key" :index="menuItem.index">
      {{ menuItem.title }}
    </el-menu-item>
    <el-submenu index="/api">
      <template slot="title">API DEMO</template>
      <el-menu-item v-for="(apiItem, key) in apiItems" :key="key" :index="'/api' + apiItem.index">
        {{ apiItem.title }}
      </el-menu-item>
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
      ],
      apiItems: [
        {
          title: '部落',
          name: 'clans',
          index: '/clans',
        },
        {
          title: '玩家',
          name: 'players',
          index: '/players',
        },
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
