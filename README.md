# 🌦️ Weather App

### Para ver: https://weather-app-beta-one-34.vercel.app/ 

Una aplicación web moderna y funcional para consultar el estado del clima en tiempo real. Este proyecto utiliza la API de WeatherAPI para obtener datos meteorológicos precisos y presenta una interfaz dinámica que se adapta según la hora del día de la ubicación consultada.

## ✨ Características

* **Búsqueda Dinámica:** Consulta el clima de cualquier ciudad del mundo mediante una barra de búsqueda.
* **Interfaz Inteligente (Day/Night Mode):** El fondo y los colores de la aplicación cambian automáticamente a `day-mode` o `night-mode` dependiendo de si es de día o de noche en la ubicación buscada.
* **Geolocalizacion Automatica:** La aplicación detecta la ubicación actual del usuario mediante la API nativa del navegador (navigator.geolocation) para mostrar el clima local de forma inmediata al cargar la página.
* **Fallback Inteligente:** En caso de que el usuario deniegue el permiso de ubicación o el navegador no sea compatible, la app está programada para mostrar por defecto el clima de una ciudad predefinida (Medellín), garantizando que la interfaz nunca aparezca vacía.
* **Feedback de Busqueda:** Gestión de errores mediante bloques try...catch que alertan al usuario si la ciudad ingresada no es válida o no fue encontrada.
* **Información Detallada:** Visualiza no solo la temperatura, sino también:
    * Humedad.
    * Velocidad del viento.
    * Sensación térmica.
    * Índice UV.
    * Presión atmosférica.
* **Diseño Animado:** Iconos meteorológicos con efectos de flotación y transiciones suaves.
* **Totalmente Responsivo:** Diseño adaptado para dispositivos móviles, tablets y escritorio mediante Media Queries.

## 📚 Aprendizajes
- Consumo de APIs REST usando fetch y async/await
- Manejo de estados dinámicos en la interfaz (day/night mode)
- Manipulación del DOM en JavaScript puro
- Diseño responsive y animaciones con CSS

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio.
* **CSS3:** Diseño personalizado, Grid, Flexbox y animaciones avanzadas.
* **JavaScript (ES6):** Consumo de API mediante `fetch` y manipulación dinámica del DOM.
* **Font Awesome:** Iconografía para los detalles del clima.
* **WeatherAPI:** Fuente de datos meteorológicos en tiempo real.

## ⚠️ Nota sobre la API Key
Por motivos de simplicidad en este portafolio, la API Key se encuentra en el frontend. Soy consciente de que en aplicaciones escalables esto debe gestionarse mediante Variables de Entorno o un Proxy Server para evitar su exposición.


