<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" :router='router'>
      <!-- <hamburger class="hamburger-container" :isActive="navbar.open" :toggleClick="toggleNavBar"></hamburger> -->
      
      <el-menu-item index="/">
        <img width="25px" src="~assets/img/favicon.png">
      </el-menu-item>

      <template v-for="(menuItem, key) in menuItems">

        <template v-if="!menuItem.children">
          <el-menu-item :key="key" :index="menuItem.path">
            {{ $t('links.' + menuItem.name) }}
          </el-menu-item>
        </template>

        <template v-else>
          <el-submenu :key="key" :index="menuItem.path">
            <template slot="title">{{ $t('links.' + menuItem.name + '.index') }}</template>
            <el-menu-item v-for="(child, key) in menuItem.children" :key="key" :index="menuItem.path + child.path">
              {{ $t('links.' + menuItem.name + '.' + child.name) }}
            </el-menu-item>
          </el-submenu>
        </template>

      </template>

      <div class="right-menu">
        <lang-select class="right-menu-item"></lang-select>
      </div>
    </el-menu>
  </div>
</template>

<script>
// import Hamburger from '@/components/navbar/Hamburger'
import LangSelect from '~/components/common/LangSelect'

export default {
  name: 'Navbar',
  components: {
    // Hamburger,
    LangSelect
  },
  data () {
    return {
      navbar: {
        open: false
      },
      router: true,
      menuItems: [
        // {
        //   name: 'COC',
        //   path: '/',
        // },
        {
          name: 'clan',
          path: '/clans',
          children: [
            {
              name: 'search',
              path: '/'
            },
            {
              name: 'qikai',
              path: '/28VPJVGC'
            },
            {
              name: 'jizhi',
              path: '/LLP0GYCU'
            },
            {
              name: 'we',
              path: '/we'
            }
          ]
        },
        {
          name: 'player',
          path: '/players'
        },
        {
          name: 'rank',
          path: '/rank',
          children: [
            {
              name: 'search',
              path: '/'
            },
            {
              name: 'we',
              path: '/we'
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
  methods: {
    toggleNavBar () {
      this.navbar.open = !this.navbar.open
    },
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
