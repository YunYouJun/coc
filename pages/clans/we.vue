<template>
  <div>
    <el-card>
      <clan-member :memberList="ourMemberList"></clan-member>
    </el-card>
  </div>
</template>

<script>
import utils from '~/plugins/utils'
import ClanMember from '~/components/clan/ClanMember'

export default {
  data () {
    return {
      clans: [
        '#28VPJVGC',  // 琦开得胜
        '#LLP0GYCU',  // 机智一族
      ],
      ourMemberList: []
    }
  },
  components: {
    ClanMember
  },
  mounted () {
    this.getAllMemberList()
  },
  methods: {
    getClanInfoByTag (clanTag) {
      return this.$axios.get('api/clans/' + utils.tagify(clanTag))
      .then(function(res){
        return res.data
      })
      .catch(function(e){
        if (e.response.data) {
          return e.response.data.reason
        }
      })
    },
    async getAllMemberList () {
      let ourMemberList = []
      for (let i = 0; i < this.clans.length; i++) {
        let clanInfo = await this.getClanInfoByTag(this.clans[i])
        this.ourMemberList = this.ourMemberList.concat(clanInfo.memberList)
      }
    }
  }
}
</script>

<style>

</style>
