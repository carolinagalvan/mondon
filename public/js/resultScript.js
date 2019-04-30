var resultOrgs = [];
// Display result organizations
function displayResultOrgs(data){
    console.log("ESTOY EN DISPLAY RESULTS");
    console.log(data);
    for(let i = 0; i < data.orgs.length; i++){
        if(!(data.orgs[i].id in resultOrgs)){
            console.log("ENTRE AL IF");
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

function displayResults(donacion){
    console.log("EN RESULT SCRIPT");
    window.location.href = '../result.html';
    console.log(donacion);
    donacion.forEach(element => {
        getOrgForDonation(element);
    });
}
