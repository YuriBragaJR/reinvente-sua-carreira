import '../styles/Hero.css'

export default function Hero() {
    return (
    <section className="hero-section hero shadow-lg">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-xl-8 col-xxl-6 text-lg-start text-center">
                    <h1 className="display-4 fw-bold mb-5 text-white txt-sh hero-title"><strong className='cor-p proposito'>Reescreva</strong> sua Trajetória com <strong className='cor-s proposito'>Propósito</strong></h1>
                    <p className="lead mb-4 text-white txt-sh fw-medium hero-txt">Descubra caminhos para retransformar sua trajetória profissional com orientação especializada e uma comunidade que apoia seu crescimento.</p>
                    <a href="#contato" className="btn btn-warning bg-s btn-lg fw-medium px-4 me-2 hero-cta">Comece agora</a>
                </div>

            </div>
        </div>
    </section>
    );
}