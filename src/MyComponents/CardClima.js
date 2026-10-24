import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardClima = () => {
    const [data, setData] = useState(null);
    const [isCelsius, setIsCelsius] = useState(true);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    
    useEffect(() => {
        if (!navigator.geolocation) {
            setErrorMsg("Geolocalización no soportada por el navegador.");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fae9403e2eeb43e4873069de812c048c&lang=es`)
                    .then((res) => {
                        setData(res.data);
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.error(err);
                        setErrorMsg("Error al obtener los datos meteorológicos.");
                        setLoading(false);
                    });
            },
            (error) => {
                console.warn("Geolocalización denegada, usando Madrid como fallback:", error);
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=fae9403e2eeb43e4873069de812c048c&lang=es`)
                    .then((res) => {
                        setData(res.data);
                        setLoading(false);
                    })
                    .catch(() => {
                        setErrorMsg("No se pudo acceder a los datos de clima.");
                        setLoading(false);
                    });
            }
        );
    }, []);
    
    const handleConverter = () => {
        setIsCelsius(!isCelsius);
    };

    if (loading) {
        return (
            <div className="cardLoading">
                <h2>Cargando clima actual...</h2>
                <p>Detectando coordenadas GPS</p>
            </div>
        );
    }

    if (errorMsg && !data) {
        return (
            <div className="cardLoading">
                <h2>{errorMsg}</h2>
            </div>
        );
    }

    const tempKelvin = data?.main?.temp;
    const tempC = (tempKelvin - 273.15).toFixed(1);
    const tempF = ((tempKelvin - 273.15) * 9/5 + 32).toFixed(1);
    const iconCode = data?.weather?.[0]?.icon || "01d";
    const description = data?.weather?.[0]?.description || "Despejado";

    return (
        <>
            <div className='cardHeader'>
                <h1>Weather App</h1>
                <h3>{data?.name} - {data?.sys?.country}</h3>
            </div>
            <div className='cardLeftBody'>
                <img 
                    src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} 
                    alt={description} 
                />
            </div>
            <div className='cardRightBody'>
                <h4 style={{ textTransform: 'capitalize' }}>"{description}"</h4>
                <p><span><i className="fas fa-wind"></i> Viento: </span> {data?.wind?.speed} m/s</p>
                <p><span><i className="fas fa-cloud"></i> Humedad:</span> {data?.main?.humidity}% </p>
                <p><span><i className="fas fa-thermometer-three-quarters"></i> Presión:</span> {data?.main?.pressure} hPa</p>
            </div>
            <div className='cardFooter'>
                <span>
                    <b>{isCelsius ? `${tempC} °C` : `${tempF} °F`}</b>
                </span>
                <button onClick={handleConverter}>Cambiar a °F / °C</button>
            </div>
        </>
    );
};

export default CardClima;