<template>
  <div class="container">
    <div class="row">
        <div class="col-6">
          <label>Mensagem</label>
          <input class="form-control" type="text" v-model="mensagem" name="message" id="message"  />
        </div>
        
    </div>
    <br>
    <div  class="row">
      <div class="col-6">
          <button class="btn btn-primary mb-3" @click="enviarMensagem()" >Enviar</button>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
          <label>Retorno server</label>
          <input class="form-control" type="text" name="messageServer" id="messageServer"/>
        </div>
        
    </div>

  </div>

</template>

<script>
const  SocketClient = require('../service/socket.io')

export default {

  propos:{
    mensagem:String
  },

  methods:{
    enviarMensagem(){
      SocketClient.enviarMensagem(this.mensagem);
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
