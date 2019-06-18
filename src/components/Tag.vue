<template>
  <g-link :to="tag.path">
    <div class="tag">
      <p class="tag__label"># {{tag.title}}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["tag"]
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.tag {
  padding: $badge-md;
  background: $highlight-bg;
  border-radius: $border-radius-md;
  &__label {
    padding: 0;
    margin: 0;
    color: $text-light;
  }
}
</style>
