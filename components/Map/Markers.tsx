import { DestinationCordContext } from '@/app/context/DestinationCordContext';
import { SourceCordContext } from '@/app/context/SourceCordContext';
import { UserLocationContext } from '@/app/context/UserLocation';
import React, { useContext, useEffect } from 'react';
import { Marker } from 'react-map-gl';

function Markers() {
    const { userLocation } = useContext(UserLocationContext);
    const { soruceCordinates } = useContext(SourceCordContext);
    const { destinationCordinates } = useContext(DestinationCordContext);

    useEffect(() => {
        console.log("User Location Coordinates: ", userLocation);
        console.log("Source Coordinates: ", soruceCordinates);
        console.log("Destination Coordinates: ", destinationCordinates);
    }, [userLocation, soruceCordinates, destinationCordinates]);

    return (
        <>
            {/* User Marker */}
            {/* {userLocation && (
                <Marker
                    longitude={userLocation?.lng}
                    latitude={userLocation?.lat}
                    anchor="bottom"
                >
                    <img src="./markers.png" className="w-10 h-10" alt="User Marker" />
                </Marker>
            )} */}

            {/* Source Marker */}
            {soruceCordinates.length!=0?  
                <Marker
                    longitude={soruceCordinates?.lng}
                    latitude={soruceCordinates?.lat}
                    anchor="bottom"
                >
                    <img src="./markers.png" className="w-10 h-10" alt="Source Marker" />
                </Marker>:null}
         

            {/* Destination Marker */}
            {destinationCordinates.length!=0 ?
                <Marker
                    longitude={destinationCordinates?.lng}
                    latitude={destinationCordinates?.lat}
                    anchor="bottom"
                >
                    <img src="./markers.png" className="w-10 h-10" alt="Destination Marker" />
                </Marker>:null
            }
        </>
    );
}

export default Markers;
