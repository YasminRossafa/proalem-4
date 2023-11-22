class Scene1 extends SimpleScene {
  constructor(){
    super("Scene1");
  }
  init(){
//Velocidade do Player
    this.speed = 3;
  }
preload() {
//Carregando imagens
  this.load.image("back1", "assets/Scene1/back1.png");
  this.load.image("player", "assets/player.png");
  this.load.image("pessoa", "assets/Scene1/pessoa.png");
  this.load.image("fala1", "assets/Scene1/fala1.PNG");
  this.load.image("fala2", "assets/Scene1/fala2.png");
  this.load.image("fala3", "assets/Scene1/fala3.png");
  this.load.image("fala4", "assets/Scene1/fala4.png");
  this.load.image("pergunta1", "assets/Scene1/pergunta1.png");
  this.load.image("Sim","assets/sim.png");
  this.load.image("Nao","assets/nao.png");
}
create() {
//Carregando imagem do Background  
this.add.image(0, 0, "back1").setOrigin(0, 0);
//Carregando Personagens
this.player = this.add.sprite(90, 260, "player").setScale(0.2);
this.pessoa = this.add.sprite(400, 250, "pessoa").setScale(0.12);
//Criando um Gatilho 
this.gatilho = this.add.circle(380, 250, 10, 0xFF0000);
this.gatilho.visible = false;
//Variavel para controlar diálogo
this.usar = 0;
//Fala 1
this.fala1 = this.add.sprite(350, 90, "fala1").setScale(0.3);
this.fala1.visible = false;
//Fala 2
this.fala2 = this.add.sprite(350, 90, "fala2").setScale(0.3);
this.fala2.visible = false;
//Fala 3
this.fala3 = this.add.sprite(350, 90, "fala3").setScale(0.3);
this.fala3.visible = false;
//Fala 4
this.fala4 = this.add.sprite(350, 90, "fala4").setScale(0.3);
this.fala4.visible = false;
//Pergunta 1
this.pergunta1 = this.add.sprite(370, 100, "pergunta1").setScale(0.7);
this.pergunta1.visible = false;

//Opções de Sim ou Não
this.myButton1 = this.add.sprite(350, 150, "Sim").setScale(0.1);
          this.enableClick(this.myButton1);
          this.myButton1.visible = false;
this.myButton2 = this.add.sprite(400,149,"Nao").setScale(0.1);
          this.enableClick(this.myButton2);
          this.myButton2.visible = false;
//Teclas
this.leftKey = this.addKey("LEFT");
this.rightKey = this.addKey("RIGHT");
this.spacekey = this.addKey("SPACE");
}

update() {
// Setando para PLayer não passar da margin
  if (this.player.x < 0) {
    this.player.x = 0;
  }
  //Setando oq ocorre quando o Botão SIM é clicado
        if(this.myButton1.wasClicked()){
          this.myButton1.destroy();
          this.myButton2.destroy();
          this.pergunta1.visible = false;
          this.scene.start("Scene2");
          }
//Setando oq ocorre quando o Botão NÃO é clicado
       if(this.myButton2.wasClicked()){
          this.myButton1.destroy();
          this.myButton2.destroy();
          this.pergunta1.visible = false;
          this.scene.start("Scene2OP");
        }
//Movimento direita Player
  if (this.rightKey.isDown()){
    this.player.x += this.speed;
    this.player.flipX = false;
  }
//Movimento esquerda Player
  if (this.leftKey.isDown()) {
    this.player.x -= this.speed;
    this.player.flipX = true;
  }
  //Se o Player atingir gatilho seta esse IF
  if (this.intersects(this.player, this.gatilho) && this.usar < 4){
    this.espaco = this.addText(265,330,"Aperte ESPAÇO para pular",0x000000);
//Para o Player no dialogo
      this.speed = 0;
//Tornando visivel 1° fala
      this.fala1.visible = true;
//If para aperecer o proximo dialogo só ao apertar "SPACE"
      if(this.spacekey.wasPressed()){
        this.addText();
        this.fala1.destroy();
        this.fala2.visible = true;
        if(this.usar == 1){
          this.fala2.destroy();
          this.fala3.visible = true;
        }
        if(this.usar == 2){
           this.fala3.destroy();
           this.fala4.visible = true;
        }
        //if da pergunta 1
        if(this.usar == 3){
          this.fala4.destroy();
          this.pergunta1.visible = true;
        }
//Controle de quantos "SPACE" apertar        
        this.usar +=1;}
//If para Botões SIM e NÃO se tornarem visiveis
       if(this.usar >= 4 ){
         this.myButton1.visible = true; 
         this.myButton2.visible = true;
       }
  }
}
}