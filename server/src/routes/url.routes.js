import express from "express";
import { urlShortendLink } from "../controllers/url.controller.js";
import verify from "../middlewares/verify.js";

const urlRoutes = express.Router();

urlRoutes.post("/send",verify,urlShortendLink);

export default urlRoutes;