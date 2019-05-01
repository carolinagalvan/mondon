var imageNum;

// Display all Testimonies
function displayTestimonies(data){
  imageNum = 1;
    $('#testimonio-list').html("");
    for(let i = 0; i < data.testimonies.length; i++){
  		var rate;
  		if (data.testimonies[i].rating == 1){
  			rate = "★";
  		}else if (data.testimonies[i].rating == 2){
  			rate = "★★";
  		}else if (data.testimonies[i].rating == 3){
  			rate = "★★★";
  		}else if (data.testimonies[i].rating == 4){
  			rate = "★★★★";
  		}else if (data.testimonies[i].rating == 5){
  			rate = "★★★★★";
  		}
  		$('#testimonio-list').append(`
  			<div class="w3-quarter">
  				<div class="w3-card w3-white">
  					<img src="./img/client${imageNum}.jpg" alt="client-img" style="width:100%">
  					<div class="w3-container">
  						<h3>${data.testimonies[i].nombre}</h3>
  						<h5>${data.testimonies[i].organizacion}</h5>
  						<p>${data.testimonies[i].mensaje}</p>
  						<p>${rate}</p>
  						<span>${data.testimonies[i]._id}</span>
  						<hr>
  						<button type="button" class="editar-testimonio" data-toggle="modal" data-target="#modalEditar"><img src="img/edit.png" alt="editar" width="35" height="30" align="right"></button>
  						<button type="button" class="borrar-testimonio" data-toggle="modal" data-target="#modalBorrar"><img src="img/delete.png" alt="borrar" width="35" height="30" align="right"></button>
  					</div>
  				</div>
  			</div>
  		`);

      imageNum += 1;
      if(imageNum == 17) {
        imageNum = 1;
      }
    }
}



// Update Testimonies
function updateTestimonies(data){
	var rate;

	if (data.testimony.rating == 1){
		rate = "★";
	}else if (data.testimony.rating == 2){
		rate = "★★";
	}else if (data.testimony.rating == 3){
		rate = "★★★";
	}else if (data.testimony.rating == 4){
		rate = "★★★★";
	}else if (data.testimony.rating == 5){
		rate = "★★★★★";
	}
	$('#testimonio-list').append(`
		<div class="w3-quarter">
			<div class="w3-card w3-white">
				<img src="./img/client${imageNum}.jpg" alt="client-img" style="width:100%">
				<div class="w3-container">
					<h3>${data.testimony.nombre}</h3>
					<h5>${data.testimony.organizacion}</h5>
					<p>${data.testimony.mensaje}</p>
					<p>${rate}</p>
					<span>${data.testimony._id}</span>
					<hr>
					<button type="button" class="editar-testimonio" data-toggle="modal" data-target="#modalEditar"><img src="img/edit.png" alt="editar" width="35" height="30" align="right"></button>
					<button type="button" class="borrar-testimonio" data-toggle="modal" data-target="#modalBorrar"><img src="img/delete.png" alt="borrar" width="35" height="30" align="right"></button>
				</div>
			</div>
		</div>
	`);

  imageNum += 1;
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
function createTestimony(name, org, message, rating){
	let data = {
		nombre : name,
        organizacion : org,
        mensaje : message,
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
function changeTestimony(id, name, org, message, rating){
    let url = `./mondon/api/update-testimony/${id}`;
    let data = {
        nombre : name,
        organizacion : org,
        mensaje : message,
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
            $(getTestimonies);
        })
        .catch(err => {
            alert(err.message);
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
			getTestimonies();
		})
		.catch(err => {
			console.log(err);
		});
}

function watchForm(){
	$('#agregar-btn').on('click', function(event){
		event.preventDefault();
		let name = $("#inputNombre").val();
		let org = $("#inputOrg").val();
		let message = $("#textareaTestimonio").val();
		let rating = $('#list-rating option:selected').val();
		if(name == "" || org == "" || message == "" || rating == "default"){
			$(".alert").show();
		}else{
			createTestimony(name, org, message, rating);
			$('#modalResumen').modal('toggle');
		}
	});

	$('#borrar-btn').on('click', function(event){
		event.preventDefault();
        let id = $('#borrarId').val();

		if(id == ""){
			$(".alert").show();
		}
		else{
            deleteTestimony(id);
			$('#modalBorrar').modal('toggle');
		}
	});

	$('#modificar-btn').on('click', function(event){
    event.preventDefault();
    let id = $('#tId').val();



		let name = $("#nuevoNombre").val();
		let org = $("#nuevaOrg").val();
		let message = $("#nuevoTestimonio").val();
		let rating = parseInt($('#nuevo-rating option:selected').val());


		if(name == "" || org == "" || message == "" || rating == "default"){
			$(".alert").show();
		}
		else{
            changeTestimony(id, name, org, message, rating);
			$('#modalEditar').modal('toggle');
		}

	});
}

function init(){
	$(getTestimonies);
	$(watchForm);
}

$(init);
