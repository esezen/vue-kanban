<template>
    <div class="board container">
        <div class="columns">
            <div class="column">
                <task-lane id="todo" title="To-Do" :items="todoItems"></task-lane>
            </div>
            <div class="column">
                <task-lane id="inProgress" title="In progress" :items="inProgressItems"></task-lane>
            </div>
            <div class="column">
                <task-lane id="done" title="Done" :items="doneItems"></task-lane>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import TaskLane from '@/components/TaskLane'
export default {
  name: 'Board',
  components: {
    'task-lane': TaskLane
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    doneItems: s => s.items.done
  })
}
</script>
<style lang="scss" scoped>
</style>
