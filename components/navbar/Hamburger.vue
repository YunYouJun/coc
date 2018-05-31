<template>
  <div>
    <button :class="['hamburger', 'hamburger--collapse', {'is-active':isActive}]" type="button" @click="toggleClick">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
$hamburger-padding-x                       : 15px !default;
$hamburger-padding-y                       : 15px !default;
$hamburger-layer-width                     : 40px !default;
$hamburger-layer-height                    : 4px !default;
$hamburger-layer-spacing                   : 6px !default;
$hamburger-layer-color                     : #000 !default;
$hamburger-layer-border-radius             : 4px !default;
$hamburger-hover-opacity                   : 0.7 !default;
$hamburger-hover-transition-duration       : 0.15s !default;
$hamburger-hover-transition-timing-function: linear !default;

$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter    : opacity(50%) !default;

button {
  outline:none;
  &:focus {outline:none;}
}

.hamburger {
  padding: $hamburger-padding-y $hamburger-padding-x;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: $hamburger-hover-transition-duration;
  transition-timing-function: $hamburger-hover-transition-timing-function;

  // Normalize (<button>)
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    @if $hamburger-hover-use-filter == true {
      filter: $hamburger-hover-filter;
    }
    @else {
      opacity: $hamburger-hover-opacity;
    }
  }
}

.hamburger-box {
  width: $hamburger-layer-width;
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: $hamburger-layer-height / -2;

  &,
  &::before,
  &::after {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height;
    background-color: $hamburger-layer-color;
    border-radius: $hamburger-layer-border-radius;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }

  &::after {
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
  }
}

.hamburger--collapse {
  .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::after {
      top: ($hamburger-layer-spacing * 2 + $hamburger-layer-height * 2) * -1;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  opacity 0.1s linear;
    }

    &::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                  transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.is-active {
    .hamburger-inner {
      transform: translate3d(0, ($hamburger-layer-spacing + $hamburger-layer-height) * -1, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                    opacity 0.1s 0.22s linear;
      }

      &::before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                    transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
}
</style>
