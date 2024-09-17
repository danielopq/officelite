import React from 'react';
import './defaultButton.css';

type ButtonProps = {
    id?: string;
    children: string;
    buttonType: string;
    onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Function to be called when the button is clicked.
};

/**
 * Defines the buttons used by the app
 * @param {<ButtonProps>} param (Button type, text on the button, actions)
 * @returns 
 */
const DefaultButton: React.FC<ButtonProps> = ({ id, buttonType, children, onButtonClick }) => {

    const setClass = (buttonType: String) => {
        let buttonClass: string = '';
        switch (buttonType) {
            case 'getStartedShadow':
                buttonClass = 'getButton shortButton buttonShadow'; //get started button with shadow
                break;
            case 'getStarted': //get started button with no shadow
                buttonClass = 'getButton shortButton';
                break;
            case 'getOn': //get on button at the sign in form
                buttonClass = 'getButton longButton';
                break;
            case 'accept': //accept button at the confirmation window
                buttonClass = 'getButton shortButton';
                break;
            case 'tryDark': //try for free button (dark version)
                buttonClass = 'tryDarkButton shortButton';
                break;
            case 'tryLight': //try for free button (light version)
                buttonClass = 'tryLightButton shortButton';
                break;
        }

        return buttonClass;
    }

    // If the 'id' parameter is provided, we create a button with the specified 'id'.
    // Otherwise, we create a button without an 'id'.
    
    if ({ id }) {
        return (
            <button id={id} className={setClass(buttonType)} onClick={(event) => onButtonClick?.(event)}>{children}</button>
        )
    }

    return (
        <button className={setClass(buttonType)} onClick={(event) => onButtonClick?.(event)}>{children}</button>
    )
}

export default DefaultButton;