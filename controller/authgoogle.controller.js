import mongoose from "mongoose";
import gUser from "../models/user.google.mode.js";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);






export const getDetails=async(req,res,next)=>{



 const { idToken } = req.body; // Received from frontend
console.log(req.body);
console.log(typeof req.body.credential);

  try {
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: process.env.GOOGLE_CLIENT_ID, // Your backend's Google Client ID
    });
    
    const payload = ticket.getPayload();
    
    // Token is valid! Use the payload to login or create a user session.
   const userId = payload['sub']; // Unique Google User ID
   const userEmail = payload['email'];
    


const existingUser=await gUser.findOne({userEmail})
if(existingUser){
   return res.status(200).json({ success: true, user: { userId, userEmail } });
}

const newUsers=await gUser.create ({userEmail,userId})
const token=jwt.sign({userId:newUsers.userId},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})
res.status(201).json({
    success:true,
    message:'user created successfully',
    data:{
        token,
        user:newUsers[0]
    }
})
}catch(error){

    next(error)
}

}



