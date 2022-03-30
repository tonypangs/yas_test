interface LocalizedMessage {
  en: string;
  zh: string;
}

interface LatLng {
  latitude: number;
  longitude: number;
}

interface Circle {
  radius: number; // in meters
  coordinate: LatLng;
}

// A ring is a connected sequence of four or more points that form a closed, non-self-intersecting loop
type Ring = LatLng[];

// A polygon consists of one outer ring, and may contains multiple inner rings.
// ref: https://datatracker.ietf.org/doc/html/rfc7946#appendix-A.3
interface Polygon {
  outerRing: Ring;
  innerRings: Ring[];
}

interface RawHykeCoveredAreaData {
  id: string;
  polygonalRegions: Polygon[];
}

interface RawHykeBlackSpotDataItem {
  id: string;
  name: LocalizedMessage;
  circularRegion: Circle;
}

// data scheme of covered-areas.data-item.json file
type RawHykeCoveredAreasData = RawHykeCoveredAreaData[];

// data scheme of black-spots.data-item file
type RawHykeBlackSpotsData = RawHykeBlackSpotDataItem[];

export type {
  RawHykeCoveredAreasData,
  RawHykeBlackSpotsData,
}