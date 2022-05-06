<template>
  <div>
    <v-container>
      <v-card>
        <v-subheader>회원가입</v-subheader>
        <!-- v-container 패딩용도로 많이 사용한다. -->
        <v-container>
          <!-- vuetify에서 자동으로 validation을 도와준다. -->
          <!-- ref를 지정해주면, this.$ref -->
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <!--  :rules="emailRules" 도 뷰티파이에서 지원해주는 기능 -->
            <v-text-field v-model="email" label="이메일" type="email" :rules="emailRules" required />
            <v-text-field v-model="password" label="비밀번호" type="password" :rules="passwordRules" required />
            <v-text-field v-model="passwordConfirm" label="비밀번호확인" type="password" :rules="passwordConfirmRules" required />
            <v-text-field v-model="nickname" label="닉네임" type="nickname" :rules="nicknameRules" />
            <v-checkbox v-model="teams" required label="가입하는 것을 동의합니다." :rules="[(v) => !!v || '약관에 동의해야합니다.']" />
            <v-btn color="green" type="submit"> 가입하기 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      teams: false,
      emailRules: [(v) => !!v || "이메일을 입력해주세요.", (v) => /.+@.+/.test(v) || "이메일 형식이 아닙니다."],
      nicknameRules: [(v) => !!v || "닉네임을 입력해주세요."],
      passwordRules: [(v) => !!v || "비밀번호를 입력해주세요.", (v) => v.length >= 8 || "비밀번호는 8자 이상이어야 합니다."],
      passwordConfirmRules: [(v) => !!v || "비밀번호를 입력해주세요.", (v) => v === this.password || "비밀번호가 일치하지 않습니다."],
    };
  },
  head: {
    title: "signup page",
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        // users의 actions에서 dispatch를 이용해서 signup을 호출한다.
        this.$store.dispatch("users/signUp", {
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
          nickname: this.nickname,
        });
        alert("정상적으로 가입되었습니다.");
      } else {
        alert("가입이 실패하였습니다.");
      }
      console.log(this.$refs.form.validate());
      console.log(this.valid);
    },
  },
};
</script>

<style></style>
