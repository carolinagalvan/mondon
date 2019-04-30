const express = require('express');
const router = express.Router();
const {ListUsers} = require('./model');
const {ListOrgs} = require('./model');
const {ListTestimonies} = require('./model');

// End points for USERS
router.get('/list-users', (req, res, next) => {
    ListUsers.get()
        .then(users => {
            res.status(200).json({
                message: 'Successfully sending users.',
                status: 200,
                users: users
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error.',
                status: 500
            });
            return next();
        });
});

router.get('/list-users/:id', (req, res, next) => {
    let userId = req.params.id;

    ListUsers.getId(userId)
        .then(user => {
            res.status(200).json({
                message : "Found the user.",
                status : 200,
                user : user
            });
        })
        .catch(err => {
            res.status(404).json({
                message : "User not found in the list.",
                status : 404
            });
            return next();
        });
});

// End points for ORGANIZATIONS
router.get('/list-orgs', (req, res, next) => {
    ListOrgs.get()
        .then(orgs => {
            res.status(200).json({
                message: 'Successfully sending organizations.',
                status: 200,
                orgs: orgs
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error.',
                status: 500
            });
            return next();
        });
});

router.get('/list-orgs/:item', (req, res, next) => {
    ListOrgs.orgsForDonation(req.params.item)
        .then(orgs => {
            res.status(200).json({
                message: 'Successfully sending organizations that accept that item.',
                status: 200,
                orgs: orgs
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error.',
                status: 500
            });
            return next();
        });
});


// End points for TESTIMONIES
router.get('/list-testimonies', (req, res, next) => {
    ListTestimonies.get()
        .then(testimonies => {
            res.status(200).json({
                message: 'Successfully sending testimonies.',
                status: 200,
                testimonies: testimonies
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 'Internal server error.',
                status: 500
            });
            return next();
        });
});

router.post('/post-testimony', (req, res, next) => {
	let requiredFields = ['nombre', 'organizacion', 'mensaje', 'rating'];

	for (let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			});
			return next();
		}
	}

    let objectToAdd = {
        nombre: req.body.nombre,
        organizacion: req.body.organizacion,
        mensaje: req.body.mensaje,
        rating: req.body.rating
    };
		
    ListTestimonies.post(objectToAdd)
        .then(testimony => {
            res.status(201).json({
                message : "Successfully added the testimony.",
                status : 201,
                testimony : testimony
            });
        })
        .catch( err => {
            res.status(500).json({
                message : `Internal server error.`,
                status : 500
            });
            return next();
        });
});

router.put('/update-testimony/:id', (req, res, next) => {
	let tId = req.params.id;
    let newName = req.body.nombre;
    let newOrg = req.body.organizacion;
    let newMessage = req.body.mensaje;
    let newRating = req.body.rating;

    if(newName && newMessage){
        ListTestimonies.update(tId, newName, newOrg, newMessage, newRating)
        .then(testimony => {
            res.status(200).json({
                message : "Successfully updated the testimony.",
                status : 200,
                testimony : testimony
            });
        })
        .catch( err => {
            res.status(404).json({
                message : "Testimony not found in the list.",
                status : 404
            });
            return next();
        });
    }
    // else if(newName){
    //     ListTestimonies.updateName(tId, newName)
    //     .then(testimony => {
    //         res.status(200).json({
    //             message : "Successfully updated the testimony.",
    //             status : 200,
    //             testimony : testimony
    //         });
    //     })
    //     .catch( err => {
    //         res.status(404).json({
    //             message : "Testimony not found in the list.",
    //             status : 404
    //         });
    //         return next();
    //     });
    // }
    // else if(newMessage){
    //     ListTestimonies.updateMessage(tId, newMessage)
    //     .then(testimony => {
    //         res.status(200).json({
    //             message : "Successfully updated the testimony.",
    //             status : 200,
    //             testimony : testimony
    //         });
    //     })
    //     .catch( err => {
    //         res.status(404).json({
    //             message : "Testimony not found in the list.",
    //             status : 404
    //         });
    //         return next();
    //     });
    // }
    else{
        res.status(404).json({
            message : "At least one field of the testimony needs to be updated.",
            status : 404
        });
        return next();
    }
	
});

router.delete('/delete-testimony/:id', (req, res, next) => {	
	let tId = req.params.id;
	
	ListTestimonies.delete(tId)
		.then(testimony => {
			res.status(200).json({
				message : "Successfully deleted the testimony.",
				status : 200,
				testimony : testimony
			});
		})
		.catch(err => {
			res.status(404).json({
				message : "Testimony not found in the list.",
				status : 404
			});
			return next();
		});
});

module.exports = router;
