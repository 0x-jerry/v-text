<template>
  <button class="t-button">
    <slot />
  </button>
</template>

<style lang="less">
.t-button {
  outline: none;
  padding: 2px 15px;
  transition: border ease 0.4s, background-color ease 0.4s;

  border: 1px solid var(--c-gray);
  background: var(--c-white);

  &:focus {
    border-color: var(--c-primary-2);
    outline: none;
  }

  &:hover {
    border-color: var(--c-primary);
    background-color: var(--c-primary-1);
  }

  &:active {
    border-color: var(--c-primary);
    background-color: var(--c-primary-2);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: var(--c-gray);
    background: var(--c-bg);
  }
}
</style>
