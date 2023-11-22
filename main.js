

let config = {
  type: Phaser.AUTO,
  width: 512,
  height: 349,
  backgroundColor: 0x000000,
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
  scene: [Menu,Scene1, Scene2,Scene2OP,Scene3,Scene4,Scene5,Scene6,Scene7],
}

var foundation_fonts = `Inconsolata, Cousine, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`;

const game = new Phaser.Game(config);

