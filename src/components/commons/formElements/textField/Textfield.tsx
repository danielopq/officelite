import '../formContainer.css';

type Props = {
    id: string;
    children: string;
}

const TextField: React.FC<Props> = ({ id,children }) => {
    return (
        <div className='formContainer'>
            <input id={id} name={id} type="text" placeholder={children}></input>
        </div>
    )
}

export default TextField;