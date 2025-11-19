import { useState } from 'react';

export default function Form() {
    
    return (
        <section id="contato" className="py-5 bg-light spc">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="fw-bold text-center cor-p">Entre em Contato</h2>
                        <hr class="cor-p mb-5"/>
                        <form className="bg-l p-5 rounded shadow">
                            <div className="mb-3">
                                <label for="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name" required/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Mensagem</label>
                                <textarea className="form-control" id="message" rows="4" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-warning bg-s w-100">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}