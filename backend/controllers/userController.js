import userModel from "../modals/userModal.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// Login Function
const loginUser = async (req , res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })
        if(!user){
            return res.json({ success: false, message: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({ success: false, message: "Invalid Creds" })
        }

        // Pass both ID and Role to token creation
        const token = createToken(user._id, user.role);
        
        // Return success, token, and user role to React
        res.json({ success: true, token, role: user.role })
    }
    catch(error){
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// Create Token (Updated payload to include role)
const createToken = (id, role) => {
    const secret = process.env.JWT_SECRET || 'foodiefrenzy-secret';
    return jwt.sign({ id, role }, secret, { expiresIn: '7d' })
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
        
        // IF EVERYTHING WORKS
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // 🌟 AUTOMATIC ADMIN TRACKER ASSIGNMENT
        // Check if the current email matches your specified admin addresses
        let assignedRole = 'user';
        if (email.toLowerCase() === 'samia012@gmail.com' || email.toLowerCase() === 'sadia012@gmail.com') {
            assignedRole = 'admin';
        }

        // NEW USER WITH AUTOMATIC ROLE ASSIGNMENT
        const newUser = new userModel({
            username: username,
            email: email,
            password: hashedPassword,
            role: assignedRole // Overwrites default 'user' if it's your admin email
        })
        const user = await newUser.save()

        const token = createToken(user._id, user.role)
        res.json({ success: true, token, role: user.role })
    }
    catch(error){
        console.log(error)
        res.json({ success: false, message:"Error" });
    }
}

export { loginUser, registerUser }
