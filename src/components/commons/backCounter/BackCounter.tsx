// Contains the countdown timer elements.

import './backCounter.css';
import { useEffect, useState } from 'react';
import { getExpiringDate, getInitialCount } from '../../../utils/dateUtils'
type Props = {
    skinTheme: string; // Defines the visual style of the counter ('light' or 'dark').
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

    interface ClassNameState {
        lapse: string; // CSS class for each time segment container.
        comingLabel: string; // CSS class for the "COMING" text and day label.
        lapseNumber: string; // CSS class for the number display of each time segment.
    }

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

    // The following 6 lines of code are used to create an "infinite" expiration date
    // in order to simulate a continuously working counter, regardless of the actual date
    // when the app is used. For a real implementation, replace these lines with:
    // const expiringDate = new Date('real expiration date');
    const currentDate: Date = new Date();
    const expiringDate: Date = new Date(currentDate);
    expiringDate.setDate(expiringDate.getDate() + 43);
    expiringDate.setHours(expiringDate.getHours() + 12);
    expiringDate.setMinutes(expiringDate.getMinutes() + 18);
    expiringDate.setSeconds(expiringDate.getSeconds() + 23);

    interface countValues {
        daysLeft: number;
        hoursLeft: number;
        minutesLeft: number;
        secondsLeft: number;
    }

    const [counterValues, setCounterValues] = useState<countValues>(getInitialCount(expiringDate));

    const { daysLeft, hoursLeft, minutesLeft, secondsLeft, } = counterValues;

    /*Initialicing the counter*/
    useEffect(() => {
        const temp = setInterval(() => {
            setCounterValues(prevValues => {
                let { daysLeft, hoursLeft, minutesLeft, secondsLeft } = prevValues;

                // If all of the back counter lapses time reach 0, the counter stops. 
                if (daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
                    clearInterval(temp);
                    return prevValues;
                }
                //Decreasing the back Counter.
                if (secondsLeft === 0) {
                    secondsLeft = 59;
                    if (minutesLeft === 0) {
                        minutesLeft = 59;
                        if (hoursLeft === 0) {
                            hoursLeft = 23;
                            if (daysLeft > 0) daysLeft--;
                        } else {
                            hoursLeft--;
                        }
                    } else {
                        minutesLeft--;
                    }
                } else {
                    secondsLeft--;
                }
                return {daysLeft,hoursLeft,minutesLeft,secondsLeft};
            });
        }, 1000);
        return () => clearInterval(temp);
    }, []);

    return (
        <div className="backCounter">
            <div className="expiringDate">
                <span className={comingLabel}>COMING </span>
                <span className="dateLabel">{getExpiringDate(expiringDate)}</span>
            </div>
            <div className="counter">
                <div className={lapse}>
                    <div className={lapseNumber}>{daysLeft}</div>
                    <div className="lapseType">days</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>{hoursLeft}</div>
                    <div className="lapseType">hours</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>{minutesLeft}</div>
                    <div className="lapseType">min</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>{secondsLeft}</div>
                    <div className="lapseType">sec</div>
                </div>
            </div>
        </div>
    );
}

export default BackCounter;
