// UGH GARBAGE

// screen dims
var w = 500;
var h = 640;

var p_x = 70
var p_y = 270

var s1x1 = 285
var s1y1 = 0
var s1x2 = 445
var s1y2 = 0
var s1x3 = 410
var s1y3 = 190
var s1x4 = 250
var s1y4 = 190

var s2x1 = 365
var s2y1 = 440
var s2x2 = 205
var s2y2 = 440
var s2x3 = 205
var s2y3 = 440
var s2x4 = 365
var s2y4 = 440

var s3x1 = 0
var s3y1 = 0
var s3x2 = 0
var s3y2 = 0
var s3x3 = 0
var s3y3 = 0
var s3x4 = 0
var s3y4 = 0

var r = random(255)
var g = random(255)
var b = random(255)

var r_a = 0
var g_a = 0
var b_a = 0

var r_b = 0
var g_b = 0
var b_b = 0

var die;

function preload()
{
    die = loadSound('samples/die.mp3');
}

function reset()
{
    s1x1 = 285
    s1y1 = 0
    s1x2 = 445
    s1y2 = 0
    s1x3 = 410
    s1y3 = 190
    s1x4 = 250
    s1y4 = 190

    s2x1 = 365
    s2y1 = 440
    s2x2 = 205
    s2y2 = 440
    s2x3 = 205
    s2y3 = 440
    s2x4 = 365
    s2y4 = 440
    
    r = random(255)
    g = random(255)
    b = random(255)
    
    r_a = 0
    g_a = 0
    b_a = 0
}

function setup()
{
    createCanvas(w, h)
    background(255)
    noStroke()
    fg = loadImage("fg.png");
    bg = loadImage("bg.png");
    gd = loadImage("gd.png");
    die.loop();
    die.amp(0.33);
}

function draw()
{
    if (s1y3 < 420)
    {
        r_a += r/20.175
        g_a += g/20.175
        b_a += b/20.175
        
        s1x1 = s1x1 - 0.07*30
        s1y1 = s1y1 + 0.38*30
        s1x2 = s1x2 - 0.07*30
        s1y2 = s1y2 + 0.38*30
        s1x3 = s1x3 - 0.07*30
        s1y3 = s1y3 + 0.38*30
        s1x4 = s1x4 - 0.07*30
        s1y4 = s1y4 + 0.38*30
    }
    
    else if (s2y1 == s2y3)
    {
        s2y3 -= 1
        frameRate(2)
    }
    
    else if (s2y3 < 635)
    {
        frameRate(60)
        s2x3 = s2x3 - 0.30*30
        s2y3 = s2y3 + 0.33*30
        s2x4 = s2x4 - 0.30*30
        s2y4 = s2y4 + 0.33*30
        
        if (s1y1 < 420)
        {
            s1x1 = s1x1 - 0.07*30
            s1y1 = s1y1 + 0.38*30
            s1x2 = s1x2 - 0.07*30
            s1y2 = s1y2 + 0.38*30
        }
        if (s2y3 > 570)
        {
            s2x1 = s2x1 - 0.30*30
            s2y1 = s2y1 + 0.33*30
            s2x2 = s2x2 - 0.30*30
            s2y2 = s2y2 + 0.33*30
        }
    }
    else
    {
        
        r_b = JSON.parse(JSON.stringify(r_a))
        g_b = JSON.parse(JSON.stringify(g_a))
        b_b = JSON.parse(JSON.stringify(b_a))
        
        s3x1 = Math.floor(s2x1)
        s3y1 = Math.floor(s2y1)
        s3x2 = Math.floor(s2x2)
        s3y2 = Math.floor(s2y2)
        s3x3 = Math.floor(s2x3)
        s3y3 = Math.floor(s2y3)
        s3x4 = Math.floor(s2x4)
        s3y4 = Math.floor(s2y4)
        
        reset()   
    }
    
    background(0)
    image(bg, p_x, p_y, 400, 222);
    
    stroke(255)
    fill(r_a, g_a, b_a)
    quad(s1x1, s1y1, s1x2, s1y2, s1x3, s1y3, s1x4, s1y4);
    fill(r_b, g_b, b_b)
    quad(s3x1, s3y1, s3x2, s3y2, s3x3, s3y3, s3x4, s3y4);
    fill(r_a, g_a, b_a)
    quad(s2x1, s2y1, s2x2, s2y2, s2x3, s2y3, s2x4, s2y4);
    
    image(fg, p_x, p_y, 400, 222);
}