class Scene3 extends SimpleScene {
  constructor() {
    super("Scene3");
  }

  init() {
  
  }

  preload() {
    this.load.image("voc1", "assets/Scene3/voc1.jpeg");
    this.load.image("voc2", "assets/Scene3/voc2.jpeg");
    this.load.image("voc3", "assets/Scene3/voc3.jpeg");
    this.load.image("pronto", "assets/Scene3/pronto.png");
  }

  create() {
    this.myButton1 = this.add.sprite(0, 0, "voc1").setOrigin(0, 0);
          this.enableClick(this.myButton1);
          this.myButton1.visible = true;

    this.myButton2 = this.add.sprite(0, 0, "voc2").setOrigin(0, 0);
          this.enableClick(this.myButton2);
          this.myButton2.visible = false;

    this.myButton3 = this.add.sprite(0, 0, "voc3").setOrigin(0, 0);
          this.enableClick(this.myButton3);
          this.myButton3.visible = false;
      
    this.myButton4 = this.add.sprite(450, 300, "pronto").setScale(0.12);
          this.enableClick(this.myButton4);
          this.myButton4.visible = false;
  }

  update() {
      if(this.myButton1.wasClicked()){
        this.myButton1.destroy();
        this.myButton2.visible = true;
      }
      if(this.myButton2.wasClicked()){
        this.myButton2.destroy();
        this.myButton3.visible = true;
      }
      if(this.myButton3.wasClicked()){
        this.myButton4.visible = true;
      }
      if(this.myButton4.wasClicked()){
        this.scene.start("Scene4");
      }
  }
}