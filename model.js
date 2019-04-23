const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Schema (collection) for Users
let userSchema = mongoose.Schema({
    id : {type: Number, required: true, unique: true},
    password : {type: Number, required: true, unique: true}
});

// Schema (collection) for Organizations
let orgSchema = mongoose.Schema({
    id : {type: Number, required: true, unique: true},
    nombre : {type: String, required: true},
    url : {type: String},
    descripcion : {type: String, required: true},
    correo : {type: String},
    telefono : {type: String},
    direccion :  {type: String},
    imagenURL : {type: String, required: true},
    donativos : [String]
});

// Schema (collection) for Testimonies
let testimoniesSchema = mongoose.Schema({
    nombre : {type: String, required: true},
    mensaje : {type: String, required: true}
});

// Instancees of the database
let Users = mongoose.model('Users', userSchema);
let Orgs = mongoose.model('Organizations', orgSchema);
let Testimonies = mongoose.model('Testimonies', testimoniesSchema);

// Functions for schemas
const ListUsers = {
    get : function(){
        return Users.find()
            .then(users => {
                return users;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
    getId : function(userId){
        return Users.findOne({_id: userId})
            .then(user => {
                return user;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
}

const ListOrgs = {
    get : function(){
        return Orgs.find()
            .then(org => {
                return org;
            })
            .catch(err => {
                throw new Error(err);
            });
    }
}

const ListTestimonies = {
    get : function(){
        return Testimonies.find()
            .then(testimony => {
                return testimony;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
    post : function(newT){
        return Testimonies.create(newT)
            .then(testimony => {
                return testimony;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
    update : function (tId, newName, newMessage){
        return Testimonies.findByIdAndUpdate({_id: tId}, {$set:{nombre: newName, mensaje: newMessage}})
            .then(testimony => {
                return testimony;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
    updateName : function (tId, newName){
        return Testimonies.findByIdAndUpdate({_id: tId}, {$set:{nombre: newName}})
            .then(testimony => {
                return testimony;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
    updateMessage : function (tId, newMessage){
        return Testimonies.findByIdAndUpdate({_id: tId}, {$set:{mensaje: newMessage}})
            .then(testimony => {
                return testimony;
            })
            .catch(err => {
                throw new Error(err);
            });
    },
    delete : function(tId){
        return Testimonies.deleteOne({_id: tId})
            .then(testimony => {
                return testimony;
            })
            .catch(err => {
                throw new Error(err);
            });
    }
}

module.exports = {ListUsers, ListOrgs, ListTestimonies}