export default function Footer() {
    return (
        <footer aria-label="Rodapé" style={footerStyle}>
            <p>© 2025 Re:Direct. Todos os direitos reservados.</p>
            <nav aria-label="Redes sociais">
                <ul style={listStyle}>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </nav>
            <p style={{ fontSize: '0.8rem' }}>Esta página foi construída com foco em acessibilidade e inclusão.</p>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '2rem',
    textAlign: 'center',
    marginTop: '2rem',
};

const listStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: 0,
};