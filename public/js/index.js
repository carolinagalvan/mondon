$('#categories').on('click', '.collapsible', function(event){
    event.preventDefault();
    let category = $(this)
    category.toggleClass('activeColl')

    var content = category.next();

    if (content.css('max-height') != '0px'){
      content.css('max-height', '0px');
    }
    else{
      let scroll = content.prop('scrollHeight');
      content.css("max-height", `${scroll}px`);
    }
});


$('#categories').on('click', '.addProduct', function(event){
    event.preventDefault();
    let content = $(this).parent()
    let my_proudcts = content.find('div');
    my_proudcts.append('<p>Producto: <input type="text"/> Cantidad: <input type="text"/></p>')
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
});

// Script to open and close sidebar
function open() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function close() {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$(function () {
  $('[data-toggle="popover"]').popover()
})

// Get Result Organization
$('#buscar-org').on('click', function(event){
  donacion = [];
  if ($('#results-accesorios li').toArray().length > 0){
    donacion.push("accesorios");
  }
  if ($('#results-comida li').toArray().length > 0){
    donacion.push("alimentos");
  }
  if ($('#results-electronicos li').toArray().length > 0){
    donacion.push("electronicos");
  }
  if ($('#results-juguetes li').toArray().length > 0){
    donacion.push("juguetes");
  }
  if ($('#results-libros li').toArray().length > 0){
    donacion.push("libros");
  }
  if ($('#results-mobiliario li').toArray().length > 0){
    donacion.push("mobiliario");
  }
  if ($('#results-ropa li').toArray().length > 0){
    donacion.push("ropa");
  }
  var listItems = $('#results-otro li').toArray();
  if (listItems.length > 0){
    listItems.forEach(item => {
      if($(item).text() == "Artículos de higiene"){
        donacion.push("higiene");
      }
      else if($(item).text() == "Artículos de limpieza"){
        donacion.push("limpieza");
      }
      else if($(item).text() == "Medicamentos"){
        donacion.push("medicamento");
      }
    });
  }

  displayResults(donacion);

});

$("#add-accesorio").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-accesorio option:selected").html();
  let cantidad = $(".cantidad-accesorio").val();
	if(item != "Tipo de accesorio" && Number(cantidad) > 0) {
			$("#results-accesorios").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
	}
})

$("#results-accesorios").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});
