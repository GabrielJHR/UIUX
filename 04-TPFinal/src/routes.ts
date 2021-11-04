import { Router, Request, Response } from "express";
import HbsParams from "./interfaces/HbsParams";

const router = Router();

router.get('/login', (req : Request, res : Response) => {
  res.render('login', {
    title: "Login",
    stylesheet: 'login.css'
  })
})

export default router;
