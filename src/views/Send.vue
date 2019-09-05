<template>
  <div>
    <h1>包裹入库</h1>
    <a-form :form="form" @submit="handleSubmit">
       <a-form-item label="订单编号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
                    'id',
                    {rules: [{ required: true, message: 'Please input package number!' }]}
                ]"
        />
      </a-form-item>
       <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
                    'receiver',
                    {rules: [{ required: true, message: 'Please input your receiver!' }]}
                ]"
        />
      </a-form-item>
       <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
                    'telPhone',
                    {rules: [{ required: true, message: 'Please input your telphone!' }]}
                ]"
        />
      </a-form-item>
      <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
                    'weight',
                    {rules: [{ required: true, message: 'Please input your weight!' }]}
                ]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
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
           this.$store.dispatch('handleSubmit',values);
           this.$router.push("/");
        }
      });
    }
  }
}
</script>