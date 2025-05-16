import { getRoute } from "./getRoute.js";

export const getCrossedRoute = async (origin, destination) => {
  const [originLon, originLat] = origin;
  const [destinationLon, destinationLat] = destination;

  const result = await getRoute({
    origin,
    destination
  })
    const sign = originLon > 0 ? 1 : -1;
};
