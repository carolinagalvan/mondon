// Display all Testimonies
var imageNum;

function displayTestimonies(data){
    console.log(data);
    imageNum = 1;
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
  		$('#testimonio').append(`
  			<div class="w3-quarter">
  				<div class="w3-card w3-white">
  					<img src="./img/client${imageNum}.jpg" alt="client-img" style="width:100%">
  					<div class="w3-container">
  						<h3>${data.testimonies[i].nombre}</h3>
  						<h5>${data.testimonies[i].organizacion}</h5>
  						<p>${data.testimonies[i].mensaje}</p>
  						<p>${rate}</p>
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


function init(){
	$(getTestimonies);
}

$(init);
