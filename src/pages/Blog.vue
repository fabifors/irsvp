<template>
  <Layout>
    <h1>Blog</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>
    <div v-for="(post, index) in $page.allPost.edges" :key="index">
      <Post :post="post" />
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  allPost {
    edges {
			node {
        content,
        title,
        date
      }
    }
  }
}
</page-query>

<script>
import Post from '@/templates/Post.vue'
export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    Post
  }
};
</script>
 