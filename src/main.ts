// Importar estilos
import './styles/main.scss';

// Interfaces TypeScript para tipado
interface PersonalInfo {
  nombre: string;
  fechaNacimiento: string;
  direccion: string;
  telefono: string;
  email: string;
  emailContacto: string;
}

interface Formacion {
  titulo: string;
  descripcion: string;
  institucion: string;
  periodo: string;
}

interface ExperienciaLaboral {
  puesto: string;
  empresa: string;
  periodo: string;
  actividades: string[];
}

interface Idioma {
  idioma: string;
  nivel: string;
  codigo: string;
}

interface CVData {
  personal: PersonalInfo;
  formacion: Formacion;
  experiencia: ExperienciaLaboral[];
  aptitudes: string[];
  idiomas: Idioma[];
  skills: string[];
}

// Clase principal para manejar el CV
class CVApplication {
  private data: CVData | null = null;
  private form: HTMLFormElement | null = null;

  constructor() {
    this.init();
  }

  // Inicializar la aplicación
  private async init(): Promise<void> {
    try {
      await this.loadData();
      this.renderCV();
      this.setupForm();
      this.addAnimations();
    } catch (error) {
      console.error('Error inicializando la aplicación:', error);
      this.showError('No se pudieron cargar los datos del CV');
    }
  }

  // Cargar datos desde JSON de manera asíncrona
  private async loadData(): Promise<void> {
    try {
     const response = await fetch('cv-data.json');
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      throw new Error('No se pudo cargar el archivo de datos');
    }
  }

  // Renderizar todo el CV en el DOM
  private renderCV(): void {
    if (!this.data) return;

    this.renderHeader();
    this.renderFormacion();
    this.renderExperiencia();
    this.renderAptitudes();
    this.renderIdiomas();
    this.renderSkills();
  }

  // Renderizar header con información personal
  private renderHeader(): void {
    const headerElement = document.getElementById('header-info');
    if (!headerElement || !this.data) return;

    const { personal } = this.data;
    
    headerElement.innerHTML = `
      <h1 class="header__nombre">${personal.nombre}</h1>
      <div class="header__info">
        <div class="header__item">
          <strong>Fecha de nacimiento:</strong> ${personal.fechaNacimiento}
        </div>
        <div class="header__item">
          <strong>Dirección:</strong> ${personal.direccion}
        </div>
        <div class="header__item">
          <strong>Teléfono:</strong> ${personal.telefono}
        </div>
        <div class="header__item">
          <strong>Email:</strong> ${personal.email}
        </div>
      </div>
    `;
  }

  // Renderizar sección de formación
  private renderFormacion(): void {
    const formacionElement = document.getElementById('formacion-content');
    if (!formacionElement || !this.data) return;

    const { formacion } = this.data;
    
    formacionElement.innerHTML = `
      <div class="formacion__info">
        <div>
          <div class="formacion__titulo">${formacion.titulo}</div>
          <div class="formacion__descripcion">${formacion.descripcion}</div>
          <div class="formacion__institucion">${formacion.institucion}</div>
        </div>
        <div class="formacion__periodo">${formacion.periodo}</div>
      </div>
    `;
  }

  // Renderizar experiencia laboral
  private renderExperiencia(): void {
    const experienciaElement = document.getElementById('experiencia-content');
    if (!experienciaElement || !this.data) return;

    const experienciaHTML = this.data.experiencia.map(exp => `
      <div class="experiencia__item">
        <div class="experiencia__header">
          <div>
            <div class="experiencia__puesto">${exp.puesto}</div>
            <div class="experiencia__empresa">${exp.empresa}</div>
          </div>
          <div class="experiencia__periodo">${exp.periodo}</div>
        </div>
        <ul class="experiencia__actividades">
          ${exp.actividades.map(actividad => `<li>${actividad}</li>`).join('')}
        </ul>
      </div>
    `).join('');

    experienciaElement.innerHTML = experienciaHTML;
  }

  // Renderizar aptitudes
  private renderAptitudes(): void {
    const aptitudesElement = document.getElementById('aptitudes-content');
    if (!aptitudesElement || !this.data) return;

    const aptitudesHTML = `
      <ul class="aptitudes__lista">
        ${this.data.aptitudes.map(aptitud => 
          `<li class="aptitudes__item">${aptitud}</li>`
        ).join('')}
      </ul>
    `;

    aptitudesElement.innerHTML = aptitudesHTML;
  }

  // Renderizar idiomas
  private renderIdiomas(): void {
    const idiomasElement = document.getElementById('idiomas-content');
    if (!idiomasElement || !this.data) return;

    const idiomasHTML = `
      <div class="idiomas__lista">
        ${this.data.idiomas.map(idioma => `
          <div class="idioma">
            <div class="idioma__info">
              <div class="idioma__nombre">${idioma.idioma}</div>
              <div class="idioma__descripcion">${idioma.nivel}</div>
            </div>
            <div class="idioma__nivel">${idioma.codigo}</div>
          </div>
        `).join('')}
      </div>
    `;

    idiomasElement.innerHTML = idiomasHTML;
  }

  // Renderizar skills
  private renderSkills(): void {
    const skillsElement = document.getElementById('skills-content');
    if (!skillsElement || !this.data) return;

    const skillsHTML = `
      <ul class="skills__lista">
        ${this.data.skills.map(skill => 
          `<li class="skills__item">${skill}</li>`
        ).join('')}
      </ul>
    `;

    skillsElement.innerHTML = skillsHTML;
  }

