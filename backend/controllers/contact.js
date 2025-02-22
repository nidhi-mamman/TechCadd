const Messages =require('../model/contact')

const PushMessage=async(req,res)=>{
    try {
        // validation patterns
        const namePattern = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
        const emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com)$/;
        const mobilePattern=/^\d{10}$/;

        // fetchiing data from the body
        const {name,email,phone,message}=req.body

        if(name.length===0||email.length===0||phone.length===0||message.length===0){
            return res.status(400).json({
                msg: "Please fill out all the required fields.",
              });
        }

        if(name.length===0 || !namePattern.test(name)){
            return res.status(400).json({
                msg: "Name can only contain alphabets and it is required.",
              });
        }
        
        if(email.length===0 || !emailPattern.test(email)){
            return res.status(400).json({
                msg: "Email is not in required format and it is required.",
              });
        }

        if(phone.length===0 || !mobilePattern.test(phone)){
            return res.status(400).json({
                msg: "Phone number should only contain ten digits and it is required.",
              });
        }

        if(message.length===0){
            return res.status(400).json({
                msg: "Message should not be kept empty.",
              });
        }

        const messages=await Messages.create({
                name:name,
                email:email,
                phone:phone,
                message:message
        })

        return res.status(200).json({
            msg:"Sent message successfully",
            message_sent:messages
        })
 

    } catch (error) {
        console.log(error)
    }
}

module.exports={PushMessage}