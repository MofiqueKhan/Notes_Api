const noteModel = require("../models/note");

const createNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = new noteModel({
    title: title,
    description: description,
    userId: req.userId,
  });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await noteModel.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" , deletedNote : note});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  try {
    const updateNote = await noteModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updateNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updateNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({ userId: req.userId });
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

module.exports = {
  createNote,
  deleteNote,
  updateNote,
  getNotes,
};
