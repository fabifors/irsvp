<template>
  <g-link :to="post.node.path">
    <article class="post-summary">
      <header class="post-summary__header">
        <h2 class="post-summary__header__title">{{ post.node.title }}</h2>
      </header>
      <div class="post-summary__body">
        <p class="post-summary__body__content">{{ post.node.description }}</p>
      </div>
      <footer class="post-summary__footer">
        <div class="post-summary__footer__section">
          <p class="post-summary__footer__date">
            Posted on:
            <span class="highlight">{{post.node.date}}</span>
          </p>
          <p class="post-summary__footer__author">
            by:
            <span class="highlight">{{ post.node.author }}</span>
          </p>
        </div>
        <ul class="post-summary__footer__tags">
          <li v-for="tag in post.node.tags" :key="tag.id">
            <tag :tag="tag"/>
          </li>
        </ul>
      </footer>
    </article>
  </g-link>
</template>

<script>
import Tag from "@/components/Tag.vue";
export default {
  name: "post-summary",
  props: ["post"],
  methods: {
    log(data) {
      console.log(data);
    }
  },
  components: {
    tag: Tag
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.post-summary {
  background: #fff;
  border-radius: 8px;
  padding: 70px;
  margin-bottom: 70px;
  color: #706570;

  &__header {
    &__title {
      font-size: 2em;
      margin: 0;
    }
  }

  &__body {
    font-size: 1.2em;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-size: 1em;
    color: #909090;
    font-weight: 500;

    &__section {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__tags {
      width: 100%;
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
  }

  .highlight {
    font-weight: 600;
    text-decoration: underline;
    color: violet;
  }
}
</style>
