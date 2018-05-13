<template>
  <form v-on:submit.prevent="save">
    <div class="group">
      <label>Title</label>
      <at-input v-model="title" size="large" placeholder="Title"></at-input>
    </div>
    <div class="group">
      <label>Content</label>
      <at-textarea v-model="content" placeholder="Content" min-rows="10" max-rows="10"></at-textarea>
    </div>
    <div class="group">
      <at-button type="primary" size="large" native-type="submit">Ask question</at-button>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        content: ''
      }
    },
    methods: {
      save () {
        this.$emit('save-question', {title: this.title, content: this.content});
      }
    }
  }
</script>

<style scoped>
  .group {
    margin: .7em 0;
  }
</style>