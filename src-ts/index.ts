// import { Stage } from "./core/stage"

// let container = document.getElementById('app')
// const stage = new Stage({
//   container
// })
// stage.on('onLoad',(e)=>{
//   console.log(e)
// })
// stage.on('click',(e)=>{
//   console.log(e)
// })
// stage.addImage('https://robot-vr-public.cdn.bcebos.com/bmap_images/test/268/7eb2b6c7adf27d0822492e86f6aa6f30.png')
import { Application, Texture, Loader, Sprite } from 'pixi.js';
//Create a Pixi Application
let app = new Application({ 
  width: 256, 
  height: 256,                       
  antialias: true, 
  transparent: false, 
  resolution: 1
}
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
const texture = Texture.from('https://robot-vr-public.cdn.bcebos.com/bmap_images/test/268/7eb2b6c7adf27d0822492e86f6aa6f30.png');
//Create the cat sprite
let cat = new Sprite(texture);
//Add the cat to the stage
app.stage.addChild(cat);

