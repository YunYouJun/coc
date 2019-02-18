<template>
  <div>
    <el-card shadow="hover">
      <el-row :gutter="20">
        <el-col class="text-center vertical-center" :md="{ span:4 }">
          <img class="" :src="clanInfo.badgeUrls.small">
          <hr>
          <el-tag>
            {{ clanInfo.name }}
          </el-tag>
          <br>
          <br>
          <el-tag type="info">
            {{ clanInfo.tag }}
          </el-tag>
          <br><br>
          <el-tag type="success">
            {{ clanInfo.members }} / 50
          </el-tag>
        </el-col>
        <el-col :md="{ span:12 }">
          <el-collapse accordion>
            <el-collapse-item name="trophies">
              <template slot="title">
                <span> {{ clanInfo.clanPoints }} <i class="fas fa-trophy"></i> </span>
                <span class="right-info">{{ clanInfo.clanVersusPoints }} <i class="fas fa-trophy"></i> </span>
                <span> {{ clanInfo.requiredTrophies }} <i class="fas fa-trophy"></i> </span>
              </template>
            </el-collapse-item>
            <el-collapse-item v-for="infoItem in infoItems" :key="infoItem.name" :name="infoItem.name">
              <template slot="title">
                <span> {{ $t('clan.' + infoItem.name) }} </span>
                <span class="right-info">{{ clanInfo[infoItem.name] }}</span>
              </template>
            </el-collapse-item>
            <el-collapse-item v-for="enInfoItem in enInfoItems" :key="enInfoItem.name" :name="enInfoItem.name">
              <template slot="title">
                <span> {{ $t('clan.' + enInfoItem.name) }} </span>
                <span class="right-info">{{ $t(enInfoItem.name + '.' + clanInfo[enInfoItem.name]) }}</span>
              </template>
            </el-collapse-item>
            <el-collapse-item vname="location">
              <template slot="title">
                <span> {{ $t('clan.location.name') }} </span>
                <span class="right-info">{{ $t('location.' + clanInfo.location.name) }}</span>
              </template>
            </el-collapse-item>
          </el-collapse>
        </el-col>
        <el-col :md="{ span:8 }" style="padding-top: 10px;">
          {{ clanInfo.description }}
        </el-col>
      </el-row>
    </el-card>
    <hr>
    <clan-member :memberList="clanInfo.memberList"></clan-member>
  </div>
</template>

<script>
import ClanMember from '~/components/clan/ClanMember'

export default {
  props: ['clanInfo'],
  head () {
    return {
      title: this.$t('clan.info') + ' | ' + this.clanInfo.name,
      meta: [
        { hid: 'description', name: 'description', content: this.clanInfo.name }
      ]
    }
  },
  data () {
    return {
      infoItems: [
        {
          name: 'warWins'
        },
        {
          name: 'warWinStreak'
        },
        // {
        //   name: 'members'
        // },
      ],
      enInfoItems: [
        {
          name: 'type'
        },
        {
          name: 'warFrequency'
        },
      ]
    }
  },
  components: {
    ClanMember
  },
}
</script>

<style lang="scss" scoped>
.right-info {
  float: right;
  padding-right: 10px; 
}
</style>
