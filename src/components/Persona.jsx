export default function Persona() {
    return (
        <section id="persona" className="py-5 spc">
            <div className="container p-5 bg-l rounded shadow">
                <h2 className="fw-bold text-center mb-5 cor-p">Para quem é a RE:Direct?</h2>
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                        <img
                            src="https://static.photos/people/200x200/119.webp"
                            alt="Carla, 34 anos"
                            className="img-fluid foto-carla shadow"
                        />
                    </div>
                    <div className="col-lg-7">
                        <div className="ps-lg-5">
                            <h3 className="h2 fw-bold mb-3 cor-p">Conheça a Carla, 34 anos</h3>
                            <p className="lead mb-4">
                                Profissional de marketing que deseja migrar para a área de UX Design. Busca uma transição de carreira com propósito, autonomia e impacto.
                            </p>
                            <div className="mb-4">
                                <h5 className="fw-bold cor-p">Perfil</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><i className="bi bi-person-fill cor-p me-2"></i> Formação: Comunicação Social</li>
                                    <li className="mb-2"><i className="bi bi-briefcase-fill cor-p me-2"></i> Experiência: 10 anos em marketing digital</li>
                                    <li className="mb-2"><i className="bi bi-lightbulb-fill cor-p me-2"></i> Interesses: Design centrado no usuário, inovação social, tecnologia acessível</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h5 className="fw-bold cor-p">Desafios e Medos</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><i className="bi bi-exclamation-circle-fill cor-p me-2"></i> Insegurança sobre suas habilidades técnicas</li>
                                    <li className="mb-2"><i className="bi bi-exclamation-circle-fill cor-p me-2"></i> Medo de recomeçar do zero e perder estabilidade</li>
                                    <li className="mb-2"><i className="bi bi-exclamation-circle-fill cor-p me-2"></i> Dificuldade em encontrar mentoria e comunidade</li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h5 className="fw-bold cor-p">Objetivos e Motivação</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><i className="bi bi-check-circle-fill cor-p me-2"></i> Encontrar propósito profissional</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill cor-p me-2"></i> Trabalhar com impacto social e inclusão</li>
                                    <li className="mb-2"><i className="bi bi-check-circle-fill cor-p me-2"></i> Construir uma rede de apoio e aprendizado contínuo</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="fw-bold cor-p">Como a RE:Direct ajuda Carla</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><i className="bi bi-arrow-right-circle-fill cor-p me-2"></i> Trilhas de aprendizado em UX com foco em transição de carreira</li>
                                    <li className="mb-2"><i className="bi bi-arrow-right-circle-fill cor-p me-2"></i> Mentorias com profissionais que já fizeram essa mudança</li>
                                    <li className="mb-2"><i className="bi bi-arrow-right-circle-fill cor-p me-2"></i> Comunidade ativa para troca de experiências e apoio emocional</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
