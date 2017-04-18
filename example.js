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
