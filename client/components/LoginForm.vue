<template>
  <v-container v-if="!me">
    <v-card>
      <v-form ref="form" v-model="valid" @submit="onSubmitLogin">
        <v-container>
          <v-text-field v-model="email" label="이메일" type="email" :rules="emailRules" required />
          <v-text-field v-model="password" label="비밀번호" type="password" :rules="passwordRules" required />
          <v-btn color="green" :disabled="!valid" type="submit"> 로그인 </v-btn>
          <v-btn nuxt to="/signup"> 회원가입 </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-card>
      {{ me.nickname }}님이 로그인되었습니다.
      <v-btn @click="onLogOut">로그아웃</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [(v) => !!v || "이메일을 입력해주세요."],
      passwordRules: [(v) => !!v || "비밀번호를 입력해주세요."],
    };
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
  },
  methods: {
    async onSubmitLogin(e) {
      e.preventDefault();
      if (this.$refs.form.validation()) {
        try {
          await this.$store.dispatch("users/logIn", {
            email: this.email,
            // password: this.password,
            // nickname: this.nickname,
          });
        } catch (err) {
          console.error(err);
        }
      }
    },
    async onLogOut() {
      try {
        this.$store.dispatch("users/logOut");
      } catch {
        console.error(err);
      }
    },
  },
};
</script>

<style></style>
