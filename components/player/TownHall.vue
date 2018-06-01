<template>
  <div>
    <img class="townhall-icon" :src="'/img/Halls/th' + townHallLevel + '.png'">
  </div>
</template>

<script>
export default {
  props: ['townHallLevel']
}
</script>

<style lang="scss" scoped>

</style>
