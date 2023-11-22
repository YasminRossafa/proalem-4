class Scene7 extends SimpleScene {
  constructor() {
    super("Scene7");
  }

  init() {
    this.speed = 3;
  }

  preload() {
    this.load.image("vidaboa", "assets/Scene7/vidaboa.jpeg");
    this.load.image("fim", "assets/Scene7/fim.png");
    this.load.image("player6", "assets/Scene6/player6.png");
  }

  create() {
  //Carregando imagem do Background 
    this.back = this.add.image(0, 0, "vidaboa").setOrigin(0, 0);
  //Carregando personagem
    this.player = this.add.sprite(80, 270, "player6").setScale(0.4);
  //Botão de fim
    this.myButton1 = this.add.sprite(430, 330, "fim").setScale(0.08);
          this.enableClick(this.myButton1);
          this.myButton1.visible = true;
  //Teclas
    this.leftKey = this.addKey("LEFT");
    this.rightKey = this.addKey("RIGHT");
  }

  update() {
    if(this.myButton1.wasClicked()){
          this.scene.start("Menu");
    }
  //Setando para Player não passar da margem
    if (this.player.x < 0) {
      this.player.x += this.speed;
      this.player.flipX = false;
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
  }
}