import './backCounter.css';

const BackCounter = () => {
    return (
        <div id="backCounter">
            <div id="expiringDate">
                <span id="final-coming" style={{ color: 'black' }}>COMING 4</span>
                <span id="final-date" style={{ color: '#5175FF' }}> NOV 2020</span>
            </div>
            <div id="counter">
                <div className='lapse'>
                    <div className='lapseNumber'>47</div>
                    <div className='lapseType'>days</div>
                </div>
                <div className='lapse'>
                    <div className='lapseNumber'>07</div>
                    <div className='lapseType'>hours</div>
                </div>
                <div className='lapse'>
                    <div className='lapseNumber'>56</div>
                    <div className='lapseType'>min</div>
                </div>
                <div className='lapse'>
                    <div className='lapseNumber'>14</div>
                    <div className='lapseType'>sec</div>
                </div>
            </div>
        </div>
    )
}

export default BackCounter;