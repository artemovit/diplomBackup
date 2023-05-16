const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
    birthday: {type: DataTypes.DATE, allowNull: false},
    card_ID: {type: DataTypes.INTEGER, unique:true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type:DataTypes.STRING, allowNull: false},
})

const Basket = sequelize.define('backet', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketSpect = sequelize.define('backet_spect', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Repertuar = sequelize.define('repertuar', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false}, 
    director: {type: DataTypes.STRING, allowNull: false},
    discription: {type: DataTypes.STRING},
    time: {type: DataTypes.STRING, allowNull: false},
    children: {type: DataTypes.BOOLEAN, defaultValue: false},
    mainPhoto: {type:DataTypes.STRING},//Оставим
    host: {type: DataTypes.BOOLEAN, defaultValue: false},        
})

const Acter = sequelize.define('acter', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, allowNull: false},
    surname: {type:DataTypes.STRING, allowNull:false},
    grade: {type:DataTypes.STRING},
    discription: {type: DataTypes.STRING},
    mainPhoto: {type:DataTypes.STRING},//Оставим
})

const Documents = sequelize.define('document', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    path: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Feedback = sequelize.define('feetback', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique:true, allowNull: false},
    discription: {type: DataTypes.STRING, allowNull: false},
})

const Photos = sequelize.define('photos', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    path: {type: DataTypes.STRING, allowNull: false},
})

const Afisha = sequelize.define('afisha', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    day: {type:DataTypes.DATE, allowNull: false},
    cenz: {type:DataTypes.CHAR, allowNull: false},
    pushka: {type:DataTypes.BOOLEAN, defaultValue: false},
    time:{type:DataTypes.TIME, allowNull: false},
})

const Abonement = sequelize.define('abonement', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    pushka: {type:DataTypes.BOOLEAN, defaultValue: false},
    mainPhoto: {type:DataTypes.STRING, allowNull: false},//Оставим
    discription: {type: DataTypes.STRING, allowNull: false},
})

const RoleArtists = sequelize.define('roleartist', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})


User.hasOne(Basket)
Basket.belongsTo(User)


Basket.hasMany(BasketSpect)
BasketSpect.belongsTo(Basket)



// RoleArtists.hasOne(Repertuar)
// Repertuar.belongsTo(RoleArtists)
// RoleArtists.hasOne(Acter)
// Acter.belongsTo(RoleArtists)

Repertuar.hasOne(RoleArtists)
RoleArtists.belongsTo(Repertuar)
Acter.hasOne(RoleArtists)
RoleArtists.belongsTo(Acter)


// Photos.hasMany(Acter)
// Acter.belongsTo(Photos)
// Photos.hasOne(Repertuar)
// Repertuar.belongsTo(Photos)

Acter.hasMany(Photos)
Photos.belongsTo(Acter)
Repertuar.hasOne(Photos)
Photos.belongsTo(Repertuar)

//Afisha.hasOne(Repertuar)
//Repertuar.belongsTo(Afisha)

Repertuar.hasOne(Afisha)
Afisha.belongsTo(Repertuar)


// Abonement.hasMany(Repertuar)
// Repertuar.belongsTo(Abonement)

Repertuar.hasMany(Abonement)
Abonement.belongsTo(Repertuar)

module.exports = {
    User, Basket, BasketSpect, Repertuar, Acter, Documents, Feedback, Photos, Afisha, Abonement, RoleArtists
}



