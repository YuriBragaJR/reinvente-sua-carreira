import { useState } from 'react';

export default function Accordion({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                {question}
            </button>
            {open && <p>{answer}</p>}
        </div>
    );
}