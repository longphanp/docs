<script lang="ts">
import { nextTick } from 'vue'
import ChildComponent from './components/ChildComponent.vue'

export default {
  data() {
    return {
      msg: 'Second app',
      rawhtml: `<div style="color:red;">Heeloo</div>`,
      callFunction: () => {
        console.log('call function')
      },
      console: console,
      className: 'class',
      style: 'hoho',
      count: 0,
      isActive: true,
      hasError: true,
      input: 'long'
    }
  },

  components: {
    ChildComponent
  },

  mounted() {
    if (this.$refs.child) (this.$refs.child as any).$refs.childdiv.style.color = 'green'
  },

  methods: {
    changeState() {
      this.count++
      console.log('Before update', document.querySelector('span')?.textContent)
      nextTick(() => {
        console.log('After update', document.querySelector('span')?.textContent)
      })
    },

    onInput(evt: any) {
      this.input = evt.target.value
    }
  }
}
</script>

<template>
  <div>This {{ msg }}</div>
  <div v-html="rawhtml"></div>
  <div :[className]="style">Dynamic attribute</div>
  <span>{{ count }}</span>
  <button @click="changeState">Click this</button>
  <div :class="{ active: isActive, error: hasError }"></div>
  <input :value="input" @input="onInput" />
  <ChildComponent @onClick="callFunction" title="Cdsdas" ref="child" class="hi">
    Slot content
  </ChildComponent>
</template>

<style>
.hoho {
  color: blue;
}

.active {
  width: 200px;
  height: 200px;
  background-color: darksalmon;
}

.hi {
  color: orange;
}
</style>
