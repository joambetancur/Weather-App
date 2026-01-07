# 🌦️ WeatherNow — Real-Time Weather App

### Para ver: https://weather-app-beta-one-34.vercel.app/ 

Aplicación web moderna para consultar el estado del clima en tiempo real, con geolocalización automática, fallback inteligente y theming dinámico según la hora del día en la ubicación consultada.
El proyecto fue diseñado con enfoque en experiencia de usuario (UX), manejo robusto de errores y arquitectura clara en JavaScript Vanilla, simulando escenarios reales de aplicaciones productivas.

## Pantalla Principal: <img width="648" height="410" alt="App" src="https://github.com/user-attachments/assets/cf6c01ae-e4be-42e4-9c17-c5a1c41a5f59" />

## 📌 Descripción del Proyecto

WeatherNow permite a los usuarios consultar información meteorológica precisa de cualquier ciudad del mundo o de su ubicación actual, mostrando datos relevantes de forma clara y visualmente atractiva.
La aplicación garantiza que nunca se muestre una interfaz vacía, incluso cuando el usuario rechaza permisos de geolocalización o ocurre un error en la búsqueda.

## ✨ Características

* **Búsqueda Dinámica:** Consulta el clima de cualquier ciudad del mundo mediante una barra de búsqueda.
* **Interfaz Inteligente (Day/Night Mode):** El fondo y los colores de la aplicación cambian automáticamente a `day-mode` o `night-mode` dependiendo de si es de día o de noche en la ubicación buscada.
* **Geolocalizacion Automatica:** La aplicación detecta la ubicación actual del usuario mediante la API nativa del navegador (navigator.geolocation) para mostrar el clima local de forma inmediata al cargar la página.
* **Fallback Inteligente:** En caso de que el usuario deniegue el permiso de ubicación o el navegador no sea compatible, la app está programada para mostrar por defecto el clima de una ciudad predefinida (Medellín), garantizando que la interfaz nunca aparezca vacía.
* **Autocompletado de Ubicaciones:** La aplicacion ofrece opciones de ubicaciones a medida que el usuario va escribiendo.
* **Feedback de Busqueda:** Gestión de errores mediante bloques try...catch que alertan al usuario si la ciudad ingresada no es válida o no fue encontrada.
* **Información Detallada:** Visualiza no solo la temperatura, sino también:
    * Humedad.
    * Velocidad del viento.
    * Sensación térmica.
    * Índice UV.
    * Presión atmosférica.
* **Diseño Animado:** Iconos meteorológicos con efectos de flotación y transiciones suaves.
* **Totalmente Responsivo:** Diseño adaptado para dispositivos móviles, tablets y escritorio mediante Media Queries.

## 🧠 Retos Técnicos Abordados

- Manejo de asincronía con fetch y async/await.
- Coordinación entre geolocalización, fallback y búsqueda manual.
- Sincronización del estado visual con datos de la API (day/night).
- Prevención de estados vacíos o errores silenciosos.
- Manipulación eficiente del DOM sin frameworks.

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio.
* **CSS3:** Diseño personalizado, Grid, Flexbox y animaciones avanzadas.
* **JavaScript (ES6):** Consumo de API mediante `fetch` y manipulación dinámica del DOM.
* **Font Awesome:** Iconografía para los detalles del clima.
* **WeatherAPI:** Fuente de datos meteorológicos en tiempo real.

## Mejoras Futuras

- Migrar la aplicación a React
- Componentes reutilizables
- Hooks (useEffect, useState)
- Custom hook useWeather
- Implementar TypeScript
- Resultados con LocalStorage

## ⚠️ Nota sobre la API Key
Por motivos de simplicidad en este portafolio, la API Key se encuentra en el frontend. Soy consciente de que en aplicaciones escalables esto debe gestionarse mediante Variables de Entorno o un Proxy Server para evitar su exposición.


