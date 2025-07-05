import express from "express";
import urlShortendLink  from "../controllers/url.controller.js";

const urlRoutes = express.Router();

urlRoutes.post("/send",urlShortendLink);

export default urlRoutes;