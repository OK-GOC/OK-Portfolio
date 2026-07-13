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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.1346104549891!2d96.20695456219818!3d16.856844008057944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193d1892a736f%3A0xee934ea22c444548!2sRose%20Garden%20Housing!5e0!3m2!1sen!2ssg!4v1783912570139!5m2!1sen!2ssg"
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
