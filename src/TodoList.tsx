import { TodoItem } from "./TodoItem"

const dummyData = [
    {
        id: 1,
        title: "item 1",
        checkbox: true
    },
    {
        id: 2,
        title: "item 2",
        checkbox: false
    }
]

export const TodoList = () => {
    return (
        <div>
            {dummyData.map((item) => 
                <TodoItem key={item.id} title={item.title} checkbox={item.checkbox}></TodoItem>
            )}
        </div>
    )
}