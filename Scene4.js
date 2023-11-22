class Scene4 extends SimpleScene {
  constructor() {
    super("Scene4");
  }

  init() {
//Velocidade do Player
    this.speed = 3;
  }

  preload() {
    this.load.image("back1", "assets/Scene1/back1.png");
    this.load.image("tempo", "assets/Scene4/tempo1.jpeg");
    this.load.image("player4", "assets/Scene4/player4.png");
    this.load.image("curbotao", "assets/Scene4/curbotao.png");
  }

  create() {
  //Carregando imagem do Background 
    this.back = this.add.image(0, 0, "back1").setOrigin(0, 0);
    this.back.visible = false;
    this.tempo = this.add.image(0,0, "tempo").setOrigin(0,0);
    this.myTimer = this.addTimer(3000,1);
  //Carregando personagem
    this.player4 = this.add.sprite(420, 260, "player4").setScale(0.2);
    this.player4.visible = false;
  //Criando gatilho
    this.gatilho = this.add.circle(60, 250, 10, 0xFF0000);
    this.gatilho.visible = false;
  //Criando botão do currículo
    this.myButton1 = this.add.sprite(80, 300, "curbotao").setScale(0.1);
      this.enableClick(this.myButton1);
      this.myButton1.visible = false;
  //Teclas
    this.leftKey = this.addKey("LEFT");
    this.rightKey = this.addKey("RIGHT");
    this.spacekey = this.addKey("SPACE");
  }

  update() {
   if(this.myTimer.isUp()) {
    this.tempo.destroy();
    this.back.visible = true;
    this.player4.visible = true;
    }
  // Setando para Player não passar da margem
    if (this.player4.x < 0) {
      this.player4.x = 0;
    }
  //Movimento direita Player
    if (this.rightKey.isDown()){
      this.player4.x += this.speed;
      this.player4.flipX = false;
    }
  //Movimento esquerda Player
    if (this.leftKey.isDown()) {
      this.player4.x -= this.speed;
      this.player4.flipX = true;
    }
  //Se o Player atingir gatilho seta esse IF
    if (this.intersects(this.player4, this.gatilho)){
      this.myButton1.visible = true;
      this.speed = 0;
    }
  //Quando clicar para enviar currículo
    if(this.myButton1.wasClicked()){
          this.scene.start("Scene5");
    }
  }
}