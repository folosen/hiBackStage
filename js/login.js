$("#login-btn").click(function(){
    if($("#acn").val().length==0){
        alert("请输入登陆账号");
        $("#acn")[0].focus();
        return false;
    }
    if($("#pwd").val().length==0){
        alert("请输入登陆密码");
        $("#pwd")[0].focus();
        return false;
    }
    if($("#vfCode").val().length==0){
        alert("请输入验证码");
        $("#vfCode")[0].focus();
        return false;
    }
});