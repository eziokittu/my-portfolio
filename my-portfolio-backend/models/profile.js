const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
	name: {type: String, required: true },
	year: {type: Date, required: true },
	intro: {type: String, required: true },
    links: {
        link_github: {type: String, required: true },
        link_leetcode: {type: String, required: true },
        link_hackerrank: {type: String, required: true },
        link_facebook: {type: String, required: true },
        link_linkedin: {type: String, required: true },
        link_codeforces: {type: String, required: true },
        link_steam: {type: String, required: true },
        link_instagram: {type: String, required: true },
        link_twitter: {type: String, required: true },
        link_spotify: {type: String, required: true },
        link_steam: {type: String, required: true },
        link_gmail_primary: {type: String, required: true },
    },
	display_image: { type: String, required: true },
    images: { type: [String], default: [] }
});

module.exports = mongoose.model('Profile', profileSchema);