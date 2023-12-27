const express = require('express');
// const { check } = require('express-validator');
const ProjectsController = require('../controllers/projects-controller');
// const fileUpload = require('../middlewares/file-upload');
// const checkAuth = require('../middlewares/check-auth');

const router = express.Router();

// GET requests
router.get('/', ProjectsController.getProjects)
router.get('/:pid', ProjectsController.getProjectById);
// router.get('/user/:uid', ProjectsController.getProjectsByUserId);
// router.get('/categories/:name', ProjectsController.getProjectsByCategoryId);

// router.use(checkAuth);

// POST requests
// router.post(
// 	'/', 
// 	fileUpload.single('image'),
// 	[
// 	check('title')
// 		.not()
// 		.isEmpty(),
// 	check('description')
// 		.isLength({min: 2})
// 	], 
// 	ProjectsController.createProject
// );

// UPDATE requests
// router.patch(
//   '/:pid',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 })
//   ],
//   ProjectsController.updateProject
// );

// DELETE requests
// router.delete('/:pid', ProjectsController.deleteProject);

module.exports = router;