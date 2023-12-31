import styles from './CurrentTemperature.module.css'
import { SettingsCTX } from '../../Context/Context';
import { useContext } from 'react';

function CurrentTemperature (props) {
    const settings = useContext(SettingsCTX);
    const metric = settings.unit == 'metric';
    const tempUnit = metric ? 'C' : 'F';

    return (
        <div className={styles.container}>
            <img src={props.current.condition.icon} className={styles.icon}></img>
            <div className={styles['text-container']}>
                <p className={styles.temperature}>{Math.round(metric ? props.current.temp_c : props.current.temp_f)}
                    <span className={styles['celsius-sign']}>°</span>
                    {tempUnit}
                </p>
                <p className={styles.description}>{props.current.condition.text}</p>
            </div>
        </div>
    )
}

export default CurrentTemperature;