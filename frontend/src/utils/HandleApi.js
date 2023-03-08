import axios from 'axios'

const baseUrl = 'http://localhost:3001'
const getAllTodo = (setTodo) => {
    axios.get(baseUrl).then((result) => {
        // console.log(result.data)
        setTodo(result.data)
    }).catch((err, result) => {
        console.log(err, result)
    })
}
const insertTodo = (text, setText, setTodo) => {
    axios.post(`${baseUrl}/save`, { text }).then((result) => {
        // console.log(result.data);
        setText("");
        getAllTodo(setTodo)
    }).catch((err) => {
        console.log(err)
    })
}

const updateTodo = (text, setText, setTodo, setIsUpDating, todoId) => {
    axios.post(`${baseUrl}/update`, { _id: todoId, text }).then((result) => {
        setText("");
        setIsUpDating(false);
        getAllTodo(setTodo)
    }).catch((err) => {
        console.log(err)
    })
}
const deleteTodo = (todoId, setTodo) => {
    axios.post(`${baseUrl}/delete`, { _id: todoId }).then((result) => {
        getAllTodo(setTodo)
    }).catch((err) => {
        console.log(err)
    })
}
const searchTodo = (search, setTodo) => {

    let key = search;
    if (key) {
        axios.get(`${baseUrl}/search/${key}`).then((result) => {
            // console.log(result.data)
            setTodo(result.data)
        }).catch((err, result) => {
            console.log(err, result)
        })
    }
    else {
        getAllTodo(setTodo)
    }

}
const checkTodo = (todoId, complete, setTodo) => {
    axios.post(`${baseUrl}/update`, { _id: todoId, complete }).then((result) => {
        getAllTodo(setTodo)
    }).catch((err) => {
        console.log(err)
    })
}
export { getAllTodo, insertTodo, updateTodo, deleteTodo, searchTodo, checkTodo }