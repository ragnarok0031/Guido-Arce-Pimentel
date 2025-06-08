# ArceConnect - U.E. Guido Arce Pimentel

Sitio web oficial de la Unidad Educativa Guido Arce Pimentel.

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Despliegue en Netlify

Este proyecto está configurado para desplegarse en Netlify:

1. Conecta tu repositorio a Netlify
2. Configura los siguientes ajustes de construcción:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Haz clic en "Deploy site"

La configuración necesaria ya está incluida en el archivo `netlify.toml`.
