var resultOrgs = [];
// Display result organizations
function displayResultOrgs(data){
    for(let i = 0; i < data.orgs.length; i++){
        console.log(resultOrgs);
        if(!(data.orgs[i].id in resultOrgs)){
            $('#result-list').append(`
                <div class="col-md-5 block" style="border: 5px solid #eee; margin: 20px">
                    <a href="${data.orgs[i].url}" target="_blank"><img src="${data.orgs[i].imagenURL}" alt="img-org" class="org-img w3-hover-opacity" style="height: 150px; width: 150px" /></a>
                    <div class="org">
                        <h4 class="org-nombre"><a href="${data.orgs[i].url}" target="_blank">${data.orgs[i].nombre}</a></h4>
                        <p>${data.orgs[i].descripcion}</p>
                        <pre class="org-info"><img src="./img/email.png" alt="Correo" width="25" height="20">   ${data.orgs[i].correo}</pre>
                        <pre class="org-info"> <img src="./img/phone.png" alt="Telefono" width="20" height="20">    ${data.orgs[i].telefono}</pre>
                        <pre class="org-info">${data.orgs[i].direccion}</pre>
                    </div>
                </div>
            `);
            resultOrgs.push(data.orgs[i].id);
        }
    }
}

// Get organizations who accept certain donation
function getOrgForDonation(item){
    let url = `./mondon/api/list-orgs/${item}`;
    let settings = {
        method : "GET",
        headers : {
            'Content-Type' : 'application/json'
        }
    };

    fetch(url, settings)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw Error(response.statusText);
        })
        .then(responseJSON => {
            displayResultOrgs(responseJSON);  
        })
        .catch(err => {
			console.log(err);
		});
}


// Get Result Organization
$('#buscar-org').on('click', function(event){
    donacion = [];
    if ($('#results-accesorios li').toArray().length > 0){
      donacion.push("accesorios");
    }
    if ($('#results-comida li').toArray().length > 0){
      donacion.push("alimentos");
    }
    if ($('#results-electronico li').toArray().length > 0){
      donacion.push("electronicos");
    }
    if ($('#results-juguete li').toArray().length > 0){
      donacion.push("juguetes");
    }
    if ($('#results-libro li').toArray().length > 0){
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
          donacion.push($(item).attr('data-value'));
      });
    }
    
    donacion.forEach(element => {
        getOrgForDonation(element);
    });

  });
