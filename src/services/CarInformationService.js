import axios from "axios";
import RestService from "./RestService";

/**
 * @author Chathura Widanage
 */
export default class CarInformationService {

    static getCarInformation(carNumber) {
        return axios.get(RestService.getUrl(`getentryinfo?car_num=${carNumber}`));
    }
}