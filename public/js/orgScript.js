// Functions for Organization endpoints

// Display all Organizations
function displayOrganizations(data){
    console.log(data);
    for(let i = 0; i < data.orgs.length; i++){
        
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