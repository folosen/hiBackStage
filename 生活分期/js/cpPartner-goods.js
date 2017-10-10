$(".btn").click(function(){
    if($(this).text()=="查询"){
        if($("#cpName").val().length==0){
            alert("请输入商家名称");
            $("#cpName")[0].focus();
            return false;
        }
        if($("#dtp_input").val().length==0){
            alert("请输入开始日期");
            $("#dtp_input")[0].focus();
            return false;
        }
        if($("#dtp_input1").val().length==0){
            alert("请输入结束日期");
            $("#dtp_input1")[0].focus();
            return false;
        }
    }
});