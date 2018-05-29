<template>
  <div>
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col :span="12" class="player-basic-info">
          <el-tag>{{ playerInfo.expLevel }}</el-tag>
          <el-tag type="dark">{{ playerInfo.name }}</el-tag>
          <!-- <el-tag type="info"> -->
            {{ playerInfo.tag }}
          <!-- </el-tag> -->
          <hr>
            <el-row>
              <nuxt-link :to="'/clans/' + playerInfo.clan.tag.replace('#', '')">
                <el-col :xs="{span:12}" :md="{span:6}" class="text-center">
                  <img :src="playerInfo.clan.badgeUrls.small">
                </el-col>
                <el-col :xs="{span:12}" :md="{span:6}">
                  <el-tag type="success">{{ playerInfo.clan.name }}</el-tag>
                  <br>
                  <el-tag type="success">{{ $t('player.role.' + playerInfo.role) }}</el-tag>
                </el-col>
              </nuxt-link>
              <el-col span="12">
                <el-tooltip effect="dark" :content="playerInfo.achievements[14].info" placement="top">
                  <div>
                    {{ $t('player.achievements.friendInNeed') }}
                    :
                    {{ playerInfo.achievements[14].value }}
                  </div>
                </el-tooltip>
                <br>
                <el-tooltip effect="dark" :content="playerInfo.achievements[23].info" placement="bottom">
                  <div>
                    {{ $t('player.achievements.sharingIsCaring') }}
                    :
                    {{ playerInfo.achievements[23].value }}
                  </div>
                </el-tooltip>
              </el-col>
            </el-row>
        </el-col>

        <el-col :span="12">
          <el-row class="text-center">
            <el-col :span="12">
              <template v-if="playerInfo.league">
                <img :src="playerInfo.league.iconUrls.small">
              </template>
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
            <el-col :xs="{span:24}" :md="{span:12}">
              <div style="margin: 10px;">
              {{ $t('player.warStars') }}
              ：
              {{ playerInfo.warStars }}
              </div>
            </el-col>
            <el-col :xs="{span:24}" :md="{span:12}">
              <div style="margin: 10px;">
              {{ $t('player.bestTrophies') }}
              ：
              {{ playerInfo.bestTrophies }}
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <hr>
      <el-row>
        <el-col v-for="item in recentInfo" :key="item.name" :xs="{span:24}" :sm="{span:12}" :md="{span:6}">
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
      <el-row>
        <el-col :md="{span:14}" :xs="{span:24}">
          <troops-info :troops="playerInfo.troops"></troops-info>
        </el-col>
        <el-col :md="{span:6}" :xs="{span:24}">
          <spells-info :spells="playerInfo.spells"></spells-info>
        </el-col>
        <el-col :md="{span:4}" :xs="{span:24}">
          <heroes-info :heroes="playerInfo.heroes"></heroes-info>
        </el-col>
      </el-row>
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
import TroopsInfo from '~/components/player/TroopsInfo'
import SpellsInfo from '~/components/player/SpellsInfo'
import HeroesInfo from '~/components/player/HeroesInfo'

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
    TroopsInfo,
    SpellsInfo,
    HeroesInfo
  }
}
</script>

<style lang="scss" scoped>
.player-basic-info .el-tag {
  margin: 5px;
}
.right-info {
  float: right;
  padding-right: 10px; 
}

.achievements-item {
  margin-bottom: 10px;
}
</style>
