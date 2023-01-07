const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })
  readline.question(`Quantidade de envios => `, quant => {
    for (var i = 0; i < quant; i++){
        // Importando a biblioteca
        const nodemailer = require("nodemailer");
        // Configurando informações da conta remetente
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "SEU EMAIL AQUI",
                pass: "SUA SENHA AQUI",
            }
        });
    
        transporter.sendMail({
            from: "SEU NOME AQUI <SEU EMAIL AQUI>", //NÃO REMOVA OS SINAIS DE MAIOR E MENOR
            to: "EMAIL DO RECEPTOR",
            subject: "TITULO DO EMAIL",
            text: "TEXTO DO EMAIL"
    
        }).then(message => {
            console.info(message);
        }).catch(err => {
            console.error(err)
        })
}
    readline.close()
  })


