<template>
  <article class="post">
    <header class="post__header">
      <h2 class="post__header__title">{{ post.node.title }}</h2>
      <p class="post__header__author">Author: {{ post.node.author }}</p>
      <p class="post__header__date">Created: {{ post.node.date }}</p>
    </header>
    <div class="post__content" v-html="post.node.content"></div>
  </article>
</template>

<script>
export default {
  metaData: {
    title: this.post.title
  },
  props: ['post'],
  beforeMount() {
    console.log(this.post)
  }
}
</script>

<style lang="sass" scoped>

</style>
