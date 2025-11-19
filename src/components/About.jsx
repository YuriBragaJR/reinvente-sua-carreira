export default function About() {
    return (
<section id="sobre" className="py-5 my-5 bg-light">
        <div className="container spc">
            <div className="row justify-content-center text-center mb-5">
                <div className="col-lg-8">
                    <h2 className="display-5 fw-bold  mb-4 cor-p">Sobre o Projeto</h2>
                    <p className="text-dark fs-5 mb-5 cor-txt">O RE:Direct nasceu da necessidade de ajudar profissionais a encontrarem novos caminhos em suas carreiras. Oferecemos ferramentas, mentoria e uma comunidade engajada para apoiar sua transição profissional.</p>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow rounded-3 bg-l">
                        <div className="card-body text-center p-4">
                            <div className="feature-icon mb-3  fs-1">
                                <i className="bi bi-people-fill cor-t"></i>
                            </div>
                            <h5 className="card-title fw-bold text-dark cor-txt">Comunidade Ativa</h5>
                            <p className="card-text text-muted cor-txt">Conecte-se com outros profissionais em transição de carreira e compartilhe experiências.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow rounded-3 bg-l">
                        <div className="card-body text-center p-4">
                            <div className="feature-icon mb-3 fs-1">
                                <i className="bi bi-book cor-p"></i>
                            </div>
                            <h5 className="card-title fw-bold text-dark cor-txt">Mentoria Personalizada</h5>
                            <p className="card-text text-muted cor-txt">Receba orientação individualizada de mentores experientes em diversas áreas.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow rounded-3 bg-l">
                        <div className="card-body text-center p-4">
                            <div className="feature-icon mb-3 fs-1">
                                <i className="bi bi-award cor-s"></i>
                            </div>
                            <h5 className="card-title fw-bold text-dark cor-txt">Acessibilidade Total</h5>
                            <p className="card-text text-muted cor-txt">Conteúdos e ferramentas desenvolvidos para atender a todas as necessidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}