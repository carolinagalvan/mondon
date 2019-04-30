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

function openBlock() {
  document.getElementById("resumen").style.display = "block";
}

function closeBlock() {
  document.getElementById("resumen").style.display = "none";
}

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
    content = $("#results-accesorios").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);


	}

});

$("#results-accesorios").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-comida").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-comida option:selected").html();
  let cantidad = $(".cantidad-comida").val();
	if(item != "Tipo de comida" && Number(cantidad) > 0) {
			$("#results-comida").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-comida").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-comida").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-electronico").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-electronico option:selected").html();
  let cantidad = $(".cantidad-electronico").val();
	if(item != "Tipo de electrónico" && Number(cantidad) > 0) {
			$("#results-electronico").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-electronico").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-electronico").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-juguete").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-juguete option:selected").html();
  let cantidad = $(".cantidad-juguete").val();
	if(item != "Tipo de juguete" && Number(cantidad) > 0) {
			$("#results-juguete").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-juguete").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-juguete").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-libro").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-libro option:selected").html();
  let cantidad = $(".cantidad-libro").val();
	if(item != "Tipo de libros" && Number(cantidad) > 0) {
			$("#results-libro").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-libro").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-libro").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-mobiliario").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-mobiliario option:selected").html();
  let cantidad = $(".cantidad-mobiliario").val();
	if(item != "Tipo de mobiliario" && Number(cantidad) > 0) {
			$("#results-mobiliario").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-mobiliario").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-mobiliario").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-ropa").on("click", function(event) {
	event.preventDefault();
	let item = $("#list-ropa option:selected").html();
  let cantidad = $(".cantidad-ropa").val();
	if(item != "Tipo de prenda" && Number(cantidad) > 0) {
			$("#results-ropa").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center"">
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-ropa").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-ropa").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#add-otro").on("click", function(event) {
	event.preventDefault();
  let item = $("#list-otro option:selected").html();
  let val =$("#list-otro option:selected").val();
  let cantidad = $(".cantidad-otro").val();
	if(item != "Producto" && Number(cantidad) > 0) {
			$("#results-otro").append(`
        <li class="list-group-items d-flex justify-content-between align-items-center" data-value = ${val}>
          <button type="button" id="delete" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          ${item}
          <span class="badge">${cantidad}</span>
        </li>
		`);
    content = $("#results-otro").parent().parent().parent();
    let scroll = content.prop('scrollHeight');
    content.css("max-height", `${scroll}px`);
	}
});

$("#results-otro").on("click", "#delete", function(event) {
	event.preventDefault();
	$(this).parent().remove();
});

$("#admin-btn").on("click", function(event) {
  if($("#user").val() == "" || $("#pswd").val() == "") {
    return false;
  }
});
