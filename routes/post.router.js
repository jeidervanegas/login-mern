// import userCtrl from "../controllers/user.controllers.js";
import { Router } from "express";
import { upload } from '../middlewares/upload.middleware.js'

import postCtrl from "../controllers/post.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const route = Router();


route.post('/post/new', verifyToken, upload.single('imagen'), postCtrl.CreatePost)
route.get('/posts/:userId', postCtrl.getPostByUserId)

export default route;