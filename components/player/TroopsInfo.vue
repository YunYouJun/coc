<template>
  <div>
    <template v-for="troop in troops">
      <div class="troop-item" v-if="troop.village==='home'" :key="troop.name">
        <img class="troop-icon" :src="'/img/TroopIcons/icon_' + troop.name.replace(' ', '').replace(/\./g, '').toLowerCase() + '.png'">
        <div :class="{ 'troop-level': true, 'max-level': troop.level===troop.maxLevel }">
          {{ troop.level }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TroopsInfo',
  props: ['troops'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
