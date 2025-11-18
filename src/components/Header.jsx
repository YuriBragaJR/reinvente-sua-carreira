import '../styles/Header.css'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light px-5">
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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sobre">
                                    Sobre
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contato">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}