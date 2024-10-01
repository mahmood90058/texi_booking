"use client"
import Image from "next/image";
import Booking from "../components/Booking/Booking"
import MapBoxMap from "@/components/Map/MapBoxMap";
import { useEffect, useState } from "react";
import { UserLocationContext } from "./context/UserLocation";
import { SourceCordContext } from "./context/SourceCordContext";
import { DestinationCordContext } from "./context/DestinationCordContext";
import { DirectionDataContext } from "./context/DirectionDataContext";
import { SelectedCarAmountContext } from "./context/SelectedCartAmountContext";

export default function Home() {
  
  const[userLocation,setUserLocation]= useState<any>();

  const [soruceCordinates,setSourceCordinates]=useState<any>([]);
  const [destinationCordinates,setDestinationCordinates]=useState<any>([]);
  const [directionData,setDirectionData]=useState<any>([]);

  const[carAmount, setCarAmount]= useState<any>()


  useEffect(()=>{
    getUserLocation();
  },[])
  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      // console.log(pos)
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }



  return (
   <div>
    <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
      <SourceCordContext.Provider value={{soruceCordinates,setSourceCordinates}}>
      <DestinationCordContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
      <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
        <SelectedCarAmountContext.Provider value={{carAmount,setCarAmount}}>


    <div className="grid grid-cols-1 md:grid-cols-3">
      <div >
        <Booking/>
      </div>
      <div className="col-span-2 ">
        <MapBoxMap/>
      </div>

    </div> 
        </SelectedCarAmountContext.Provider>
   </ DirectionDataContext.Provider>
      </DestinationCordContext.Provider>
      </SourceCordContext.Provider>
    </UserLocationContext.Provider>
   
   </div>
  );
}
