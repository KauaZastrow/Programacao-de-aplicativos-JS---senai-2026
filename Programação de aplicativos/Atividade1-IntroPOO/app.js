import { AlertaEmail } from "./Model/AlertaEmail.js";
import { AlertaSMS } from "./Model/AlertaSMS.js";
import { AlertaPainel } from "./Model/AlertaPainel.js";

const email = new AlertaEmail("Email enviado com sucesso!", "Alta", "daniel_ramos-lopes@estudante.sesisenai.org.br");
const sms = new AlertaSMS("SMS enviado com sucesso!", "Média", "1234");
const painel = new AlertaPainel("Alerta no painel!", "Baixa", 1);

const alertas = [email, sms, painel];
console.log("Alertas criados");
for (let i = 0; i < alertas.length; i++) {
    const alerta = alertas[i];
    alertas[i].enviar();
}
console.log("Alertas enviados");