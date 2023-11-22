class Scene6 extends SimpleScene {
  constructor() {
    super("Scene6");
  }

  init() {
    this.speed = 3;
  }

  preload() {
    this.load.image("back2", "assets/Scene2/back2.jpeg");
    this.load.image("recepcao2", "assets/Scene6/recepcao2.png");
    this.load.image("player6", "assets/Scene6/player6.png");
    this.load.image("tempo2", "assets/Scene6/tempo2.jpeg");
    this.load.image("fala6", "assets/Scene6/fala6.png");
    this.load.image("fala7", "assets/Scene6/fala7.png");
    this.load.image("fala8", "assets/Scene6/fala8.png");
    this.load.image("investir", "assets/Scene6/investir.png");
    this.load.image("cocasa", "assets/Scene6/cocasa.png");
  }

  create() {
  //Carregando imagem do Background 
    this.back = this.add.image(0, 0, "back2").setOrigin(0, 0);
    this.back.visible = false;
  //Carregando personagem
    this.player = this.add.sprite(90, 260, "player6").setScale(0.4);
    this.player.visible = false;
  //Variavel para controlar diálogo
    this.usar = 0;
  //Carregando as falas
    this.fala6 = this.add.sprite(420, 90, "fala6").setScale(0.2);
    this.fala6.visible = false;
    this.fala7 = this.add.sprite(150, 90, "fala7").setScale(0.2);
    this.fala7.visible = false;
    this.fala8 = this.add.sprite(150, 90, "fala8").setScale(0.2);
    this.fala8.visible = false;
  //Criando botões
    this.myButton1 = this.add.sprite(300, 130, "investir").setScale(0.08);
          this.enableClick(this.myButton1);
          this.myButton1.visible = false;
    this.myButton2 = this.add.sprite(90,220, "cocasa").setScale(0.4);
          this.enableClick(this.myButton2);
          this.myButton2.visible = false;
  //Carregando imagem da recepção
    this.recepcao2 = this.add.image(400, 260, "recepcao2").setScale(0.7);
    this.recepcao2.visible = false;
  //Imagem de tempo
    this.tempo2 = this.add.image(0,0, "tempo2").setOrigin(0,0);
    this.tempo2.visible = true;
    this.myTimer = this.addTimer(3000,1);
  //Criando um Gatilho 
    this.gatilho = this.add.circle(350, 250, 10, 0xFF0000);
    this.gatilho.visible = false;
  //Teclas
    this.leftKey = this.addKey("LEFT");
    this.rightKey = this.addKey("RIGHT");
    this.spacekey = this.addKey("SPACE");
  }

  update() {
    if(this.myTimer.isUp()) {
    this.tempo2.destroy();
    this.back.visible = true;
    this.recepcao2.visible = true;
    this.player.visible = true;
    }
  //Setando para Player não passar da margem
    if (this.player.x < 0) {
      this.player.x += this.speed;
      this.player.flipX = false;
    }
  //Movimento direita Player
    if (this.rightKey.isDown()){
      this.player.visible = true;
      this.player.x += this.speed;
      this.player.flipX = false;
    }
  //Movimento esquerda Player
    if (this.leftKey.isDown()) {
      this.player.visible = true;
      this.player.x -= this.speed;
      this.player.flipX = true;
    }
  //Se o Player atingir gatilho seta esse IF
    if (this.intersects(this.player, this.gatilho) && this.usar <= 3){
    this.espaco = this.addText(20,330,"Aperte ESPAÇO para pular",0x000000);
//Para o Player no dialogo
      this.speed = 0;
//Tornando visivel 1° fala
      this.fala6.visible = true;
//If para aperecer o proximo dialogo só ao apertar "SPACE"
      if(this.spacekey.wasPressed()){
        this.fala6.destroy();
        this.fala7.visible = true;
        if(this.usar == 1){
          this.fala7.destroy();
          this.fala8.visible = true;
          this.myButton1.visible = true;
        }
      //Controle de quantos "SPACE" apertar        
        this.usar +=1;
      }
        if(this.myButton1.wasClicked()){
          this.fala8.destroy();
          this.myButton1.destroy();
          this.myButton2.visible = true;
        }
        if(this.myButton2.wasClicked()){
          this.scene.start("Scene7");
        }
    }
  }
}