<template>
  <div class="container menubar">
    <div class="is-centered buttons" aria-label="Menu bar">
      <router-link class="button" to="/board" :class="buttonClass('/board')">Board
      </router-link>
      <router-link class="button" to="/backlog" :class="buttonClass('/backlog')">Backlog</router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MenuBar',
  methods: {
    buttonClass(path) {
      return {
        btn: true,
        'btn-primary': this.$route.path === path,
        'btn-secondary': this.$route.path !== path
      }
    }
  }
}
</script>

<style>
.menubar {
  margin-bottom: 30px !important;
  margin-top: 30px !important;
}
</style>
