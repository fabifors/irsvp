<template>
  <Layout>
    <section class="feed">
      <header class="feed__header">
        <h1 class="feed__header__title">Blog Feed</h1>
        <g-link to="/blog/new-post">
          <button class="feed__header__new-post btn">New post</button>
        </g-link>
      </header>
      <post-card v-for="post in $page.posts.edges" :key="post.id" :post="post"/>
    </section>
  </Layout>
</template>

<page-query>
{
  posts: allPost {
    edges {
			node {
        id,
        title,
        author,
        date (format:"YYYY-MM-DD"),
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "@/components/PostCard.vue";
export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    "post-card": PostCard
  },
  methods: {
    log(data) {
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped>
.feed {
  &__header {
    display: relative;
    &__new-post {
      position: absolute;
    }
    &__title {
      text-align: center;
      margin-bottom: $space;
      color: $text-light;
    }
  }
}
</style>

 