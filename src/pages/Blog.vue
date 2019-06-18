<template>
  <Layout>
    <div class="feed">
      <h1 class="feed__title">Blog Feed</h1>
      <post-summary v-for="post in $page.posts.edges" :key="post.id" :post="post"/>
    </div>
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
import PostSummary from "@/components/PostSummary.vue";
export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    "post-summary": PostSummary
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
  &__title {
    margin-bottom: 70px;
    color: #707070;
  }
}
</style>

 