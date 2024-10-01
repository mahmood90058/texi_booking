"use client"
import { UserLocationContext } from '@/app/context/UserLocation'
import React, { useContext, useEffect, useRef } from 'react'
import { Map } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from './Markers';
import { DestinationCordContext } from '@/app/context/DestinationCordContext';
import { SourceCordContext } from '@/app/context/SourceCordContext';
import { DirectionDataContext } from '@/app/context/DirectionDataContext';
import MapBoxRoute from './MapBoxRoute';
import DistanceTime from './DistanceTime';
const MAPBOX_DRIVING_ENDPOINT =
"https://api.mapbox.com/directions/v5/mapbox/driving/";

const session_token = "5ccce4a4-ab0a-4a7c-943d-580e55542363";

function MapBoxMap() {

    // find to marker
    const mapRef = useRef<any>();
    const { userLocation, setUserLocation } = useContext(UserLocationContext)
    const { soruceCordinates } = useContext(SourceCordContext);
    const { destinationCordinates } = useContext(DestinationCordContext);

    const { directionData, setDirectionData } = useContext(DirectionDataContext);

    useEffect(() => {
        if (soruceCordinates) {
            mapRef.current?.flyTo({
                center: [soruceCordinates.lng, soruceCordinates.lat],
                duration: 2500,
            });
        }
    }, [soruceCordinates]);

    //Use to Fly to Destination Markers Location

    useEffect(() => {
        if (destinationCordinates) {
            mapRef.current?.flyTo({
                center: [destinationCordinates.lng, destinationCordinates.lat],
                duration: 2500,
            });
        }

        if (soruceCordinates && destinationCordinates) {
            getDirectionRoute();
        }
    }, [destinationCordinates]);




    const getDirectionRoute = async () => {
        const res = await fetch(
            MAPBOX_DRIVING_ENDPOINT +
            soruceCordinates.lng +
            "," +
            soruceCordinates.lat +
            ";" +
            destinationCordinates.lng +
            "," +
            destinationCordinates.lat +
            "?overview=full&geometries=geojson" +
            "&access_token=" +
            process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await res.json();
        console.log(result);
        console.log(result.routes);
        setDirectionData(result);
    };







    return (
        <div className='p-5'>
            <h2 className='text-2xl font-bold'>Map</h2>


            <div className='rounded-lg overflow-hidden'>
                {userLocation ?


                    <Map
                        ref={mapRef}
                        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                        initialViewState={{
                            longitude: userLocation?.lng,
                            latitude: userLocation?.lat,
                            zoom: 14
                        }}
                        style={{ width: "100%", height: 450, borderRadius: 10 }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    >

                        <Markers />

                        {directionData?.routes ? (
                            <MapBoxRoute

                                coordinates={directionData?.routes[0]?.geometry?.coordinates}
                            />
                        ) : null}


                    </Map>
                    : null}

            </div>

            <div className="absolute bottom-[40px]
      z-20 right-[20px]">
     <DistanceTime />
     </div>


        </div >

    )
}

export default MapBoxMap
