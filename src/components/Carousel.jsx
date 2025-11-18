import { useState } from 'react';
import '../styles/Carousel.css';

const stories = [
    {
        name: 'Joana, 42 anos',
        text: 'De professora para analista de dados. Descobri que minha curiosidade e organização eram valiosas na tecnologia.',
    },
    {
        name: 'Rafael, 36 anos',
        text: 'Era vendedor e hoje sou desenvolvedor front-end. Comecei com cursos gratuitos e muita prática.',
    },
    {
        name: 'Luciana, 50 anos',
        text: 'Depois de 20 anos como bancária, virei consultora de finanças pessoais. Minha experiência virou diferencial.',
    },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const nextStory = () => {
        setIndex((prev) => (prev + 1) % stories.length);
    };

    const prevStory = () => {
        setIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    return (
        <section aria-label="Histórias inspiradoras" className="carousel">
            <h2>Histórias de Transição</h2>
            <div className="carousel-content">
                <p><strong>{stories[index].name}</strong></p>
                <p>{stories[index].text}</p>
            </div>
            <div className="carousel-controls">
                <button onClick={prevStory} aria-label="História anterior">◀</button>
                <button onClick={nextStory} aria-label="Próxima história">▶</button>
            </div>
        </section>
    );
}