<template>
  <Layout>
    <section class="feed">
      <header class="feed__header">
        <h1 class="feed__header__title">Blog Feed</h1>
        <g-link to="/blog/new-post" class="feed__header__new-post">
          <span class="btn">New post</span>
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
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.feed {
  &__header {
    display: grid;
    grid-template-columns: 1fr 60% 1fr;
    grid-template-rows: 1fr;
    vertical-align: middle;
    margin-bottom: $space;

    &__new-post {
      grid-column: 3;
      align-self: center;
    }
    &__title {
      text-align: center;
      color: $text-light;
      grid-column: 2;
      align-self: center;
    }
  }
}
</style>

 