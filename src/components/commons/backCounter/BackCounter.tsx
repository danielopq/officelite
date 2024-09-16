// Contains the countdown timer elements.

import './backCounter.css';
import { useEffect, useState } from 'react';

type Props = {
    skinTheme: string; // Defines the visual style of the counter ('light' or 'dark').
}

interface ClassNameState {
    lapse: string; // CSS class for each time segment container.
    comingLabel: string; // CSS class for the "COMING" text and day label.
    lapseNumber: string; // CSS class for the number display of each time segment.
}

const BackCounter: React.FC<Props> = ({ skinTheme }) => {

    // Dark theme (used on the homepage).
    const darkSkin = {
        lapse: 'lapse lapseDark',
        comingLabel: 'comingLabelDark',
        lapseNumber: 'lapseNumber lapseNumberDark',
    };

    // Light theme (used on the sign-up page).
    const lightSkin = {
        lapse: 'lapse lapseLight',
        comingLabel: 'comingLabelLight',
        lapseNumber: 'lapseNumber lapseNumberLight',
    };

    // State to manage the selected skin/theme.
    const [classNameState, setClassName] = useState<ClassNameState>(darkSkin);

    const { lapse, comingLabel, lapseNumber } = classNameState;

    // Switches the theme based on the provided skinTheme prop.
    useEffect(() => {
        if (skinTheme === 'light') {
          setClassName(lightSkin);
        } else {
          setClassName(darkSkin);
        }
    }, [skinTheme]);

    return (
        <div className="backCounter">
            <div className="expiringDate">
                <span className={comingLabel}>COMING 4</span>
                <span className="dateLabel"> NOV 2020</span>
            </div>
            <div className="counter">
                <div className={lapse}>
                    <div className={lapseNumber}>47</div>
                    <div className="lapseType">days</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>07</div>
                    <div className="lapseType">hours</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>56</div>
                    <div className="lapseType">min</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>14</div>
                    <div className="lapseType">sec</div>
                </div>
            </div>
        </div>
    );
}

export default BackCounter;
