# 🌤️ Weather Today App

Una aplicación web de clima minimalista y funcional que permite a los usuarios consultar el pronóstico actual para cualquier ciudad del mundo.

## 🚀 Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las tecnologías web fundamentales:

* **HTML5:** Estructura semántica de la aplicación.
* **CSS3:** Estilización y diseño responsivo básico.
* **JavaScript (ES6+):** Lógica de la aplicación, manejo de eventos y comunicación asíncrona.

## ✨ Características Principales

* **Consulta por Ubicación:** Permite buscar y mostrar el clima actual por nombre de ciudad.
* **Datos en Tiempo Real:** Obtiene la temperatura, la condición y la hora local directamente desde la API.
* **Actualización Dinámica del DOM:** La interfaz se actualiza sin recargar la página tras cada búsqueda.
* **Formato de Fecha y Hora:** Formatea la fecha y hora de la API para mostrar el día de la semana actual.

### Interacción con el Usuario

* **Manejo de Eventos:** Se añade un `eventListener` al formulario (`<form>`) para capturar la acción de búsqueda.
* **Prevención de Recarga:** Se llama a `e.preventDefault()` para evitar que la página se recargue al enviar el formulario.
* **Actualización de la UI:** La función `updateDetails()` se encarga de inyectar la nueva información (temperatura, ubicación, condición y tiempo) en los elementos HTML correspondientes.

### Para ver en vivo: https://boisterous-cat-eaaec4.netlify.app/ 
