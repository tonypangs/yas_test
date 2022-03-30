import React, { useState } from "react";
import "./App.css";
import GoogleMap from "google-map-react";
import { RawHykeBlackSpotsData, RawHykeCoveredAreasData } from "./type/index";
import { GOOGLE_MAP_API_KEY } from "./config";

const App = () => {
  const [spotData, setSpotData] = useState<RawHykeBlackSpotsData>([]);
  const [coveredAreaData, setCoveredAreaData] =
    useState<RawHykeCoveredAreasData>([]);


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
        >
        </GoogleMap>
      </div>
    </div>
  );
};

export default App;
