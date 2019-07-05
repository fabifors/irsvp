<template>
  <Layout>
    <h1 class="tag-title">#{{ $page.tag.title }}</h1>

    <div class="posts">
      <post-card v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            date (format: "YYYY MM DD")
            description
            content
            author
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "@/components/PostCard.vue";
export default {
  components: {
    "post-card": PostCard
  }
};
</script>

<style lang="scss">
.tag-title {
  text-align: center;
  margin-bottom: 70px;
  color: #707070;
}
</style>
