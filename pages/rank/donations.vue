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
      clanTags: [
        '#28VPJVGC',  // 琦开得胜
        // '#LLP0GYCU',  // 机智一族
        // '#CVP9VJUL',  // 开荒
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
            message: self.$t('reason.' + e.response.data.reason),
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
        res.data.friendInNeed = res.data.achievements[14].value //  friend in need
        return res.data
      })
      .catch(function(e){
        return e.response.data
      })
    },
    async getClanMembersInfo (clanTag) {
      let self = this
      let memberList = await this.getClanMemberListByTag(clanTag)
      for (let i = 0; i < memberList.items.length; i++) {
        this.getPlayerInfoByTag(memberList.items[i].tag)
          .then(function(res){
            let memberInfo = res
            self.clanMembersInfo = self.clanMembersInfo.concat(memberInfo)
          })
      }
    },
    async getAllClanMembersInfo () {
      for (let i = 0; i < this.clanTags.length; i++) {
        this.getClanMembersInfo(this.clanTags[i])       
      }
    }
  }
}
</script>

<style>

</style>
