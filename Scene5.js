class Scene5 extends SimpleScene {
  constructor() {
    super("Scene5");
  }

  init() {
  }

  preload() {
  //Carregando imagens
    this.load.image("back5", "assets/Scene5/back5.jpg");
    this.pcell = this.load.image("pcell", "assets/Scene5/pcell.png");
    this.cell = this.load.image("cell", "assets/Scene5/cell.png");
  }

  create() {
  //Carregando imagem do Background  
    this.add.image(0, 0, "back5").setOrigin(0, 0);
  //Criando botão do celular
    this.myButton1 = this.add.sprite(210, 210, "pcell").setScale(0.7);
    this.enableClick(this.myButton1);
    this.myButton1.visible = true;
  //Carregando imagem do celular
    this.cell = this.add.sprite(245, 200, "cell").setScale(0.4);
    this.enableClick(this.cell);
    this.cell.visible = false;
    this.text = this.addText(165,50,"Clique no celular.",0x000000);
    this.text2 = this.addText(46,15,"Clique no e-mail da empresa em que deseja trabalhar.",0x000000);
    this.text2.visible = false;
  }

  update() {
    if(this.myButton1.wasClicked()){
      this.myButton1.destroy();
      this.text.destroy();
      this.text2.visible = true;
      this.cell.visible = true;
    }
    if(this.cell.wasClicked()){
      this.scene.start("Scene6");
    }
  }
}