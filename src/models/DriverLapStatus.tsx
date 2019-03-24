import { Driver } from './Driver';
import { Lap } from './Lap';
export interface DriverLapStatus {
    driver: Driver;
    currentLap: Lap;
    previousLap: Lap;
}
