<template>
  <v-card style="margin-bottom: 20px">
    <v-container>
      <v-form ref="form" v-model="vaild" @submit.prevent="onSubmitForm">
        <!-- vuetify기능: outlined(테투리디자인), auto-grow(), clearable -->
        <v-textarea
          outlined
          auto-grow
          clearable
          label="무슨 이야기를 하고 싶은가요?"
          :hide-details="hideDetails"
          :success-messages="successMessages"
          :success="success"
          :rules="[(v) => !!v || '내용을 입력해주세요.']"
          @input="onChangeTextarea"
        />
        <v-btn type="submit" color="green" absolute right>추가</v-btn>
        <v-btn>이미지 업로드</v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      vaild: false,
      hideDetails: true,
      successMessages: [],
      success: false,
      content: "",
    };
  },
  computed: {
    ...mapState("users", ["me"]),
  },
  methods: {
    onChangeTextarea() {
      this.hideDetails = true;
      this.success = false;
      this.successMessages = "";
    },
    async onSubmitForm() {
      //@submit.prevent => event.preventDefault() 생략
      if (this.$refs.form.validate()) {
        try {
          // 백엔드 상담부분
          await this.$store.dispatch("posts/add", {
            content: this.content,
            User: {
              nickname: this.me.nickname,
            },
            Comments: [],
            Images: [],
            id: Date.now(),
            createdAt: Date.now(),
          });
          this.hideDetails = false;
          this.success = true;
          this.successMessages = "게시글 등록 성공";
        } catch (err) {
          console.error(err);
        }
      }
    },
  },
};
</script>

<style></style>
