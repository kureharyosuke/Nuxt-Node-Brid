<template>
  <v-app>
    <!--# Header 가로로 먼저나누고 -->
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <!-- 로고 부분의 링크 -->
          <nuxt-link to="/"> NodeBird </nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <!-- Search Bar, Search icon => prepend-icon="mdi-magnify"　mdi를 앞에 붙여줘야한다. -->
          <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center' }" />
          <v-btn text nuxt to="/profile" :style="{ display: 'flex', alignItems: 'center' }">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup" :style="{ display: 'flex', alignItems: 'center' }">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <!--# Header 가로로 먼저나누고 -->
    <div>{{ name }}</div>
    <v-btn @click="onChangeName">바이</v-btn>
    <div>{{ user }}</div>
    <v-btn @click="onChangeUser">안녕</v-btn>
    <!-- # body 페이지 내용 -->
    <v-row no-gutters>
      <!-- 로그인창 xs는 cols -->
      <v-col cols="12" md="4">
        <login-form />
      </v-col>
      <v-col cols="12" md="8">
        <!-- nuxt를 써주면 바뀌는 부분 -->
        <!-- 컨텐츠 -->
        <nuxt />
      </v-col>
    </v-row>
    <!-- # body 페이지 내용 -->
  </v-app>
</template>

<script>
import LoginForm from "~/components/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
  computed: {
    name() {
      return this.$store.state.posts.name;
    },
    user() {
      return this.$store.state.users.user;
    },
  },
  methods: {
    onChangeName() {
      this.$store.commit("posts/SETPOSTS");
    },
    onChangeUser() {
      this.$store.commit("users/setMe", "안녕");
    },
  },
};
</script>

<style></style>
