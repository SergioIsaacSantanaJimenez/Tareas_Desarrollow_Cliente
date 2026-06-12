# Aplicación de Currículum Vitae Interactivo

Este repositorio contiene una aplicación web de página única (SPA) desarrollada para mostrar un currículum vitae (CV) de forma interactiva y dinámica. La aplicación carga la información detallada del CV desde un archivo JSON, la renderiza dinámicamente en el DOM, e incorpora una sección de contacto con funcionalidad para enviar correos electrónicos directamente. Además, utiliza una biblioteca de animaciones para mejorar la experiencia de usuario y añadir fluidez a las transiciones.

## Descripción del Proyecto
La aplicación `CVApplication` es una solución frontend completa para presentar un CV profesional. Se encarga de:

1.  **Carga de Datos**: Recupera de forma asíncrona la información del CV desde un archivo `cv-data.json` utilizando la API `fetch`.
2.  **Renderizado Dinámico**: Genera y actualiza secciones del CV (información personal, formación, experiencia, aptitudes, idiomas y habilidades) basándose en los datos cargados.
3.  **Formulario de Contacto**: Permite a los visitantes enviar un mensaje a través de un formulario, utilizando una integración con un servicio de envío de emails de terceros (identificado por `Email.send`).
4.  **Animaciones**: Implementa animaciones con GSAP para ofrecer una interfaz más atractiva y una navegación suave entre elementos.
5.  **Manejo de Errores**: Incluye lógica para gestionar errores durante la carga de datos o el envío del formulario.

## Tecnologías Utilizadas

*   **TypeScript**: Lenguaje principal para la lógica de la aplicación, proporcionando tipado estático y mejorando la mantenibilidad y escalabilidad del código.
*   **HTML**: Estructura fundamental de la interfaz de usuario, donde se insertan los componentes del CV.
*   **SCSS (Sass)**: Preprocesador CSS utilizado para escribir estilos modulares, organizados y con características avanzadas como variables, anidamiento y mixins.
*   **CSS**: Estilos finales generados a partir de SCSS, aplicados a los elementos visuales de la aplicación.
*   **JavaScript**: Entorno de ejecución para el código TypeScript compilado, manejando la interactividad del lado del cliente.
*   **GSAP (GreenSock Animation Platform)**: Biblioteca robusta para crear animaciones de alta performance y fluidas en el DOM, utilizada para mejorar la interactividad y estética de la aplicación.
*   **EmailJS (o similar)**: Integrado a través de la función `Email.send` para permitir el envío de correos electrónicos directamente desde el navegador, gestionando la comunicación del formulario de contacto.

## Prerrequisitos

Para ejecutar esta aplicación, necesitarás:

*   Un navegador web moderno (Chrome, Firefox, Edge, Safari, etc.).
*   Para el desarrollo y la compilación del proyecto:
    *   **Node.js**: Versión LTS recomendada.
    *   **npm** (Node Package Manager) o **Yarn**.

## Cómo Instalar

1.  **Clonar el repositorio**:
    ```bash
git clone https://github.com/SergioIsaacSantanaJimenez/Tareas_Desarrollow_Cliente.git
cd Tareas_Desarrollow_Cliente/tarea1 # Ajusta la ruta si 'tarea1' no es la raíz del proyecto
    ```

2.  **Instalar dependencias**:
    ```bash
npm install
# o
yarn install
    ```

## Cómo Ejecutar

1.  **Compilar el proyecto**: Esto transformará el código TypeScript y SCSS en archivos JavaScript y CSS que el navegador puede entender.
    ```bash
npm run build # Este comando es común, pero puede variar según la configuración específica del proyecto (ej. `webpack`, `parcel`, `rollup`).
    ```

2.  **Servir la aplicación**: Una vez compilado, abre el archivo `index.html` (que se asume existe en el directorio de salida, por ejemplo, `dist/`) en tu navegador, o utiliza un servidor HTTP estático.
    ```bash
# Si no tienes un servidor estático, puedes instalar uno simple con npm:
npm install -g http-server
# Luego, navega al directorio donde se encuentra tu `index.html` compilado y ejecuta:
http-server .
# Y abre http://localhost:8080 (o el puerto que te indique) en tu navegador.
    ```

## Estructura del Proyecto

Se infiere la siguiente estructura a partir de los archivos proporcionados y su lógica:

```
. # Directorio raíz del proyecto (ej. Tareas_Desarrollow_Cliente/tarea1)
├── src/
│   ├── main.ts             # Lógica principal de la aplicación, carga de datos, renderizado y manejo de eventos.
│   ├── styles/
│   │   └── main.scss       # Hoja de estilos principal, importada en main.ts.
│   └── ...                 # Otros archivos TypeScript o de módulos, si los hubiera.
├── public/                 # Directorio para assets públicos y el archivo HTML principal.
│   ├── cv-data.json        # Archivo JSON con toda la información del currículum vitae.
│   ├── index.html          # Archivo HTML principal de la aplicación, que carga el JavaScript compilado.
│   └── ...                 # Otros recursos (imágenes, fuentes, etc.).
├── tsconfig.json           # Configuración del compilador TypeScript.
├── webpack.config.js       # (Opcional) Configuración para herramientas de bundling como Webpack.
├── package.json            # Metadatos del proyecto y dependencias.
└── ...                     # Otros archivos de configuración (postcss.config.js, .browserslistrc, etc.).
```

## Habilidades Técnicas Demostradas

Este proyecto demuestra un conjunto sólido de habilidades en desarrollo frontend:

*   **Desarrollo con TypeScript**: Implementación de clases (Programación Orientada a Objetos), interfaces para tipado estático, y manejo de la asincronía (`async/await`).
*   **Manipulación del DOM**: Creación y actualización dinámica de elementos HTML para renderizar contenido, garantizando una interfaz de usuario interactiva.
*   **Manejo Asíncrono de Datos**: Carga de recursos externos (archivos JSON) mediante `fetch` para una gestión eficiente y no bloqueante de los datos.
*   **Estilización Avanzada con SCSS**: Uso de un preprocesador CSS para mantener los estilos organizados, modulares y fáciles de mantener.
*   **Animaciones Frontend**: Integración y aplicación de la biblioteca GSAP para crear experiencias de usuario visualmente atractivas y fluidas.
*   **Integración de Servicios de Terceros**: Configuración y uso de APIs o SDKs externos (como EmailJS a través de `Email.send`) para añadir funcionalidades clave como el envío de correos electrónicos.
*   **Manejo de Formularios**: Captura y procesamiento de datos de formularios, incluyendo validación básica y lógica de envío.
*   **Manejo de Errores Robustos**: Implementación de `try/catch` para gestionar y reportar errores durante la ejecución de la aplicación, mejorando la fiabilidad.
*   **Modularización y Estructura de Código**: Organización de la lógica de la aplicación en una clase principal (`CVApplication`) y métodos específicos para cada tarea, facilitando la escalabilidad y el mantenimiento.