import React from "react";

function MapLocation() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Ok%20Tours%20Yangon+(OK%20Group%20of%20Companies)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">
            Calcular Población en el Mapa
          </a>
        </iframe>
      </div>
    </div>
  );
}

export default MapLocation;
