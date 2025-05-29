
<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Zustand-5.0.5-000000?style=for-the-badge&logo=npm&logoColor=white" alt="Zustand" />

  <h1>🍹 Bebidas React - Buscador de Cocktails</h1>

  <p>Aplicación web moderna para buscar, explorar y guardar tus recetas favoritas de bebidas y cócteles.</p>
</div>

---

## 📋 Índice

- [✨ Características](#-características)
- [🚀 Tecnologías](#-tecnologías)
- [🏗️ Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Instalación](#-instalación)
- [🔧 Comandos Disponibles](#-comandos-disponibles)
- [📦 API Utilizada](#-api-utilizada)
- [🧩 Componentes Principales](#-componentes-principales)
- [📚 Estado Global](#-estado-global)
- [📈 Funcionalidades Futuras](#-funcionalidades-futuras)

## ✨ Características

- **Búsqueda de Bebidas**: Encuentra recetas de cócteles por nombre, ingrediente o categoría
- **Vista Detallada**: Explora los ingredientes, medidas e instrucciones de preparación
- **Favoritos**: Guarda tus recetas preferidas para acceder rápidamente después
- **Diseño Responsivo**: Experiencia de usuario optimizada para dispositivos móviles y escritorio
- **Animaciones Suaves**: Transiciones fluidas entre vistas y componentes
- **Carga Diferida**: Implementación de lazy loading para mejorar el rendimiento
- **Gestión de Estado**: Administración de estado global eficiente con Zustand

## 🚀 Tecnologías

Esta aplicación está construida utilizando una pila tecnológica moderna:

- **React 19**: Última versión del popular framework para UI
- **TypeScript 5.8**: Tipado estático para un código más robusto
- **Vite 6**: Servidor de desarrollo ultrarrápido y optimizador de build
- **Zustand 5**: Gestor de estado minimalista pero potente
- **React Router 7**: Enrutamiento declarativo para aplicaciones React
- **Tailwind CSS 4**: Framework de CSS utilitario para diseño personalizado
- **Headless UI 2**: Componentes UI accesibles sin estilos predefinidos
- **Axios**: Cliente HTTP basado en promesas para solicitudes a la API
- **Zod**: Validación de esquemas para datos externos

## 🏗️ Estructura del Proyecto

```
bebidas-react-ts/
├── public/                # Activos estáticos públicos
├── src/                   # Código fuente principal
│   ├── components/        # Componentes reutilizables
│   │   ├── DrinkCard.tsx      # Tarjeta de bebida
│   │   ├── Header.tsx         # Cabecera de la aplicación
│   │   ├── Modal.tsx          # Modal para detalle de receta
│   │   └── Notification.tsx   # Componente de notificaciones
│   ├── layouts/           # Plantillas de página
│   │   └── Layout.tsx         # Layout principal con navegación
│   ├── stores/            # Gestión de estado global (Zustand)
│   │   ├── favoritesSlice.ts  # Estado para favoritos
│   │   ├── notificationSlice.ts # Estado para notificaciones
│   │   ├── recipeSlice.ts     # Estado para recetas
│   │   └── useAppStore.ts     # Store principal combinado
│   ├── services/          # Servicios para API y lógica
│   ├── types/             # Definiciones de tipos TypeScript
│   │   └── index.ts           # Tipos y interfaces
│   ├── utils/             # Utilidades y funciones auxiliares
│   ├── views/             # Páginas/vistas principales
│   │   ├── FavoritesPage.tsx  # Página de favoritos
│   │   └── IndexPage.tsx      # Página principal
│   ├── router.tsx         # Configuración de rutas
│   ├── main.tsx           # Punto de entrada de la aplicación
│   ├── index.css          # Estilos globales
│   └── vite-env.d.ts      # Tipados para Vite
├── .gitignore            # Archivos ignorados por git
├── eslint.config.js      # Configuración de ESLint
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── tsconfig.app.json     # Config TS para la aplicación
├── tsconfig.node.json    # Config TS para Node
└── vite.config.ts        # Configuración de Vite
```

Esta estructura organiza el código de manera modular y facilita el mantenimiento, separando claramente los componentes, las vistas, el estado global y los servicios.


## ⚙️ Instalación

Para comenzar a trabajar con este proyecto, sigue estos pasos:

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/bebidas-react-ts.git
cd bebidas-react-ts

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🔧 Comandos Disponibles
- `npm run dev`: Inicia el servidor de desarrollo de Vite
- `npm run build`: Compila TypeScript y construye la aplicación para producción
- `npm run lint`: Ejecuta ESLint para analizar el código
- `npm run preview`: Previsualiza la compilación de producción localmente

## 📦 API Utilizada
Esta aplicación consume la API pública TheCocktailDB para obtener información sobre bebidas y cócteles:
- Documentación: [TheCocktailDB API](https://www.thecocktaildb.com/api.php)
- Endpoints utilizados:
    - Búsqueda por nombre: `/search.php?s=`
    - Búsqueda por ingrediente: `/filter.php?i=`
    - Detalle de bebida: `/lookup.php?i=`

## 🧩 Componentes Principales
- **DrinkCard**: Tarjeta que muestra la información básica de una bebida
- **Modal**: Componente para mostrar detalles completos de una receta
- **SearchForm**: Formulario para buscar bebidas por diferentes criterios
- **Layout**: Estructura principal de la aplicación con navegación

## 📚 Estado Global
La aplicación utiliza Zustand para la gestión del estado, dividido en slices:
- **recipeSlice**: Gestiona las recetas de bebidas y búsquedas
- **favoritesSlice**: Maneja las bebidas marcadas como favoritas
- **notificationSlice**: Controla las notificaciones al usuario

## 📈 Funcionalidades Futuras
- [ ] Generar Recetas con Inteligencia Artificial

---

<div align="center">
  <br />
  <img src="https://img.shields.io/badge/Hecho_con-❤️-ff0000?style=flat-square" alt="Hecho con amor" />

  <h3>Conecta con el desarrollador</h3>

  <a href="https://github.com/AlonsoAM/bebidas-react-ts" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>

  <br />
  <hr style="width: 50%; margin: 20px auto;" />

  <p><strong>Bebidas React</strong> | Desarrollado con React 19, TypeScript y Tailwind CSS</p>
  <p>© 2025 <strong>AlonsoAM</strong> - Todos los derechos reservados</p>
</div>
