<template>
  <div>
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-tag>{{ playerInfo.expLevel }}</el-tag>
          <el-tag type="dark">{{ playerInfo.name }}</el-tag>
          <el-tag type="info">{{ playerInfo.tag }}</el-tag>
          <hr>
          <nuxt-link :to="'/clans/' + playerInfo.clan.tag.replace('#', '')">
            <el-row>
              <el-col :span="6" class="text-center">
                <img :src="playerInfo.clan.badgeUrls.small">
              </el-col>
              <el-col :span="6">
                <el-tag type="success">{{ playerInfo.clan.name }}</el-tag>
                <br>
                <br>
                <el-tag type="success">{{ playerInfo.role }}</el-tag>
              </el-col>
            </el-row>
          </nuxt-link>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="12" class="text-center">
              <img :src="playerInfo.league.iconUrls.small">
            </el-col>
            <el-col :span="12">
              <h2>
                <i class="fas fa-trophy"></i>
                {{ playerInfo.trophies }}
              </h2>
            </el-col>
          </el-row>
          <hr>
          <el-row :gutter="20">
            <el-col :span="12">
              {{ $t('player.warStars') }}
              ：
              {{ playerInfo.warStars }}
            </el-col>
            <el-col :span="12">
              {{ $t('player.bestTrophies') }}
              ：
              {{ playerInfo.bestTrophies }}
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col v-for="item in recentInfo" :key="item.name" :xs="{span:12}" :sm="{span:12}" :md="{span:6}">
          <el-card :body-style="{padding: '10px'}" shadow="hover" style="margin: 10px;">
            {{ $t('player.' + item.name) }} : 
            <span class="right-info">
              <el-tag size="mini" type="dark">{{ playerInfo[item.name] }}</el-tag>
            </span>
          </el-card>
        </el-col>
      </el-row>
    </el-card>

    <br>
    <el-card shadow="hover">
      科技图
    </el-card>

    <h4>家乡成就</h4>
    <el-card class="achievements-item" v-for="item in playerInfo.achievements" v-if="item.village==='home'" :key="item.name" shadow="hover">
      <el-row :gutter="10">
        <el-col :span="3">
          <el-rate
            :max="3"
            v-model="item.stars"
            disabled
            text-color="#ff9900"
            >
          </el-rate>
        </el-col>
        <el-col :span="21">
          {{ item.name }}
          |
          {{ item.info }}
          <!-- <span class="right-info">{{ item.value }}</span> -->
          <span class="right-info">{{ item.completionInfo }}</span>
        </el-col>
      </el-row>
    </el-card>

    <h4>建筑大师基地成就</h4>
    <el-card class="achievements-item" v-for="item in playerInfo.achievements" v-if="item.village==='builderBase'" :key="item.name" shadow="hover">
      <el-row :gutter="10">
        <el-col :span="3">
          <el-rate
            :max="3"
            v-model="item.stars"
            disabled
            text-color="#ff9900"
            >
          </el-rate>
        </el-col>
        <el-col :span="21">
          {{ item.name }}
          |
          {{ item.info }}
          <!-- <span class="right-info">{{ item.value }}</span> -->
          <span class="right-info">{{ item.completionInfo }}</span>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import DisplayData from '~/components/demo/DisplayData'

export default {
  props: ['playerInfo'],
  head () {
    return {
      title: this.$t('player.info') + ' | ' + this.playerInfo.name,
      meta: [
        { hid: 'description', name: 'description', content: this.playerInfo.name }
      ]
    }
  },
  data () {
    return {
      recentInfo: [
        {
          name: 'donations',
        },
        {
          name: 'donationsReceived',
        },
        {
          name: 'attackWins',
        },
        {
          name: 'defenseWins',
        }
      ]
    }
  },
  components: {
    DisplayData
  }
}
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.right-info {
  float: right;
  padding-right: 10px; 
}

.achievements-item {
  margin-bottom: 10px;
}
</style>
