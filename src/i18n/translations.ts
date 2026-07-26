export type Lang = 'es' | 'en'

const es = {
  nav: {
    services: 'Servicios',
    ai: 'Enfoque IA',
    about: 'Nosotros',
    clients: 'Clientes',
    contact: 'Contacto',
    cta: 'Conversemos',
    darkMode: 'Cambiar a modo oscuro',
    lightMode: 'Cambiar a modo claro',
  },
  hero: {
    eyebrow: 'Desarrollo de software · Inteligencia artificial aplicada',
    title1: 'Ingeniería de software con ',
    titleAccent: 'inteligencia',
    title2: ' en el núcleo.',
    sub: 'Diseñamos y construimos productos digitales a la medida — plataformas, integraciones y agentes de IA — que convierten procesos complejos en ventajas competitivas.',
    ctaPrimary: 'Iniciar conversación',
    ctaSecondary: 'Explorar servicios',
    scrollHint: 'Descubra más',
  },
  clients: {
    eyebrow: 'Confían en nosotros',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Soluciones completas, del concepto a producción.',
    intro:
      'Acompañamos a cada cliente en todo el ciclo de vida del software: desde la definición estratégica hasta la operación diaria, con equipos que se adaptan a su realidad.',
    items: [
      {
        title: 'Desarrollo de software a medida',
        desc: 'Plataformas web, móviles y sistemas empresariales diseñados alrededor de sus procesos, no al revés. Arquitecturas escalables, seguras y listas para crecer con su negocio.',
      },
      {
        title: 'Células de desarrollo dedicadas',
        desc: 'Talento senior que se integra a sus equipos con la metodología, el ritmo y las herramientas de su organización. Capacidad inmediata sin fricción de contratación.',
      },
      {
        title: 'Consultoría en tecnología',
        desc: 'Definimos con usted la arquitectura, el stack y la hoja de ruta tecnológica correctos para su operación, con decisiones fundamentadas en datos y experiencia real.',
      },
      {
        title: 'Evolución y soporte continuo',
        desc: 'Mantenimiento proactivo, monitoreo y mejora constante de sus sistemas. Su software siempre actualizado, seguro y funcionando al máximo rendimiento.',
      },
    ],
  },
  ai: {
    eyebrow: 'Enfoque IA',
    title: 'La inteligencia artificial no es un módulo más: es nuestra forma de construir.',
    lede:
      'Integramos modelos de lenguaje y aprendizaje automático directamente en los flujos de trabajo de su empresa, de forma segura y medible. El resultado: operaciones más rápidas, decisiones mejor informadas y equipos enfocados en lo que genera valor.',
    items: [
      {
        title: 'Automatización inteligente',
        desc: 'Procesos operativos que se ejecutan solos: clasificación de documentos, gestión de solicitudes, flujos de aprobación y tareas repetitivas que dejan de consumir horas de su equipo.',
      },
      {
        title: 'Agentes y copilotos empresariales',
        desc: 'Asistentes conectados a sus datos y sistemas que responden, resuelven y ejecutan con el contexto de su negocio, disponibles para su equipo y sus clientes.',
      },
      {
        title: 'Analítica y decisiones con datos',
        desc: 'Modelos predictivos y tableros inteligentes que anticipan la demanda, detectan riesgos y revelan oportunidades antes que la competencia.',
      },
    ],
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Un método probado, sin sorpresas.',
    phase: 'Fase',
    steps: [
      {
        title: 'Descubrimiento',
        desc: 'Entendemos su negocio, sus procesos y el problema real a resolver antes de escribir una sola línea de código.',
      },
      {
        title: 'Diseño de solución',
        desc: 'Definimos alcance, arquitectura y experiencia de usuario con prototipos que validan la dirección desde el inicio.',
      },
      {
        title: 'Construcción iterativa',
        desc: 'Entregas frecuentes y demostrables. Usted ve el avance real en cada iteración y ajustamos sobre la marcha.',
      },
      {
        title: 'Evolución continua',
        desc: 'Puesta en producción, monitoreo y mejora constante. El lanzamiento es el inicio, no el final.',
      },
    ],
  },
  stats: {
    eyebrow: 'Resultados',
    title: 'Cifras que respaldan nuestro trabajo.',
    items: [
      { value: '+25%', label: 'de productividad en los equipos que adoptan nuestras soluciones' },
      { value: '−15%', label: 'de costos operativos gracias a la automatización de procesos' },
      { value: '40%', label: 'menos tiempo de implementación frente al promedio del mercado' },
      { value: '+20%', label: 'de crecimiento promedio en las ventas de nuestros clientes, impulsado por nuestras soluciones' },
    ],
  },
  about: {
    eyebrow: 'Nosotros',
    title: 'Un socio tecnológico, no un proveedor más.',
    p1: 'Kabata Soft nació con una convicción: la tecnología solo vale si transforma la manera en que una empresa opera. Por eso cada solución que construimos parte de entender a fondo el negocio de nuestros clientes — sus procesos, sus números y sus metas.',
    p2: 'Somos un equipo multidisciplinario de ingenieros de software, especialistas en inteligencia artificial y diseñadores que trabajan como una extensión de su organización. Desde startups hasta corporaciones financieras, nos hemos ganado la confianza de nuestros clientes entregando con calidad, puntualidad y transparencia.',
    values: [
      {
        title: 'Precisión',
        desc: 'Calidad en cada línea de código, con estándares de ingeniería que garantizan software confiable y mantenible.',
      },
      {
        title: 'Transparencia',
        desc: 'Comunicación directa, avances visibles y compromisos que se cumplen. Sin sorpresas.',
      },
      {
        title: 'Innovación continua',
        desc: 'Adoptamos las tecnologías que marcan la diferencia — no las modas — y las aplicamos donde generan valor real.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Conversemos sobre su próximo proyecto.',
    text: 'Cuéntenos qué desafío tiene entre manos. Le responderemos con una propuesta clara de cómo podemos ayudarle.',
    emailLabel: 'Escríbanos directamente:',
    name: 'Nombre',
    email: 'Correo electrónico',
    company: 'Empresa',
    message: '¿En qué podemos ayudarle?',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Mensaje enviado. Le responderemos a la brevedad.',
    error: 'No se pudo enviar el mensaje. Intente de nuevo o escríbanos a contacto@kabatasoft.com.',
  },
  footer: {
    tagline: 'Software e inteligencia artificial para empresas que quieren ir más lejos.',
    rights: 'Kabata Soft S.A. Todos los derechos reservados.',
  },
}

const en: typeof es = {
  nav: {
    services: 'Services',
    ai: 'AI Focus',
    about: 'About',
    clients: 'Clients',
    contact: 'Contact',
    cta: "Let's talk",
    darkMode: 'Switch to dark mode',
    lightMode: 'Switch to light mode',
  },
  hero: {
    eyebrow: 'Software development · Applied artificial intelligence',
    title1: 'Software engineering with ',
    titleAccent: 'intelligence',
    title2: ' at its core.',
    sub: 'We design and build tailor-made digital products — platforms, integrations and AI agents — that turn complex processes into competitive advantages.',
    ctaPrimary: 'Start a conversation',
    ctaSecondary: 'Explore services',
    scrollHint: 'Discover more',
  },
  clients: {
    eyebrow: 'Trusted by',
  },
  services: {
    eyebrow: 'Services',
    title: 'End-to-end solutions, from concept to production.',
    intro:
      'We support every client across the full software lifecycle: from strategic definition to day-to-day operations, with teams that adapt to your reality.',
    items: [
      {
        title: 'Custom software development',
        desc: 'Web platforms, mobile apps and enterprise systems designed around your processes — not the other way around. Scalable, secure architectures ready to grow with your business.',
      },
      {
        title: 'Dedicated development teams',
        desc: 'Senior talent that integrates into your teams with your organization’s methodology, pace and tools. Immediate capacity without hiring friction.',
      },
      {
        title: 'Technology consulting',
        desc: 'We define the right architecture, stack and technology roadmap for your operation, with decisions grounded in data and real-world experience.',
      },
      {
        title: 'Evolution and ongoing support',
        desc: 'Proactive maintenance, monitoring and continuous improvement of your systems. Your software always up to date, secure and performing at its best.',
      },
    ],
  },
  ai: {
    eyebrow: 'AI Focus',
    title: 'Artificial intelligence is not an add-on: it is how we build.',
    lede:
      'We integrate language models and machine learning directly into your company’s workflows, securely and measurably. The result: faster operations, better-informed decisions and teams focused on what creates value.',
    items: [
      {
        title: 'Intelligent automation',
        desc: 'Operational processes that run themselves: document classification, request management, approval flows and repetitive tasks that stop consuming your team’s hours.',
      },
      {
        title: 'Enterprise agents and copilots',
        desc: 'Assistants connected to your data and systems that answer, resolve and execute with your business context — available to your team and your customers.',
      },
      {
        title: 'Analytics and data-driven decisions',
        desc: 'Predictive models and intelligent dashboards that anticipate demand, detect risk and reveal opportunities before your competition.',
      },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A proven method, no surprises.',
    phase: 'Phase',
    steps: [
      {
        title: 'Discovery',
        desc: 'We understand your business, your processes and the real problem to solve before writing a single line of code.',
      },
      {
        title: 'Solution design',
        desc: 'We define scope, architecture and user experience with prototypes that validate the direction from day one.',
      },
      {
        title: 'Iterative build',
        desc: 'Frequent, demonstrable deliveries. You see real progress in every iteration and we adjust as we go.',
      },
      {
        title: 'Continuous evolution',
        desc: 'Deployment, monitoring and constant improvement. Launch is the beginning, not the end.',
      },
    ],
  },
  stats: {
    eyebrow: 'Results',
    title: 'Numbers that back our work.',
    items: [
      { value: '+25%', label: 'productivity gains in teams adopting our solutions' },
      { value: '−15%', label: 'operating costs thanks to process automation' },
      { value: '40%', label: 'less implementation time versus the market average' },
      { value: '+20%', label: 'average sales growth for our clients, driven by our solutions' },
    ],
  },
  about: {
    eyebrow: 'About us',
    title: 'A technology partner, not just another vendor.',
    p1: 'Kabata Soft was born from a conviction: technology only matters if it transforms the way a company operates. That is why every solution we build starts with a deep understanding of our clients’ business — their processes, their numbers and their goals.',
    p2: 'We are a multidisciplinary team of software engineers, AI specialists and designers who work as an extension of your organization. From startups to financial corporations, we have earned our clients’ trust by delivering with quality, punctuality and transparency.',
    values: [
      {
        title: 'Precision',
        desc: 'Quality in every line of code, with engineering standards that guarantee reliable, maintainable software.',
      },
      {
        title: 'Transparency',
        desc: 'Direct communication, visible progress and commitments that are kept. No surprises.',
      },
      {
        title: 'Continuous innovation',
        desc: 'We adopt the technologies that make a difference — not the fads — and apply them where they create real value.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your next project.",
    text: 'Tell us about the challenge on your hands. We will get back to you with a clear proposal of how we can help.',
    emailLabel: 'Write to us directly:',
    name: 'Name',
    email: 'Email',
    company: 'Company',
    message: 'How can we help you?',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Message sent. We will get back to you shortly.',
    error: 'The message could not be sent. Try again or write to contacto@kabatasoft.com.',
  },
  footer: {
    tagline: 'Software and artificial intelligence for companies that want to go further.',
    rights: 'Kabata Soft S.A. All rights reserved.',
  },
}

export const translations: Record<Lang, typeof es> = { es, en }
export type Dict = typeof es
