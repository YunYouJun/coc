<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router='router'>
    <el-menu-item index="/">
      <img width="25px" src="~/assets/img/favicon.png">
    </el-menu-item>

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

    <div class="right-menu">
      <lang-select class="right-menu-item"></lang-select>
    </div>
  </el-menu>
</template>

<script>
import LangSelect from '~/components/common/LangSelect'

export default {
  name: 'MainHeader',
  components: {
    LangSelect
  },
  data () {
    return {
      router: true,
      menuItems: [
        // {
        //   name: 'COC',
        //   path: '/',
        // },
        {
          name: '部落',
          path: '/clans',
          children: [
            {
              name: '搜索',
              path: '/'
            },
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
          name: '排行榜',
          path: '/rank',
          children: [
            {
              name: '历史捐兵',
              path: '/donations'
            }
          ]
        },
        // {
        //   name: 'DEMO',
        //   path: '/demo',
        //   children: [
        //     {
        //       name: 'clans',
        //       path: '/clans'
        //     },
        //     {
        //       name: 'players',
        //       path: '/players'
        //     },
        //   ]
        // }
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

<style lang="scss" scoped>
.right-menu {
  float: right;
  height: 100%;
  line-height: 60px;
  &:focus{
    outline: none;
  }
  .right-menu-item {
    display: inline-block;
    margin: 0 8px;
  }
}
</style>
