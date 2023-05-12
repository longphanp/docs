<script lang="ts">
export default {
  props: ['title'],
  emits: ['onClick']
}
</script>

<template>
  <div :class="$attrs.class" ref="childdiv">{{ title }}</div>
  <button @click="$emit('onClick')">click me</button>
  <slot />
</template>
