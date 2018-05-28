<template>
  <div>
    <template v-for="hero in heroes">
      <div class="hero-item" :key="hero.name">
        <img class="hero-icon" :src="'/img/TroopIcons/icon_' + hero.name.replace(' ', '').toLowerCase() + '.png'">
        <div :class="{ 'hero-level': true, 'max-level': hero.level===hero.maxLevel }">
          {{ hero.level }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'HeroesInfo',
  props: ['heroes'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
