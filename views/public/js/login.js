 define(['jquery','cookie'], function () {
   $('#fromLogin').submit(function () {
     var data = $(this).serialize();
     $.ajax({
       url: '/api/login',
       type: 'post',
       data: data,
       success: function (result) {
         // alert("登录成功...")
         window.location.href = '/';
       },
       error: function (errInfo) {
         alert("账号或者密码错误...")
       }
     })
     return false;
   })
 })