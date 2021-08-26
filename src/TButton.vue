<template>
  <button class="t-button">
    <slot />
  </button>
</template>

<style lang="less">
@import url('./basic.less');

.t-button {
  outline: none;
  padding: 2px 15px;
  transition: border ease 0.4s, background-color ease 0.4s;

  background-color: @color-bg;

  border: 1px solid @color-border;

  &:hover {
    border: 1px solid lighten(@color-blue, 5%);
    background-color: lighten(@color-blue, 30%);
  }

  &:active {
    border: 1px solid @color-blue;
    background-color: lighten(@color-blue, 25%);
  }

  &:focus {
    border: 1px solid @color-blue;
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid @color-border;
  }
}
</style>
