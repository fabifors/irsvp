<template>
  <g-link :to="post.node.path">
    <article class="post-card">
      <header class="post-card__header">
        <h2 class="post-card__header__title">{{ post.node.title }}</h2>
      </header>
      <div class="post-card__body">
        <p class="post-card__body__content">{{ post.node.description }}</p>
      </div>
      <footer class="post-card__footer">
        <div class="post-card__footer__section">
          <p class="post-card__footer__date">
            Posted on:
            <span class="highlight">{{post.node.date}}</span>
          </p>
          <p class="post-card__footer__author">
            by:
            <span class="highlight">{{ post.node.author }}</span>
          </p>
        </div>
        <ul class="post-card__footer__tags" :if="post.node.tags">
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
  name: "post-card",
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

.post-card {
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
      margin: 0;
      width: 100%;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: flex-start;

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
