const resources = [
    {
        title: 'Curso Gratuito de UX Design',
        description: 'Aprenda os fundamentos de UX com aulas práticas e certificação.',
        link: 'https://www.coursera.org/learn/ux-design',
    },
    {
        title: 'Mentoria para Transição de Carreira',
        description: 'Conecte-se com profissionais que já fizeram a mudança e receba orientação personalizada.',
        link: 'https://www.mentoria.com.br/transicao',
    },
    {
        title: 'Comunidade Mulheres na Tecnologia',
        description: 'Participe de uma rede de apoio com eventos, fóruns e oportunidades exclusivas.',
        link: 'https://www.mulheresnatech.org',
    },
];

export default function Resources() {
    return (
        <section aria-labelledby="recursos-titulo">
            <h2 id="recursos-titulo">Ferramentas para sua Jornada</h2>
            <div className="resources-grid">
                {resources.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-card"
                        aria-label={`Abrir recurso: ${item.title}`}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}