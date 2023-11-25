import User from '../models/user.model.js'
import bcruptjs from 'bcryptjs'

export const signup = async(req,res)=>{

    const {username,email, password} = req.body;
    const hashPassword = bcruptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashPassword});

    try {
        await  newUser.save();
        res.status(201).json('User created Sucessfully!!');
        
    } catch (error) {
        res.status(501).json(error.message);
    }
}
