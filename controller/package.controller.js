import userPackage from "../models/package.model.js";

export const createBooking=async(req,res,next)=>{

try{

const booking= await userPackage.create({
   ...req.body,
   user:req.user._id,
   email:req.user.email
})

res.status(201).json({success:true,message:"Booking created successfully",data:booking})    



}catch(e){
    next(e)
}



}