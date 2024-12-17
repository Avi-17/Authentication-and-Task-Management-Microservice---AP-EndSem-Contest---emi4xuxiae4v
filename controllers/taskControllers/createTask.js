const { prisma } = require("../../db/config");

const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ error: "Task content is required" });
    }

    const newTask = await prisma.task.create({
      data: {
        task: task,
        userId: req.id,
      },
    });

    return res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    console.log("Error in creating task: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createTask };
