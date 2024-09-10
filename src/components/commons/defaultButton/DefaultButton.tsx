import React from 'react';
import './defaultButton.css';

type ButtonProps = {
    children: string;
    buttonType: string;
};

const DefaultButton: React.FC<ButtonProps> = ({buttonType, children }) => {

    const setClass = (buttonType:String) =>{
        let buttonClass:string = '';
        switch(buttonType){
            case 'getStartedShadow':
                buttonClass = 'getButton shortButton buttonShadow';
                break;
            case 'getStarted':
                buttonClass = 'getButton shortButton';
                break;
            case 'getOn':
                buttonClass = 'getButton longButton';
                break;
            case 'tryDark':
                buttonClass = 'tryDarkButton shortButton';
                break;
            case 'tryLight':
                buttonClass = 'tryLightButton shortButton';
                break;
        }

        return buttonClass; 
    }

    return (
        <button className={setClass(buttonType)}>{children}</button>
    )
}

export default DefaultButton;