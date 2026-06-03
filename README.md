# Kiwi Detail Co. — Website

Marketing website for **Kiwi Detail Co.**, a premium car detailing & cleaning business in **Kerikeri, Bay of Islands, New Zealand**.

Built as an immersive single-page app with a scroll‑reactive 3D car, a multi‑page layout (Home, Services, Pricing, Gallery, About/FAQ, Contact), and before/after detailing galleries.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [React Router](https://reactrouter.com/) for pages
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) for the 3D background car
- [Framer Motion](https://www.framer.com/motion/) for page/section transitions

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
public/
  gallery/        # web-optimised before/after & showcase photos (number plates blurred)
  logo.png        # brand logo (transparent)
scripts/
  process_images.py   # resizes photos & blurs number plates (Python + Pillow)
src/
  components/     # CarScene (3D), Navbar, Footer, BeforeAfter, Reveal, Icons
  pages/          # Home, Services, Pricing, Gallery, About, Contact
  data/content.js # all business copy: services, pricing, FAQs, gallery
```

## Contact

- **Email:** kiwidetail.co@gmail.com
- **Phone:** 028 4211 713
- **Location:** Kerikeri, Bay of Islands
