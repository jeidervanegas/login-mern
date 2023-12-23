import userCtrl from "../controllers/user.controllers.js";
import { Router } from "express";

const route = Router();

route.post('/register', userCtrl.register);
route.post('/login', userCtrl.login);


export default route;