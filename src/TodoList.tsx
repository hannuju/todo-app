import { TodoItem } from "./TodoItem"
import './TodoList.css'

const dummyData = [
    {
        id: 1,
        title: "Bank appointment",
        checkbox: true
    },
    {
        id: 2,
        title: "Gym",
        checkbox: false
    },
    {
        id: 3,
        title: "Grocerie shopping",
        checkbox: false
    },
    {
        id: 4,
        title: "Clean garage",
        checkbox: false
    },
    {
        id: 5,
        title: "Grandma's birthday",
        checkbox: false
    },
    
]

export const TodoList = () => {
    return (
        <div className="todo-list">
            {dummyData.map((item) => 
                <TodoItem key={item.id} title={item.title} checkbox={item.checkbox}></TodoItem>
            )}
        </div>
    )
}