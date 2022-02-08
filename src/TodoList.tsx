import { TodoItem } from "./TodoItem"
import './TodoList.css'

const dummyData = [
    {
        id: 1,
        title: "Bank appointment",
        done: true
    },
    {
        id: 2,
        title: "Gym",
        done: false
    },
    {
        id: 3,
        title: "Grocerie shopping",
        done: false
    },
    {
        id: 4,
        title: "Clean garage",
        done: false
    },
    {
        id: 5,
        title: "Grandma's birthday",
        done: false
    },
    
]

export const TodoList = () => {
    return (
        <div className="todo-list">
            {dummyData.map((item) => 
                <TodoItem key={item.id} title={item.title} done={item.done}></TodoItem>
            )}
        </div>
    )
}