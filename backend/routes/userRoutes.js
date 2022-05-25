import express from "express";
import { getAllUser, login, signup } from "../controllers/UserController";

const Router = express.Router();

Router.get("/", getAllUser );
Router.post("/signup" , signup);
Router.post("/login", login);

export default Router;