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
