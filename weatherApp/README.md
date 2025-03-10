# PR: Implementación de React Router y Mejoras en la UI para Weather App

## Descripción
Este PR introduce la implementación de React Router para navegación multi-página, la creación de nuevas páginas (Home, Weather, Map y About), la funcionalidad para guardar ciudades favoritas y mejoras en la UI utilizando Shadcn/ui. Además, se ha agregado una funcionalidad de mapa para visualizar datos meteorológicos y se han implementado mejoras avanzadas como modo oscuro, historial climático y comparación de clima.

## Cambios Principales

### 1. Implementación de React Router
- Instalado **react-router-dom** con `npm install react-router-dom`
- Configuradas rutas para:
  - `/` → Home
  - `/weather` → Weather
  - `/map` → Map
  - `/about` → About
- Creado un componente de navegación para cambiar entre las páginas.

### 2. Creación de Nuevas Páginas
- **Home**: Mensaje de bienvenida y enlaces rápidos.
- **Weather**: Mantiene la funcionalidad de búsqueda y visualización de clima.
- **Map**: Vista de mapa para datos meteorológicos utilizando **react-leaflet**.
- **About**: Información sobre la aplicación y sus características.

### 3. Funcionalidad para Guardar Ciudades Favoritas
- Implementado almacenamiento de ciudades favoritas en **localStorage**.
- Creado un listado de ciudades favoritas para acceso rápido.

### 4. Mejora de UI con Shadcn/ui 
- Instalado **Shadcn/ui** con `pm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react`.
- Sustituido CSS por componentes de Shadcn/ui.
- Implementación de componentes con tailwind.

### 5. Implementación de Funcionalidad de Mapa
- Integrado **react-leaflet** para mostrar datos meteorológicos geográficamente.
- Mostrados íconos del clima en el mapa para ciudades buscadas o favoritas.
- Agregada funcionalidad de clic en el mapa para obtener clima en ubicaciones seleccionadas.

### 6. Mejoras Avanzadas Implementadas
- **Modo Oscuro**: Implementado un switch para cambiar entre modos claro y oscuro utilizando el sistema de temas de Shadcn/ui.
- **Historial Climático**: Agregado un selector de fecha para consultar datos históricos de clima de una ciudad.
- **Comparación de Clima**: Implementada funcionalidad para comparar el clima de múltiples ciudades en un gráfico interactivo usando **recharts**.

## Pruebas Realizadas
- [x] Navegación fluida entre páginas.
- [x] Almacenamiento y recuperación de ciudades favoritas desde localStorage.
- [x] Integración correcta de mapa y visualización de datos meteorológicos.
- [x] Funcionalidad de modo oscuro operativa.
- [x] Histórico de búsquedas.
- [x] Comparación de clima entre dos ciudades.