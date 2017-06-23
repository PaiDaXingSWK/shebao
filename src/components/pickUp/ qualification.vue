<template>
    <div>

      <div class="person-msg" >
        <i-form ref="formValidate" :label-width="80">
          <Row>
            <img src="../../assets/logo.png" alt="">
            <img src="../../assets/logo.png" alt="" style="margin-left: 20px">
          </Row>
          <Row>
            <i-col span="12">
              <Form-item label="地区信息">
                <Input  placeholder="请输入" disabled ></Input>
              </Form-item>
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="姓名" prop="name">
                <Input placeholder="请输入姓名" disabled ></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="民族" prop="name">
                <Input placeholder="请输入民族" disabled ></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="出生日期" prop="name">

                <Input placeholder="去世时间" disabled ></Input>

              </Form-item>
            </i-col>
            <i-col>

            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="性别" prop="mail">
                <Input placeholder="请输入性别" disabled ></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="地址" prop="mail">
                <Input placeholder="请输入地址" disabled ></Input>
              </Form-item>
            </i-col>

            <i-col span="6">
              <Form-item label="有效期限" prop="mail">

                <Input placeholder="有效期限" disabled ></Input>

              </Form-item>
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="签发机关" prop="mail">
                <Input placeholder="请输入签发机关" disabled ></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="身份证号码" prop="mail">
                <Input placeholder="请输入身份证号码" disabled ></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="去世时间" prop="mail">

                <Input placeholder="去世时间" disabled ></Input>

              </Form-item>
            </i-col>
          </Row>
          <Row>
            <i-col span="6">
              <Form-item label="手机号" prop="mail">
                <Input placeholder="请输入签发机关" disabled ></Input>
              </Form-item>
            </i-col>
            <i-col span="6">
              <Form-item label="固定电话" prop="mail">
                <Input placeholder="请输入地址" disabled ></Input>
              </Form-item>
            </i-col>

          </Row>


          <i-col span="24">


            <Form-item>



              <Button type="primary" @click="handleReset('formValidate')" size="large" style="margin-left: 8px">人员认证</Button>
              <Button type="ghost" @click="stepNext1('formValidate')" size="large">完成</Button>
            </Form-item>
          </i-col>

        </i-form>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">

    export default{
        data(){
            return {}
        },
        components: {}
    }
</script>
<style scoped>
    .person-msg {
    margin-left: 10%;
      margin-top: 50px;
  }
</style>
