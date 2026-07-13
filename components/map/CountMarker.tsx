"use client";

import { DivIcon } from "leaflet";
import { Marker } from "react-leaflet";


interface Props {
  position:[number,number];
  label:string;
  count:number;
  selected?:boolean;
  onClick?:()=>void;
}


export default function CountMarker({

position,
label,
count,
selected=false,
onClick,

}:Props){


const icon = new DivIcon({

className:"",

html:`

<div

style="

background:${selected ? "#2563eb" : "white"};

color:${selected ? "white" : "#111827"};

border:1px solid ${selected ? "#2563eb" : "#d1d5db"};

border-radius:10px;

box-shadow:0 2px 6px rgba(0,0,0,.15);

min-width:55px;

padding:5px 7px;

text-align:center;

font-family:Arial,sans-serif;

cursor:pointer;

"

>


<div

style="

font-size:14px;

font-weight:700;

line-height:1;

"

>

${count}

</div>



<div

style="

margin-top:2px;

font-size:8px;

font-weight:600;

white-space:nowrap;

"

>

${label}

</div>


</div>

`,

iconSize:[55,38],

iconAnchor:[27,19],

});



return (

<Marker

position={position}

icon={icon}

eventHandlers={{

click:()=>onClick?.()

}}

/>

);


}