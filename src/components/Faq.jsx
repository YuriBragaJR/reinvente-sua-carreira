export default function Faq() {
    return (
        <section id="faq" className="py-5 spc">
        <div className="container">
            <h2 className="fw-bold text-center cor-p">Perguntas Frequentes</h2>
            <hr class="cor-p mb-5" />
            <div className="accordion accordion-flush" id="faqAccordion">
                <div className="accordion-item mb-5  rounded-3 shadow p-3 bg-l">
                    <h3 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed bg-l" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            Como posso saber se é hora de mudar de carreira?
                        </button>
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p>Alguns sinais comuns inclui falta de motivação constante, sensação de estagnação, desejo de aprender algo novo ou busca por maior propósito. Nossa ferramenta de autoavaliação pode ajudar.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-5  rounded shadow p-3 bg-l">
                    <h3 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed bg-l" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            O processo de transição costuma demorar quanto tempo?
                        </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p>Varia muito conforme o cenário, mas em média nossos membros levam de 6 a 18 meses para fazer uma transição completa. O importante é respeitar seu ritmo e se preparar bem.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-5  rounded shadow p-3 bg-l">
                    <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed bg-l" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Como posso me manter financeiramente durante a transição?
                        </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            <p>Recomendamos estratégias como freelancing na área atual, redução de custos, economia prévia ou transição gradual mantendo o emprego enquanto se prepara.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}