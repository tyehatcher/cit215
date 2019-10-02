var data = [
  {
    color:"red"
  },
  {
    color:"blue"
  },
  {
    color:"green"
  }
]

// empty array that will be filled with constructors

var boxes =[];

// construcotr created
function box(color, name){
  var that = this;
  this.name=name;
  this.color=color;
  this.number=0;
  this.ele=document.createElement("div");
  this.ele.style.backgroundColor=this.color;
  this.ele.style.height="100px";
  this.ele.style.width="200px";
  this.ele.style.borderRadius="10px";
  this.ele.style.display="flex";
  //this.ele.style.position="relative";
  this.ele.style.alignItems="center";
  this.ele.style.justifyContent="middle";
  
  //this.ele.style.textAlign="center";
  //this.ele.style.verticalAlign="middle";
  
  // this.ele.innerHTML=this.name;
  this.numberEle=document.createElement("div");
  this.numberEle.innerHTML=this.number;
  
  this.numberEle.style.position="relative";
  this.numberEle.style.textAlign="center";
  this.numberEle.style.verticalAlign="middle";
  this.numberEle.style.width="100%";
  //this.ele.innerHTML = this.number;
  this.ele.appendChild(this.numberEle);
  
  this.ele.addEventListener("click", function(){
    that.addUp();
  });
  
  document.body.appendChild(this.ele);

}


// function associated with above constructor
box.prototype.addUp = function(){
  this.number++;
  //this.ele.innerHTML = this.number;
  this.numberEle.innerHTML=this.number;
}


// pushes constructors into array
for(var i=0; i<data.length; i++){
  boxes.push(new box(data[i].color, data[i].name))
}


// chooses constructor from array and uses prototype on that particular constructor outside f the click
boxes[4].addUp();