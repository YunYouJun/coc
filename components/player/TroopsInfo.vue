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
.troop-item {
  position: relative;
  display: inline-block;
  .troop-icon {
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

  .troop-level {
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
      background-color: rgb(255, 217, 0);
    }
  }
}
</style>
