$(function() {
	$( "#datepicker" ).datepicker();
    $( "#datepicker" ).datepicker("option", "dateFormat", "yy-mm-dd");
  
	$( "#datepicker_eg" ).datepicker();
    $( "#datepicker_eg" ).datepicker("option", "dateFormat", "yy-mm-dd");

    $( "#datepicker_pago" ).datepicker();
    $( "#datepicker_pago" ).datepicker("option", "dateFormat", "yy-mm-dd");

    $( "#datepicker_eg_edit" ).datepicker();
    $( "#datepicker_eg_edit" ).datepicker("option", "dateFormat", "yy-mm-dd");
  });


$("#registrar_pago").click(function(){
    var dato1 = $("#id_user").val();
    var dato2 = $("#datepicker").val();
    var dato3 = $("#amount").val();
    var dato4 = $("#status").val();
   
    console.log(dato1);
    console.log(dato2);
    console.log(dato3);
    console.log(dato4);

    var route = "/pagos";
    var token = $("#token").val();

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'POST',
        dataType: 'json',
        data:{id_user: dato1, date: dato2, amount: dato3, status: dato4},

        success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaPagos").load(location.href+" #tablaPagos>*","");
        }

    });

});


function Mostrar_pago(btn){
    var route = "/pagos/"+btn.value+"/edit";

    $.get(route, function(res){
        $("#id_user_pago").val(res.id_user);
        $("#datepicker_pago").val(res.date);
        $("#amount_pago").val(res.amount);
        $("#status_pago").val(res.status);
        $("#id_pago").val(res.id);
    });
}

$("#actualizar_pago").click(function(){
    var dato1 = $("#id_user_pago").val();
    var dato2 = $("#datepicker_pago").val();
    var dato3 = $("#amount_pago").val();
    var dato4 = $("#status_pago").val();
   
    console.log(dato1);
    console.log(dato2);
    console.log(dato3);
    console.log(dato4);

    var value = $("#id_pago").val();
    var route = "/pagos/"+value+"";
    var token = $("#token_pago").val();

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'PUT',
        dataType: 'json',
        data:{id_user: dato1, date: dato2, amount: dato3, status: dato4},


        success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaPagos").load(location.href+" #tablaPagos>*","");
            console.log('hell yeah!');
        }
    });
});

$("#eliminar_pago").click(function(){
    if (confirm("Eliminar este pago?") == true) {
        var value = $("#id_pago").val();
        var route = "/pagos/"+value;
        var token = $("#token_pago").val();

        $.ajax({
            url: route,
            headers: {'X-CSRF-TOKEN': token},
            type: 'DELETE',
            dataType: 'json',
            success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaPagos").load(location.href+" #tablaPagos>*","");
            }
        });
    } else {
    } 
});


 $("#registrar_egresos").on("submit", function(e){
    e.preventDefault();
    var fd = new FormData(this);

    //var dato1 = $("#concept").val();
    //var dato2 = $("#datepicker_eg").val();
    //var dato3 = $("#amount_egresos").val();

    var route = "/egresos";
    var token = $("#token_eg").val();

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'POST',
        dataType: 'json',
        data: fd,
        contentType: false,
        processData: false,

        success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaEgresos").load(location.href+" #tablaEgresos>*","");
        }
    });

});


function Mostrar_egresos(btn){
    var route = "/egresos/"+btn.value+"/edit";

    $.get(route, function(res){
        $("#concept_eg").val(res.concept);
        $("#datepicker_eg_edit").val(res.date);
        $("#amount_eg").val(res.amount);
        $("#id_egresos").val(res.id);
    });
}


$("#eliminar_egresos").click(function(){
    if (confirm("Eliminar este egreso?") == true) {
        var value = $("#id_egresos").val();
        var route = "/egresos/"+value;
        var token = $("#token_eg").val();

        $.ajax({
            url: route,
            headers: {'X-CSRF-TOKEN': token},
            type: 'DELETE',
            dataType: 'json',
            success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaEgresos").load(location.href+" #tablaEgresos>*","");
            }
        });
    } else {
    } 
});