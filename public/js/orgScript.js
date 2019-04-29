// Functions for Organization endpoints

// Display all Organizations
function displayOrganizations(data){
    console.log(data);
    for(let i = 0; i < data.orgs.length; i++){
        $('.lista').append(`
            <div class="col-md-5 block" style="border: 5px solid #eee; margin: 20px">
                <a href="${data.orgs[i].url}" target="-blank"><img src="${data.orgs[i].imagenURL}" alt="img-org" class="org-img w3-hover-opacity" style="height: 150px; width: 150px" /></a>
                <div class="org">
                    <h4 class="org-nombre"><a href="${data.orgs[i].url}" target="-blank">${data.orgs[i].nombre}</a></h4>
                    <p>${data.orgs[i].descripcion}</p>
                    <pre class="org-info"><img src="./img/email.png" alt="Correo" width="25" height="20">   ${data.orgs[i].correo}</pre>
                    <pre class="org-info"> <img src="./img/phone.png" alt="Telefono" width="20" height="20">    ${data.orgs[i].telefono}</pre>
                    <pre class="org-info">${data.orgs[i].direccion}</pre>
                </div>
            </div>
        `);
    }
}

// Load all Organizations
function getOrganizations(){
    let url = "./mondon/api/list-orgs";
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
            displayOrganizations(responseJSON);
        });
}

function init(){
	$(getOrganizations);
}

$(init);