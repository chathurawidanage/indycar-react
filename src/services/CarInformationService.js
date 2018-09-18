import axios from "axios";
import RestService from "./RestService";

/**
 * @author Chathura Widanage
 */
export default class CarInformationService {

    static getCarInformation(carNumber) {
        return axios.get(RestService.getUrl(`getentryinfo?car_num=${carNumber}`));
    }

    static getCarLapTimes(carNumber) {
        return axios.get(RestService.getUrl(`getlaptimes?car_num=${carNumber}`));
    }

    static getCarList() {
        return axios.get(RestService.getUrl(`carslist`));
    }
}