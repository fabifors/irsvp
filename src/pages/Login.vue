<template>
  <Layout>
    <div class="form-card">
      <h1 class="text-center page-title mt-0 mb-4">Login</h1>
      <form @submit:prevent="signIn">
        <input class="form-card__input mb-4" placeholder="Username" v-model="username">
        <input class="form-card__input mb-4" placeholder="Password" v-model="password">
        <div class="form-card__buttons">
          <button class="form-card__button mr-2" type="submit">Sign In</button>
          <span>
            or
            <g-link to="/signup">create an account</g-link>
          </span>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Login",
  metaInfo: {
    title: "Login"
  },
  data() {
    return {
      username: "",
      password: "",
      success: false,
      error: {
        msg: null,
        show: false
      }
    };
  },
  methods: {
    signIn() {
      this.$firestore
        .signIn(this.username, this.password)
        .then(res => {
          this.success = true;
        })
        .catch(err => {
          this.success = false;
          this.error = {
            msg: err,
            show: true
          };
          throw Error(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  color: $text-light;
  padding: 0;
  margin: 0;
}

.form-card {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  border-radius: $border-radius-lg;
  padding: $space;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__input {
    font-size: 1em;
    padding: $input-spaceing;
    background: $main-bg;
    border-radius: $border-radius-md;
    border: none;
  }

  &__buttons {
    @include flex(row, flex-start, center);
  }

  &__button {
    color: #303030;
    font-weight: 600;
    padding: $badge-lg;
    background: $highlight;
    border-radius: $border-radius-md;
    border: none;
    align-self: flex-start;
  }
}
</style>
