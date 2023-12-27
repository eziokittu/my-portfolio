const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const fs = require('fs');

const HttpError = require('../models/http-error');
const Profile = require('../models/profile');

const getProfile = async (req, res, next) => {
  let profile;
  try {
    profile = await Profile.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching Profile failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!profile) {
    return next(new HttpError('No Profile found.', 404));
  }

  res.json({ Profile: profile });
  // console.log("DEBUG -- Profile-Controller - Fetching all the Profile successful!");
};

module.exports = {
	getProfile
};