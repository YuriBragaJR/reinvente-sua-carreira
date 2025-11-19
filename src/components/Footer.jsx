export default function Footer() {
    return (
        <footer className="pt-5 pb-2 bg-04 bg-t text-light spc" aria-label="Rodapé">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <a className="navbar-brand" href="#"><img className="img-fluid logo-footer" src="/logo2.svg"
                            alt="Logo RE:Direct"/></a>
                        <p className="mt-3">Plataforma dedicada a conectar pessoas e ideias por meio de soluções digitais inovadoras e acessíveis.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="fw-bold mb-4">Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Início</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-decoration-none">Serviços</a></li>
                            <li className="mb-2"><a href="#faq" className="text-white text-decoration-none">FAQ</a></li>
                            <li className="mb-2"><a href="#sobre" className="text-white text-decoration-none">Sobre</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4" id="contato">
                        <h5 className="fw-bold mb-4">Contato</h5>
                        <p><i className="bi bi-envelope me-2"></i> contato@redirectdigital.com</p>
                        <p><i className="bi bi-telephone me-2"></i> (11) 91234-5678</p>
                    </div>
                    <div className="col-lg-3 mb-4">
                        <h5 className="fw-bold mb-4">Redes Sociais</h5>
                        <a href="https://www.facebook.com/redirectdigital" target="_blank" className="text-white me-3">
                            <i className="bi bi-facebook fs-4 btn-icon"></i>
                        </a>
                        <a href="https://www.instagram.com/redirectdigital" target="_blank" className="text-white me-3">
                            <i className="bi bi-instagram fs-4 btn-icon"></i>
                        </a>
                        <a href="https://twitter.com/redirectdigital" target="_blank" className="text-white me-3">
                            <i className="bi bi-twitter-x fs-4 btn-icon"></i>
                        </a>
                        <a href="https://www.youtube.com/@redirectdigital" target="_blank" className="text-white">
                            <i className="bi bi-youtube fs-4 btn-icon"></i>
                        </a>
                    </div>
                </div>
                <hr className="my-4 bg-light"/>
                    <div className="col-md-12 text-center">
                        <p className="mb-0">&copy; 2025 RE:Direct. Todos os direitos reservados.</p>
                    </div>
            </div>
        </footer>

    );
}

