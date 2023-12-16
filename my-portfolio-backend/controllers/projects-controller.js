const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const fs = require('fs');

const HttpError = require('../models/http-error');
const Project = require('../models/project');
const ProjectTypes = require('../models/projectTypes');

const getProjects = async (req, res, next) => {
  let allProjects;
  try {
    allProjects = await Project.find();
  } catch (err) {
    const error = new HttpError(
      'Fetching Projects failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!allProjects || allProjects.length === 0) {
    return next(new HttpError('No Projects found.', 404));
  }

  res.json({
    Projects: allProjects.map((Project) => Project.toObject({ getters: true })),
  });
  // console.log("DEBUG -- projects-Controller - Fetching all the Projects successful!");
};

const getProjectById = async (req, res, next) => {
	const ProjectId = req.params.pid;
  // console.log("DEBUG --- projects-controller.js --- ProjectId:"+ProjectId);
	let Project;
  try { 
		Project = await Project.findById(ProjectId); // ERROR
    console.log("DEBUG --- projects-controller.js --- title"+Project.title);
	}
	catch (err) {
		const error = new HttpError(
			'Something went wrong, could not find a Project!', 500
		);
		return next(error);
	}

  if (!Project) {
    const error = new HttpError(
			'Could not find a Project for the provided id.', 404
		);
		return next(error);
  }

  res.json({ Project: Project.toObject({ getters: true}) });
};

// const getProjectsByUserId = async (req, res, next) => {
//   const userId = req.params.uid;
//   // console.log("DEBUG -- Projects-controller -- working 1: userId = "+userId);
//   // let Projects;
//   let userWithProjects;
//   try {
//     userWithProjects = await User.findById(userId).populate('Projects');
//     // console.log("DEBUG -- Projects-controller -- working 2");
//   } catch (err) {
//     const error = new HttpError(
//       'Fetching Projects failed, please try again later',
//       500
//     );
//     return next(error);
//   }

//   // console.log("DEBUG -- Projects-controller -- working 3");
//   // if (!Projects || Projects.length === 0) {
//   if (!userWithProjects || userWithProjects.Projects.length === 0) {
//     return next(
//       new HttpError('Could not find Projects for the provided user id.', 404)
//     );
//   }

//   // console.log("DEBUG -- Projects-controller -- working 4");
//   res.json({
//     Projects: userWithProjects.Projects.map(Project =>
//       Project.toObject({ getters: true })
//     )
//   });
//   // console.log("DEBUG -- Projects-Controller - Fetching all the USER's Projects successful!");
// };

// const getProjectsByCategoryId = async (req, res, next) => {
//   const categoryName = req.params.name;
//   // console.log("DEBUG -- Projects-controller -- working 1: categoryName = "+categoryName);
//   // let Projects;
//   let ProjectsForCategories;
//   try {
//     ProjectsForCategories = await Project.find({category: categoryName});
//     // console.log("DEBUG -- Projects-controller -- working 2");
//   } catch (err) {
//     const error = new HttpError(
//       'Fetching Projects failed, please try again later',
//       500
//     );
//     return next(error);
//   }

//   // console.log("DEBUG -- Projects-controller -- working 3");
//   if (!ProjectsForCategories || ProjectsForCategories.length === 0) {
//     return next(
//       new HttpError('Could not find Projects for the provided category id.', 404)
//     );
//   }

//   // console.log("DEBUG -- Projects-controller -- working 4");
//   res.json({
//     Projects: ProjectsForCategories
//   });
//   console.log("DEBUG -- Projects-Controller - Fetching all Projects with cid successful!");
// };

// const createProject = async (req, res, next) => {
// 	const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
//     return next(
// 		  new HttpError('Invalid inputs passed, please check your data!', 422)
//     );
//   }
// 	const { title, description, category, facebook, instagram, website, twitter } = req.body;

//   // Ensure that req.userData.userId contains a valid ObjectId of an existing user
//   // console.log('DEBUG ---- 1: User ID:', req.userData.userId);

// 	const createdProject = new Project ({
// 		title,
// 		description,
//     image: req.file.path,
//     category,
// 		creator: req.userData.userId,

//     website: website,
//     facebook: facebook,
//     instagram: instagram,
//     twitter: twitter,
// 	});
//   // console.log("DEBUG ---- 2");
//   // check if the user id provided exists or not
//   let user;
//   try{
//     user = await User.findById(req.userData.userId);
//     // console.log("DEBUG ---- 3: ");
//   }
//   catch (err) {
//     // console.log("DEBUG ---- 4: " + err);
//     const error = new HttpError(
//       'Creating Project failed[01], please try again!', 500
//     );
//     // console.log(err);
//     return next(error);
//   } 
//   if (!user) {
//     const error = new HttpError(
//       'Cannot find user for the provided id', 404
//     );
//     return next(error);
//   }
//   // console.log("DEBUG ---- 5: "+user);

// 	try {
//     // const sess = await mongoose.startSession();
//     // sess.startTransaction();
//     // await createdProject.save({ session: sess });
//     // user.Projects.push(createdProject);
//     // await user.save({ session: sess, validateModifiedOnly: true, });
//     // await sess.commitTransaction();

//     await createdProject.save( /* { session: session } */ );
//     user.Projects.push(createdProject);
//     await user.save( /* { session: session } */ );
//     // console.log("DEBUG --- 6: Saved Project in database");
//   } 
// 	catch (err) {
// 		// console.log(err);
//     const error = new HttpError(
//       'Creating Project failed[2], please try again.', 500
//     );
//     console.log(err);
//     return next(error);
//   }
	
// 	res.status(201).json({Project: createdProject});
//   // console.log("DEBUG --- 7: everything works fine");
// };

// const updateProject = async (req, res, next) => {
// 	const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(
//       new HttpError('Invalid inputs passed, please check your data.', 422)
//     );
//   }

// 	const { title, description } = req.body;
// 	const ProjectId = req.params.pid;

// 	let Project;
//   try {
//     Project = await Project.findById(ProjectId);
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong[1], could not update Project.',
//       500
//     );
//     return next(error);
//   }

//   if (Project.creator.toString() !== req.userData.userId) {
//     const error = new HttpError('You are not allowed to edit this place.', 401);
//     return next(error);
//   }

// 	Project.title = title;
// 	Project.description = description;

// 	try {
//     await Project.save();
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong[2], could not update Project.', 500
//     );
//     return next(error);
//   }
	
// 	res.status(200).json({ Project: Project.toObject({ getters: true }) });
// };

// const deleteProject = async (req, res, next) => {
// 	const ProjectId = req.params.pid;

// 	let Project;
//   try {
//     Project = await Project.findById(ProjectId).populate('creator');;
//   } catch (err) {
//     const error = new HttpError(
//       'Something went wrong[3], could not find Project to delete. [1]',
//       500
//     );
//     return next(error);
//   }

//   if (!Project) {
//     const error = new HttpError('Could not find Project for this id.', 404);
//     return next(error);
//   }

//   if (Project.creator.id !== req.userData.userId) {
//     const error = new HttpError(
//       'You are not allowed to delete this Project.',
//       401
//     );
//     return next(error);
//   }

//   const imagePath = Project.image;

//   try {
//     // const sess = await mongoose.startSession();
//     // sess.startTransaction();
//     // await Project.remove({ session: sess });
//     // Project.creator.Projects.pull(Project);
//     // await Project.creator.save({ session: sess });
//     // await sess.commitTransaction();

//     await Project.remove();
//     Project.creator.Projects.pull(Project);
//     await Project.creator.save();
//   } 
//   catch (err) {
//     const error = new HttpError(
//       'Something went wrong[4], could not delete Project.',
//       500
//     );
//     return next(error);
//   }

//   fs.unlink(imagePath, err => {
//     console.log(err);
//   });

//   res.status(200).json({ message: 'Deleted Project.' });
// };

module.exports = {
	getProjects,
	getProjectById
	// getProjectsByUserId,
	// getProjectsByCategoryId,
	// createProject,
	// updateProject,
	// deleteProject
};