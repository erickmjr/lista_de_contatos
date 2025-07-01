import { useState, useEffect } from 'react';

export default function useLarguraDaTela() {
    const [largura, setLargura] = useState(window.innerWidth);
    useEffect(() => {
        const handleRedimensionar = () => setLargura(window.innerWidth);
        window.addEventListener('resize', handleRedimensionar);
        return () => window.removeEventListener('resize', handleRedimensionar);
    }, []);
    return largura;
}
