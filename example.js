// Example of change method with a failure closure
// This structure can be used in any methods of Pressure
// The failure block will return with an "error" and message showing why the device doesn't support 3D Touch and Force Touch

$.pressureConfig({
  polyfill: false
});

var block = {
  start: function(event){
    console.log('start', event);
  },

  change: function(force, event){
    // event.preventDefault();
    this.style.width = Pressure.map(force, 0, 1, 200, 300) + 'px';
    this.innerHTML = force;
    console.log('change', force);
  },

  startDeepPress: function(event){
    console.log('start deep press', event);
    this.style.backgroundColor = '#FF0040';
  },

  endDeepPress: function(){
    console.log('end deep press');
    this.style.backgroundColor = '#0080FF';
  },

  end: function(){
    console.log('end');
    this.style.width = '200px';
    this.innerHTML = 0;
  },

  unsupported: function(){
    console.log(this);
    this.innerHTML = 'Your device / browser does not support this :(';
  }
}

var sforce = 0;
var cforce = 0;

var block2 = {
  start: function(event){
    console.log('start', event);
  },

  change: function(force, event){
    // event.preventDefault();
    document.getElementById("demo").innerHTML = force;
    console.log('change', force);
	cforce = force    
  },

  startDeepPress: function(event){
    console.log('start deep press', event);
    
  },

  endDeepPress: function(){
    console.log('end deep press');
    
  },

  end: function(){
    console.log('end');
    sforce = sforce + cforce
    document.getElementById("demo").innerHTML = sforce;
  },

  unsupported: function(){
    console.log(this);
    document.getElementById("demo").innerHTML = 'Your device / browser does not support this :(';
  }
}

Pressure.set(document.querySelectorAll('#el1'), block);

$('#el1-jquery').pressure(block);

Pressure.set(document.querySelectorAll('#el11'), block2);
Pressure.set(document.querySelectorAll('#el12'), block2);
Pressure.set(document.querySelectorAll('#el13'), block2);
Pressure.set(document.querySelectorAll('#el14'), block2);
Pressure.set(document.querySelectorAll('#el15'), block2);
Pressure.set(document.querySelectorAll('#el16'), block2);
Pressure.set(document.querySelectorAll('#el17'), block2);
Pressure.set(document.querySelectorAll('#el18'), block2);
Pressure.set(document.querySelectorAll('#el19'), block2);
Pressure.set(document.querySelectorAll('#el10'), block2);
Pressure.set(document.querySelectorAll('#el1s'), block2);
Pressure.set(document.querySelectorAll('#el1p'), block2);


$('#el11-jquery').pressure(block2);
$('#el12-jquery').pressure(block2);
$('#el13-jquery').pressure(block2);
$('#el14-jquery').pressure(block2);
$('#el15-jquery').pressure(block2);
$('#el16-jquery').pressure(block2);
$('#el17-jquery').pressure(block2);
$('#el18-jquery').pressure(block2);
$('#el19-jquery').pressure(block2);
$('#el10-jquery').pressure(block2);
$('#el1s-jquery').pressure(block2);
$('#el1p-jquery').pressure(block2);


