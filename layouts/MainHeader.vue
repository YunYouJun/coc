<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router='router'>
    <template v-for="(menuItem, key) in menuItems">

      <template v-if="!menuItem.children">
        <el-menu-item :key="key" :index="menuItem.path">
          {{ menuItem.name }}
        </el-menu-item>
      </template>

      <template v-else>
        <el-submenu :key="key" :index="menuItem.path">
          <template slot="title">{{ menuItem.name }}</template>
          <el-menu-item v-for="(child, key) in menuItem.children" :key="key" :index="menuItem.path + child.path">
            {{ child.name }}
          </el-menu-item>
        </el-submenu>
      </template>

    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'MainHeader',
  components: {

  },
  data () {
    return {
      router: true,
      menuItems: [
        {
          name: 'COC',
          path: '/',
        },
        {
          name: '部落',
          path: '/clans',
          children: [
            {
              name: '琦开得胜',
              path: '/28VPJVGC'
            },
            {
              name: '机智一族',
              path: '/LLP0GYCU'
            },
            {
              name: '琦开得胜&机智一族',
              path: '/we'
            }
          ]
        },
        {
          name: '玩家',
          path: '/players'
        },
        {
          name: 'DEMO',
          path: 'demo',
          children: [
            {
              name: '部落',
              path: '/clans'
            },
            {
              name: '玩家',
              path: '/players'
            },
          ]
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
