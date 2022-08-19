import express from "express"

const router  = express.Router();

const users = [
    {
        firstName:"himal",
        lastName:"ayanth",
        age:25
    }
]

router.get('/',(req,res)=>{ 
    console.log(users)
    res.send("hi")
});

export default router;