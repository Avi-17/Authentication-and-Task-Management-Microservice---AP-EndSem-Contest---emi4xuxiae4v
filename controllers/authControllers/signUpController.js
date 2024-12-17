const {prisma} = require("../../db/config");
const bcrypt = require("bcrypt");

const signUpController = async(req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({"error": "All fields are required"});
    }

    const exists = await prisma.user.findUnique({where: {email}});
    if(exists) return res.status(400).json({"error": "User already exists"});

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    });

    return res.status(201).json({"message": "User created successfully"});
}

module.exports = { signUpController };