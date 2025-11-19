import '../styles/Header.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light py-3 px-lg-5 px-3 shadow-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/logo.svg" className='logo' alt="Logo RE:Direct" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav fw-medium ms-auto gap-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#sobre">
                                    Sobre
                                </a>
                            </li>
                            <hr class="my-2 bg-light"/>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <hr class="my-2 bg-light"/>
                            <li className="nav-item">
                                <a className="nav-link" href="#contato">
                                    Contato
                                </a>
                            </li>
                            <hr class="my-2 bg-light"/>
                            <li className="nav-item">
                                <a className="btn btn-principal" href="#Login">
                                    Login
                                </a>
                            </li>
                            <hr class="my-2 bg-light"/>
                            <li className="nav-item">
                                <a className="btn btn-principal" href="#Cadastro">
                                    Cadastro
                                </a>
                            </li>
                            <hr class="my-2 bg-light"/>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}