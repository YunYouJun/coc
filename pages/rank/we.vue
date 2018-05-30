<template>
  <div>
    <h3 class="text-center">详细信息排行榜</h3>
    <more-info :clanTags="clanTags"></more-info>
  </div>
</template>

<script>
import MoreInfo from '~/components/rank/MoreInfo'

export default {
  data () {
    return {
      clanTags: [
        '#28VPJVGC',  // 琦开得胜
        '#LLP0GYCU',  // 机智一族
        '#CVP9VJUL',  // 开荒
      ],
    }
  },
  components: {
    MoreInfo
  },
}
</script>

<style>

</style>
