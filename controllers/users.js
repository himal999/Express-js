import { v4 as uuidv4 } from "uuid";


 export const getUsers = (req,res)=>{ 
   
        res.send(users)
    }
 
 export const findUser =(req,res)=>{
    const {id} = req.params;
  
    const find = users.find(item => item.id === id) 
  
    res.send(find)
  }
export const createUser =(req,res)=>{
    const user = req.body;

    const userId = uuidv4();

    const idWithUser = ({...user,id:userId})
    users.push(idWithUser)
    res.send("user added !!!")
}
export const updateUser =(req,res)=>{


    const {id} = req.params;

    const {firstName,lastName,age} = req.body;
 

    const updateUser = users.find(item => item.id === id) 

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
}

export const deleteUser =(req,res)=>{
    const {id} =req.params;
    users.filter(user=>user.id === id)
    res.send("user deleted !!!")
}


