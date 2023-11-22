class Menu extends SimpleScene {
  constructor() {
    super("Menu");
  }

  init() {

  }

  preload() {
  this.load.image("Logo","assets/menu_assets/logoproalem.png");
  this.load.image("Start","assets/menu_assets/start.png");
  }

  create() {
   this.add.sprite(256,135,"Logo").setScale(0.25);
   this.myButton = this.add.sprite(256,300,"Start").setScale(0.3);
   this.enableClick(this.myButton);
  }

  update() {
  if (this.myButton.wasClicked()) {
   this.scene.start("Scene1");
  }
  }
}