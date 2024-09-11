import '../formContainer.css';
import './textField.css'

type Props = {
    id: string;
    children: string;
    error:boolean;
}

const TextField: React.FC<Props> = ({ id,children,error=false }) => {
    
    return (
        <div className='formContainer'>
            <input id={id} name={id} type="text" placeholder={children} className="signUpTextfield"></input>
        </div>
    )
}

export default TextField;