<template>
  <div>
    <template v-for="spell in spells">
      <div class="spell-item" :key="spell.name">
        <img class="spell-icon" :src="'/img/SpellIcons/' + spell.name.replace(' Spell', '') + '_icon.png'">
        <div :class="{ 'spell-level': true, 'max-level': spell.level===spell.maxLevel }">
          {{ spell.level }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SpellsInfo',
  props: ['spells'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
