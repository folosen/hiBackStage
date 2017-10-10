$(".blue-btn").click(function(){
        if($("#userAco").val().length==0){
            alert("请输入账号");
            $("#userAco")[0].focus();
            return false;
        }
        if($("#userName").val().length==0){
            alert("请输入姓名");
            $("#userName")[0].focus();
            return false;
        }
        if($("#userEmail").val().length==0){
            alert("请输入邮箱");
            $("#userEmail")[0].focus();
            return false;
        }else if(checkMail($("#userEmail").val())){
            alert("邮箱格式错误");
            $("#userEmail")[0].focus();
            return false;
        }
        if($("#userPwd").val().length==0){
            alert("请输入密码");
            $("#userPwd")[0].focus();
            return false;
        }else if(validateInput($("#userPwd").val())){
            alert("密码格式错误");
            $("#userPwd")[0].focus();
            return false;
        }
        checkPhone();
        if($("#acoSel").val()==0){
            alert("请选择职位");
            $("#acoSel")[0].focus();
            return false;
        }        

});

function checkMail(str){ 
    var strReg=""; 
    var r; 
    var strText=str
    //strReg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/i;
    strReg=/^\w+((-\w+)|(\.\w+))*\@{1}\w+\.{1}\w{2,4}(\.{0,1}\w{2}){0,1}/ig;
    r=strText.search(strReg); 
    if(r==-1) { 
    return true;
    }
    return false; 
}
function checkPhone(){
    var mobile = document.getElementById("userPhone");
    if(mobile.value == "" || mobile.value == ""){
        alert("请输入手机号码");
        mobile.focus();
        return;
    }
    var regExp = /^(86)?((13\d{9})|(15[0,1,2,3,5,6,7,8,9]\d{8})|(18[0,5,6,7,8,9]\d{8}))$/;
    if(!regExp.test(mobile.value)){
        alert("手机号码格式错误");
        mobile.focus();
        return;
    }
}
function validateInput(objs) {
    var str = objs;
    var regUpper = /[A-Z]/;
    var regLower = /[a-z]/;
    var regStr = /[^A-Za-z0-9]/;
    var complex = 0;
    if (regLower.test(str)) {
        ++complex;
    }
    if (regUpper.test(str)) {
        ++complex;
    }
    if (regStr.test(str)) {
        ++complex;
    }
    if (complex < 3 || str.length < 6) {
        return true;
    }
    return false;
}