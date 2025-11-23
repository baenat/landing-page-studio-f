<div align="center">

# 👗 Landing Page Studio F

Landing page moderna y elegante construida con React 19, TypeScript y Tailwind CSS

![React](https://img.shields.io/badge/React-19-green?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css&logoColor=white)
![VITE](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</div><br>

## 🎥 Demo

### Desktop View
![Mobile Demo](./public/demo/demo.png)

**[Ver Demo en Vivo →](https://elegance-store-demo.vercel.app)**

## 🚀 Instalación

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/baenat/landing-page-studio-f

# Navegar al directorio
cd landing-page-studio-f

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:5173
```
---

## 📁 Estructura del Proyecto

```
landing-studio-f/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Alert/       # Sistema de notificaciones
│   │   ├── Gallery/     # Galería de imágenes
│   │   ├── Moments/     # Sección de momentos
│   │   ├── Navigation/  # Navegación principal
│   │   ├── Products/    # Catálogo de productos
│   │   └── Slider/      # Carrusel hero
│   ├── hooks/           # Custom hooks
│   │   ├── useAlerts.ts
│   │   ├── useAutoPlay.ts
│   │   └── useCarousel.ts
│   ├── types/           # Definiciones TypeScript
│   │   └── index.ts
│   ├── data/            # Datos y configuración
│   │   ├── categories.ts
│   │   ├── gallery.ts
│   │   ├── moments.ts
│   │   ├── products.ts
│   │   └── slides.ts
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Tecnologías

### Core
- **React 19** - Biblioteca UI
- **TypeScript 5.5** - Tipado estático
- **Vite 5.4** - Build tool

### Styling
- **Tailwind CSS** - Framework CSS utility-first

### Iconos
- **Lucide React** - Iconos modernos

### Fonts
- **Playfair Display** - Fuente serif elegante

---

## 🏗️ Arquitectura

### Principios de Diseño

**Separación de Responsabilidades**
```
Components → UI pura (presentación)
Hooks      → Lógica reutilizable
Types      → Contratos de datos
Data       → Configuración centralizada
```
**Componentes Pequeños y Enfocados**
```typescript
// ✅ Bueno - Una responsabilidad
function ProductCard({ product }) { ... }

// ❌ Malo - Demasiadas responsabilidades
function ProductSection() { /* fetch, filter, render */ }
```
---

## 📚 Recursos Adicionales

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev)

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

**Desarrollador**: [baenat](https://github.com/baenat)

**Repositorio**: [landing-page-studio-f](https://github.com/baenat/landing-page-studio-f)

---

<div align="center">
  <strong>Hecho con ❤️ y React</strong>
</div>

<div align="center">
  <sub>Built with React • TypeScript • Tailwind CSS</sub>
</div>
