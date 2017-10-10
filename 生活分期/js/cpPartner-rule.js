$(".btn").click(function(){
    if($(this).text()=="查询"){
        if($("#cpName").val().length==0){
            alert("请输入供应商名称");
            $("#cpName")[0].focus();
            return false;
        }
    }
});
