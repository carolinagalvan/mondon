// Functions for Testimony endpoints

// Display all Testimonies
function displayTestimonies(data){
    console.log(data);
    for(let i = 0; i < data.testimonies.length; i++){
        
    }
}

// Update Testimonies
function updateTestimonies(data){
    console.log(data);
}


// Load all testimonies
function getTestimonies(){
    let url = `./mondon/api/list-testimonies`;
    let settings = {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    fetch(url, settings)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw Error(response.statusText);
        })
        .then(responseJSON => {
            displayTestimonies(responseJSON);
        });
}

// Add a new testimony
function addNewTestimony(name, org, message, rating){
	let data = {
		nombre : name,
		mensaje : message,
		orgganizacion : org,
		rating : rating
	};

	let url = './mondon/api/post-testimony';
	let settings = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    };

	fetch(url, settings)
		.then(response => {
			if (response.ok){
				return response.json();
			}
			else{
				return new Promise(function(resolve, reject){
					resolve(response.json());
				})
				.then(data =>{
					throw new Error(data.message);
				});
			}
		})
		.then(responseJSON => {
			updateTestimonies(responseJSON);
		})
		.catch(err => {
			console.log(err);
		});
}

// Update a testimony (admins only)
function updateTestimony(id, name, org, message, rating){
    let url = `./mondn/api/update-testimony/${id}`;
    let data = {
		nombre : name,
		mensaje : message,
		orgganizacion : org,
		rating : rating
	};
    let settings = {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    }

    fetch(url, settings)
		.then(response => {
			if (response.ok){
				return response.json();
			}
			else{
				return new Promise(function(resolve, reject){
					resolve(response.json());
				})
				.then(data =>{
					throw new Error(data.message);
				});
			}
		})
		.then(responseJSON => {
			$(displayTestimonies);
		})
		.catch(err => {
			console.log(err);
		});
}

// Delete a testimony (admins only)
function deleteTestimony(id){
    let url = `./mondon/api/delete-testimony/${id}`;
    let settings = {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    
    fetch(url, settings)
		.then(response => {
			if (response.ok){
				return response.json();
			}
			else{
				return new Promise(function(resolve, reject){
					resolve(response.json());
				})
				.then(data =>{
					throw new Error(data.message);
				});
			}
		})
		.then(responseJSON => {
			$(displayTestimonies);
		})
		.catch(err => {
			console.log(err);
		});
}

function watchForm(){
    
}

function init(){
	$(getTestimonies);
	$(watchForm);
}

$(init);