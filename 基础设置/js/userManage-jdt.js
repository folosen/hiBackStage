$("#all-ckeck").click(function(){   
    if(this.checked){   
        $(".table-condensed input[type='checkbox']").prop("checked", true);  
    }else{   
        $(".table-condensed input[type='checkbox']").prop("checked", false);
    }   
});
$("#all-bank").click(function(){   
    if(this.checked){        
        $(".table-condensed tr:gt(1):lt(15) input[type='checkbox']").prop("checked", true);
    }else{   
        $(".table-condensed tr:gt(1):lt(15) input[type='checkbox']").prop("checked", false);
    }   
});
$("#life-check").click(function(){   
    if(this.checked){             
        $(".table-condensed tr:gt(1):lt(2) input[type='checkbox']").prop("checked", true);
    }else{   
        $(".table-condensed tr:gt(1):lt(2) input[type='checkbox']").prop("checked", false);
    }   
});
$("#bank-check").click(function(){   
    if(this.checked){             
        $(".table-condensed tr:gt(3):lt(10) input[type='checkbox']").prop("checked", true);
    }else{   
        $(".table-condensed tr:gt(3):lt(10) input[type='checkbox']").prop("checked", false);
    }   
});
$("#cp-check").click(function(){   
    if(this.checked){             
        $(".table-condensed tr:gt(13):lt(3) input[type='checkbox']").prop("checked", true);
    }else{   
        $(".table-condensed tr:gt(13):lt(3) input[type='checkbox']").prop("checked", false);
    }   
});
$("#set-all").click(function(){   
    if(this.checked){             
        $(".table-condensed tr:gt(16):lt(3) input[type='checkbox']").prop("checked", true);
    }else{   
        $(".table-condensed tr:gt(16):lt(3) input[type='checkbox']").prop("checked", false);
    }   
});
$("#set-user").click(function(){   
    if(this.checked){             
        $(".table-condensed tr:gt(17):lt(1) input[type='checkbox']").prop("checked", true);
    }else{   
        $(".table-condensed tr:gt(17):lt(1) input[type='checkbox']").prop("checked", false);
    }   
});
$("#set-bank").click(function(){   
    if(this.checked){             
        $(".table-condensed tr:gt(18):lt(1) input[type='checkbox']").prop("checked", true); 
    }else{   
        $(".table-condensed tr:gt(18):lt(1) input[type='checkbox']").prop("checked", false);
    }   
});
$(".table-condensed input[type='checkbox']").click(function(){   
   if($('.table-condensed tr:gt(1):lt(2) td:gt(0):lt(20) input:checked').length>=12){
         $('#life-check').prop("checked", true); 
    }else{   
         $('#life-check').prop("checked", false);
    }  
    if($('.table-condensed tr:gt(3):lt(10) td:gt(0):lt(100) input:checked').length>=41){
        $('#bank-check').prop("checked", true); 
    }else{   
        $('#bank-check').prop("checked", false);
    }  
    if($('.table-condensed tr:gt(13):lt(3) td:gt(0):lt(100) input:checked').length>=11){
         $('#cp-check').prop("checked", true); 
    }else{   
         $('#cp-check').prop("checked", false);
    } 
    if($('.table-condensed tr:gt(17):lt(1) td:gt(0):lt(100) input:checked').length>=7){
         $('#set-user').prop("checked", true); 
    }else{   
         $('#set-user').prop("checked", false);
    }
    if($('.table-condensed tr:gt(18):lt(1) td:gt(0):lt(100) input:checked').length>=3){
         $('#set-bank').prop("checked", true); 
    }else{   
         $('#set-bank').prop("checked", false);
    }
    if($('.table-condensed tr:gt(16):lt(3) input:checked').length>=12){
        $('#set-all').prop("checked", true); 
    }else{   
        $('#set-all').prop("checked", false);
    }  
    if($('.table-condensed tr:gt(1):lt(15) input:checked').length>=67){
        $('#all-bank').prop("checked", true); 
    }else{   
        $('#all-bank').prop("checked", false);
    } 
    if($('.table-condensed tr:gt(0):lt(19) input:checked').length>=81){        
        $('#all-ckeck').prop("checked", true); 
    }else{   
        $('#all-ckeck').prop("checked", false);
    }             
});
$(".blue-btn").click(function(){
    if($("#job").length!=0){
        if($("#job").val().length==0){
            alert("请输入职位名称");
            $("#job")[0].focus();
            return false;
        }
    }
    if($('.table-condensed tr:gt(0):lt(19) input:checked').length==0){
        alert("请选择权限");
        return false;
    }
});