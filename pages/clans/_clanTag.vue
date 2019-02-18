<template>
  <div>
    <template v-if="clanInfo">
      <clan-info :clanInfo="clanInfo"></clan-info>
    </template>
    <template v-else>
      <div class="text-center">
        <h1>好像没有该部落哦~</h1>
      </div>
    </template>
  </div>
</template>

<script>
import ClanInfo from '~/components/clan/ClanInfo'

export default {
  asyncData ({ params, $axios }) {
    return $axios.get(`clans/%23${params.clanTag}`)
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
      clanInfo: ''
    }
  },
  components: {
    ClanInfo
  },
  methods: {
    
  },
}
</script>

<style>

</style>