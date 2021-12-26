const Joi = require("joi");

const registerCheck = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().trim().alphanum().min(3).max(20).required(),
    role: Joi.string().trim().alphanum()
});

const loginCheck = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().trim().alphanum().min(3).max(20).required()
});

const newAlbumCheck = Joi.object({
    year: Joi.number().integer().required(),
    genre: Joi.string().trim().min(1).required(),
    title: Joi.string().trim().min(1).required(),
    artistId: Joi.number().integer()
});

const updateAlbumCheck = Joi.object({
    id: Joi.number().integer().required(),
    year: Joi.number().integer().required(),
    genre: Joi.string().trim().min(1).required(),
    title: Joi.string().trim().min(1).required(),
});

const newArtistCheck = Joi.object({
    name: Joi.string().trim().min(1).required()
});

const updateArtistCheck = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().trim().min(1).required()
})

const newReviewCheck = Joi.object({
    id: Joi.number().integer(),
    body: Joi.string().trim().required(),
    rating: Joi.number().integer().min(1).max(5).required(),
    userId: Joi.number().integer(),
    albumId: Joi.number().integer()
});

const updateReviewCheck = Joi.object({
    body: Joi.string().trim().required(),
    rating: Joi.number().integer().min(1).max(5).required(),

});



module.exports = { 
    registerCheck, 
    loginCheck, 
    newAlbumCheck, 
    newArtistCheck, 
    newReviewCheck,
    updateArtistCheck,
    updateAlbumCheck,
    updateReviewCheck
};