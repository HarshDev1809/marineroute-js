export const validateCoordinates = (coordinates) => {
  if (!Array.isArray(coordinates)) {
    throw new Error(
      `Invalid coordinates array. Expected format: [[originLon, originLat], [destinationLon, destinationLat]]`
    );
  }

  if (coordinates.length < 2) {
    throw new Error(
      `Invalid coordinates array length. Requires at least 2 points, got ${coordinates.length}.`
    );
  }

  for (let i = 0; i < coordinates.length; i++) {
    const coordinate = coordinates[i];

    if (!Array.isArray(coordinate) || coordinate.length !== 2) {
      throw new Error(
        `Invalid coordinate at index ${i}. Expected format: [lon, lat], got ${JSON.stringify(coordinate)}`
      );
    }

    const [lon, lat] = coordinate;

    if (
      typeof lon !== 'number' || isNaN(lon) ||
      typeof lat !== 'number' || isNaN(lat)
    ) {
      throw new Error(
        `Invalid number in coordinate at index ${i}. Got [${lon}, ${lat}]`
      );
    }

    if (lon < -180 || lon > 180 || lat < -90 || lat > 90) {
      throw new Error(
        `Coordinate out of range at index ${i}. Longitude must be between -180 and 180, latitude between -90 and 90. Got [${lon}, ${lat}]`
      );
    }
  }
};
