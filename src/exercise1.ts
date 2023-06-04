/* Fix all the errors in the following function:

function normalizarTexto(texto) {
    return texto.trims().toLowercase();
}
*/

function normalizeText(texto: string): string {
    return texto.trim().toLowerCase();
}

console.log("exercise1:", normalizeText(" TeSt "))