<div align="center">

# ⛅ Weather App · Monitor Meteorológico con Geolocalización

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![OpenWeather](https://img.shields.io/badge/API-OpenWeatherMap-EB6E4B?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism_UI-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/Licencia-MIT-purple?style=for-the-badge)](#)

<p align="center">
  <strong>Aplicación web interactiva en React que detecta la ubicación geográfica del usuario para reportar el clima en tiempo real.</strong><br>
  Incluye conversión instantánea de unidades (°C / °F), diseño Glassmorphism con video de fondo dinámico y tolerancia a fallos GPS.
</p>

[✨ Características](#-características-principales) •
[🏛️ Arquitectura](#-arquitectura-del-proyecto) •
[🌡️ Métricas y Datos](#-métricas-meteorológicas-consultadas) •
[🚀 Guía de Instalación](#-guía-de-instalación-y-ejecución) •
[🤖 Créditos](#-créditos--asistencia-técnica)

</div>

---

## 📌 Visión General

**Weather App** es una aplicación SPA creada en **React** que interactúa con la API de **OpenWeatherMap** y el servicio de geolocalización nativo del navegador (`navigator.geolocation`).

Presenta un diseño visual moderno con efecto **Glassmorphism (vidrio esmerilado)** sobre un fondo de video en bucle continuo, reportando condiciones ambientales precisas de la ciudad o localidad donde se encuentra el usuario.

---

## ✨ Características Principales

* 📍 **Detección Automática por GPS:** Lee latitud y longitud del dispositivo en tiempo real para obtener el reporte meteorológico exacto.
* 🔄 **Conversor Térmico Reactivo:** Botón toggle para alternar al instante entre grados Celsius (**°C**) y Fahrenheit (**°F**).
* 🛡️ **Tolerancia a Fallos (GPS Fallback):** Si el usuario bloquea los permisos de ubicación o el dispositivo carece de GPS, la app activa un fallback inteligente para mostrar datos meteorológicos sin romperse.
* ⚡ **Anti-Flicker & Zero NaN:** Pantalla de carga integrada mientras se resuelven las coordenadas del sensor.
* 🎨 **Interfaz Glassmorphism:** Fondo traslúcido con desenfoque de fondo (`backdrop-filter: blur`), tipografía Ubuntu y video en bucle con atributos `playsInline` para soporte móvil.

---

## 🏛️ Arquitectura del Proyecto

```text
App-Clima/
├── public/
│   ├── favicon.ico
│   ├── index.html                 # CDN FontAwesome y montaje React
│   └── manifest.json
├── src/
│   ├── MyComponents/
│   │   └── CardClima.js           # Lógica de geolocalización, API y estados
│   ├── assets/
│   │   ├── img/
│   │   │   └── bgImage.jpg        # Poster estático de respaldo
│   │   └── video/
│   │       └── bg.mp4             # Video ambiental de nubes en bucle
│   ├── App.js                     # Envoltorio del video y tarjeta principal
│   ├── index.css                  # Estilos glassmorphism y media queries
│   └── index.js                   # Bootstrap de la aplicación
├── package.json
└── README.md
```

---

## 🌡️ Métricas Meteorológicas Consultadas

| Métrica | Parámetro OpenWeather | Formato / Unidad |
| :--- | :--- | :--- |
| **Temperatura** | `main.temp` | Convertido dinámicamente de Kelvin a °C o °F |
| **Condición del Cielo** | `weather[0].description` | Descripción en español con icono oficial SVG/PNG |
| **Velocidad del Viento** | `wind.speed` | Metros por segundo ($m/s$) |
| **Humedad Atmosférica** | `main.humidity` | Porcentaje relativo ($\%$) |
| **Presión Barométrica** | `main.pressure` | Hectopascales / Milibares ($hPa / mb$) |

---

## 🚀 Guía de Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/Luaz2021/App-Clima.git
cd App-Clima
```

### 2. Instalar dependencias
Compatible con Node.js 16, 18, 20 y 24+:
```bash
npm install --legacy-peer-deps
```

### 3. Iniciar la aplicación en modo desarrollo
```bash
npm start
```
Se abrirá automáticamente [http://localhost:3000](http://localhost:3000) solicitando permisos para acceder a tu ubicación GPS.

---

## 🤖 Créditos & Asistencia Técnica

* **Desarrollo & Lógica Principal:** Alexander Martínez ([@Luaz2021](https://github.com/Luaz2021))
* **QA Tester, Auditoría de Código, Refactorización & Documentación README:** Generado por **Agent-Nova-Gemini-Assistant** ✨ (Copiloto y Asistente Técnico Autónomo basado en Google Gemini).

---
<div align="center">
  <sub>Desarrollado con fines educativos y de portfolio profesional · 2026</sub>
</div>