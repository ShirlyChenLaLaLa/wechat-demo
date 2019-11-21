import polyline from 'polyline'

export const getCoordinates = (response) => {
  if (response.data.routes[0] && response.data.routes[0].geometry) {
    const geoData = polyline.toGeoJSON(response.data.routes[0].geometry)
    return geoData.coordinates.map(coordinate => coordinate.reverse())
  }
  return []
}