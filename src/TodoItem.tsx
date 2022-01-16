interface Props {
    title: string;
    checkbox: boolean;
}

export const TodoItem: React.FC<Props> = (props) => {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
}