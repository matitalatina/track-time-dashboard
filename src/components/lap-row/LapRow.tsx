import * as React from 'react';
import styles from './LapRow.module.css';
import { DriverLapStatus } from '../../models/DriverLapStatus';

interface Props {
    driverLapStatus: DriverLapStatus;
}
function msToTime(duration: number): string {
    return new Date(duration).toISOString().slice(14, -1);
}
export const LapRow = ({driverLapStatus: {driver, currentLap, previousLap}}: Props): JSX.Element => {
    const sectors = currentLap.sectorsTimeMillis.map(s => (<div>{msToTime(s)}</div>))
    const totalTime = currentLap.sectorsTimeMillis.reduce((acc, val) => acc + val, 0)
    return (
        <div className={styles.row}>
            <div className={styles.itemPosition}>
                {currentLap.position}
            </div>
            <div className={styles.itemDriver}>
                {driver.name} {driver.surname}
            </div>
            {sectors}
            <div>{msToTime(totalTime)}</div>
        </div>
    )
}
