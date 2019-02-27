<template>
     
    <div>
        <div class="my-content" id="login">
          	<div class="my-login-header">
              <img src="../assets/img/login-bg.png" width="30%" />
              <h3>和平农庄-运营管理平台</h3>
            </div>
            <div class="my-login-form">
              <form class="mui-input-group">
                <div class="mui-input-row">
                  <label>用户名</label>
                  <input type="text" v-model="userName" class="mui-input-clear" placeholder="请输入用户名">
                </div>
                <div class="mui-input-row">
                  <label>密码</label>
                  <input type="password" v-model="password" class="mui-input-password" placeholder="请输入密码">
                </div>
                <div class="mui-button-row">
                  <button type="button" class="mui-btn mui-btn-primary my-login-btn" @click="login">登录</button>
                </div>
                <div>
                  <div style="float:left;" class="my-input-account mui-checkbox">
                    <label style="font-size:14px;">记住账号</label>
                    <input id="rememberUsername"
                      v-model="checkedTaccount"
                      type="checkbox">
                  </div>
                  <div style="float:right;" class="my-input-account mui-checkbox">
                    <label style="font-size:14px;">记住密码</label>
                    <input id="rememberPassword" v-model="checkedTpasswod" type="checkbox">
                  </div>
                </div>
                
              </form>	
            </div>
          </div>`
		</div>
</template>

<script>
      export default {
        data () {
          return {
            userName:'',
            password:'',
            checkedTaccount:'',
            checkedTpasswod:''
          };
        },
        created:function(){
        },
        mounted:function(){
          /* 记住用户名和密码的赋值功能 */
          var rememberUsername = localStorage.getItem("rememberUsername");
          var rememberPassword = localStorage.getItem("rememberPassword");
          if(rememberUsername !=null){
            this.userName = rememberUsername;
            this.checkedTaccount = true;
          }
          if(rememberPassword !=null){
            this.password = rememberPassword;
            this.checkedTpasswod = true;
          }
        }, 
        methods: {
          login:function(event){
              if(this.userName =='' || this.password==''){
                mui.alert('账号或密码不能为空！');
                return false;
              }else{
                
               /*  请求传参  */
                let obj = {
                  name: this.userName,
                  password: this.password
                } 
                this.$http.post('/auth/user', obj) // 将信息发送给后端
                  .then((res) => { // axios返回的数据都在res.data里
                    if(res.data.success){ // 如果成功
                    
                      /* 设置记住用户名和密码 */
                      if(this.checkedTaccount){
                        localStorage.setItem("rememberUsername", this.userName);
                      }else{
                        localStorage.removeItem("rememberUsername");
                      }
                      if(this.checkedTpasswod){
                        localStorage.setItem("rememberPassword", this.password);
                      }else{
                        localStorage.removeItem("rememberPassword");
                      }

                      sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
                      mui.toast('登录成功！');
                      this.$router.push('/todolist') // 进入todolist页面，登录成功
                    }else{
                      mui.toast(res.data.info);
                      sessionStorage.setItem('demo-token',null); // 将token清空
                    }
                  }, (err) => {
                      mui.toast('请求错误！');
                      sessionStorage.setItem('demo-token',null); // 将token清空
                  })

                
              }
          }
        }
      };
</script>

<style scoped>
    .my-content{
      margin-top: 30%;
      overflow: hidden;
    }
    .my-login-header{
      text-align: center;
    }
    .my-login-form{
      padding: 1rem;
      overflow: hidden;
    }
    .my-login-btn{
      width: 100%;
    }
    .my-login-lable{
      width:30rem;
    }
    .my-input-account{
      /* 默认值。允许浮动元素出现在两侧。 */
      clear: none;
    }
    .my-input-account label {
      padding-top: 0px;
    }

    .my-input-account label {
      padding-right: 50px;
    }
    .my-input-account input[type=checkbox] {
      top: 0px;
    }
  
    .my-input-account input[type=checkbox]:before{
      font-size: 20px;
    }
     
</style>