$("body").on('click','.fa-plus-square',function(){
    $(this).parent().parent().parent().parent().after($('<table class="table table-add"> <tbody> <tr> <td>分期数</td> <td> <select class="form-control"> <option>3期</option> <option>6期</option> <option>9期</option> </select> </td> <td></td></tr> <tr> <td>手续费率</td> <td> <span>第一期<input class="form-control" type="text" value="0.75%"></span> <span>第二期<input class="form-control" type="text" value="0.75%"></span> <span>第三期<input class="form-control" type="text" value="0.75%"></span> </td> <td><i class="fa fa-plus-square"></i></td></tr> <tr> <td>手续费承担方</td> <td> <select class="form-control"> <option>商家</option> <option selected="selected">个人用户</option> <option>免息</option> </select> </td> <td><i class="fa fa-minus-square"></i></td></tr> <tr> <td>服务费承担方</td> <td> <select class="form-control"> <option selected="selected">商家</option> <option>个人用户</option> <option>银行</option> </select> 服务费 <select class="form-control"> <option selected="selected">固定费率</option> </select> <span><input class="form-control text-controle" type="text"></span>元/单 </td> <td></td></tr> </tbody> </table>'));
})
$("body").on('click','.fa-minus-square',function(){
    if($(".table-add").length > 1){
        $(this).parent().parent().parent().parent().remove();
    }    
})