import mongoose, { Schema } from "mongoose";

const prod=new Schema({
    img:String,
    price:Number,
    type:String,
    sex:String,
    name:String,
    color:String,
    size:[],
    available:Number,
})

export const products=mongoose.models.tshirts||mongoose.model('tshirts',prod)

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    phone: {
        type: String,
        required: true,
    },
    verified:{
        type:Boolean,
        default:false
    }
}, {
    timestamps: true
});

export const user = mongoose.models.users||mongoose.model('users', userSchema);


