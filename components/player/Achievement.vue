<template>
  <el-card shadow="hover">
    <el-row :gutter="10">
      <el-col :span="3">
        <el-rate
          :max="3"
          v-model="achievement.stars"
          disabled
          text-color="#ff9900"
          >
        </el-rate>
      </el-col>
      <el-col :span="21">
        {{ achievement.name }}
        |
        {{ achievement.info }}
        <!-- <span class="right-info">{{ achievement.value }}</span> -->
        <span class="right-info">{{ achievement.completionInfo }}</span>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  props: ['achievement']
}
</script>

<style>

</style>
