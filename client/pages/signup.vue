<template>
  <div>
    <v-container>
      <v-card>
        <v-subheader>회원가입</v-subheader>
        <!-- v-container 패딩용도로 많이 사용한다. -->
        <v-container>
          <v-form>
            <v-text-field label="이메일" type="email" required />
            <v-text-field label="비밀번호" type="password" required />
            <v-text-field label="비밀번호확인" type="password" required />
            <v-text-field label="닉네임" type="nickname" />
            <v-checkbox required label="가입하는 것을 동의합니다." />
            <v-btn color="green" type="submit">가입하기</v-btn>
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
      name: "signup",
    };
  },
  head: {
    title: "signup page",
  },
};
</script>

<style></style>
