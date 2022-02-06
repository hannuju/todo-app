import './TodoItem.css'

interface Props {
    title: string;
    checkbox: boolean;
}

export const TodoItem: React.FC<Props> = (props) => {
    return (
        <div className="todo-item">
            <p>{props.title}</p>
        </div>
    )
}