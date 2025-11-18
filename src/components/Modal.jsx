export default function Modal({ onClose }) {
    return (
        <div role="dialog" aria-modal="true">
            <p>Obrigado! Em breve entraremos em contato.</p>
            <button onClick={onClose}>Fechar</button>
        </div>
    );
}