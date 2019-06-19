<template>
  <Layout>
    <article class="post">
      <header class="post__header">
        <h2 class="post__header__title">{{ $page.post.title }}</h2>
        <p class="post__header__date">Created: <span class="highlight">{{ $page.post.date }}</span></p>
        <p class="post__header__author">Author: <span class="highlight">{{ $page.post.author }}</span></p>
        <ul class="post__header__tags">
          <li v-for="tag in $page.post.tags" :key="tag.id">
            <tag :tag="tag"/>
          </li>
        </ul>
        <g-image 
          v-if="$page.post.image && $page.post.alt" 
          :src="$page.post.image" 
          :alt="$page.post.alt"
          class="cover-image"
        />
      </header>
      <div class="post__content" v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title,
    author,
    date (format: "YYYY-MM-DD"),
    description,
    content,
    tags {
      id
      title
      path
    },
    image,
    alt
  }
}
</page-query>

<script>
import Tag from "@/components/Tag.vue";
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  components: {
    tag: Tag
  }
};
</script>


<style lang="scss" scoped>
.post {
  color: $text-light;
  margin-bottom: $space;
  &__header {
    padding: $space;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    &__title {
      font-size: 2.5em;
    }
    &__tags {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      li {
        margin-right: 0.5rem;
        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
    }
    * {
      z-index: 99;
    }
    .cover-image {
      position:absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
    }
  }

  &__content {
    border-radius: $border-radius-md;
    background: #fff;
    padding: $space;
  }
}
</style>