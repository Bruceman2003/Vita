$(document).ready(function () {

    const business_name = "Amazon";


    $('img').elevateZoom({
        scrollZoom: true
    });

})

function getIMC(weight, height) { //height in meters //Indice de masa corpora

    var imc = 0;
    if (height != 0) {
        imc = weight / (height * height);
    }
    return imc;
}

function getPI(height) {

    var h = height * 100;//height in centimeters

    var pi = h - 100 - ((h - 150) / 4);

    return pi;
}

function getPI_Broca(height) {//Índice Broca
    var pi = height - 100;//height in centimeters
    return pi;
}


function getPI_MLIC(height) {//Metropolitan Life Insurance Company
    var pi = 50 + (0.75 * (height  - 150)) ;//height in centimeters
    return pi;
}

function getPI_Lorentz(height, sex) {//Lorentz
    if(sex =="m"){//male
        var pi = (height  - 100) - (height - 150) / 4 ;//height in centimeters
    }else{
        var pi = (height  - 100) - (height - 150) / 2 ;//height in centimeters
    }
    return pi;
}

$(document).on('keyup mouseup', ".height", function () {
    console.log("entre");
    var height = $(this).val();
    var tr = $(this).closest('tr');
    var weight = tr.find('.weight').val();
    var imc = tr.find('.imc');
    var value = getIMC(weight, height);
    var category = getIMCCategory(value);
    imc.text(value.toFixed(2));
    imc.attr("data-value", value);
    imc.attr("title", category);
});

$(document).on('click', ".header", function () {
    console.log("entre");

    var parent = $(this).closest(".user_row");
    var body = parent.find(".body");
    if (body.is(":visible")) {

        body.slideUp();

    } else {

        body.slideDown();

    }

});

$(document).on('keyup mouseup', ".weight", function () {
    var weight = $(this).val();
    var tr = $(this).closest('tr');
    var height = tr.find('.height').val();
    var imc = tr.find('.imc');
    var value = getIMC(weight, height);
    var category = getIMCCategory(value);
    imc.text(value.toFixed(2));
    imc.attr("data-value", value);
    imc.attr("title", category);

});

function getIMCCategory(imc) {
    var category = "";

    if (imc < 16.00)
        category = "Infrapeso: Delgadez Severa";
    else
    if (imc < 16.99)
        category = "Infrapeso: Delgadez moderada";
    else
    if (imc < 18.49)
        category = "Infrapeso: Delgadez aceptable";
    else
    if (imc < 24.99)
        category = "Peso Normal";
    else
    if (imc < 24.99)
        category = "Sobrepeso";
    else
    if (imc < 34.99)
        category = "Obeso: Tipo I";
    else
    if (imc < 40.00)
        category = "Obeso: Tipo II";
    else
        category = "Obeso: Tipo III";

    return category;

}

function confirmDialog(item) {
    $.confirm({
        theme: 'dark',
        type: 'orange',
        icon: 'fa fa-warning',
        title: 'Advertencia!',
        content: '¿Está seguro de que desea eliminar?',
        buttons: {

            cancel: {
                text: 'Cancelar',
                btnClass: 'btn-secondary',
                action: function () {
                    $.alert('Canceled!');
                }
            },
            confirm: {
                text: 'Eliminar',
                btnClass: 'btn-primary',
                keys: ['enter', 'shift'],
                action: function () {
                    var cart = item.closest('table');
                    var block = item.closest('tr');
                    block.remove();
                    getTotalSale(cart);
                }
            }
        }
    });
};




