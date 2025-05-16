import { getRoute } from "./utils/getRoute.js";
import { ErrorLog } from "./utils/logger.js";
import { validateCoordinates } from "./utils/validateCoordinates.js";

export const seaRoute = async (coordinates, suez = true) => {
  try {
    validateCoordinates(coordinates);
    let resultCoords = [];
    let totalDistance = 0;
    let distanceUnit = null;
    for (let i = 0; i < coordinates.length - 1; i++) {
        const result = await getRoute({
          origin: coordinates[i],
          destination: coordinates[i + 1],
          suez: suez,
        })

        resultCoords = [...resultCoords, ...result.data.geometry.coordinates]
        totalDistance += Number(result.data.properties.length).toFixed(2)
        if(i === 0){
            distanceUnit = result.data.properties.units
        }
    }
    return {
        route : resultCoords,
        distance : totalDistance,
        distance_unit : distanceUnit
    }
  } catch (error) {
    ErrorLog(error.message);
  }
};
