import React, { useCallback } from "react";
import GoogleMapReact from "google-map-react";

interface Iprops {
    data: any;
    selectedOption: any;
}

const MapComponent: React.FC<Iprops> = (props) => {
    const { data, selectedOption, } = props
    console.log("selectedOption:==", selectedOption);

    const mapOptions = {
        center: {
            lat: 23.0379,
            lng: 72.5101,
        },
        zoom: 10,
    };

    const position = data.data.sensors.map((item: any) => ({ lat: item.latitude, lng: item.longitude, location: item.location }))
    const renderMarkers = useCallback((map: any, maps: any, position: any) => {
        position.forEach((element: any) => {
            if (selectedOption !== null) {
                console.log('inn');

                const marker = new maps.Marker({
                    position: {
                        lat: selectedOption.lat,
                        lng: selectedOption.lng,
                    },
                    map,
                    title: selectedOption.label
                });
                return marker;
            } else {

                const marker = new maps.Marker({
                    position: {
                        lat: element.lat,
                        lng: element.lng
                    },
                    map,
                    title: element.location
                });
                return marker;
            }
        });
    }, [selectedOption]);


    // Render the map component
    return (
        <div className="width--full height--full">

            <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}   // google api key
                    defaultCenter={mapOptions.center}
                    defaultZoom={mapOptions.zoom}
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, position)}

                >
                    {/* Add other components or markers on the map if needed */}

                </GoogleMapReact>
            </div>
        </div>
    );
};

export default MapComponent;