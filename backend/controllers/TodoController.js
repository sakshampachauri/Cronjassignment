const TodoModel = require('../models/TodoModel');

const getTodo = async (req, res) => {
    const todo = await TodoModel.find();
    res.send(todo)
}

const postTodo = async (req, res) => {
    const { text } = req.body;
    TodoModel.create({ text }).then((result) => {
        console.log("data added succesfully", result)
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
}

const updateTodo = async (req, res) => {
    const { _id, text,complete } = req.body;
    TodoModel.findByIdAndUpdate(_id, { text ,complete}).then((result) => {
        console.log(result);
        res.send("data updated succesfully")
    }).catch((err) => {
        console.log(err)
    })
}

const deleteTodo = async (req, res) => {
    const { _id } = req.body;
    TodoModel.findByIdAndDelete(_id,).then((result) => {
        console.log(result);
        res.send("data deleted succesfully")
    }).catch((err) => {
        console.log(err)
    })
}
const searchTodo = async (req, res) => {

    const todo = await TodoModel.find({
        "$or": [{ text: { $regex: req.params.key } }]
    });
    res.send(todo)
}
module.exports = { getTodo, postTodo, updateTodo, deleteTodo, searchTodo }