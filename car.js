AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "../assets/car/scene.gltf" },
      clickCounter :{type: "number" , default:0},
      x : {type:"number" , default:1}
    },
    init: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 0, z: 80 };
      const rotation = { x: 0, y: 0, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale",{x:0.5,y:0.5,z:0.5})
    },
    update: function(){
      window.addEventListener("click",(e)=>{
        this.data.clickCounter =  this.data.clickCounter+1;
        if (this.data.clickCounter === this.data.x) {
          const rotation = { x: 0, y: (this.data.x*10), z: 0 };
          this.el.setAttribute("rotation", rotation);
          this.data.x+=1
        } 
      }
      )
    }
  });