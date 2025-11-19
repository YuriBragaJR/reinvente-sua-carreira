const resources = [
    {
        title: 'Curso Gratuito de UX Design',
        description: 'Aprenda os fundamentos de UX com aulas práticas e certificação.',
        link: 'https://careerfoundry.com/en/blog/ux-design/best-free-ux-design-courses/',
    },
    {
        title: 'Mentoria para Transição de Carreira',
        description: 'Conecte-se com profissionais que já fizeram a mudança e receba orientação personalizada.',
        link: 'https://bodak.com.br/',
    },
    {
        title: 'Comunidade Mulheres na Tecnologia',
        description: 'Participe de uma rede de apoio com eventos, fóruns e oportunidades exclusivas.',
        link: 'https://reprograma.com.br/',
    },
];

export default function Resources() {
    return (
        <section className="container spc" aria-labelledby="recursos-titulo">
            <h2 id="recursos-titulo" className="cor-p mt-4 text-center text-lg-start">Ferramentas para sua Jornada</h2>
            <hr class="cor-p mb-5" />
            <div className="resources-grid">
                {resources.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-card cor-t text-decoration-none"
                        aria-label={`Abrir recurso: ${item.title}`}
                    >
                        <div className="shadow bg-l cor-txt mb-5 p-3 rounded-4">
                            <h3 className="cor-txt">{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}