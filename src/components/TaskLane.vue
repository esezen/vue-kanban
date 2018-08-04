<template>
  <div class="lane">

    <p class="title">
      {{title}}
    </p>
    <div class="content">
      <draggable v-model="draggables" :options="{ group: 'default' }">
        <div v-for="item in items" :key="item.id">
          <item :item="item"></item>
        </div>
      </draggable>
    </div>
    <p>{{itemCount}}</p>

  </div>
</template>

<script>
import TaskLaneItem from './TaskLaneItem'
import Draggable from 'vuedraggable'

export default {
  name: 'TaskLane',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskLaneItem,
    draggable: Draggable
  },
  computed: {
    itemCount() {
      if (!this.items) return ''
      if (this.items.length === 1) return '1 task'
      return `${this.items.length} tasks`
    },
    draggables: {
      get() {
        return this.items
      },
      set(items) {
        this.$store.commit('updateItems', {
          items,
          id: this.id
        })
      }
    }
  }
}
</script>

<style>
.lane {
  border-radius: 4px;
  -webkit-box-shadow: 3px 3px 22px 0px rgba(143, 143, 143, 1);
  -moz-box-shadow: 3px 3px 22px 0px rgba(143, 143, 143, 1);
  box-shadow: 3px 3px 22px 0px rgba(143, 143, 143, 1);
  padding: 10px 30px;
}
.content > * {
  min-height: 30px;
}
</style>