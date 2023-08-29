import express from "express";
import { login, register } from "../Controllers/Usercontrollers.js";
import { loginchk, registerchk } from "../Middleware/Auth.js";

const router =express.Router();


router.post('/register', registerchk , register);
router.post('/login',loginchk,login);



export default router;