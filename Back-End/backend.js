const express = require("express");
const DBConnect = require("./DataBaseConnect");
const cors = require('cors');
const bcrypt = require("bcrypt");
const UserModel = require("./UserModel");
const FeedBackModel = require("./FeedbackModel");
const jwt = require("jsonwebtoken")
const salt = 13;
const port = 3004;




const app = express();
app.use(express.json())  //same work as body parser
app.use(cors());



app.listen(port , ()=>{
    console.log("running")
})
DBConnect.then(()=>{
    console.log("Data Base Connected")
});


app.post("/login",(req,response)=>{
    const {email , password} = req.body;
    UserModel.findOne({email}).then((res)=>{
        if(res){
            if(res.password !== password){
                response.send({status:1});
            }else{
                const token = jwt.sign({id:res.id},"dingarameibu")
                response.send({status:2,uid: res.id , name:res.uname , authTocken:token})
            }
        }else{
            response.send({status: 0})
        }
    })
})

app.post("/register" , (req,response)=>{
    const {uname , email , password} = req.body;
    UserModel.findOne({email}).then((res)=>{
        if(res){
            response.send({status:0})
        }else{
            const user = new UserModel({
                uname,
                email,
                password
            })
            user.save().catch((err)=>{
                console.log(err)
            }).then(()=>{
                response.send({status:1})
            })
        }
    })
   
    // bcrypt.hash(password , salt).then(()=>{
    //     userModel.create({uname: uname , email:email , password:password}).then(user => res.json(user)).catch(err=>console.log(err))
    // })
    // console.log(req.body);
})



app.post("/feedback",(req,response)=>{
    const {onwerId , mail , topic , content} = req.body;
    const feedback = new FeedBackModel({
        onwerId,
        mail,
        topic,
        content,
    })
    feedback.save().catch((err)=>{
        response.send({status:0})
    }).then(()=>{
        response.send({status:1})
    })
})

app.post("/update",(req,res)=>{
    const {ownerId , mail , topic , content , updated} = req.body;
    FeedBackModel.findOneAndUpdate({ _id: ownerId }, {
        mail,
        topic,
        content,
        updated
    }).catch((err) => {
        res.send({ status: 0 });
    }).then(() => {
        res.send({ status: 1 });
    });
})

app.post("/delete" , (req,res)=>{
    FeedBackModel.findOneAndUpdate({ _id: req.body.id }, {
        deleted:true
    }).catch((err) => {
        res.send({ status: 0 });
    }).then(() => {
        res.send({ status: 1 });
    });
})

app.get("/feedbackdata" , (req,res)=>{
    FeedBackModel.find({}).then(result=>{
        res.send(result);
    })
})

app.get("/",(req,res)=>{
    res.send("hello")
})
