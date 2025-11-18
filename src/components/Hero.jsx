import '../styles/Hero.css'

export default function Hero() {
    return (
        <section className='hero' aria-label="Seção principal" role="region">
            <h1 className='text-white'>Reinvente sua Carreira</h1>
            <p>Descubra caminhos para transformar sua trajetória profissional.</p>
            <button>Comece agora</button>
        </section>
    );
}