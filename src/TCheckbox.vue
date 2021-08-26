<script setup lang="ts">
defineProps<{
  disabled?: boolean
  checked?: boolean
  modelValue?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

function updateValue(e: Event) {
  const t = e.target as HTMLInputElement
  emit('update:modelValue', t.checked)
}
</script>

<template>
  <label class="t-checkbox" :disabled="disabled">
    <input
      type="checkbox"
      class="t-checkbox--input"
      :disabled="disabled"
      :checked="checked"
      @change="updateValue"
    />
    <span class="t-checkbox--icon"> </span>
    <span class="t-checkbox--content">
      <slot />
    </span>
  </label>
</template>

<style lang="less">
.t-checkbox {
  &[disabled='true'] {
    cursor: not-allowed;
  }

  &--input {
    display: none;

    &:checked {
      + .t-checkbox--icon {
        &::before {
          border-color: var(--c-primary);
        }

        &::after {
          border-color: transparent var(--c-primary) var(--c-primary)
            transparent;
        }
      }
    }

    &:disabled {
      + .t-checkbox--icon {
        &::before {
          background: var(--c-gray-1);
          border-color: var(--c-gray);
        }
      }
    }

    &:disabled:checked {
      + .t-checkbox--icon {
        &::before {
          background: var(--c-gray-1);
          border-color: var(--c-gray);
        }

        &::after {
          border-color: transparent var(--c-gray) var(--c-gray) transparent;
        }
      }
    }
  }

  &--icon {
    @size: 12px;

    display: inline-block;
    width: @size;
    height: @size;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: @size;
      height: @size;
      border: 1px solid var(--c-gray);
      background: var(--c-bg);
      transform: translateY(-50%);
      transition: border ease 0.4s;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 2px;
      height: 5px;
      border: 2px solid var(--c-gray);
      border-color: transparent;
      transform: translate(4px, calc(-50% - 1px)) rotate(45deg);
    }
  }

  &:hover {
    .t-checkbox--icon::before {
      border-color: var(--c-primary);
    }
  }

  &[disabled='true']:hover {
    .t-checkbox--icon::before {
      border-color: var(--c-gray);
    }
  }
}
</style>
