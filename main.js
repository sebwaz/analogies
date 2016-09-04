// MADE BY SEBAS :) 

// screen dims
var w = 640;
var h = 480;

//for rotator
a = 0
b = 0.5*Math.PI
c = 1*Math.PI
d = 1.5*Math.PI

// on init
function setup()
{
  createCanvas(w, h)
  background(255)
  noStroke()
}

function draw()
{ 
  background(255)
  
  /* CALCULATE XY OFFSETS */
  n = 17*Math.pow(sin(a), 2) * (sin(a) < 0 ? -1 : 1);
  m = 17*Math.pow(cos(a), 2) * (cos(a) < 0 ? -1 : 1);
  
  o = 17*Math.pow(sin(b), 2) * (sin(b) < 0 ? -1 : 1);
  p = 17*Math.pow(cos(b), 2) * (cos(b) < 0 ? -1 : 1);

  q = 17*Math.pow(sin(c), 2) * (sin(c) < 0 ? -1 : 1);
  r = 17*Math.pow(cos(c), 2) * (cos(c) < 0 ? -1 : 1);
    
  s = 17*Math.pow(sin(d), 2) * (sin(d) < 0 ? -1 : 1);
  t = 17*Math.pow(cos(d), 2) * (cos(d) < 0 ? -1 : 1);
    
  /* DRAW SQUARES */
  fill('#DE3964')
  rect(104+n, 24+m, 128, 128);
  fill('#fbf8ab')
  rect(256+o, 24+p, 128, 128);
  fill('#135f91')
  rect(408+q, 24+r, 128, 128);
  fill('#f83d44')
  rect(104+o, 176+p, 128, 128);
  fill('#ffb03a')
  rect(256+q, 176+r, 128, 128);
  fill('#054b49')
  rect(408+s, 176+t, 128, 128);
  fill('#b30100')
  rect(104+q, 328+r, 128, 128);
  fill('#ff7935')
  rect(256+s, 328+t, 128, 128);
  fill('#002e2e')
  rect(408+n, 328+m, 128, 128);

  /* INCREMENT */
  a += 0.02;
  b += 0.02;
  c += 0.02;
  d += 0.02;
    
  /* DON'T OVERFLOW */
  a %= 2*Math.PI;
  b %= 2*Math.PI;
  c %= 2*Math.PI;
  d %= 2*Math.PI;
    
}