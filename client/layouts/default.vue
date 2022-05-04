<template>
  <v-app>
    <!-- Header 가로로 먼저나누고 -->
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <!-- 로고 부분의 링크 -->
          <nuxt-link to="/">NodeBird</nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
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
    <v-row>
      <!-- 로그인창 xs는 cols -->
      <v-col cols="12" md="4"> 로그인 </v-col>
      <v-col cols="12" md="8">
        <!-- nuxt를 써주면 -->
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
