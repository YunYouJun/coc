<template>
  <div>
    <template v-if="playerInfo">
      <player-info :playerInfo="playerInfo"></player-info>
    </template>
    <template v-else>
      <div class="text-center">
        <h1>好像没有该玩家哦~</h1>
      </div>
    </template>
  </div>
</template>

<script>
import PlayerInfo from '~/components/player/PlayerInfo'

export default {
  asyncData ({ params, $axios }) {
    return $axios.get(`api/players/%23${params.playerTag}`)
    .then((res) => {
      return {
        playerInfo: res.data,
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
    PlayerInfo
  },
  methods: {
    
  },
}
</script>

<style>

</style>