class BaseElement{
  private property:{}
  private position: [number,number]
  constructor(option: {
    property: object,
    postion: [number,number]
  }){
    this.property = option.property
    this.position = option.postion
  }
  setPosition(position:[number,number]){
    this.position = position
  }
  getProperty() {
    return this.property
  }
  getPosition(){
    return this.position
  }
}
export default BaseElement