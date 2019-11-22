
var osc;
var envKick;
var envSnare;


function setup() {
 createCanvas(100, 100);

  reverb = new p5.Reverb();
  filterKick = new p5.LowPass();
  filterSnare = new p5.LowPass();
  filterLTom = new p5.LowPass();
  filterMTom = new p5.LowPass();
  filterHTom = new p5.LowPass();

  envKick = new p5.Envelope();
  envKick.setADSR(0, 0.8, 0, 1)
  envKick.setRange(1, 0);

  envLTom = new p5.Envelope();
  envLTom.setADSR(0, 0.3, 0, 1);
  envLTom.setRange(0.5, 0);

  envMTom = new p5.Envelope();
  envMTom.setADSR(0, 0.3, 0, 1);
  envMTom.setRange(0.4, 0);

  envHTom = new p5.Envelope();
  envHTom.setADSR(0, 0.3, 0, 1);
  envHTom.setRange(0.3, 0);

  envSnare = new p5.Envelope();
  envSnare.setADSR(0, 0.15, 0, 0)
  envSnare.setRange(1, 0);

 
  

 oscKick = new p5.Oscillator();
 oscKick.setType('sine');
 oscKick.start();
 oscKick.freq(55);
 oscKick.amp(envKick);


 oscLTom = new p5.Oscillator();
 oscLTom.setType('sine');
 oscLTom.start();
 oscLTom.freq(65);
 oscLTom.pan(0);
 oscLTom.amp(envLTom);


 oscMTom = new p5.Oscillator();
 oscMTom.setType('sine');
 oscMTom.start();
 oscMTom.freq(82);
 oscMTom.pan(-0.2);
 oscMTom.amp(envMTom);


 oscHTom = new p5.Oscillator();
 oscHTom.setType('sine');
 oscHTom.start();
 oscHTom.freq(110);
 oscHTom.pan(0.2);
 oscHTom.amp(envHTom);

 oscSnare = new p5.Noise();
 oscSnare.start();
 oscSnare.amp(envSnare);

  oscKick.disconnect();
  oscKick.connect(filterKick);

  oscSnare.disconnect();
  oscSnare.connect(filterSnare);

  oscLTom.disconnect();
  oscLTom.connect(filterLTom);

  oscMTom.disconnect();
  oscMTom.connect(filterMTom);

  oscHTom.disconnect();
  oscHTom.connect(filterHTom);

}
function draw() {
  background(51) ;
  filterKick.set(2000, 10);
  filterLTom.set(261, 10);
  filterMTom.set(329, 10);
  filterHTom.set(140, 0);
  filterSnare.set(1440, 5);
}

function keyPressed() {

  if (key === "a" || key === "A") {
    reverb.process(envKick, 0.05, 1);
    envKick.play();
  }

  if (key === "w" || key === "W") {
    reverb.process(envLTom, 0.2, 1);
    envLTom.play();
  }

  if (key === "s" || key === "S") {
    reverb.process(envMTom, 0.2, 1);
    envMTom.play();
  }

  if (key === "e" || key === "E") {
    reverb.process(envHTom, 0.2, 1);
    envHTom.play();
  }

  if (key === "l" || key === "L") {
    reverb.process(envSnare, 0.2, 1);
    envSnare.play();
  }

}
