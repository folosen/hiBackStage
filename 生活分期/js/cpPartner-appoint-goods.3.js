$(".btn").click(function(){
    if($(this).text()=="查询"){
        if($("#hotelName").val().length==0){
            alert("请输入酒店名称");
            $("#hotelName")[0].focus();
            return false;
        }
    }
});