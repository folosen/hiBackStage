$("#stage").click(function(){
    if($(this).prop("checked")){
        $(".table-add tr:nth-child(2) td:nth-child(2) span").show();
    }else{
        $(".table-add tr:nth-child(2) td:nth-child(2) span").hide();
    }
})
$("#all").click(function(){
    if($(this).prop("checked")){
        $(".table-add tr:nth-child(3) td:nth-child(2) span").show();
    }else{
        $(".table-add tr:nth-child(3) td:nth-child(2) span").hide();
    }
})
$(".table-add tr:nth-child(3) td:nth-child(2) span").hide();
$(".table-add tr:nth-child(2) td:nth-child(2) span").hide();
$("body").on('click','.fa-plus-square',function(){
    $(this).parent().parent().parent().parent().after($('<table class="table table-add">  <tbody>        <tr>        <td>分期数</td>        <td>            <select class="form-control">                <option value=3>3期</option>                <option value=6>6期</option>                <option value=9>9期</option>            </select>        </td>        <td></td></tr>        <tr>        <td>手续费率</td>        <td>            <span>第一期<input class="form-control" type="text" value="0.75%"></span>           <span>第二期<input class="form-control"type="text" value="0.75%"></span>            <span>第三期<input class="form-control"type="text" value="0.75%"></span>        </td>        <td><i class="fa fa-plus-square"></i></td></tr>        <tr>        <td></td>        <td>            <span>一次性收取<input class="form-control form-control-litle" type="text" value="0.25%"></span>        </td>        <td><i class="fa fa-minus-square"></i></td></tr>   </tbody></table>'));
    if(!$("#stage").prop("checked")){
        $(".table-add tr:nth-child(2) td:nth-child(2) span").hide();
    }
    if(!$("#all").prop("checked")){  
        $(".table-add tr:nth-child(3) td:nth-child(2) span").hide();
    } 
})
$("body").on('click','.fa-minus-square',function(){
    if($(".table-add").length > 1){
        $(this).parent().parent().parent().parent().remove();
    }    
})
$("body").on('change','select',function(){
    var spanl = $($(this).parent().parent().next().children().next()[0]).children("span").length;
    if(spanl > $(this).val()){
        for(var i=0;i<spanl- $(this).val();i++){
            $($($(this).parent().parent().next().children().next()[0]).children("span")[spanl-1-i]).remove();
        }
    }else if(spanl < $(this).val()){
        var str = "";
        if(spanl==3){
            if($(this).val()==6){
                str = $('<span>第四期<input class="form-control" type="text" value="0.75%"></span><span>第五期<input class="form-control"type="text" value="0.75%"></span><span>第六期<input class="form-control"type="text" value="0.75%"></span>');
            }else{
                str = $('<span>第四期<input class="form-control" type="text" value="0.75%"></span><span>第五期<input class="form-control"type="text" value="0.75%"></span><span>第六期<input class="form-control"type="text" value="0.75%"></span><span>第七期<input class="form-control" type="text" value="0.75%"></span><span>第八期<input class="form-control"type="text" value="0.75%"></span><span>第九期<input class="form-control"type="text" value="0.75%"></span>');
            }
            
        }else if(spanl ==6){
            str = $('<span>第七期<input class="form-control" type="text" value="0.75%"></span><span>第八期<input class="form-control"type="text" value="0.75%"></span><span>第九期<input class="form-control"type="text" value="0.75%"></span>');
        }
        $($(this).parent().parent().next().children().next()[0]).append(str);
        if(!$("#stage").prop("checked")){
            $($(this).parent().parent().next().children().next()[0]).children("span").hide();
        }
    };
})