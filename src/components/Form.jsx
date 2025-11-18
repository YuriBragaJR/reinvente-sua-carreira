import { useState } from 'react';
import Modal from './Modal';

export default function Form() {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.includes('@')) {
            setShowModal(true);
        }
    };

    return (
        <section id="contato">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Seu e-mail</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </section>
    );
}