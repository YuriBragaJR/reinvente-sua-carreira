export default function Coments() {
    return (
        <section id="depoimentos" className="py-5 bg-light spc">
        <div className="container">
            <h2 className="fw-bold text-lg-start test-center cor-p">Quem já reinventou sua carreira</h2>
            <hr class="cor-p mb-5"/>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow bg-l">
                        <div className="card-body py-4">
                            <div className="d-flex mb-3">
                                <img src="http://static.photos/people/100x100/1" className="rounded-circle me-3" width="60" height="60" alt="Lucas"/>
                                <div>
                                    <h4 className="h6 fw-bold mb-0">Lucas, 29 anos</h4>
                                    <small className="text-muted">Ex-engenheiro</small>
                                </div>
                            </div>
                            <p className="mb-0"><i className="bi bi-quote fs-5 text-muted me-1"></i> Saí da engenharia e hoje trabalho com análise de dados. A RE:Direct me deu clareza e coragem.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow bg-l">
                        <div className="card-body py-4">
                            <div className="d-flex mb-3">
                                <img src="http://static.photos/people/100x100/2" className="rounded-circle me-3" width="60" height="60" alt="Renata"/>
                                <div>
                                    <h4 className="h6 fw-bold mb-0">Renata, 41 anos</h4>
                                    <small className="text-muted">Ex-professora</small>
                                </div>
                            </div>
                            <p className="mb-0"><i className="bi bi-quote fs-5 text-muted me-1"></i> Depois de 20 anos como professora, me tornei desenvolvedora front-end. Nunca imaginei que seria possível.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow bg-l">
                        <div className="card-body py-4">
                            <div className="d-flex mb-3">
                                <img src="http://static.photos/people/100x100/3" className="rounded-circle me-3" width="60" height="60" alt="João"/>
                                <div>
                                    <h4 className="h6 fw-bold mb-0">João, 36 anos</h4>
                                    <small className="text-muted">Ex-contador</small>
                                </div>
                            </div>
                            <p className="mb-0"><i className="bi bi-quote fs-5 text-muted me-1"></i> A comunidade me acolheu e me mostrou que recomeçar não é fracasso, é evolução.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}