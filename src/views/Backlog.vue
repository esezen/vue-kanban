<template>
  <div class="backlog-view">
    <new-item></new-item>

    <div class="box" v-for="item in items" :key="item.id">
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <span class="tag is-info">#{{item.id}}</span>
              <span class="is-size-5">
                {{item.text}}
              </span>
              <span :class="badgeClass(item)">{{badgeText(item)}}</span>
            </p>
          </div>

        </div>
      </article>
    </div>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import NewItemForm from '@/components/NewItemForm'
const badgeDetail = {
  todo: {
    text: 'to-do',
    class: 'tag is-light'
  },
  inProgress: {
    text: 'in progress',
    class: 'tag is-info'
  },
  done: {
    text: 'done',
    class: 'tag is-success'
  }
}
export default {
  name: 'Backlog',
  components: {
    'new-item': NewItemForm
  },
  computed: mapState({
    items: s => [...s.items.todo, ...s.items.inProgress, ...s.items.done]
  }),
  methods: {
    itemLane(item) {
      if (this.$store.state.items.todo.includes(item)) {
        return 'todo'
      } else if (this.$store.state.items.inProgress.includes(item)) {
        return 'inProgress'
      }

      return 'done'
    },
    badgeText(item) {
      const lane = this.itemLane(item)
      return badgeDetail[lane].text
    },
    badgeClass(item) {
      const lane = this.itemLane(item)
      return badgeDetail[lane].class
    }
  }
}
</script>
<style>
.backlog-view {
  width: 60%;
  margin: auto;
}
.card {
  margin-bottom: 10px;
}

.card:last-child {
  margin-bottom: 25px;
}

.card-block {
  padding: 15px;
}

.add-item {
  margin: 30px 0;
}
</style>

