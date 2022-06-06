// Importação de módulos
import Pubby from '@pubby/sdk';
import AuthModule from @pubby/sdk/modules/auth';
import CommandsModule from @pubby/sdk/modules';
// Cria uma instância do bot
new Pubby()
// Configura a autenticação
.use(AuthModule, {
// clientId e secret devem ser informadas aqui
clientId: "CLIENT_ID DO BOT",
secret : "SECRET DO BOT",
})
// Configura o módulo de comandos
// para utilizar ! como prefixo de comandos
.use (CommandsModule, { prefix: "!" })
// Inicializa o bot
.init()
// Aguarda a inicialização
.then(async (bot) => {
// Entra em uma sala
await bot.room.join("sandbox");
// Registra um comando "ping" que responde a mensagem com "Pong!"
bot.commands.add("ping", (msg) => msg.reply("Pong!"));
});