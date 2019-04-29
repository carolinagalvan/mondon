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
$('#buscar-org').on('submit', function(event){
  let donacion = [];
  if ($('#results-accesorios').html != ""){
    donacion.push("accesorios");
  }
  if ($('#results-comida').html != ""){
    donacion.push("comida");
  }
  if ($('#results-electronicos').html != ""){
    donacion.push("electronicos")
  }
  if ($('#results-juguetes').html != ""){
    donacion.push("juguetes")
  }
  if ($('#results-libros').html != ""){
    donacion.push("libros")
  }
  if ($('#results-mobiliario').html != ""){
    donacion.push("mobiliario")
  }
  if ($('#results-ropa').html != ""){
    donacion.push("ropa")
  }
  if ($('#results-otro').html != ""){
    var listItems = $("#results-otro li");
    listItems.each(function(li) {
      
    });
  }

  console.log(donacion);
  getOrgForDonation(donacion);

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
