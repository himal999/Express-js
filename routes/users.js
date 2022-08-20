import express from "express"

import { v4 as uuidv4 } from "uuid";
uuidv4();

const router  = express.Router();

let users = []

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

router.delete('/:id',(req,res)=>{
    const {id} =req.params;
    users.filter(user=>user.id === id)
    res.send("user deleted !!!")
})


router.patch('/:id',(req,res)=>{


    const {id} = req.params;
    console.log(id)
    const {firstName,lastName,age} = req.body;
 
    console.log(firstName)
    const updateUser = users.find(item => item.id === id) 

    console.log(updateUser)
    if(firstName){
       updateUser.firstName  =  firstName ;
    }
    if(lastName){
        updateUser.lastName  =  lastName ;
     }
     if(age){
        updateUser.age  =  age ;
     }

     res.send("user updated !!!")
})
export default router;