import { Router, Request, Response } from "express";
import HbsParams from "./interfaces/HbsParams";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
  res.redirect('/login')
})

router.get('/login', (req : Request, res : Response) => {
  const hbs : HbsParams = {
    title : 'Login',
    stylesheet : 'login.css'
  }

  res.render('login', {
    hbs
  })
})

router.get('/recovery', (req : Request, res : Response)=>{
  const hbs : HbsParams = {
    title : 'Recovery password',
    stylesheet : 'recovery_password.css'
  }
  res.render('recovery_password', {
    hbs
  })
})

router.get('/signup', (req : Request, res : Response) => {
  const hbs : HbsParams = {
    title : 'My account',
    stylesheet : 'my_account.css'
  }
  res.render('my_account', {
    hbs
  })
})

router.get('/products', (req : Request, res : Response) => {
  const hbs : HbsParams = {
    title : 'Products',
    stylesheet : 'products.css'
  }
  res.render('products', {
    hbs
  })
})

export default router;
