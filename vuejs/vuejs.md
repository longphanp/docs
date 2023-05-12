# Installation

```bash
    npm init vue@latest
```

# Vue declarative rendering

```html
<script lang="ts">
  export default {
    // Props
    props: {
        index: number
    }

    // Events listeners
    // Use this.$emits('event', value)
    emits: {
        event() {

        }
    },


    // Mount data
    data() {
      return {
        count: 0;
      };
    },

    // After render
    mounted() {
      this.$refs.[name]
    },

    // Computed data
    computed: {
        newCount() {
            return this.count + 2
        }
    },

    // Event handlers
    methods: {
      incr() {

      }
    },

    // Mount condition
    watch: {
      count(newCount) {
      }
    }
  };
</script>
```

# Vue bindings

## Attributes

```html
<div v-bind:[name]="" :[name]=""></div>
```

## Class and styles

[https://vuejs.org/guide/essentials/class-and-style.html](https://vuejs.org/guide/essentials/class-and-style.html)

```html
<div :class="[{active: isActive && !hasError}, error]"></div>

<div :style="{display: ["-webkit-box","flex"]}"></div>
```

## Event listeners

[https://vuejs.org/guide/essentials/event-handling.html](https://vuejs.org/guide/essentials/event-handling.html)

```html
<div v-on:[event]="" @[event]=""></div>
```

## Two ways binding

[https://vuejs.org/guide/essentials/forms.html](https://vuejs.org/guide/essentials/forms.html)

```html
<input v-model="text"></input>
```

## Condition

[https://vuejs.org/guide/essentials/conditional.html](https://vuejs.org/guide/essentials/conditional.html)

```html
<div v-if="isOpen">Opened</div>
<div v-else>Not open</div>
```

## Loop

[https://vuejs.org/guide/essentials/list.html](https://vuejs.org/guide/essentials/list.html)

```html
<div v-for="(item,index) in list" :key="index">{{item}}</div>
```

## Refs

```html
<div ref="[name]"></div>
```

#Lifecycle
[https://vuejs.org/guide/essentials/lifecycle.html](https://vuejs.org/guide/essentials/lifecycle.html)

# Compontent

## Props

[https://vuejs.org/guide/components/props.html](https://vuejs.org/guide/components/props.html)

## Events

[https://vuejs.org/guide/components/events.html](https://vuejs.org/guide/components/events.html)
