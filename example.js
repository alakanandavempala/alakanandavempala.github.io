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

Pressure.set(document.querySelectorAll('#el1'), block);
Pressure.set('#el3', block, {only: 'touch'});

$('#el1-jquery').pressure(block);
$('#el3-jquery').pressure(block, {only: 'touch'});

});

Pressure.set('#el1-jquery', {
  start: function(event){
    // this is called on force start
  },
  end: function(){
    // this is called on force end
  },
  startDeepPress: function(event){
    // this is called on "force click" / "deep press", aka once the force is greater than 0.5
    document.getElementById('mytextarea').innerHTML = "Pressure high";
  },
  endDeepPress: function(){
    // this is called when the "force click" / "deep press" end
  },
  change: function(force, event){
    document.getElementById('mytextarea').innerHTML = "Pressure change";
    // this is called every time there is a change in pressure
    // 'force' is a value ranging from 0 to 1
  },
  unsupported: function(){
    // NOTE: this is only called if the polyfill option is disabled!
    // this is called once there is a touch on the element and the device or browser does not support Force or 3D touch
  }
});
