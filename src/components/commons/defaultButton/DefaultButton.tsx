import React from 'react';
import './defaultButton.css';

type ButtonProps = {
    children: string; // Text to be displayed inside the button.
    buttonType: string; // Type of the button which determines its styling.
    onButtonClick?: () => void; // Optional function to be called when the button is clicked.
};

/**
 * Defines the buttons used by the app.
 * @param {ButtonProps} props - Button type, text on the button, and click action.
 * @returns {JSX.Element} The rendered button component.
 */
const DefaultButton: React.FC<ButtonProps> = ({ buttonType, children, onButtonClick }) => {

    /**
     * Sets the button's CSS class based on its type.
     * @param {string} buttonType - The type of the button to determine its style.
     * @returns {string} The CSS class for the button.
     */
    const setClass = (buttonType: string) => {
        let buttonClass: string = '';
        switch(buttonType) {
            case 'getStartedShadow':
                buttonClass = 'getButton shortButton buttonShadow'; // Get started button with shadow.
                break;
            case 'getStarted':
                buttonClass = 'getButton shortButton'; // Get started button with no shadow.
                break;
            case 'getOn':
                buttonClass = 'getButton longButton'; // Get on button in the sign-in form.
                break;
            case 'accept':
                buttonClass = 'getButton shortButton'; // Accept button in the confirmation window.
                break;
            case 'tryDark':
                buttonClass = 'tryDarkButton shortButton'; // Try for free button (dark version).
                break;
            case 'tryLight':
                buttonClass = 'tryLightButton shortButton'; // Try for free button (light version).
                break;
            default:
                buttonClass = 'getButton'; // Default button class.
                break;
        }

        return buttonClass; 
    }

    return (
        <button className={setClass(buttonType)} onClick={onButtonClick}>
            {children}
        </button>
    )
}

export default DefaultButton;
