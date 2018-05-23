<template>
  <div>
    <el-container>
      <el-header>
        <MainHeader></MainHeader>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer>
        <MainFooter></MainFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MainHeader from './MainHeader'
import MainFooter from './MainFooter'
export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>


<style>

</style>
