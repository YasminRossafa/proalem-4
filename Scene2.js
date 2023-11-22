class Scene2 extends SimpleScene {
  constructor() {
    super("Scene2");
  }
//Variável de velocidade
  init() {
    this.speed = 3;
  }
//Carregando imagens
  preload() {
    this.load.image("back2", "assets/Scene2/back2.jpeg");
    this.load.image("recpcao", "assets/Scene2/recpção.png");
    this.load.image("player", "assets/player.png");
    this.load.image("fala5", "assets/Scene2/fala5.png");
    this.load.image("pergunta2", "assets/Scene2/pergunta2.png");
  }

  create() {
//Carregando imagem do Background  
  this.add.image(0, 0, "back2").setOrigin(0, 0);
//Carregando imagem da Recepção 
  this.add.image(400, 260, "recpcao").setScale(0.5);
//Carregando Personagens
  this.player = this.add.sprite(90, 295, "player").setScale(0.2);
//Criando um Gatilho 
this.gatilho = this.add.circle(350, 250, 10, 0xFF0000);
this.gatilho.visible = false;
//Variavel para controlar diálogo
this.usar = 0;
//Fala 5
this.fala5 = this.add.sprite(370, 90, "fala5").setScale(0.3);
this.fala5.visible = false;
//Pergunta 2
this.pergunta2 = this.add.sprite(370, 90, "pergunta2").setScale(0.3);
this.pergunta2.visible = false;

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
      this.scene.start("Scene3");
    }
//Setando oq ocorre quando o Botão NÃO é clicado
    if(this.myButton2.wasClicked()){
      this.myButton1.destroy();
      this.myButton2.destroy();
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
  if (this.intersects(this.player, this.gatilho) && this.usar < 2){
    this.espaco = this.addText(17, 330,"Aperte ESPAÇO para pular",0x000000);
//Para o Player no dialogo
      this.speed = 0;
//Tornando visivel 5° fala
      this.fala5.visible = true;
//If para aperecer o proximo dialogo só ao apertar "SPACE"
      if(this.spacekey.wasPressed()){
        this.fala5.destroy();
        this.pergunta2.visible = true;
//Controle de quantos "SPACE" apertar        
        this.usar +=1;}
//If para Botões SIM e NÃO se tornarem visiveis
       if(this.usar >= 1){
         this.myButton1.visible = true; 
         this.myButton2.visible = true;
       }
  }
  }
}