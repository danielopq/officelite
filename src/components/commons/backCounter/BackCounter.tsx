import './backCounter.css';
import { useState } from 'react';

type props = {
    bcType: string;
}

interface classNamestate {
    lapse: string;
    comingLabel: string;
    lapseNumber: string;
    lapseType: string;
}

const BackCounter: React.FC<props> = ({ bcType }) => {

    const [classNameState, setClassName] = useState<classNamestate>({
        lapse: 'lapse lapseDark',
        comingLabel: 'comingLabelDark',
        lapseNumber: 'lapseNumber lapseNumberDark',
        lapseType: 'lapseType lapseTypeDark',
    });

    (() => {
        if(bcType !== 'dark'){
            setClassName({
                lapse: 'lapse lapseLight',
                comingLabel: 'comingLabelLight',
                lapseNumber: 'lapseNumber lapseNumberLight',
                lapseType: 'lapseType lapseTypeLight',
            })
        }
    })()

    const { lapse, comingLabel, lapseNumber, lapseType } = classNameState;

    return (
        <div id="backCounter">
            <div id="expiringDate">
                <span className={comingLabel}>COMING 4</span>
                <span id="dateLabel"> NOV 2020</span>
            </div>
            <div id="counter">
                <div className={lapse}>
                    <div className={lapseNumber}>47</div>
                    <div className={lapseType}>days</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>07</div>
                    <div className={lapseType}>hours</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>56</div>
                    <div className={lapseType}>min</div>
                </div>
                <div className={lapse}>
                    <div className={lapseNumber}>14</div>
                    <div className={lapseType}>sec</div>
                </div>
            </div>
        </div>
    )
}

export default BackCounter;