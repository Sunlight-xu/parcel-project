import { Application, TextureLoader, Loader, Sprite } from 'pixi.js';
class Stage {
  public option: any;
  public app: any;
  public eventsMap: any = new Map;
  constructor(option) {
    this.option = option;
    this.setup();
  }
  // 初始化
  public setup() {
    this.app = new Application({
      width: this.option.container.clientWidth,
      height: this.option.container.clientHeight,
      transparent: false,
    });
    this.option.container.appendChild(this.app.view);
    this.app.renderer.backgroundColor = 0x061639;
    this.app.renderer.autoResize = true;
    this.app.stage.interactive = true
    this.registerEvent();
    // this.eventsMap.get('onLoad')('出事')
    // console.log(this.eventsMap)
    setTimeout(()=>{
      this.app.stage.on('click', (e)=>{
        console.log(e)
      })
    })
  }
  // 事件注册
  private registerEvent() {
    window.onresize = () => {
      this.app.renderer.resize(
        this.option.container.clientWidth,
        this.option.container.clientHeight
      );
    };
  }

  public on(key, callback){
    this.eventsMap.set(key, callback)
  }
  // 销毁
  public destroy() {}

  public addImage(url:string) {
    const loader = Loader.shared
    loader.add(url).load(() => {
      const pic = new Sprite(loader.resources[url].texture);
      // pic.width = 60
      // pic.height = 50
      console.log(pic.width)
      console.log(this.app)

      this.app.stage.addChild(pic);
      this.app.stage.render()

    });
    loader.onProgress.add(e=>{
      console.log(e.progress)
    })
  }
  get name() {
    return 'Stage';
  }
}
export { Stage };
