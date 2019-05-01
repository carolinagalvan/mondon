// Verify login
function verifyLogin(data){
    let userLogin = $('#user').val();
    let pswdLogin = $('#pswd').val();
    let valid = false;
    console.log(userLogin);
    console.log(data.users[0].id);
    console.log(pswdLogin);
    console.log(data.users[0].password);

    for(let i = 0; i < data.users.length; i++){
        if(data.users[i].id == userLogin && data.users[i].password == pswdLogin){
            valid = true;
        }
    }
    
    if (valid){
        window.location.replace("testimonies-admin.html");
    }else{
        alert("Incorrect user or password.");
    }
}

// Get all users
function getUsers(){
    let url = `./mondon/api/list-users`;
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
            verifyLogin(responseJSON);
        });
}

$('#admin-btn').on('click', function(event){
    $(getUsers);
});