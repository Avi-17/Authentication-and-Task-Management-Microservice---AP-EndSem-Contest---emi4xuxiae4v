const { prisma } = require("../../db/config");

const getAllTasks = async(req, res) => {
    try {
        const allTasks = await prisma.task.findMany();
        return res.status(200).json({tasks: allTasks})
    } catch (error) {
        console.log("Error in getting all tasks: ", error.message);
        return res.status(500).json({error: "Internal Server Error"})
    }
    
};

module.exports = {getAllTasks}