<template>
  <Layout>
    <h1>New post</h1>
    <form class="new-post">
      <fieldset>
        <input class="input" placeholder="Title" name="title" type="text" v-model="blogpost.title">
        <input
          class="input"
          placeholder="Author"
          name="author"
          type="text"
          v-model="blogpost.author"
        >
        <input
          class="input"
          placeholder="Summary"
          name="summary"
          type="text"
          v-model="blogpost.summary"
        >
      </fieldset>
      <textarea
        class="input"
        placeholder="# Markdown is fine to use"
        name="content"
        cols="85"
        rows="30"
        v-model="blogpost.content"
      ></textarea>
      <button class="btn" @click="createNewPost()">Create New</button>
    </form>
  </Layout>
</template>

<script>
export default {
  name: "create-new-post",
  data() {
    return {
      blogpost: {
        title: "",
        summary: "",
        tags: ["testing", "my", "theory"],
        author: "",
        content: ``
      }
    };
  },
  methods: {
    createNewPost() {
      const tags = this.blogpost.tags.reduce((acc, tag) => {
        acc += `'${tag}', `;
        return acc;
      }, "");
      const blogpost = `
      ---
      title: ${this.blogpost.title}
      summary: ${this.blogpost.summary}
      tags: [${tags}]
      author: ${this.blogpost.author}
      ---
      ${this.blogpost.content}
      `;

      console.log(blogpost);
    }
  }
};
</script>
