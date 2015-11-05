$("#registrar").click(function(){
    var dato1 = $("#concept1").val();
    var dato2 = $("#address1").val();
    var dato3 = $("#phone_num1").val();
    var dato4 = $("#category1").val();
    var route = "/utiles";
    var token = $("#token1").val();

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'POST',
        dataType: 'json',
        data:{concept: dato1, address: dato2, phone_num: dato3, category: dato4},

        success:function(){
            //$("#msj-success").fadeIn();
             $("#tablaUtiles").load(location.href+" #tablaUtiles>*","");
        }

    });
});


function Mostrar(btn){
    var route = "/utiles/"+btn.value+"/edit";
    $.get(route, function(res){
        $("#concept").val(res.concept);
        $("#address").val(res.address);
        $("#phone_num").val(res.phone_num);
        $("#category").val(res.category);
        $("#id").val(res.id);
    });
}

$("#actualizar").click(function(){
    var value = $("#id").val();
    var dato1 = $("#concept").val();
    var dato2 = $("#address").val();
    var dato3 = $("#phone_num").val();
    var dato4 = $("#category").val();

    var route = "/utiles/"+value+"";
    var token = $("#token").val();

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'PUT',
        dataType: 'json',
        data:{concept: dato1, address: dato2, phone_num: dato3, category: dato4},

        success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaUtiles").load(location.href+" #tablaUtiles>*","");
        }

    });
});

$("#eliminar").click(function(){
    var value = $("#id").val();
    var route = "/utiles/"+value+"";
    var token = $("#token").val();

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'DELETE',
        dataType: 'json',
        success:function(){
            $("#msj-success").fadeIn();
            $("#tablaUtiles").load(location.href+" #tablaUtiles>*","");
        }

    });
});


var file_noti;

function Mostrar_noticia(btn){
    var route = "noticia/"+btn.value+"/edit";

    $.get(route, function(res){
        $("#titulo1").val(res.titulo);
        $("#contenido1").val(res.texto);
        file_noti = res.path;
        $("#id_noti_1").val(res.id);
    });
}


$("#registrar_noticia").on("submit", function(e){
    e.preventDefault();
    var fd = new FormData(this);

    var route = "/noticia";
    var token = $("#token").val();

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
            $("#tablaNoticias").load(location.href+" #tablaNoticias>*","");
        }
    });

});

$("#actualizar_noticia").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);

    var value = $("#id_noti_1").val();
    var dato1 = $("#titulo1").val();
    var dato2 = $("#contenido1").val();
    var dato3 = $("#path1").val();
    console.log(dato3);
    console.log("file_noti:" + file_noti);

    var route = "/noticia/"+value+"";
    var token = $("#token_noti_1").val();

    if(dato3 == ""){
        dato3 = file_noti;
    }

    console.log(dato3);

    //formData.append('path', dato3);

    $.ajax({
        url: route,
        headers: {'X-CSRF-TOKEN': token},
        type: 'PUT',
        dataType: 'json',
        data:formData,
        contentType: false,
        processData: false,

        success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaNoticias").load(location.href+" #tablaNoticias>*","");
            console.log('hell yeah!');
        }
    });

});


$("#eliminar_noticia").click(function(){
    if (confirm("Eliminar esta Noticia?") == true) {
        var value = $("#id_noti_1").val();
        var route = "/noticia/"+value;
        var token = $("#token_noti_1").val();

        $.ajax({
            url: route,
            headers: {'X-CSRF-TOKEN': token},
            type: 'DELETE',
            dataType: 'json',
            success:function(){
            //$("#msj-success").fadeIn();
            $("#tablaNoticias").load(location.href+" #tablaNoticias>*","");
            }
        });
    } else {
    } 
});
