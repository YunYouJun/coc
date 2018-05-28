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
.spell-item {
  position: relative;
  display: inline-block;
  .spell-icon {
    width: 35px;
    margin: 2px;
    padding: 0px;
    // border: 1px solid #000;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
    }
  }

  .spell-level {
    position: absolute;
    bottom: 5px;
    left: 2px;
    width: 15px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    box-shadow: 0px 0px 2px rgba(255, 255, 255, 0.8), 0px 0px 2px rgba(0, 0, 0, 1) inset;

    color: #fff;
    font-size: 5px;
    line-height: 15px;
    text-align: center;
    text-shadow: 0px 2px 1px #000;

    &.max-level {
      background-color: rgb(255, 200, 0);
    }
  }
}
</style>
