class Scene2OP extends SimpleScene {
  constructor() {
    super("Scene2OP");
  }

  init() {
    this.speed = 3;
  }

  preload() {
    this.load.image("back3", "assets/Scene2/back3.jpeg");
    this.load.image("playerOP", "assets/Scene2/playerOP.png");
    this.load.image("pensamento1", "assets/Scene2/pensamento1.png");this.load.image("fim", "assets/Scene7/fim.png");
  }

  create() {
  //Carregando imagem do Background  
    this.add.image(0, 0, "back3").setOrigin(0, 0);
  //Carregando Personagens
    this.player = this.add.sprite(45, 281, "playerOP").setScale(0.5);
  //Criando um Gatilho 
    this.gatilho = this.add.circle(480, 250, 10, 0xFF0000);
    this.gatilho.visible = false;
  //Botão de fim
    this.myButton1 = this.add.sprite(430, 330, "fim").setScale(0.08);
          this.enableClick(this.myButton1);
          this.myButton1.visible = false;
  //Fala 5
    this.pensamento1 = this.add.sprite(380, 90, "pensamento1").setScale(0.8);
    this.pensamento1.visible = false;
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
    if (this.intersects(this.player, this.gatilho)){
    //Deixando o player sem movimento na hora do diálogo
      this.speed = 0;
    //Tornando visivel 5° fala
      this.pensamento1.visible = true;
      this.myButton1.visible = true;
    }
    if(this.myButton1.wasClicked()){
      this.scene.start("Menu");
    }
  }
}