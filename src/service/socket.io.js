const io = require("socket.io-client");
const SOCKET_URL = "http://localhost:3000";

 class SocketClient{
    
    constructor(){
    }

    socket = io(SOCKET_URL, {
            withCredentials: true,
            extraHeaders: {
            "my-custom-header": "abcd"
         }
    });

    enviarMensagem(mensagem){
        console.log(mensagem);
        this.socket.emit('message',mensagem)
    }
    
}    

module.exports = new SocketClient;