function user_row() {

   var value= {
       id: "",
       name: "",
       gender: "",
       profession: "",
       birthday: "",


    };
 


    var row = '';
    row += '<div class="user_row">';
    row += '<div class="row header">';
    row += '<div class="col">';
    row += '<label data-toggle="tooltip" data-placement="top" title="'+value["id"]+'">'+value["id"]+'</label>';
    row += '</div>';
    row += '<div class="col">';
    row += '<label data-toggle="tooltip" data-placement="top" title="'+ value["name"]+'">'+ value["name"]+'</label>';
    row += '</div>';
    row += '<div class="col">';
    row += '<label data-toggle="tooltip" data-placement="top" title="'+value["gender"]+'">'+value["gender"]+'</label>';
    row += '</div>';
    row += '<div class="col">';
    row += '<label data-toggle="tooltip" data-placement="top" title="'+value["profession"]+'">'+value["profession"]+'</label>';
    row += '</div>';
    row += '<div class="col">';
    row += '<label data-toggle="tooltip" data-placement="top" title="Ninguno">Ninguno</label>';
    row += '</div>';
    row += '<div class="col">';
    row += '<label data-toggle="tooltip" data-placement="top" title="'+value["birthday"]+'">'+value["birthday"]+'</label>';
    row += '</div>';
    row += '</div>';
    row += '<div class="row body">';
    row += '<div class="col">';
    row += '<table class="table table-dark table-striped table-hover">';
    row += '<thead>';
    row += '<tr>';
    row += '<th>Peso (kg)</th>';
    row += '<th>Talla (m)</th>';
    row += '<th>Cuello</th>';
    row += '<th>Cintura</th>';
    row += '<th>Cadera</th>';
    row += '<th>Brazo</th>';
    row += '<th>Muñeca</th>';
    row += '<th>PA</th>';
    row += '<th>FC y FR</th>';
    row += '<th>IMC </th>';
    row += '<th>PI</th>';
    row += '<th>MG (%)</th>';
    row += '<th>Agua (%)</th>';
    row += '<th>MM (%)</th>';
    row += '<th>Edad</th>';
    row += '<th>Fecha</th>';
    row += '<th style="font-size: 20px;text-align: center;cursor:pointer;">';
    row += '<i class="fa fa-plus-circle" data-toggle="tooltip" data-placement="right" title="Nuevo" style="color:#007bff;"></i>';
    row += '</th>';
    row += '</tr>';
    row += '</thead>';
    row += '<tbody>';
    row += '<tr>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="43">43</label>';
    row += '<i class="fa fa-angle-double-up" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:green;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="21.3">21.3</label>';
    row += '<i class="fa fa-angle-double-down" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:red;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="Sobrepeso">180</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="80">80</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="55">55</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="55">55</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="88">88</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="150/20">150/20</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="180/30">180/30</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="92">92</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="55">55</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="33">33</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="39">39</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="38">38</label>';
    row += '<i class="fa fa-dot-circle" data-toggle="tooltip" data-placement="right" title="18.5%" style="color:white;"></i>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="92">92</label>';
    row += '</td>';
    row += '<td>';
    row += '<label data-toggle="tooltip" data-placement="top" title="12/Enero/2018">12/01/18</label>';
    row += '</td>';
    row += '<td>';
    row += '<i class="fa fa-times-circle" data-toggle="tooltip" data-placement="right" title="Eliminar" style="color:red;"></i>';
    row += '<i class="fa fa-check-circle" data-toggle="tooltip" data-placement="right" title="Guardar" style="color:green;"></i>';
    row += '<i class="fa fa-pencil" data-toggle="tooltip" data-placement="right" title="Editar" style="color:yellow;"></i>';
    row += '</td>';
    row += '</tr>';
    row += '</tbody>';
    row += '<tfoot>';
    row += '<tr>';
    row += '<th>Peso (kg)</th>';
    row += '<th>Talla (m)</th>';
    row += '<th>Cuello</th>';
    row += '<th>Cintura</th>';
    row += '<th>Cadera</th>';
    row += '<th>Brazo</th>';
    row += '<th>Muñeca</th>';
    row += '<th>PA</th>';
    row += '<th>FC y FR</th>';
    row += '<th>IMC </th>';
    row += '<th>PI</th>';
    row += '<th>MG (%)</th>';
    row += '<th>Agua (%)</th>';
    row += '<th>MM (%)</th>';
    row += '<th>Edad</th>';
    row += '<th>Fecha</th>';
    row += '</tr>';
    row += '</tfoot>';
    row += '</table>';
    row += '</div>';
    row += '</div>';
    row += '</div>';
}