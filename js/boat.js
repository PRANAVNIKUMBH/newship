class Boat{
    constructor(x,y,w,h,a){
      var prop = {
       restitution:0.1
      }
      this.body = Bodies.rectangle(x,y,w,h,prop)
      this.w = w
      this.h = h
      this.a = a
      this.speed = 0.05
      World.add(world,this.body)
    }
    animate(){
      this.speed = this.speed+0.05
    }
    display(){
      var indx = Math.floor(this.speed%this.a.length)
      push()
      imageMode(CENTER)
      image(this.a[indx],this.body.position.x,this.body.position.y,this.w,this.h)
      pop()
    }
    remove(index){
      this.a = bboatani
      this.w = 300
      this.h = 300
        setTimeout(function(){
         World.remove(world,boats[index].body)
         delete boats[index]
        },3000)
        
    }
  }