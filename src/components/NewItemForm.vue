
<template>

  <div class="control has-icons-left has-icons-right">
    <form action="#" method="post" v-on:submit.prevent="submitForm">
      <input class="input" type="text" v-model="itemText" placeholder="Add Something To The Board">
      <span class="icon is-small is-left">
        <i class="fas fa-tasks"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </form>
  </div>

</template>
<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      itemText: ''
    }
  },
  methods: {
    submitForm() {
      if (this.itemText) {
        this.$store.commit('addItem', {
          text: this.itemText
        })
        this.itemText = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.control {
  margin-bottom: 30px !important;
}
</style>
