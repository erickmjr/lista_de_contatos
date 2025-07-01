export function verificarNome(nome: string) {
    return nome.trim().length >= 2;
}

export function verificarEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
}

export function verificarNumero(numero: string) {
    return numero.trim().length === 11;
}
