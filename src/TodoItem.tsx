import { useState } from 'react'
import './TodoItem.css'

interface Props {
    title: string;
    checkbox: boolean;
}

export const TodoItem: React.FC<Props> = (props) => {

    const [done, setDone] = useState(props.checkbox);

    const checkboxChangeHandler = () => {
        done ? setDone(false) :  setDone(true);
    }

    return (
        <div className={`todo-item ${done && "done"}`}>
            <input type="checkbox" defaultChecked={done} onChange={checkboxChangeHandler}/>
            <p>{props.title}</p>
        </div>
    )
}