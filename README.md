
Aplicación web para curriculum vitae desarrollada con HTML, Sass y TypeScript, utilizando Vite como empaquetador.


Esta es una aplicación web que presenta mi CV de manera interactiva. Los datos se cargan dinámicamente desde un archivo JSON, permitiendo fácil mantenimiento y actualizaciones.


- ✅ **Empaquetador Vite**: Transformación de Sass y TypeScript
- ✅ **Datos dinámicos**: CV alimentado desde JSON asíncrono
- ✅ **Formulario de contacto**: Con validación y envío por email
- ✅ **Responsive Design**: Adaptable a todos los dispositivos
- ✅ **Sass avanzado**: Variables, mixins, extends, funciones y media queries
- ✅ **TypeScript**: Tipado fuerte y mejor desarrollo


- **HTML5**: Estructura semántica
- **Sass/SCSS**: Preprocesador CSS con características avanzadas
- **TypeScript**: Superset de JavaScript con tipado
- **Vite**: Empaquetador moderno y rápido
- **FormSubmit**: Servicio para envío de emails

### 1. Prerrequisitos
- **Node.js** versión 16 o superior
- **npm** (viene incluido con Node.js)

### 2. Clonar e instalar
```bash
# Clonar el repositorio
git clone [URL-DEL-REPOSITORIO]
cd [NOMBRE-DEL-PROYECTO]/tarea1

# Instalar dependencias
npm install
```

### 3. Desarrollo
```bash
# Ejecutar servidor de desarrollo
npm run dev
```
- Se abrirá automáticamente en `http://localhost:3000`
- Los cambios se reflejan automáticamente en el navegador

### 4. Construcción para producción
```bash
# Compilar proyecto
npm run build
```
- Se genera la carpeta `/dist` con todos los archivos optimizados
- Los archivos en `/dist` están listos para subir a cualquier servidor web

### 5. Vista previa de producción
```bash
# Ver el build final
npm run preview
```


Para cambiar la dirección de email donde se reciben los mensajes del formulario:

1. **Abrir el archivo**: `src/data/cv-data.json`
2. **Buscar la línea**: 
   ```json
   "emailContacto": "sergiosacsantana@gmail.com"
   ```
3. **Cambiar** por tu email:
   ```json
   "emailContacto": "tu-email@gmail.com"
   ```
4. **Guardar** y ejecutar `npm run build` de nuevo

El email debe ser una dirección válida y existente para recibir los mensajes.


Para modificar la información del CV:

1. **Editar**: `src/data/cv-data.json`
2. **Cambiar** cualquier información:
   - Datos personales
   - Formación académica
   - Experiencia laboral
   - Aptitudes y habilidades
   - Idiomas
3. **Ejecutar**: `npm run build`

Los cambios se reflejarán automáticamente en el sitio web.

