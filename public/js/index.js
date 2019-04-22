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