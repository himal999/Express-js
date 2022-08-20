import express from "express"

import { v4 as uuidv4 } from "uuid";
uuidv4();

const router  = express.Router();

const users = []

router.get('/',(req,res)=>{ 
   
    res.send(users)
});

router.post('/',(req,res)=>{
    const user = req.body;

    const userId = uuidv4();

    const idWithUser = ({...user,id:userId})
    users.push(idWithUser)
    res.send("user added !!!")
})

router.get('/:id',(req,res)=>{
  const {id} = req.params;

  const find = users.find(item => item.id === id) 

  res.send(find)
});

export default router;