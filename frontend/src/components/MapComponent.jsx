/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef, useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import { LineString } from "ol/geom";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import { Icon, Style, Stroke } from "ol/style";

// eslint-disable-next-line react/prop-types

//    OPEN LAYERS MAP USED
function MapComponent({ allLocations }) {
  const locations = allLocations.map((loc) => {
    return {
      coordinates: loc.coordinates,
      description: loc.description,
    };
  });

  const mapRef = useRef();

  useEffect(() => {
    // Convert coordinates from lon/lat to map projection
    const features = locations.map((location) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(location.coordinates)),
        description: location.description,
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // URL to your marker icon
            scale: 0.05, // Adjust the scale as needed
          }),
        })
      );
      return feature;
    });

    // Create a vector layer for the markers
    const vectorSource = new VectorSource({
      features: features,
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    // Create a LineString feature to connect the locations
    const lineStringFeature = new Feature({
      geometry: new LineString(
        locations.map((location) => fromLonLat(location.coordinates))
      ),
    });

    lineStringFeature.setStyle(
      new Style({
        stroke: new Stroke({
          color: "#55c57a",
          width: 3,
        }),
      })
    );

    vectorSource.addFeature(lineStringFeature);

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-112.987418, 37.198125]), // Centered on the first location
        zoom: 6,
      }),
    });

    // Add the vector layer with the line to the map
    map.addLayer(
      new VectorLayer({
        source: new VectorSource({
          features: [lineStringFeature],
        }),
      })
    );

    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapRef} className="section-map" />;
}

export default MapComponent;