  // Configurar formulario de contacto
  private setupForm(): void {
    this.form = document.getElementById('contacto-form') as HTMLFormElement;
    if (!this.form) return;

    this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    
    // Agregar validación en tiempo real
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', this.validateField.bind(this));
      input.addEventListener('input', this.clearError.bind(this));
    });
  }

  // Manejar envío del formulario
  private async handleFormSubmit(event: Event): Promise<void> {
    event.preventDefault();
    
    if (!this.form || !this.data) return;

    // Validar todos los campos
    if (!this.validateForm()) {
      return;
    }

    const submitButton = this.form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const formData = new FormData(this.form);

    try {
      // Deshabilitar botón durante el envío
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';

      // Agregar email de destino desde el JSON
      formData.append('_to', this.data.personal.emailContacto);
      formData.append('_subject', 'Nuevo mensaje desde CV Online');
      formData.append('_captcha', 'false');

      // Enviar con FormSubmit
      const response = await fetch('https://formsubmit.co/' + this.data.personal.emailContacto, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        this.showSuccess('Mensaje enviado correctamente');
        this.form.reset();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      this.showError('Error al enviar el mensaje. Inténtalo nuevamente.');
    } finally {
      // Rehabilitar botón
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensaje';
    }
  }

  // Validar formulario completo
  private validateForm(): boolean {
    if (!this.form) return false;

    const campos = ['nombre', 'email', 'mensaje'];
    let isValid = true;

  campos.forEach(campo => {
  const input = this.form!.querySelector(`[name="${campo}"]`) as (HTMLInputElement | HTMLTextAreaElement | null);

  if (!input) return; // seguridad por si no existe el campo en el DOM

  // Crear un evento real de tipo "input"
  const fakeEvent = new Event("input", { bubbles: true });
  Object.defineProperty(fakeEvent, "target", { writable: false, value: input });

  if (!this.validateField(fakeEvent)) {
    isValid = false;
  }
});


    return isValid;
  }

  // Validar campo individual
  private validateField(event: Event): boolean {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = input.value.trim();
    const fieldName = input.name;
    let isValid = true;
    let errorMessage = '';

    // Limpiar errores previos
    this.clearError(event);

    // Validaciones específicas
    switch (fieldName) {
      case 'nombre':
        if (!value) {
          errorMessage = 'El nombre es obligatorio';
          isValid = false;
        } else if (value.length < 2) {
          errorMessage = 'El nombre debe tener al menos 2 caracteres';
          isValid = false;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          errorMessage = 'El email es obligatorio';
          isValid = false;
        } else if (!emailRegex.test(value)) {
          errorMessage = 'Ingresa un email válido';
          isValid = false;
        }
        break;

      case 'mensaje':
        if (!value) {
          errorMessage = 'El mensaje es obligatorio';
          isValid = false;
        } else if (value.length < 10) {
          errorMessage = 'El mensaje debe tener al menos 10 caracteres';
          isValid = false;
        }
        break;
    }

    // Mostrar error si existe
    if (!isValid) {
      this.showFieldError(input, errorMessage);
    }

    return isValid;
  }

  // Limpiar error de campo
  private clearError(event: Event): void {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    input.classList.remove('error');
    
    const errorElement = input.parentElement?.querySelector('.campo__error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  // Mostrar error en campo específico
  private showFieldError(input: HTMLInputElement | HTMLTextAreaElement, message: string): void {
    input.classList.add('error');
    
    // Remover error previo si existe
    const existingError = input.parentElement?.querySelector('.campo__error');
    if (existingError) {
      existingError.remove();
    }

    // Crear nuevo elemento de error
    const errorElement = document.createElement('div');
    errorElement.className = 'campo__error';
    errorElement.textContent = message;
    
    input.parentElement?.appendChild(errorElement);
  }

  // Mostrar mensaje de éxito
  private showSuccess(message: string): void {
    this.showMessage(message, 'success');
  }

  // Mostrar mensaje de error
  private showError(message: string): void {
    this.showMessage(message, 'error');
  }

  // Mostrar mensaje temporal
  private showMessage(message: string, type: 'success' | 'error'): void {
    // Crear elemento de mensaje
    const messageElement = document.createElement('div');
    messageElement.className = `message message--${type}`;
    messageElement.textContent = message;
    
    // Estilos inline para el mensaje
    Object.assign(messageElement.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '1rem 2rem',
      borderRadius: '8px',
      color: 'white',
      fontWeight: 'bold',
      zIndex: '1000',
      backgroundColor: type === 'success' ? '#16a34a' : '#dc2626',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease'
    });

    document.body.appendChild(messageElement);

    // Animación de entrada
    setTimeout(() => {
      messageElement.style.transform = 'translateX(0)';
    }, 100);

    // Remover después de 5 segundos
    setTimeout(() => {
      messageElement.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(messageElement);
      }, 300);
    }, 5000);
  }

  // Agregar animaciones de entrada
  private addAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    // Observar todas las secciones
    const sections = document.querySelectorAll('.seccion');
    sections.forEach(section => observer.observe(section));
  }
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new CVApplication();
});