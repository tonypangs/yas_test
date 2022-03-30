import React from "react";
import "./App.css";
import GoogleMap from "google-map-react";
import { GoogleMapLatLng, RawHykeCoveredAreasData } from "./type/index";
import { GOOGLE_MAP_API_KEY } from "./config";
import { Marker } from "./components/marker";
import { colors } from "./theme";
import coveredAreaData from "./config/covered_area.json";
import spotData from "./config/spot_data.json";

const App = () => {
  return (
    <div className="App">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          defaultZoom={11}
          defaultCenter={{
            lat: 22.2698349,
            lng: 113.9343712,
          }}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => handledApiLoaded(map, maps)}
        >
          {spotData && spotData.length > 0 ? (
            spotData.map((spot) => {
              return (
                <Marker
                  key={spot.id}
                  id={spot.id}
                  lat={spot.circularRegion.coordinate.latitude}
                  lng={spot.circularRegion.coordinate.longitude}
                  text={spot.name.en}
                />
              );
            })
          ) : (
            <></>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

const renderPolygon = (coveredAreaData: RawHykeCoveredAreasData) => {
  return coveredAreaData.map((data) =>
    data.polygonalRegions[0].outerRing.map(
      (ring) =>
        ({
          lat: ring.latitude,
          lng: ring.longitude,
        } as GoogleMapLatLng)
    )
  );
};

/**
 * Set polygon strokes on map
 * @param map Google Maps internal API object
 */
const handledApiLoaded = (map: any, maps: any) => {
  const polygons = renderPolygon(coveredAreaData);
  //set color style
  map.data.setStyle({
    strokeColor: colors.coverArea,
    fillColor: "transparent",
  });

  //set strokes for covered area
  map.data.add({
    geometry: new maps.Data.Polygon(polygons),
  });
};

export default App;
