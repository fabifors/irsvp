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
  padding: 0.5rem 0.75rem;
  background: rgb(255, 219, 224);
  border-radius: 5px;
  &__label {
    padding: 0;
    margin: 0;
    color: #707070;
  }
}
</style>
