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

const Repertuar = sequelize.define('repertuar', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: false}, 
    director: {type: DataTypes.STRING, allowNull: false},
    discription: {type: DataTypes.STRING},
    time: {type: DataTypes.STRING, allowNull: false},
    children: {type: DataTypes.BOOLEAN, defaultValue: false},
    mainPhoto: {type:DataTypes.STRING},
    host: {type: DataTypes.BOOLEAN, defaultValue: false},        
})

const Acter = sequelize.define('acter', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, allowNull: false},
    surname: {type:DataTypes.STRING, allowNull:false},
    grade: {type:DataTypes.STRING},
    discription: {type: DataTypes.STRING},
    mainPhoto: {type:DataTypes.STRING},
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
})

const Abonement = sequelize.define('abonement', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    pushka: {type:DataTypes.BOOLEAN, defaultValue: false},
    mainPhoto: {type:DataTypes.STRING, allowNull: false},
    discription: {type: DataTypes.STRING, allowNull: false},
})

const RoleArtists = sequelize.define('roleartist', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
})

const News = sequelize.define('news', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    discription: {type: DataTypes.STRING},
    mainPhoto: {type:DataTypes.STRING, allowNull: false},
})

Repertuar.hasOne(RoleArtists)
RoleArtists.belongsTo(Repertuar)
Acter.hasOne(RoleArtists)
RoleArtists.belongsTo(Acter)

Repertuar.hasOne(Photos)
Photos.belongsTo(Repertuar)

Repertuar.hasOne(Afisha)
Afisha.belongsTo(Repertuar)

Repertuar.hasMany(Abonement)
Abonement.belongsTo(Repertuar)

module.exports = {
    User, Repertuar, Acter, Documents, Feedback, Photos, Afisha, Abonement, RoleArtists, News
}



