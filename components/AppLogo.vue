<template>
  <div class="VueToNuxtLogo">
    <img src="../assets/gear.png">
    <!-- <img src="../assets/img/Clash_Barbarian.png" width="300"> -->
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
