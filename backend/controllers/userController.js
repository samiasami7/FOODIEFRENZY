import userModel from "../modals/userModal.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//Login Function
const loginUser = async (req , res) => {
    const {email,password}= req.body

    try {
        const user = await userModel.findOne({ email })
        if(!user){
            return res.json({success: false,message: "User doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid Creds"})
        }

        const token = createToken(user._id);
        res.json({ success: true, token})
    }
    catch(error){
        console.log(error)
        res.json({ success:false, message: "Error"})

    }
    

}

// Create Token
const createToken = (id) => {
    const secret = process.env.JWT_SECRET || 'foodiefrenzy-secret';
    return jwt.sign({ id }, secret, { expiresIn: '7d' })
}

// REGISTER FUNCTION
const registerUser = async (req, res) => {
    const { username, password, email } = req.body

    try {
        const exists = await userModel.findOne({ email })
        if(exists){
            return res.json({success: false, message: "User Already Exists"})
        }

        // VALIDATION
if (!validator.isEmail(email)) {
    return res.json({ success: false, message: "Please Enter a valid Email" })
}

if (password.length < 8) {
    return res.json({ success: false, message: "Please Enter a Strong Password" })
}
// IF EVERTHING WORKS
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)

// NEW USER
const newUser = new userModel({
    username: username,
    email:  email,
    password: hashedPassword
})
const user = await newUser.save()

const token = createToken(user._id)
res.json({ success: true, token })
}


 catch(error){
        console.log(error)
      res.json({ success: false, message:"Error" });

    }
}

export{ loginUser , registerUser}