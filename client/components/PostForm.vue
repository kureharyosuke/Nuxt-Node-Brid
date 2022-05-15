<template>
  <v-card>
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
export default {
  data() {
    return {
      vaild: true,
      hideDetails: true,
      successMessages: [],
      success: false,
      content: "",
    };
  },
  methods: {
    onChangeTextarea() {
      this.hideDetails = false;
    },
    onSubmitForm() {
      //@submit.prevent => event.preventDefault() 생략
      if (this.$ref.form.validate()) {
        this.$store.dispatch("posts/add", {
          content: this.content,
        });
      }
    },
  },
};
</script>

<style></style>
