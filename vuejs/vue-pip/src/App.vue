<script lang="ts">
export default {
  props: {
    msg: String
  },

  data() {
    return {
      message: 'hello long',
      counter: {
        count: 0
      },
      longId: '10',
      longCls: 'hey ok',
      inputText: '',
      isOpen: true,
      listTodos: [{ desc: '4h129h129er' }, { desc: 'dsadaddsaas' }, { desc: 'h19eh129e' }],
      todoDesc: ''
    }
  },

  mounted() {
    const box = this.$refs.box as any
    if (box) {
      box.setAttribute(
        'style',
        `
      width: 300px;
      height: 300px;
      background-color: blue;
      `
      )
    }
  },

  watch: {
    listTodos(newList) {
      console.log(newList)
    }
  },

  computed: {
    filterTodos() {
      return this.listTodos.filter((todo, index) => index > 3)
    }
  },

  methods: {
    incr(evt: any) {
      console.log(evt)
      this.counter.count++
    },

    toggle() {
      this.isOpen = !this.isOpen
    },

    onChange(evt: any) {
      this.inputText = evt.target.value
    },

    addTodo() {
      if (this.todoDesc) {
        this.listTodos = [...this.listTodos, { desc: this.todoDesc }]
        this.todoDesc = ''
      }
    },

    removeTodo(index: number) {
      const that = this
      that.listTodos = that.listTodos.filter((todo, _index) => _index !== index)
    }
  }
}
</script>

<template>
  <h1>Hello world</h1>
  <p>{{ message }}</p>
  <hr />

  <div :id="longId" :class="longCls">Counter {{ counter.count }}</div>
  <button @click="incr">Increment</button>

  <hr />

  <p>{{ inputText }}</p>
  <input type="text" v-model="inputText" />

  <hr />
  <p v-if="isOpen">This is open</p>
  <p v-else>This is not open</p>
  <button @click="toggle">Toggle</button>
  <hr />
  <input v-model="todoDesc" />
  <button @click="addTodo">add</button>
  <p>Total {{ listTodos.length }}</p>
  <div v-for="(todo, index) in filterTodos" :key="index" class="hoho">
    <div>
      {{ `${index} - ${todo.desc}` }}
      <button @click="removeTodo(index)">X</button>
    </div>
  </div>
  <hr />
  <div ref="box">hi</div>
  <hr />
</template>

<style>
.hey {
  width: 200px;
  height: 40px;
  display: grid;
  place-items: center;
  color: crimson;
}

.ok {
  background-color: cyan;
}

.hoho {
  color: darkgreen;
}
</style>
