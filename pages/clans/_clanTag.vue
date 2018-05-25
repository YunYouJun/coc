<template>
  <div>
    <template v-if="clanInfo">
      <clan-member :memberList="clanInfo.memberList"></clan-member>
    </template>
  </div>
</template>

<script>
import ClanMember from '~/components/clan/ClanMember'

export default {
  asyncData ({ params, $axios }) {
    return $axios.get(`api/clans/%23${params.clanTag}`)
    .then((res) => {
      return {
        clanInfo: res.data,
      }
    })
    .catch((e) => {
      return {
        reason: e.response.data.reason
      }
    })
  },
  data () {
    return {
      
    }
  },
  components: {
    ClanMember
  },
  mounted () {

  },
  methods: {
    
  }
}
</script>

<style>

</style>