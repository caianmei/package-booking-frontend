<template>
  <div>
    <h1>包裹入库</h1>
    <a-form :form="form" @submit="handleSubmit" @cancel="handleCancel">
      <a-form-item label="订单编号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
                    'id',
                    {rules: [{ required: true, message: 'Please input package number!' }]}
                ]"
        />
      </a-form-item>
      <a-form-item label="预约时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
                    'fetchTime',
                    {rules: [{ required: true, message: 'Please input package fetchTime!' }]}
                ]"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button class="button" type="primary" html-type="submit">Submit</a-button>
        <a-button class="button" type="primary" @click="cancel">cancel</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('reserveSubmit',values);
           this.$router.push("/");
        }
      });
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.button {
  margin-left: 10px;
  margin-right: 10px;
}
</style>