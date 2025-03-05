import { useEffect, useState } from "react";

function TituloPagina() {
  useEffect(() => {
    const tituloOriginal = document.title;
    let interval;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        let mostrarMensaje = false;
        interval = setInterval(() => {
          document.title = mostrarMensaje ? "Atrápalos a todos!" : tituloOriginal;
          mostrarMensaje = !mostrarMensaje;
        }, 500);
      } else {
        clearInterval(interval);
        document.title = tituloOriginal;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
}

export default TituloPagina;
