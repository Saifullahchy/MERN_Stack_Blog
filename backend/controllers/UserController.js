import bcrypt from "bcryptjs";
import User from "../model/User";

export const getAllUser = async (req, res, next) => {
    let users;

    try{
        users = await User.find();
    }
    catch(err){
       return console.log(err);
    }

    if(!users){
        return res.status(404).json({message: "No user Found"});
    }
    return res.status(200).json({ users });
}

export const signup = async (req, res, next) => {

    const {name, email, password } = req.body;
    

    let exsistingUser;

    try{
        exsistingUser = await User.findOne({email})
    }catch(err){
        return console.log(err)
    }
    if(exsistingUser) {
        return res
        .status(400)
        .json({message: "User Already Exist!! Login Insted"})
    }
    const hasHashPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hasHashPassword,
        blogs:[]
    });

    try{
       await user.save();
    }catch(err){
       return console.log(err)
    }

    return res.status(201).json({user})
}

export const login = async (req, res, next) => {
    const {email, password } = req.body;
    let exsistingUser;

    try{
        exsistingUser = await User.findOne({email})
    }catch(err){
        return console.log(err)
    }
    if(!exsistingUser) {
        return res
        .status(400)
        .json({message: "User not found!!!"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, exsistingUser.password);

    if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect Password"});
    }
    return res.status(200).json({message:"Login Successful"});
}