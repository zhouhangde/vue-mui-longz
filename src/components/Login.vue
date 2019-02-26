<template>
     
    <div>
			<mt-header fixed title="我的世界">2341</mt-header>
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
              }if(this.userName !='zhouhang'){
                mui.alert('用户不存在！');
                return false;
              }else{
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
                
                /* 登录验证密码 */
                var url = './assets/data/login.json';
                $ByLz.muiAjax(url,function(data){
                if(data.loginData.code == 200){
                  mui.toast('登录成功！');
                  //打开主页面
                  window.location.href="index.html"
                }else{
                  mui.toast('登录失败！');
                }
                });
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