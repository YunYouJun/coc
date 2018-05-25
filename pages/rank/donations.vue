<template>
  <div>
    <h3 class="text-center">历史捐兵排行榜</h3>
    <friend-in-need :clanMembersInfo="clanMembersInfo"></friend-in-need>
  </div>
</template>

<script>
import utils from '~/plugins/utils'
import FriendInNeed from '~/components/rank/FriendInNeed'

export default {
  data () {
    return {
      // clanTag: '#28VPJVGC',
      // clanTag: '#CVP9VJUL',
      clans: [
        '#28VPJVGC',  // 琦开得胜
        '#LLP0GYCU',  // 机智一族
      ],
      clanInfo: '',
      clanMembersInfo: []
    }
  },
  components: {
    FriendInNeed
  },
  mounted () {
    this.getAllClanMembersInfo()
  },
  methods: {
    getClanMemberListByTag (clanTag) {
      let self = this
      return this.$axios.get('api/clans/' + utils.tagify(clanTag) + '/members')
      .then(function(res){
        return res.data
      })
      .catch(function(e){
        if (e.response.data) {
          self.$message({
            showClose: true,
            message: e.response.data.reason,
            type: 'error'
          })
        }
        return e.response.data
      })
    },
    getPlayerInfoByTag (playerTag) {
      let self = this
      return this.$axios.get('api/players/' + utils.tagify(playerTag))
      .then(function(res){
        return res.data
      })
      .catch(function(e){
        return e.response.data
      })
    },
    async getClanMembersInfo (clanTag) {
      let memberList = await this.getClanMemberListByTag(clanTag)
      for (let i = 0; i < memberList.items.length; i++) {
        let memberInfo = await this.getPlayerInfoByTag(memberList.items[i].tag)
        this.clanMembersInfo = this.clanMembersInfo.concat(memberInfo)
      }
    },
    async getAllClanMembersInfo () {
      for (let i = 0; i < this.clans.length; i++) {
        this.getClanMembersInfo(this.clans[i])       
      }
    }
  }
}
</script>

<style>

</style>
