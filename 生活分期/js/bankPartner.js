$(".btn").click(function(){
    if($(this).text()=="查询"){
        if($("#group-cpname").val().length==0){
            alert("请输入供应商名称");
            $("#group-cpname")[0].focus();
            return false;
        }
        if($("#group-bank").val().length==0){
            alert("请输入银行名称");
            $("#group-bank")[0].focus();
            return false;
        }
    }
});