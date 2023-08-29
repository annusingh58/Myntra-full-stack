import { Schema } from "mongoose";
import mongoose from "mongoose";

const user=new Schema({
    name:String,
    email:String,
    password:String

});

export default mongoose.model("USER",user)