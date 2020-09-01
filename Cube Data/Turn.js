//Event Vars
var RtFaceClk, RtFaceAntiClk, LtFaceClk, LtFaceAntiClk, FtFaceClk, FtFaceAntiClk, BkFaceClk, BkFaceAntiClk, DnFaceClk, DnFaceAntiClk, UpFaceClk, UpFaceAntiClk;
// Absolute solid values
var back$ = [
  ['-100 -100 -100', '0 -100 -100', '100 -100 -100'],
  ['-100 0 -100', '0 0 -100', '100 0 -100'],
  ['-100 100 -100', '0 100 -100', '100 100 -100']
];
var centre$ = [
  ['-100 -100 0', '0 -100 0', '100 -100 0'],
  ['-100 0 0', '0 0 0', '100 0 0'],
  ['-100 100 0', '0 100 0', '100 100 0']
];
var front$ = [
  ['-100 -100 100', '0 -100 100', '100 -100 100'],
  ['-100 0 100', '0 0 100', '100 0 100'],
  ['-100 100 100', '0 100 100', '100 100 100']
];
// current position of blocks
var back = [
  ['-100 -100 -100', '0 -100 -100', '100 -100 -100'],
  ['-100 0 -100', '0 0 -100', '100 0 -100'],
  ['-100 100 -100', '0 100 -100', '100 100 -100']
];
var centre = [
  ['-100 -100 0', '0 -100 0', '100 -100 0'],
  ['-100 0 0', '0 0 0', '100 0 0'],
  ['-100 100 0', '0 100 0', '100 100 0']
];
var front = [
  ['-100 -100 100', '0 -100 100', '100 -100 100'],
  ['-100 0 100', '0 0 100', '100 0 100'],
  ['-100 100 100', '0 100 100', '100 100 100']
];

//current angle
var rotback = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var rotcentre = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var rotfront = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

//Cube At
var CubeAtback = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var CubeAtcentre = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var CubeAtfront = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


function rotRtFaceClk() {
  //Detecting CORNERS
  if (back$[0][2] == back[0][0]) {
    var x = 'rotateX(22.5deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUL').style.transform = x;
        setTimeout(function(){
          rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
          document.getElementById('BUL').style.transform = rotback[0][0];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'back[0][0]';
  } else if (back$[0][2] == back[0][2]) {
    var x = 'rotateX(22.5deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUR').style.transform = x;
        setTimeout(function(){
          rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
          document.getElementById('BUR').style.transform = rotback[0][2];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'back[0][2]';
  } else if (back$[0][2] == back[2][0]) {
    var x = 'rotateX(22.5deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDL').style.transform = x;
        setTimeout(function(){
          rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
          document.getElementById('BDL').style.transform = rotback[2][0];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'back[2][0]';
  } else if (back$[0][2] == back[2][2]) {
    var x = 'rotateX(22.5deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDR').style.transform = x;
        setTimeout(function(){
          rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
          document.getElementById('BDR').style.transform = rotback[2][2];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'back[2][2]';
  } else if (back$[0][2] == front[0][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUL').style.transform = x;
        setTimeout(function(){
          rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
          document.getElementById('FUL').style.transform = rotfront[0][0];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'front[0][0]';
  } else if (back$[0][2] == front[0][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUR').style.transform = x;
        setTimeout(function(){
          rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
          document.getElementById('FUR').style.transform = rotfront[0][2];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'front[0][2]';
  } else if (back$[0][2] == front[2][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDL').style.transform = x;
        setTimeout(function(){
          rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
          document.getElementById('FDL').style.transform = rotfront[2][0];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'front[2][0]';
  } else if (back$[0][2] == front[2][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDR').style.transform = x;
        setTimeout(function(){
          rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
          document.getElementById('FDR').style.transform = rotfront[2][2];
        },50);
      },50);
    },50);
    CubeAtback[0][2] = 'front[2][2]';
  }

  if (back$[2][2] == back[0][0]) {
    var x = 'rotateX(22.5deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUL').style.transform = x;
        setTimeout(function(){
          rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
          document.getElementById('BUL').style.transform = rotback[0][0];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'back[0][0]';
  } else if (back$[2][2] == back[0][2]) {
    var x = 'rotateX(22.5deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUR').style.transform = x;
        setTimeout(function(){
          rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
          document.getElementById('BUR').style.transform = rotback[0][2];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'back[0][2]';
  } else if (back$[2][2] == back[2][0]) {
    var x = 'rotateX(22.5deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDL').style.transform = x;
        setTimeout(function(){
          rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
          document.getElementById('BDL').style.transform = rotback[2][0];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'back[2][0]';
  } else if (back$[2][2] == back[2][2]) {
    var x = 'rotateX(22.5deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDR').style.transform = x;
        setTimeout(function(){
          rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
          document.getElementById('BDR').style.transform = rotback[2][2];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'back[2][2]';
  } else if (back$[2][2] == front[0][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUL').style.transform = x;
        setTimeout(function(){
          rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
          document.getElementById('FUL').style.transform = rotfront[0][0];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'front[0][0]';
  } else if (back$[2][2] == front[0][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUR').style.transform = x;
        setTimeout(function(){
          rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
          document.getElementById('FUR').style.transform = rotfront[0][2];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'front[0][2]';
  } else if (back$[2][2] == front[2][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDL').style.transform = x;
        setTimeout(function(){
          rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
          document.getElementById('FDL').style.transform = rotfront[2][0];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'front[2][0]';
  } else if (back$[2][2] == front[2][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDR').style.transform = x;
        setTimeout(function(){
          rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
          document.getElementById('FDR').style.transform = rotfront[2][2];
        },50);
      },50);
    },50);
    CubeAtback[2][2] = 'front[2][2]';
  }

  if (front$[0][2] == back[0][0]) {
    var x = 'rotateX(22.5deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUL').style.transform = x;
        setTimeout(function(){
          rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
          document.getElementById('BUL').style.transform = rotback[0][0];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'back[0][0]';
  } else if (front$[0][2] == back[0][2]) {
    var x = 'rotateX(22.5deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUR').style.transform = x;
        setTimeout(function(){
          rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
          document.getElementById('BUR').style.transform = rotback[0][2];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'back[0][2]';
  } else if (front$[0][2] == back[2][0]) {
    var x = 'rotateX(22.5deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDL').style.transform = x;
        setTimeout(function(){
          rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
          document.getElementById('BDL').style.transform = rotback[2][0];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'back[2][0]';
  } else if (front$[0][2] == back[2][2]) {
    var x = 'rotateX(22.5deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDR').style.transform = x;
        setTimeout(function(){
          rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
          document.getElementById('BDR').style.transform = rotback[2][2];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'back[2][2]';
  } else if (front$[0][2] == front[0][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUL').style.transform = x;
        setTimeout(function(){
          rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
          document.getElementById('FUL').style.transform = rotfront[0][0];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'front[0][0]';
  } else if (front$[0][2] == front[0][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUR').style.transform = x;
        setTimeout(function(){
          rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
          document.getElementById('FUR').style.transform = rotfront[0][2];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'front[0][2]';
  } else if (front$[0][2] == front[2][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDL').style.transform = x;
        setTimeout(function(){
          rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
          document.getElementById('FDL').style.transform = rotfront[2][0];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'front[2][0]';
  } else if (front$[0][2] == front[2][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDR').style.transform = x;
        setTimeout(function(){
          rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
          document.getElementById('FDR').style.transform = rotfront[2][2];
        },50);
      },50);
    },50);
    CubeAtfront[0][2] = 'front[2][2]';
  }

  if (front$[2][2] == back[0][0]) {
    var x = 'rotateX(22.5deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUL').style.transform = x;
        setTimeout(function(){
          rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
          document.getElementById('BUL').style.transform = rotback[0][0];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'back[0][0]';
  } else if (front$[2][2] == back[0][2]) {
    var x = 'rotateX(22.5deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BUR').style.transform = x;
        setTimeout(function(){
          rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
          document.getElementById('BUR').style.transform = rotback[0][2];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'back[0][2]';
  } else if (front$[2][2] == back[2][0]) {
    var x = 'rotateX(22.5deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDL').style.transform = x;
        setTimeout(function(){
          rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
          document.getElementById('BDL').style.transform = rotback[2][0];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'back[2][0]';
  } else if (front$[2][2] == back[2][2]) {
    var x = 'rotateX(22.5deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('BDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('BDR').style.transform = x;
        setTimeout(function(){
          rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
          document.getElementById('BDR').style.transform = rotback[2][2];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'back[2][2]';
  } else if (front$[2][2] == front[0][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUL').style.transform = x;
        setTimeout(function(){
          rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
          document.getElementById('FUL').style.transform = rotfront[0][0];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'front[0][0]';
  } else if (front$[2][2] == front[0][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FUR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FUR').style.transform = x;
        setTimeout(function(){
          rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
          document.getElementById('FUR').style.transform = rotfront[0][2];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'front[0][2]';
  } else if (front$[2][2] == front[2][0]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDL').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDL').style.transform = x;
        setTimeout(function(){
          rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
          document.getElementById('FDL').style.transform = rotfront[2][0];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'front[2][0]';
  } else if (front$[2][2] == front[2][2]) {
    var x = 'rotateX(22.5deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    setTimeout(function(){
      x = 'rotateX(22.5deg)' + x;
      document.getElementById('FDR').style.transform = x;
      setTimeout(function(){
        x = 'rotateX(22.5deg)' + x;
        document.getElementById('FDR').style.transform = x;
        setTimeout(function(){
          rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
          document.getElementById('FDR').style.transform = rotfront[2][2];
        },50);
      },50);
    },50);
    CubeAtfront[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[1][2] == back[0][1]) {
    var x = 'rotateX(45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(22.5deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtback[1][2] = 'back[0][1]';
  } else if (back$[1][2] == back[1][0]) {
    var x = 'rotateX(45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtback[1][2] = 'back[1][0]';
  } else if (back$[1][2] == back[1][2]) {
    var x = 'rotateX(45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtback[1][2] = 'back[1][2]';
  } else if (back$[1][2] == back[2][1]) {
    var x = 'rotateX(45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtback[1][2] = 'back[2][1]';
  } else if (back$[1][2] == centre[0][0]) {
    var x = 'rotateX(45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtback[1][2] = 'centre[0][0]';
  } else if (back$[1][2] == centre[0][2]) {
    var x = 'rotateX(45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtback[1][2] = 'centre[0][2]';
  } else if (back$[1][2] == centre[2][0]) {
    var x = 'rotateX(45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtback[1][2] = 'centre[2][0]';
  } else if (back$[1][2] == centre[2][2]) {
    var x = 'rotateX(45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtback[1][2] = 'centre[2][2]';
  } else if (back$[1][2] == front[0][1]) {
    var x = 'rotateX(45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtback[1][2] = 'front[0][1]';
  } else if (back$[1][2] == front[1][0]) {
    var x = 'rotateX(45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtback[1][2] = 'front[1][0]';
  } else if (back$[1][2] == front[1][2]) {
    var x = 'rotateX(45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtback[1][2] = 'front[1][2]';
  } else if (back$[1][2] == front[2][1]) {
    var x = 'rotateX(45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtback[1][2] = 'front[2][1]';
  }

  if (centre$[0][2] == back[0][1]) {
    var x = 'rotateX(45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtcentre[0][2] = 'back[0][1]';
  } else if (centre$[0][2] == back[1][0]) {
    var x = 'rotateX(45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtcentre[0][2] = 'back[1][0]';
  } else if (centre$[0][2] == back[1][2]) {
    var x = 'rotateX(45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtcentre[0][2] = 'back[1][2]';
  } else if (centre$[0][2] == back[2][1]) {
    var x = 'rotateX(45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtcentre[0][2] = 'back[2][1]';
  } else if (centre$[0][2] == centre[0][0]) {
    var x = 'rotateX(45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtcentre[0][2] = 'centre[0][0]';
  } else if (centre$[0][2] == centre[0][2]) {
    var x = 'rotateX(45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtcentre[0][2] = 'centre[0][2]';
  } else if (centre$[0][2] == centre[2][0]) {
    var x = 'rotateX(45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtcentre[0][2] = 'centre[2][0]';
  } else if (centre$[0][2] == centre[2][2]) {
    var x = 'rotateX(45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtcentre[0][2] = 'centre[2][2]';
  } else if (centre$[0][2] == front[0][1]) {
    var x = 'rotateX(45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtcentre[0][2] = 'front[0][1]';
  } else if (centre$[0][2] == front[1][0]) {
    var x = 'rotateX(45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtcentre[0][2] = 'front[1][0]';
  } else if (centre$[0][2] == front[1][2]) {
    var x = 'rotateX(45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtcentre[0][2] = 'front[1][2]';
  } else if (centre$[0][2] == front[2][1]) {
    var x = 'rotateX(45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtcentre[0][2] = 'front[2][1]';
  }

  if (centre$[2][2] == back[0][1]) {
    var x = 'rotateX(45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtcentre[2][2] = 'back[0][1]';
  } else if (centre$[2][2] == back[1][0]) {
    var x = 'rotateX(45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtcentre[2][2] = 'back[1][0]';
  } else if (centre$[2][2] == back[1][2]) {
    var x = 'rotateX(45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtcentre[2][2] = 'back[1][2]';
  } else if (centre$[2][2] == back[2][1]) {
    var x = 'rotateX(45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtcentre[2][2] = 'back[2][1]';
  } else if (centre$[2][2] == centre[0][0]) {
    var x = 'rotateX(45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtcentre[2][2] = 'centre[0][0]';
  } else if (centre$[2][2] == centre[0][2]) {
    var x = 'rotateX(45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtcentre[2][2] = 'centre[0][2]';
  } else if (centre$[2][2] == centre[2][0]) {
    var x = 'rotateX(45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtcentre[2][2] = 'centre[2][0]';
  } else if (centre$[2][2] == centre[2][2]) {
    var x = 'rotateX(45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtcentre[2][2] = 'centre[2][2]';
  } else if (centre$[2][2] == front[0][1]) {
    var x = 'rotateX(45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtcentre[2][2] = 'front[0][1]';
  } else if (centre$[2][2] == front[1][0]) {
    var x = 'rotateX(45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtcentre[2][2] = 'front[1][0]';
  } else if (centre$[2][2] == front[1][2]) {
    var x = 'rotateX(45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtcentre[2][2] = 'front[1][2]';
  } else if (centre$[2][2] == front[2][1]) {
    var x = 'rotateX(45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtcentre[2][2] = 'front[2][1]';
  }

  if (front$[1][2] == back[0][1]) {
    var x = 'rotateX(45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtfront[1][2] = 'back[0][1]';
  } else if (front$[1][2] == back[1][0]) {
    var x = 'rotateX(45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtfront[1][2] = 'back[1][0]';
  } else if (front$[1][2] == back[1][2]) {
    var x = 'rotateX(45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtfront[1][2] = 'back[1][2]';
  } else if (front$[1][2] == back[2][1]) {
    var x = 'rotateX(45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtfront[1][2] = 'back[2][1]';
  } else if (front$[1][2] == centre[0][0]) {
    var x = 'rotateX(45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtfront[1][2] = 'centre[0][0]';
  } else if (front$[1][2] == centre[0][2]) {
    var x = 'rotateX(45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtfront[1][2] = 'centre[0][2]';
  } else if (front$[1][2] == centre[2][0]) {
    var x = 'rotateX(45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtfront[1][2] = 'centre[2][0]';
  } else if (front$[1][2] == centre[2][2]) {
    var x = 'rotateX(45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtfront[1][2] = 'centre[2][2]';
  } else if (front$[1][2] == front[0][1]) {
    var x = 'rotateX(45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtfront[1][2] = 'front[0][1]';
  } else if (front$[1][2] == front[1][0]) {
    var x = 'rotateX(45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtfront[1][2] = 'front[1][0]';
  } else if (front$[1][2] == front[1][2]) {
    var x = 'rotateX(45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtfront[1][2] = 'front[1][2]';
  } else if (front$[1][2] == front[2][1]) {
    var x = 'rotateX(45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtfront[1][2] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][2] == 'back[0][0]') {
    back[0][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'back[0][2]') {
    back[0][2] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'back[2][0]') {
    back[2][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'back[2][2]') {
    back[2][2] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[0][0]') {
    front[0][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[0][2]') {
    front[0][2] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[2][0]') {
    front[2][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[2][2]') {
    front[2][2] = '100 100 -100';
  }

  if (CubeAtback[2][2] == 'back[0][0]') {
    back[0][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'back[0][2]') {
    back[0][2] = '100 100 100';
  } else if (CubeAtback[2][2] == 'back[2][0]') {
    back[2][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'back[2][2]') {
    back[2][2] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[0][0]') {
    front[0][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[0][2]') {
    front[0][2] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[2][0]') {
    front[2][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[2][2]') {
    front[2][2] = '100 100 100';
  }

  if (CubeAtfront[0][2] == 'back[0][0]') {
    back[0][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'back[0][2]') {
    back[0][2] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'back[2][0]') {
    back[2][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'back[2][2]') {
    back[2][2] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[0][0]') {
    front[0][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[0][2]') {
    front[0][2] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[2][0]') {
    front[2][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[2][2]') {
    front[2][2] = '100 -100 -100';
  }

  if (CubeAtfront[2][2] == 'back[0][0]') {
    back[0][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'back[0][2]') {
    back[0][2] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'back[2][0]') {
    back[2][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'back[2][2]') {
    back[2][2] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[0][0]') {
    front[0][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[0][2]') {
    front[0][2] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[2][0]') {
    front[2][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[2][2]') {
    front[2][2] = '100 -100 100';
  }

  //Setting EDGES
  if (CubeAtback[1][2] == 'back[0][1]') {
    back[0][1] = '100 100 0';
  } else if (CubeAtback[1][2] == 'back[1][0]') {
    back[1][0] = '100 100 0';
  } else if (CubeAtback[1][2] == 'back[1][2]') {
    back[1][2] = '100 100 0';
  } else if (CubeAtback[1][2] == 'back[2][1]') {
    back[2][1] = '100 100 0';
  } else if (CubeAtback[1][2] == 'centre[0][0]') {
    centre[0][0] = '100 100 0';
  } else if (CubeAtback[1][2] == 'centre[2][0]') {
    centre[2][0] = '100 100 0';
  } else if (CubeAtback[1][2] == 'centre[0][2]') {
    centre[0][2] = '100 100 0';
  } else if (CubeAtback[1][2] == 'centre[2][2]') {
    centre[2][2] = '100 100 0';
  } else if (CubeAtback[1][2] == 'front[0][1]') {
    front[0][1] = '100 100 0';
  } else if (CubeAtback[1][2] == 'front[1][0]') {
    front[1][0] = '100 100 0';
  } else if (CubeAtback[1][2] == 'front[1][2]') {
    front[1][2] = '100 100 0';
  } else if (CubeAtback[1][2] == 'front[2][1]') {
    front[2][1] = '100 100 0';
  }

  if (CubeAtcentre[0][2] == 'back[0][1]') {
    back[0][1] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'back[1][0]') {
    back[1][0] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'back[1][2]') {
    back[1][2] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'back[2][1]') {
    back[2][1] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'centre[0][0]') {
    centre[0][0] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'centre[2][0]') {
    centre[2][0] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'centre[0][2]') {
    centre[0][2] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'centre[2][2]') {
    centre[2][2] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'front[0][1]') {
    front[0][1] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'front[1][0]') {
    front[1][0] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'front[1][2]') {
    front[1][2] = '100 0 -100';
  } else if (CubeAtcentre[0][2] == 'front[2][1]') {
    front[2][1] = '100 0 -100';
  }

  if (CubeAtcentre[2][2] == 'back[0][1]') {
    back[0][1] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'back[1][0]') {
    back[1][0] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'back[1][2]') {
    back[1][2] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'back[2][1]') {
    back[2][1] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'centre[0][0]') {
    centre[0][0] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'centre[2][0]') {
    centre[2][0] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'centre[0][2]') {
    centre[0][2] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'centre[2][2]') {
    centre[2][2] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'front[0][1]') {
    front[0][1] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'front[1][0]') {
    front[1][0] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'front[1][2]') {
    front[1][2] = '100 0 100';
  } else if (CubeAtcentre[2][2] == 'front[2][1]') {
    front[2][1] = '100 0 100';
  }

  if (CubeAtfront[1][2] == 'back[0][1]') {
    back[0][1] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'back[1][0]') {
    back[1][0] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'back[1][2]') {
    back[1][2] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'back[2][1]') {
    back[2][1] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'centre[0][0]') {
    centre[0][0] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'centre[2][0]') {
    centre[2][0] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'centre[0][2]') {
    centre[0][2] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'centre[2][2]') {
    centre[2][2] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'front[0][1]') {
    front[0][1] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'front[1][0]') {
    front[1][0] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'front[1][2]') {
    front[1][2] = '100 -100 0';
  } else if (CubeAtfront[1][2] == 'front[2][1]') {
    front[2][1] = '100 -100 0';
  }
}

function rotRtFaceAntiClk() {
  //Detecting CORNERS
  if (back$[0][2] == back[0][0]) {
    var x = 'rotateX(-45deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    setTimeout(function(){document.getElementById('BUL').style.transform = rotback[0][0];},250);
    CubeAtback[0][2] = 'back[0][0]';
  } else if (back$[0][2] == back[0][2]) {
    var x = 'rotateX(-45deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    setTimeout(function(){document.getElementById('BUR').style.transform = rotback[0][2];},250);
    CubeAtback[0][2] = 'back[0][2]';
  } else if (back$[0][2] == back[2][0]) {
    var x = 'rotateX(-45deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    setTimeout(function(){document.getElementById('BDL').style.transform = rotback[2][0];},250);
    CubeAtback[0][2] = 'back[2][0]';
  } else if (back$[0][2] == back[2][2]) {
    var x = 'rotateX(-45deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    setTimeout(function(){document.getElementById('BDR').style.transform = rotback[2][2];},250);
    CubeAtback[0][2] = 'back[2][2]';
  } else if (back$[0][2] == front[0][0]) {
    var x = 'rotateX(-45deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    setTimeout(function(){document.getElementById('FUL').style.transform = rotfront[0][0];},250);
    CubeAtback[0][2] = 'front[0][0]';
  } else if (back$[0][2] == front[0][2]) {
    var x = 'rotateX(-45deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    setTimeout(function(){document.getElementById('FUR').style.transform = rotfront[0][2];},250);
    CubeAtback[0][2] = 'front[0][2]';
  } else if (back$[0][2] == front[2][0]) {
    var x = 'rotateX(-45deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    setTimeout(function(){document.getElementById('FDL').style.transform = rotfront[2][0];},250);
    CubeAtback[0][2] = 'front[2][0]';
  } else if (back$[0][2] == front[2][2]) {
    var x = 'rotateX(-45deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    setTimeout(function(){document.getElementById('FDR').style.transform = rotfront[2][2];},250);
    CubeAtback[0][2] = 'front[2][2]';
  }

  if (back$[2][2] == back[0][0]) {
    var x = 'rotateX(-45deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    setTimeout(function(){document.getElementById('BUL').style.transform = rotback[0][0];},250);
    CubeAtback[2][2] = 'back[0][0]';
  } else if (back$[2][2] == back[0][2]) {
    var x = 'rotateX(-45deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    setTimeout(function(){document.getElementById('BUR').style.transform = rotback[0][2];},250);
    CubeAtback[2][2] = 'back[0][2]';
  } else if (back$[2][2] == back[2][0]) {
    var x = 'rotateX(-45deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    setTimeout(function(){document.getElementById('BDL').style.transform = rotback[2][0];},250);
    CubeAtback[2][2] = 'back[2][0]';
  } else if (back$[2][2] == back[2][2]) {
    var x = 'rotateX(-45deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    setTimeout(function(){document.getElementById('BDR').style.transform = rotback[2][2];},250);
    CubeAtback[2][2] = 'back[2][2]';
  } else if (back$[2][2] == front[0][0]) {
    var x = 'rotateX(-45deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    setTimeout(function(){document.getElementById('FUL').style.transform = rotfront[0][0];},250);
    CubeAtback[2][2] = 'front[0][0]';
  } else if (back$[2][2] == front[0][2]) {
    var x = 'rotateX(-45deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    setTimeout(function(){document.getElementById('FUR').style.transform = rotfront[0][2];},250);
    CubeAtback[2][2] = 'front[0][2]';
  } else if (back$[2][2] == front[2][0]) {
    var x = 'rotateX(-45deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    setTimeout(function(){document.getElementById('FDL').style.transform = rotfront[2][0];},250);
    CubeAtback[2][2] = 'front[2][0]';
  } else if (back$[2][2] == front[2][2]) {
    var x = 'rotateX(-45deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    setTimeout(function(){document.getElementById('FDR').style.transform = rotfront[2][2];},250);
    CubeAtback[2][2] = 'front[2][2]';
  }

  if (front$[0][2] == back[0][0]) {
    var x = 'rotateX(-45deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    setTimeout(function(){document.getElementById('BUL').style.transform = rotback[0][0];},250);
    CubeAtfront[0][2] = 'back[0][0]';
  } else if (front$[0][2] == back[0][2]) {
    var x = 'rotateX(-45deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    setTimeout(function(){document.getElementById('BUR').style.transform = rotback[0][2];},250);
    CubeAtfront[0][2] = 'back[0][2]';
  } else if (front$[0][2] == back[2][0]) {
    var x = 'rotateX(-45deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    setTimeout(function(){document.getElementById('BDL').style.transform = rotback[2][0];},250);
    CubeAtfront[0][2] = 'back[2][0]';
  } else if (front$[0][2] == back[2][2]) {
    var x = 'rotateX(-45deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    setTimeout(function(){document.getElementById('BDR').style.transform = rotback[2][2];},250);
    CubeAtfront[0][2] = 'back[2][2]';
  } else if (front$[0][2] == front[0][0]) {
    var x = 'rotateX(-45deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    setTimeout(function(){document.getElementById('FUL').style.transform = rotfront[0][0];},250);
    CubeAtfront[0][2] = 'front[0][0]';
  } else if (front$[0][2] == front[0][2]) {
    var x = 'rotateX(-45deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    setTimeout(function(){document.getElementById('FUR').style.transform = rotfront[0][2];},250);
    CubeAtfront[0][2] = 'front[0][2]';
  } else if (front$[0][2] == front[2][0]) {
    var x = 'rotateX(-45deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    setTimeout(function(){document.getElementById('FDL').style.transform = rotfront[2][0];},250);
    CubeAtfront[0][2] = 'front[2][0]';
  } else if (front$[0][2] == front[2][2]) {
    var x = 'rotateX(-45deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    setTimeout(function(){document.getElementById('FDR').style.transform = rotfront[2][2];},250);
    CubeAtfront[0][2] = 'front[2][2]';
  }

  if (front$[2][2] == back[0][0]) {
    var x = 'rotateX(-45deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = x;
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    setTimeout(function(){document.getElementById('BUL').style.transform = rotback[0][0];},250);
    CubeAtfront[2][2] = 'back[0][0]';
  } else if (front$[2][2] == back[0][2]) {
    var x = 'rotateX(-45deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = x;
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    setTimeout(function(){document.getElementById('BUR').style.transform = rotback[0][2];},250);
    CubeAtfront[2][2] = 'back[0][2]';
  } else if (front$[2][2] == back[2][0]) {
    var x = 'rotateX(-45deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = x;
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    setTimeout(function(){document.getElementById('BDL').style.transform = rotback[2][0];},250);
    CubeAtfront[2][2] = 'back[2][0]';
  } else if (front$[2][2] == back[2][2]) {
    var x = 'rotateX(-45deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = x;
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    setTimeout(function(){document.getElementById('BDR').style.transform = rotback[2][2];},250);
    CubeAtfront[2][2] = 'back[2][2]';
  } else if (front$[2][2] == front[0][0]) {
    var x = 'rotateX(-45deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = x;
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    setTimeout(function(){document.getElementById('FUL').style.transform = rotfront[0][0];},250);
    CubeAtfront[2][2] = 'front[0][0]';
  } else if (front$[2][2] == front[0][2]) {
    var x = 'rotateX(-45deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = x;
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    setTimeout(function(){document.getElementById('FUR').style.transform = rotfront[0][2];},250);
    CubeAtfront[2][2] = 'front[0][2]';
  } else if (front$[2][2] == front[2][0]) {
    var x = 'rotateX(-45deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = x;
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    setTimeout(function(){document.getElementById('FDL').style.transform = rotfront[2][0];},250);
    CubeAtfront[2][2] = 'front[2][0]';
  } else if (front$[2][2] == front[2][2]) {
    var x = 'rotateX(-45deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = x;
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    setTimeout(function(){document.getElementById('FDR').style.transform = rotfront[2][2];},250);
    CubeAtfront[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[1][2] == back[0][1]) {
    var x = 'rotateX(-45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtback[1][2] = 'back[0][1]';
  } else if (back$[1][2] == back[1][0]) {
    var x = 'rotateX(-45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtback[1][2] = 'back[1][0]';
  } else if (back$[1][2] == back[1][2]) {
    var x = 'rotateX(-45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtback[1][2] = 'back[1][2]';
  } else if (back$[1][2] == back[2][1]) {
    var x = 'rotateX(-45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtback[1][2] = 'back[2][1]';
  } else if (back$[1][2] == centre[0][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtback[1][2] = 'centre[0][0]';
  } else if (back$[1][2] == centre[0][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtback[1][2] = 'centre[0][2]';
  } else if (back$[1][2] == centre[2][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtback[1][2] = 'centre[2][0]';
  } else if (back$[1][2] == centre[2][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtback[1][2] = 'centre[2][2]';
  } else if (back$[1][2] == front[0][1]) {
    var x = 'rotateX(-45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtback[1][2] = 'front[0][1]';
  } else if (back$[1][2] == front[1][0]) {
    var x = 'rotateX(-45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtback[1][2] = 'front[1][0]';
  } else if (back$[1][2] == front[1][2]) {
    var x = 'rotateX(-45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtback[1][2] = 'front[1][2]';
  } else if (back$[1][2] == front[2][1]) {
    var x = 'rotateX(-45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtback[1][2] = 'front[2][1]';
  }

  if (centre$[0][2] == back[0][1]) {
    var x = 'rotateX(-45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtcentre[0][2] = 'back[0][1]';
  } else if (centre$[0][2] == back[1][0]) {
    var x = 'rotateX(-45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtcentre[0][2] = 'back[1][0]';
  } else if (centre$[0][2] == back[1][2]) {
    var x = 'rotateX(-45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtcentre[0][2] = 'back[1][2]';
  } else if (centre$[0][2] == back[2][1]) {
    var x = 'rotateX(-45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtcentre[0][2] = 'back[2][1]';
  } else if (centre$[0][2] == centre[0][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtcentre[0][2] = 'centre[0][0]';
  } else if (centre$[0][2] == centre[0][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtcentre[0][2] = 'centre[0][2]';
  } else if (centre$[0][2] == centre[2][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtcentre[0][2] = 'centre[2][0]';
  } else if (centre$[0][2] == centre[2][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtcentre[0][2] = 'centre[2][2]';
  } else if (centre$[0][2] == front[0][1]) {
    var x = 'rotateX(-45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtcentre[0][2] = 'front[0][1]';
  } else if (centre$[0][2] == front[1][0]) {
    var x = 'rotateX(-45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtcentre[0][2] = 'front[1][0]';
  } else if (centre$[0][2] == front[1][2]) {
    var x = 'rotateX(-45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtcentre[0][2] = 'front[1][2]';
  } else if (centre$[0][2] == front[2][1]) {
    var x = 'rotateX(-45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtcentre[0][2] = 'front[2][1]';
  }

  if (centre$[2][2] == back[0][1]) {
    var x = 'rotateX(-45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtcentre[2][2] = 'back[0][1]';
  } else if (centre$[2][2] == back[1][0]) {
    var x = 'rotateX(-45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtcentre[2][2] = 'back[1][0]';
  } else if (centre$[2][2] == back[1][2]) {
    var x = 'rotateX(-45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtcentre[2][2] = 'back[1][2]';
  } else if (centre$[2][2] == back[2][1]) {
    var x = 'rotateX(-45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtcentre[2][2] = 'back[2][1]';
  } else if (centre$[2][2] == centre[0][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtcentre[2][2] = 'centre[0][0]';
  } else if (centre$[2][2] == centre[0][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtcentre[2][2] = 'centre[0][2]';
  } else if (centre$[2][2] == centre[2][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtcentre[2][2] = 'centre[2][0]';
  } else if (centre$[2][2] == centre[2][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtcentre[2][2] = 'centre[2][2]';
  } else if (centre$[2][2] == front[0][1]) {
    var x = 'rotateX(-45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtcentre[2][2] = 'front[0][1]';
  } else if (centre$[2][2] == front[1][0]) {
    var x = 'rotateX(-45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtcentre[2][2] = 'front[1][0]';
  } else if (centre$[2][2] == front[1][2]) {
    var x = 'rotateX(-45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtcentre[2][2] = 'front[1][2]';
  } else if (centre$[2][2] == front[2][1]) {
    var x = 'rotateX(-45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtcentre[2][2] = 'front[2][1]';
  }

  if (front$[1][2] == back[0][1]) {
    var x = 'rotateX(-45deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = x ;
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    setTimeout(function(){document.getElementById('BU').style.transform = rotback[0][1];},250);
    CubeAtfront[1][2] = 'back[0][1]';
  } else if (front$[1][2] == back[1][0]) {
    var x = 'rotateX(-45deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = x ;
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    setTimeout(function(){document.getElementById('BL').style.transform = rotback[1][0];},250);
    CubeAtfront[1][2] = 'back[1][0]';
  } else if (front$[1][2] == back[1][2]) {
    var x = 'rotateX(-45deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = x ;
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    setTimeout(function(){document.getElementById('BR').style.transform = rotback[1][2];},250);
    CubeAtfront[1][2] = 'back[1][2]';
  } else if (front$[1][2] == back[2][1]) {
    var x = 'rotateX(-45deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = x ;
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    setTimeout(function(){document.getElementById('BD').style.transform = rotback[2][1];},250);
    CubeAtfront[1][2] = 'back[2][1]';
  } else if (front$[1][2] == centre[0][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = x;
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    setTimeout(function(){document.getElementById('CUL').style.transform = rotcentre[0][0];},250);
    CubeAtfront[1][2] = 'centre[0][0]';
  } else if (front$[1][2] == centre[0][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = x;
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    setTimeout(function(){document.getElementById('CUR').style.transform = rotcentre[0][2];},250);
    CubeAtfront[1][2] = 'centre[0][2]';
  } else if (front$[1][2] == centre[2][0]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = x;
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    setTimeout(function(){document.getElementById('CDL').style.transform = rotcentre[2][0];},250);
    CubeAtfront[1][2] = 'centre[2][0]';
  } else if (front$[1][2] == centre[2][2]) {
    var x = 'rotateX(-45deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = x;
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    setTimeout(function(){document.getElementById('CDR').style.transform = rotcentre[2][2];},250);
    CubeAtfront[1][2] = 'centre[2][2]';
  } else if (front$[1][2] == front[0][1]) {
    var x = 'rotateX(-45deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = x;
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    setTimeout(function(){document.getElementById('FU').style.transform = rotfront[0][1];},250);
    CubeAtfront[1][2] = 'front[0][1]';
  } else if (front$[1][2] == front[1][0]) {
    var x = 'rotateX(-45deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = x;
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    setTimeout(function(){document.getElementById('FL').style.transform = rotfront[1][0];},250);
    CubeAtfront[1][2] = 'front[1][0]';
  } else if (front$[1][2] == front[1][2]) {
    var x = 'rotateX(-45deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = x;
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    setTimeout(function(){document.getElementById('FR').style.transform = rotfront[1][2];},250);
    CubeAtfront[1][2] = 'front[1][2]';
  } else if (front$[1][2] == front[2][1]) {
    var x = 'rotateX(-45deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = x;
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    setTimeout(function(){document.getElementById('FD').style.transform = rotfront[2][1];},250);
    CubeAtfront[1][2] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][2] == 'back[0][0]') {
    back[0][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'back[0][2]') {
    back[0][2] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'back[2][0]') {
    back[2][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'back[2][2]') {
    back[2][2] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[0][0]') {
    front[0][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[0][2]') {
    front[0][2] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[2][0]') {
    front[2][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[2][2]') {
    front[2][2] = '100 -100 100';
  }

  if (CubeAtback[2][2] == 'back[0][0]') {
    back[0][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'back[0][2]') {
    back[0][2] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'back[2][0]') {
    back[2][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'back[2][2]') {
    back[2][2] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[0][0]') {
    front[0][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[0][2]') {
    front[0][2] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[2][0]') {
    front[2][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[2][2]') {
    front[2][2] = '100 -100 -100';
  }

  if (CubeAtfront[0][2] == 'back[0][0]') {
    back[0][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'back[0][2]') {
    back[0][2] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'back[2][0]') {
    back[2][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'back[2][2]') {
    back[2][2] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[0][0]') {
    front[0][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[0][2]') {
    front[0][2] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[2][0]') {
    front[2][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[2][2]') {
    front[2][2] = '100 100 100';
  }

  if (CubeAtfront[2][2] == 'back[0][0]') {
    back[0][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'back[0][2]') {
    back[0][2] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'back[2][0]') {
    back[2][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'back[2][2]') {
    back[2][2] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[0][0]') {
    front[0][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[0][2]') {
    front[0][2] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[2][0]') {
    front[2][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[2][2]') {
    front[2][2] = '100 100 -100';
  }

  //Setting EDGES
  if (CubeAtback[1][2] == 'back[0][1]') {
    back[0][1] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'back[1][0]') {
    back[1][0] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'back[1][2]') {
    back[1][2] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'back[2][1]') {
    back[2][1] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'centre[0][0]') {
    centre[0][0] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'centre[2][0]') {
    centre[2][0] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'centre[0][2]') {
    centre[0][2] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'centre[2][2]') {
    centre[2][2] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'front[0][1]') {
    front[0][1] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'front[1][0]') {
    front[1][0] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'front[1][2]') {
    front[1][2] = '100 -100 0';
  } else if (CubeAtback[1][2] == 'front[2][1]') {
    front[2][1] = '100 -100 0';
  }

  if (CubeAtcentre[0][2] == 'back[0][1]') {
    back[0][1] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'back[1][0]') {
    back[1][0] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'back[1][2]') {
    back[1][2] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'back[2][1]') {
    back[2][1] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'centre[0][0]') {
    centre[0][0] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'centre[2][0]') {
    centre[2][0] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'centre[0][2]') {
    centre[0][2] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'centre[2][2]') {
    centre[2][2] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'front[0][1]') {
    front[0][1] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'front[1][0]') {
    front[1][0] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'front[1][2]') {
    front[1][2] = '100 0 100';
  } else if (CubeAtcentre[0][2] == 'front[2][1]') {
    front[2][1] = '100 0 100';
  }

  if (CubeAtcentre[2][2] == 'back[0][1]') {
    back[0][1] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'back[1][0]') {
    back[1][0] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'back[1][2]') {
    back[1][2] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'back[2][1]') {
    back[2][1] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'centre[0][0]') {
    centre[0][0] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'centre[2][0]') {
    centre[2][0] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'centre[0][2]') {
    centre[0][2] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'centre[2][2]') {
    centre[2][2] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'front[0][1]') {
    front[0][1] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'front[1][0]') {
    front[1][0] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'front[1][2]') {
    front[1][2] = '100 0 -100';
  } else if (CubeAtcentre[2][2] == 'front[2][1]') {
    front[2][1] = '100 0 -100';
  }

  if (CubeAtfront[1][2] == 'back[0][1]') {
    back[0][1] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'back[1][0]') {
    back[1][0] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'back[1][2]') {
    back[1][2] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'back[2][1]') {
    back[2][1] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'centre[0][0]') {
    centre[0][0] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'centre[2][0]') {
    centre[2][0] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'centre[0][2]') {
    centre[0][2] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'centre[2][2]') {
    centre[2][2] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'front[0][1]') {
    front[0][1] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'front[1][0]') {
    front[1][0] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'front[1][2]') {
    front[1][2] = '100 100 0';
  } else if (CubeAtfront[1][2] == 'front[2][1]') {
    front[2][1] = '100 100 0';
  }
}

function rotUpFaceClk() {
  //Detecting CORNERS
  if (back$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][0] = 'back[0][0]';
  } else if (back$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][0] = 'back[0][2]';
  } else if (back$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][0] = 'back[2][0]';
  } else if (back$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][0] = 'back[2][2]';
  } else if (back$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][0] = 'front[0][0]';
  } else if (back$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][0] = 'front[0][2]';
  } else if (back$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][0] = 'front[2][0]';
  } else if (back$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][0] = 'front[2][2]';
  }

  if (back$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][2] = 'back[0][0]';
  } else if (back$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][2] = 'back[0][2]';
  } else if (back$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][2] = 'back[2][0]';
  } else if (back$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][2] = 'back[2][2]';
  } else if (back$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][2] = 'front[0][0]';
  } else if (back$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][2] = 'front[0][2]';
  } else if (back$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][2] = 'front[2][0]';
  } else if (back$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][2] = 'front[2][2]';
  }

  if (front$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][0] = 'back[0][0]';
  } else if (front$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][0] = 'back[0][2]';
  } else if (front$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][0] = 'back[2][0]';
  } else if (front$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][0] = 'back[2][2]';
  } else if (front$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][0] = 'front[0][0]';
  } else if (front$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][0] = 'front[0][2]';
  } else if (front$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][0] = 'front[2][0]';
  } else if (front$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][0] = 'front[2][2]';
  }

  if (front$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][2] = 'back[0][0]';
  } else if (front$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][2] = 'back[0][2]';
  } else if (front$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][2] = 'back[2][0]';
  } else if (front$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][2] = 'back[2][2]';
  } else if (front$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][2] = 'front[0][0]';
  } else if (front$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][2] = 'front[0][2]';
  } else if (front$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][2] = 'front[2][0]';
  } else if (front$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[0][1] = 'back[0][1]';
  } else if (back$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[0][1] = 'back[1][0]';
  } else if (back$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[0][1] = 'back[1][2]';
  } else if (back$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[0][1] = 'back[2][1]';
  } else if (back$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[0][1] = 'centre[0][0]';
  } else if (back$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[0][1] = 'centre[0][2]';
  } else if (back$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[0][1] = 'centre[2][0]';
  } else if (back$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[0][1] = 'centre[2][2]';
  } else if (back$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[0][1] = 'front[0][1]';
  } else if (back$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[0][1] = 'front[1][0]';
  } else if (back$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[0][1] = 'front[1][2]';
  } else if (back$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[0][1] = 'front[2][1]';
  }

  if (centre$[0][0] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[0][0] = 'back[0][1]';
  } else if (centre$[0][0] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[0][0] = 'back[1][0]';
  } else if (centre$[0][0] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[0][0] = 'back[1][2]';
  } else if (centre$[0][0] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[0][0] = 'back[2][1]';
  } else if (centre$[0][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[0][0] = 'centre[0][0]';
  } else if (centre$[0][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[0][0] = 'centre[0][2]';
  } else if (centre$[0][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[0][0] = 'centre[2][0]';
  } else if (centre$[0][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[0][0] = 'centre[2][2]';
  } else if (centre$[0][0] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[0][0] = 'front[0][1]';
  } else if (centre$[0][0] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[0][0] = 'front[1][0]';
  } else if (centre$[0][0] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[0][0] = 'front[1][2]';
  } else if (centre$[0][0] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[0][0] = 'front[2][1]';
  }

  if (centre$[0][2] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[0][2] = 'back[0][1]';
  } else if (centre$[0][2] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[0][2] = 'back[1][0]';
  } else if (centre$[0][2] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[0][2] = 'back[1][2]';
  } else if (centre$[0][2] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[0][2] = 'back[2][1]';
  } else if (centre$[0][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[0][2] = 'centre[0][0]';
  } else if (centre$[0][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[0][2] = 'centre[0][2]';
  } else if (centre$[0][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[0][2] = 'centre[2][0]';
  } else if (centre$[0][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[0][2] = 'centre[2][2]';
  } else if (centre$[0][2] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[0][2] = 'front[0][1]';
  } else if (centre$[0][2] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[0][2] = 'front[1][0]';
  } else if (centre$[0][2] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[0][2] = 'front[1][2]';
  } else if (centre$[0][2] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[0][2] = 'front[2][1]';
  }

  if (front$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[0][1] = 'back[0][1]';
  } else if (front$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[0][1] = 'back[1][0]';
  } else if (front$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[0][1] = 'back[1][2]';
  } else if (front$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[0][1] = 'back[2][1]';
  } else if (front$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[0][1] = 'centre[0][0]';
  } else if (front$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[0][1] = 'centre[0][2]';
  } else if (front$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[0][1] = 'centre[2][0]';
  } else if (front$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[0][1] = 'centre[2][2]';
  } else if (front$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[0][1] = 'front[0][1]';
  } else if (front$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[0][1] = 'front[1][0]';
  } else if (front$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[0][1] = 'front[1][2]';
  } else if (front$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[0][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][0] == 'back[0][0]') {
    back[0][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'back[0][2]') {
    back[0][2] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'back[2][0]') {
    back[2][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'back[2][2]') {
    back[2][2] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[0][0]') {
    front[0][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[0][2]') {
    front[0][2] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[2][0]') {
    front[2][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[2][2]') {
    front[2][2] = '100 -100 -100';
  }

  if (CubeAtback[0][2] == 'back[0][0]') {
    back[0][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'back[0][2]') {
    back[0][2] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'back[2][0]') {
    back[2][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'back[2][2]') {
    back[2][2] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[0][0]') {
    front[0][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[0][2]') {
    front[0][2] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[2][0]') {
    front[2][0] = '100 -100 100';
  } else if (CubeAtback[0][2] == 'front[2][2]') {
    front[2][2] = '100 -100 100';
  }

  if (CubeAtfront[0][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 -100';
  }

  if (CubeAtfront[0][2] == 'back[0][0]') {
    back[0][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'back[0][2]') {
    back[0][2] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'back[2][0]') {
    back[2][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'back[2][2]') {
    back[2][2] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[0][0]') {
    front[0][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[0][2]') {
    front[0][2] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[2][0]') {
    front[2][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[2][2]') {
    front[2][2] = '-100 -100 100';
  }

  //Setting EDGES
  if (CubeAtback[0][1] == 'back[0][1]') {
    back[0][1] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'back[1][0]') {
    back[1][0] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'back[1][2]') {
    back[1][2] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'back[2][1]') {
    back[2][1] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[0][0]') {
    centre[0][0] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[2][0]') {
    centre[2][0] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[0][2]') {
    centre[0][2] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[2][2]') {
    centre[2][2] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'front[0][1]') {
    front[0][1] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'front[1][0]') {
    front[1][0] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'front[1][2]') {
    front[1][2] = '100 -100 0';
  } else if (CubeAtback[0][1] == 'front[2][1]') {
    front[2][1] = '100 -100 0';
  }

  if (CubeAtcentre[0][0] == 'back[0][1]') {
    back[0][1] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'back[1][0]') {
    back[1][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'back[1][2]') {
    back[1][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'back[2][1]') {
    back[2][1] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'centre[0][0]') {
    centre[0][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'centre[2][0]') {
    centre[2][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'centre[0][2]') {
    centre[0][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'centre[2][2]') {
    centre[2][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'front[0][1]') {
    front[0][1] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'front[1][0]') {
    front[1][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'front[1][2]') {
    front[1][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][0] == 'front[2][1]') {
    front[2][1] = '0 -100 -100';
  }

  if (CubeAtcentre[0][2] == 'back[0][1]') {
    back[0][1] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'back[1][0]') {
    back[1][0] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'back[1][2]') {
    back[1][2] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'back[2][1]') {
    back[2][1] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'centre[0][0]') {
    centre[0][0] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'centre[2][0]') {
    centre[2][0] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'centre[0][2]') {
    centre[0][2] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'centre[2][2]') {
    centre[2][2] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'front[0][1]') {
    front[0][1] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'front[1][0]') {
    front[1][0] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'front[1][2]') {
    front[1][2] = '0 -100 100';
  } else if (CubeAtcentre[0][2] == 'front[2][1]') {
    front[2][1] = '0 -100 100';
  }

  if (CubeAtfront[0][1] == 'back[0][1]') {
    back[0][1] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'back[1][0]') {
    back[1][0] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'back[1][2]') {
    back[1][2] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'back[2][1]') {
    back[2][1] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[0][0]') {
    centre[0][0] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[2][0]') {
    centre[2][0] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[0][2]') {
    centre[0][2] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[2][2]') {
    centre[2][2] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[0][1]') {
    front[0][1] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[1][0]') {
    front[1][0] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[1][2]') {
    front[1][2] = '-100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[2][1]') {
    front[2][1] = '-100 -100 0';
  }
}

function rotUpFaceAntiClk() {
  //Detecting CORNERS
  if (back$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][0] = 'back[0][0]';
  } else if (back$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][0] = 'back[0][2]';
  } else if (back$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][0] = 'back[2][0]';
  } else if (back$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][0] = 'back[2][2]';
  } else if (back$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][0] = 'front[0][0]';
  } else if (back$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][0] = 'front[0][2]';
  } else if (back$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][0] = 'front[2][0]';
  } else if (back$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][0] = 'front[2][2]';
  }

  if (back$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][2] = 'back[0][0]';
  } else if (back$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][2] = 'back[0][2]';
  } else if (back$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][2] = 'back[2][0]';
  } else if (back$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][2] = 'back[2][2]';
  } else if (back$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][2] = 'front[0][0]';
  } else if (back$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][2] = 'front[0][2]';
  } else if (back$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][2] = 'front[2][0]';
  } else if (back$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][2] = 'front[2][2]';
  }

  if (front$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][0] = 'back[0][0]';
  } else if (front$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][0] = 'back[0][2]';
  } else if (front$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][0] = 'back[2][0]';
  } else if (front$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][0] = 'back[2][2]';
  } else if (front$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][0] = 'front[0][0]';
  } else if (front$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][0] = 'front[0][2]';
  } else if (front$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][0] = 'front[2][0]';
  } else if (front$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][0] = 'front[2][2]';
  }

  if (front$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][2] = 'back[0][0]';
  } else if (front$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][2] = 'back[0][2]';
  } else if (front$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][2] = 'back[2][0]';
  } else if (front$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][2] = 'back[2][2]';
  } else if (front$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][2] = 'front[0][0]';
  } else if (front$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][2] = 'front[0][2]';
  } else if (front$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][2] = 'front[2][0]';
  } else if (front$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[0][1] = 'back[0][1]';
  } else if (back$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[0][1] = 'back[1][0]';
  } else if (back$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[0][1] = 'back[1][2]';
  } else if (back$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[0][1] = 'back[2][1]';
  } else if (back$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[0][1] = 'centre[0][0]';
  } else if (back$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[0][1] = 'centre[0][2]';
  } else if (back$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[0][1] = 'centre[2][0]';
  } else if (back$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[0][1] = 'centre[2][2]';
  } else if (back$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[0][1] = 'front[0][1]';
  } else if (back$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[0][1] = 'front[1][0]';
  } else if (back$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[0][1] = 'front[1][2]';
  } else if (back$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[0][1] = 'front[2][1]';
  }

  if (centre$[0][0] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[0][0] = 'back[0][1]';
  } else if (centre$[0][0] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[0][0] = 'back[1][0]';
  } else if (centre$[0][0] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[0][0] = 'back[1][2]';
  } else if (centre$[0][0] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[0][0] = 'back[2][1]';
  } else if (centre$[0][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[0][0] = 'centre[0][0]';
  } else if (centre$[0][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[0][0] = 'centre[0][2]';
  } else if (centre$[0][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[0][0] = 'centre[2][0]';
  } else if (centre$[0][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[0][0] = 'centre[2][2]';
  } else if (centre$[0][0] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[0][0] = 'front[0][1]';
  } else if (centre$[0][0] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[0][0] = 'front[1][0]';
  } else if (centre$[0][0] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[0][0] = 'front[1][2]';
  } else if (centre$[0][0] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[0][0] = 'front[2][1]';
  }

  if (centre$[0][2] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[0][2] = 'back[0][1]';
  } else if (centre$[0][2] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[0][2] = 'back[1][0]';
  } else if (centre$[0][2] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[0][2] = 'back[1][2]';
  } else if (centre$[0][2] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[0][2] = 'back[2][1]';
  } else if (centre$[0][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[0][2] = 'centre[0][0]';
  } else if (centre$[0][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[0][2] = 'centre[0][2]';
  } else if (centre$[0][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[0][2] = 'centre[2][0]';
  } else if (centre$[0][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[0][2] = 'centre[2][2]';
  } else if (centre$[0][2] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[0][2] = 'front[0][1]';
  } else if (centre$[0][2] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[0][2] = 'front[1][0]';
  } else if (centre$[0][2] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[0][2] = 'front[1][2]';
  } else if (centre$[0][2] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[0][2] = 'front[2][1]';
  }

  if (front$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[0][1] = 'back[0][1]';
  } else if (front$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[0][1] = 'back[1][0]';
  } else if (front$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[0][1] = 'back[1][2]';
  } else if (front$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[0][1] = 'back[2][1]';
  } else if (front$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[0][1] = 'centre[0][0]';
  } else if (front$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[0][1] = 'centre[0][2]';
  } else if (front$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[0][1] = 'centre[2][0]';
  } else if (front$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[0][1] = 'centre[2][2]';
  } else if (front$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[0][1] = 'front[0][1]';
  } else if (front$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[0][1] = 'front[1][0]';
  } else if (front$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[0][1] = 'front[1][2]';
  } else if (front$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[0][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 100';
  }

  if (CubeAtback[0][2] == 'back[0][0]') {
    back[0][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'back[0][2]') {
    back[0][2] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'back[2][0]') {
    back[2][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'back[2][2]') {
    back[2][2] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[0][0]') {
    front[0][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[0][2]') {
    front[0][2] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[2][0]') {
    front[2][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[2][2]') {
    front[2][2] = '-100 -100 -100';
  }

  if (CubeAtfront[0][0] == 'back[0][0]') {
    back[0][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'back[0][2]') {
    back[0][2] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'back[2][0]') {
    back[2][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'back[2][2]') {
    back[2][2] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[0][0]') {
    front[0][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[0][2]') {
    front[0][2] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[2][0]') {
    front[2][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[2][2]') {
    front[2][2] = '100 -100 100';
  }

  if (CubeAtfront[0][2] == 'back[0][0]') {
    back[0][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'back[0][2]') {
    back[0][2] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'back[2][0]') {
    back[2][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'back[2][2]') {
    back[2][2] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[0][0]') {
    front[0][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[0][2]') {
    front[0][2] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[2][0]') {
    front[2][0] = '100 -100 -100';
  } else if (CubeAtfront[0][2] == 'front[2][2]') {
    front[2][2] = '100 -100 -100';
  }

  //Setting EDGES
  if (CubeAtback[0][1] == 'back[0][1]') {
    back[0][1] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'back[1][0]') {
    back[1][0] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'back[1][2]') {
    back[1][2] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'back[2][1]') {
    back[2][1] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[0][0]') {
    centre[0][0] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[2][0]') {
    centre[2][0] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[0][2]') {
    centre[0][2] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'centre[2][2]') {
    centre[2][2] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'front[0][1]') {
    front[0][1] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'front[1][0]') {
    front[1][0] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'front[1][2]') {
    front[1][2] = '-100 -100 0';
  } else if (CubeAtback[0][1] == 'front[2][1]') {
    front[2][1] = '-100 -100 0';
  }

  if (CubeAtcentre[0][0] == 'back[0][1]') {
    back[0][1] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'back[1][0]') {
    back[1][0] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'back[1][2]') {
    back[1][2] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'back[2][1]') {
    back[2][1] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'centre[0][0]') {
    centre[0][0] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'centre[2][0]') {
    centre[2][0] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'centre[0][2]') {
    centre[0][2] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'centre[2][2]') {
    centre[2][2] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'front[0][1]') {
    front[0][1] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'front[1][0]') {
    front[1][0] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'front[1][2]') {
    front[1][2] = '0 -100 100';
  } else if (CubeAtcentre[0][0] == 'front[2][1]') {
    front[2][1] = '0 -100 100';
  }

  if (CubeAtcentre[0][2] == 'back[0][1]') {
    back[0][1] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'back[1][0]') {
    back[1][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'back[1][2]') {
    back[1][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'back[2][1]') {
    back[2][1] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'centre[0][0]') {
    centre[0][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'centre[2][0]') {
    centre[2][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'centre[0][2]') {
    centre[0][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'centre[2][2]') {
    centre[2][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'front[0][1]') {
    front[0][1] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'front[1][0]') {
    front[1][0] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'front[1][2]') {
    front[1][2] = '0 -100 -100';
  } else if (CubeAtcentre[0][2] == 'front[2][1]') {
    front[2][1] = '0 -100 -100';
  }

  if (CubeAtfront[0][1] == 'back[0][1]') {
    back[0][1] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'back[1][0]') {
    back[1][0] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'back[1][2]') {
    back[1][2] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'back[2][1]') {
    back[2][1] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[0][0]') {
    centre[0][0] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[2][0]') {
    centre[2][0] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[0][2]') {
    centre[0][2] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'centre[2][2]') {
    centre[2][2] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[0][1]') {
    front[0][1] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[1][0]') {
    front[1][0] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[1][2]') {
    front[1][2] = '100 -100 0';
  } else if (CubeAtfront[0][1] == 'front[2][1]') {
    front[2][1] = '100 -100 0';
  }
}

function rotLtFaceClk() {
  //Detecting CORNERS
  if (back$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][0] = 'back[0][0]';
  } else if (back$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][0] = 'back[0][2]';
  } else if (back$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][0] = 'back[2][0]';
  } else if (back$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][0] = 'back[2][2]';
  } else if (back$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][0] = 'front[0][0]';
  } else if (back$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][0] = 'front[0][2]';
  } else if (back$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][0] = 'front[2][0]';
  } else if (back$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][0] = 'front[2][2]';
  }

  if (back$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][0] = 'back[0][0]';
  } else if (back$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][0] = 'back[0][2]';
  } else if (back$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][0] = 'back[2][0]';
  } else if (back$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][0] = 'back[2][2]';
  } else if (back$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][0] = 'front[0][0]';
  } else if (back$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][0] = 'front[0][2]';
  } else if (back$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][0] = 'front[2][0]';
  } else if (back$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][0] = 'front[2][2]';
  }

  if (front$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][0] = 'back[0][0]';
  } else if (front$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][0] = 'back[0][2]';
  } else if (front$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][0] = 'back[2][0]';
  } else if (front$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][0] = 'back[2][2]';
  } else if (front$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][0] = 'front[0][0]';
  } else if (front$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][0] = 'front[0][2]';
  } else if (front$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][0] = 'front[2][0]';
  } else if (front$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][0] = 'front[2][2]';
  }

  if (front$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][0] = 'back[0][0]';
  } else if (front$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][0] = 'back[0][2]';
  } else if (front$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][0] = 'back[2][0]';
  } else if (front$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][0] = 'back[2][2]';
  } else if (front$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][0] = 'front[0][0]';
  } else if (front$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][0] = 'front[0][2]';
  } else if (front$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][0] = 'front[2][0]';
  } else if (front$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][0] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[1][0] = 'back[0][1]';
  } else if (back$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[1][0] = 'back[1][0]';
  } else if (back$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[1][0] = 'back[1][2]';
  } else if (back$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[1][0] = 'back[2][1]';
  } else if (back$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[1][0] = 'centre[0][0]';
  } else if (back$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[1][0] = 'centre[0][2]';
  } else if (back$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[1][0] = 'centre[2][0]';
  } else if (back$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[1][0] = 'centre[2][2]';
  } else if (back$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[1][0] = 'front[0][1]';
  } else if (back$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[1][0] = 'front[1][0]';
  } else if (back$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[1][0] = 'front[1][2]';
  } else if (back$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[1][0] = 'front[2][1]';
  }

  if (centre$[0][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[0][0] = 'back[0][1]';
  } else if (centre$[0][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[0][0] = 'back[1][0]';
  } else if (centre$[0][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[0][0] = 'back[1][2]';
  } else if (centre$[0][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[0][0] = 'back[2][1]';
  } else if (centre$[0][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[0][0] = 'centre[0][0]';
  } else if (centre$[0][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[0][0] = 'centre[0][2]';
  } else if (centre$[0][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[0][0] = 'centre[2][0]';
  } else if (centre$[0][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[0][0] = 'centre[2][2]';
  } else if (centre$[0][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[0][0] = 'front[0][1]';
  } else if (centre$[0][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[0][0] = 'front[1][0]';
  } else if (centre$[0][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[0][0] = 'front[1][2]';
  } else if (centre$[0][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[0][0] = 'front[2][1]';
  }

  if (centre$[2][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[2][0] = 'back[0][1]';
  } else if (centre$[2][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[2][0] = 'back[1][0]';
  } else if (centre$[2][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[2][0] = 'back[1][2]';
  } else if (centre$[2][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[2][0] = 'back[2][1]';
  } else if (centre$[2][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[2][0] = 'centre[0][0]';
  } else if (centre$[2][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[2][0] = 'centre[0][2]';
  } else if (centre$[2][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[2][0] = 'centre[2][0]';
  } else if (centre$[2][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[2][0] = 'centre[2][2]';
  } else if (centre$[2][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[2][0] = 'front[0][1]';
  } else if (centre$[2][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[2][0] = 'front[1][0]';
  } else if (centre$[2][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[2][0] = 'front[1][2]';
  } else if (centre$[2][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[2][0] = 'front[2][1]';
  }

  if (front$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[1][0] = 'back[0][1]';
  } else if (front$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[1][0] = 'back[1][0]';
  } else if (front$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[1][0] = 'back[1][2]';
  } else if (front$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[1][0] = 'back[2][1]';
  } else if (front$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[1][0] = 'centre[0][0]';
  } else if (front$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[1][0] = 'centre[0][2]';
  } else if (front$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[1][0] = 'centre[2][0]';
  } else if (front$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[1][0] = 'centre[2][2]';
  } else if (front$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[1][0] = 'front[0][1]';
  } else if (front$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[1][0] = 'front[1][0]';
  } else if (front$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[1][0] = 'front[1][2]';
  } else if (front$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[1][0] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][0] == 'back[0][0]') {
    back[0][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'back[0][2]') {
    back[0][2] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'back[2][0]') {
    back[2][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'back[2][2]') {
    back[2][2] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[0][0]') {
    front[0][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[0][2]') {
    front[0][2] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[2][0]') {
    front[2][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[2][2]') {
    front[2][2] = '-100 100 -100';
  }

  if (CubeAtback[2][0] == 'back[0][0]') {
    back[0][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'back[0][2]') {
    back[0][2] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'back[2][0]') {
    back[2][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'back[2][2]') {
    back[2][2] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[0][0]') {
    front[0][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[0][2]') {
    front[0][2] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[2][0]') {
    front[2][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[2][2]') {
    front[2][2] = '-100 100 100';
  }

  if (CubeAtfront[0][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 -100';
  } else if (CubeAtfront[0][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 -100';
  }

  if (CubeAtfront[2][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 100';
  }

  //Setting EDGES
  if (CubeAtback[1][0] == 'back[0][1]') {
    back[0][1] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'back[1][0]') {
    back[1][0] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'back[1][2]') {
    back[1][2] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'back[2][1]') {
    back[2][1] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'centre[0][0]') {
    centre[0][0] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'centre[2][0]') {
    centre[2][0] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'centre[0][2]') {
    centre[0][2] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'centre[2][2]') {
    centre[2][2] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'front[0][1]') {
    front[0][1] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'front[1][0]') {
    front[1][0] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'front[1][2]') {
    front[1][2] = '-100 100 0';
  } else if (CubeAtback[1][0] == 'front[2][1]') {
    front[2][1] = '-100 100 0';
  }

  if (CubeAtcentre[0][0] == 'back[0][1]') {
    back[0][1] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'back[1][0]') {
    back[1][0] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'back[1][2]') {
    back[1][2] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'back[2][1]') {
    back[2][1] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'centre[0][0]') {
    centre[0][0] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'centre[2][0]') {
    centre[2][0] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'centre[0][2]') {
    centre[0][2] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'centre[2][2]') {
    centre[2][2] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'front[0][1]') {
    front[0][1] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'front[1][0]') {
    front[1][0] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'front[1][2]') {
    front[1][2] = '-100 0 -100';
  } else if (CubeAtcentre[0][0] == 'front[2][1]') {
    front[2][1] = '-100 0 -100';
  }

  if (CubeAtcentre[2][0] == 'back[0][1]') {
    back[0][1] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'back[1][0]') {
    back[1][0] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'back[1][2]') {
    back[1][2] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'back[2][1]') {
    back[2][1] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'centre[0][0]') {
    centre[0][0] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'centre[2][0]') {
    centre[2][0] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'centre[0][2]') {
    centre[0][2] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'centre[2][2]') {
    centre[2][2] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'front[0][1]') {
    front[0][1] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'front[1][0]') {
    front[1][0] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'front[1][2]') {
    front[1][2] = '-100 0 100';
  } else if (CubeAtcentre[2][0] == 'front[2][1]') {
    front[2][1] = '-100 0 100';
  }

  if (CubeAtfront[1][0] == 'back[0][1]') {
    back[0][1] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'back[1][0]') {
    back[1][0] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'back[1][2]') {
    back[1][2] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'back[2][1]') {
    back[2][1] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'centre[0][0]') {
    centre[0][0] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'centre[2][0]') {
    centre[2][0] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'centre[0][2]') {
    centre[0][2] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'centre[2][2]') {
    centre[2][2] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'front[0][1]') {
    front[0][1] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'front[1][0]') {
    front[1][0] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'front[1][2]') {
    front[1][2] = '-100 -100 0';
  } else if (CubeAtfront[1][0] == 'front[2][1]') {
    front[2][1] = '-100 -100 0';
  }
}

function rotLtFaceAntiClk() {
  //Detecting CORNERS
  if (back$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][0] = 'back[0][0]';
  } else if (back$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][0] = 'back[0][2]';
  } else if (back$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][0] = 'back[2][0]';
  } else if (back$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][0] = 'back[2][2]';
  } else if (back$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][0] = 'front[0][0]';
  } else if (back$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][0] = 'front[0][2]';
  } else if (back$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][0] = 'front[2][0]';
  } else if (back$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][0] = 'front[2][2]';
  }

  if (back$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][0] = 'back[0][0]';
  } else if (back$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][0] = 'back[0][2]';
  } else if (back$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][0] = 'back[2][0]';
  } else if (back$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][0] = 'back[2][2]';
  } else if (back$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][0] = 'front[0][0]';
  } else if (back$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][0] = 'front[0][2]';
  } else if (back$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][0] = 'front[2][0]';
  } else if (back$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][0] = 'front[2][2]';
  }

  if (front$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][0] = 'back[0][0]';
  } else if (front$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][0] = 'back[0][2]';
  } else if (front$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][0] = 'back[2][0]';
  } else if (front$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][0] = 'back[2][2]';
  } else if (front$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][0] = 'front[0][0]';
  } else if (front$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][0] = 'front[0][2]';
  } else if (front$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][0] = 'front[2][0]';
  } else if (front$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][0] = 'front[2][2]';
  }

  if (front$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateX(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][0] = 'back[0][0]';
  } else if (front$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateX(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][0] = 'back[0][2]';
  } else if (front$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateX(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][0] = 'back[2][0]';
  } else if (front$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateX(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][0] = 'back[2][2]';
  } else if (front$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateX(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][0] = 'front[0][0]';
  } else if (front$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateX(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][0] = 'front[0][2]';
  } else if (front$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateX(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][0] = 'front[2][0]';
  } else if (front$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateX(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][0] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[1][0] = 'back[0][1]';
  } else if (back$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[1][0] = 'back[1][0]';
  } else if (back$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[1][0] = 'back[1][2]';
  } else if (back$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[1][0] = 'back[2][1]';
  } else if (back$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[1][0] = 'centre[0][0]';
  } else if (back$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[1][0] = 'centre[0][2]';
  } else if (back$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[1][0] = 'centre[2][0]';
  } else if (back$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[1][0] = 'centre[2][2]';
  } else if (back$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[1][0] = 'front[0][1]';
  } else if (back$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[1][0] = 'front[1][0]';
  } else if (back$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[1][0] = 'front[1][2]';
  } else if (back$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[1][0] = 'front[2][1]';
  }

  if (centre$[0][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[0][0] = 'back[0][1]';
  } else if (centre$[0][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[0][0] = 'back[1][0]';
  } else if (centre$[0][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[0][0] = 'back[1][2]';
  } else if (centre$[0][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[0][0] = 'back[2][1]';
  } else if (centre$[0][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[0][0] = 'centre[0][0]';
  } else if (centre$[0][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[0][0] = 'centre[0][2]';
  } else if (centre$[0][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[0][0] = 'centre[2][0]';
  } else if (centre$[0][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[0][0] = 'centre[2][2]';
  } else if (centre$[0][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[0][0] = 'front[0][1]';
  } else if (centre$[0][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[0][0] = 'front[1][0]';
  } else if (centre$[0][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[0][0] = 'front[1][2]';
  } else if (centre$[0][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[0][0] = 'front[2][1]';
  }

  if (centre$[2][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[2][0] = 'back[0][1]';
  } else if (centre$[2][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[2][0] = 'back[1][0]';
  } else if (centre$[2][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[2][0] = 'back[1][2]';
  } else if (centre$[2][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[2][0] = 'back[2][1]';
  } else if (centre$[2][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[2][0] = 'centre[0][0]';
  } else if (centre$[2][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[2][0] = 'centre[0][2]';
  } else if (centre$[2][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[2][0] = 'centre[2][0]';
  } else if (centre$[2][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[2][0] = 'centre[2][2]';
  } else if (centre$[2][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[2][0] = 'front[0][1]';
  } else if (centre$[2][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[2][0] = 'front[1][0]';
  } else if (centre$[2][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[2][0] = 'front[1][2]';
  } else if (centre$[2][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[2][0] = 'front[2][1]';
  }

  if (front$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateX(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[1][0] = 'back[0][1]';
  } else if (front$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateX(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[1][0] = 'back[1][0]';
  } else if (front$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateX(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[1][0] = 'back[1][2]';
  } else if (front$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateX(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[1][0] = 'back[2][1]';
  } else if (front$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateX(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[1][0] = 'centre[0][0]';
  } else if (front$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateX(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[1][0] = 'centre[0][2]';
  } else if (front$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateX(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[1][0] = 'centre[2][0]';
  } else if (front$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateX(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[1][0] = 'centre[2][2]';
  } else if (front$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateX(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[1][0] = 'front[0][1]';
  } else if (front$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateX(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[1][0] = 'front[1][0]';
  } else if (front$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateX(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[1][0] = 'front[1][2]';
  } else if (front$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateX(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[1][0] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 100';
  } else if (CubeAtback[0][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 100';
  }

  if (CubeAtback[2][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 -100';
  }

  if (CubeAtfront[0][0] == 'back[0][0]') {
    back[0][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'back[0][2]') {
    back[0][2] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'back[2][0]') {
    back[2][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'back[2][2]') {
    back[2][2] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[0][0]') {
    front[0][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[0][2]') {
    front[0][2] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[2][0]') {
    front[2][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[2][2]') {
    front[2][2] = '-100 100 100';
  }

  if (CubeAtfront[2][0] == 'back[0][0]') {
    back[0][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'back[0][2]') {
    back[0][2] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'back[2][0]') {
    back[2][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'back[2][2]') {
    back[2][2] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[0][0]') {
    front[0][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[0][2]') {
    front[0][2] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[2][0]') {
    front[2][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[2][2]') {
    front[2][2] = '-100 100 -100';
  }

  //Setting EDGES
  if (CubeAtback[1][0] == 'back[0][1]') {
    back[0][1] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'back[1][0]') {
    back[1][0] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'back[1][2]') {
    back[1][2] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'back[2][1]') {
    back[2][1] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'centre[0][0]') {
    centre[0][0] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'centre[2][0]') {
    centre[2][0] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'centre[0][2]') {
    centre[0][2] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'centre[2][2]') {
    centre[2][2] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'front[0][1]') {
    front[0][1] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'front[1][0]') {
    front[1][0] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'front[1][2]') {
    front[1][2] = '-100 -100 0';
  } else if (CubeAtback[1][0] == 'front[2][1]') {
    front[2][1] = '-100 -100 0';
  }

  if (CubeAtcentre[0][0] == 'back[0][1]') {
    back[0][1] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'back[1][0]') {
    back[1][0] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'back[1][2]') {
    back[1][2] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'back[2][1]') {
    back[2][1] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'centre[0][0]') {
    centre[0][0] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'centre[2][0]') {
    centre[2][0] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'centre[0][2]') {
    centre[0][2] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'centre[2][2]') {
    centre[2][2] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'front[0][1]') {
    front[0][1] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'front[1][0]') {
    front[1][0] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'front[1][2]') {
    front[1][2] = '-100 0 100';
  } else if (CubeAtcentre[0][0] == 'front[2][1]') {
    front[2][1] = '-100 0 100';
  }

  if (CubeAtcentre[2][0] == 'back[0][1]') {
    back[0][1] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'back[1][0]') {
    back[1][0] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'back[1][2]') {
    back[1][2] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'back[2][1]') {
    back[2][1] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'centre[0][0]') {
    centre[0][0] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'centre[2][0]') {
    centre[2][0] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'centre[0][2]') {
    centre[0][2] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'centre[2][2]') {
    centre[2][2] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'front[0][1]') {
    front[0][1] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'front[1][0]') {
    front[1][0] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'front[1][2]') {
    front[1][2] = '-100 0 -100';
  } else if (CubeAtcentre[2][0] == 'front[2][1]') {
    front[2][1] = '-100 0 -100';
  }

  if (CubeAtfront[1][0] == 'back[0][1]') {
    back[0][1] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'back[1][0]') {
    back[1][0] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'back[1][2]') {
    back[1][2] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'back[2][1]') {
    back[2][1] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'centre[0][0]') {
    centre[0][0] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'centre[2][0]') {
    centre[2][0] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'centre[0][2]') {
    centre[0][2] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'centre[2][2]') {
    centre[2][2] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'front[0][1]') {
    front[0][1] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'front[1][0]') {
    front[1][0] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'front[1][2]') {
    front[1][2] = '-100 100 0';
  } else if (CubeAtfront[1][0] == 'front[2][1]') {
    front[2][1] = '-100 100 0';
  }
}

function rotDnFaceClk() {
  //Detecting CORNERS
  if (back$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][0] = 'back[0][0]';
  } else if (back$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][0] = 'back[0][2]';
  } else if (back$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][0] = 'back[2][0]';
  } else if (back$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][0] = 'back[2][2]';
  } else if (back$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][0] = 'front[0][0]';
  } else if (back$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][0] = 'front[0][2]';
  } else if (back$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][0] = 'front[2][0]';
  } else if (back$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][0] = 'front[2][2]';
  }

  if (back$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][2] = 'back[0][0]';
  } else if (back$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][2] = 'back[0][2]';
  } else if (back$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][2] = 'back[2][0]';
  } else if (back$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][2] = 'back[2][2]';
  } else if (back$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][2] = 'front[0][0]';
  } else if (back$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][2] = 'front[0][2]';
  } else if (back$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][2] = 'front[2][0]';
  } else if (back$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][2] = 'front[2][2]';
  }

  if (front$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][0] = 'back[0][0]';
  } else if (front$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][0] = 'back[0][2]';
  } else if (front$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][0] = 'back[2][0]';
  } else if (front$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][0] = 'back[2][2]';
  } else if (front$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][0] = 'front[0][0]';
  } else if (front$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][0] = 'front[0][2]';
  } else if (front$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][0] = 'front[2][0]';
  } else if (front$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][0] = 'front[2][2]';
  }

  if (front$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][2] = 'back[0][0]';
  } else if (front$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][2] = 'back[0][2]';
  } else if (front$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][2] = 'back[2][0]';
  } else if (front$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][2] = 'back[2][2]';
  } else if (front$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][2] = 'front[0][0]';
  } else if (front$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][2] = 'front[0][2]';
  } else if (front$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][2] = 'front[2][0]';
  } else if (front$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[2][1] = 'back[0][1]';
  } else if (back$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[2][1] = 'back[1][0]';
  } else if (back$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[2][1] = 'back[1][2]';
  } else if (back$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[2][1] = 'back[2][1]';
  } else if (back$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[2][1] = 'centre[0][0]';
  } else if (back$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[2][1] = 'centre[0][2]';
  } else if (back$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[2][1] = 'centre[2][0]';
  } else if (back$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[2][1] = 'centre[2][2]';
  } else if (back$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[2][1] = 'front[0][1]';
  } else if (back$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[2][1] = 'front[1][0]';
  } else if (back$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[2][1] = 'front[1][2]';
  } else if (back$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[2][1] = 'front[2][1]';
  }

  if (centre$[2][0] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[2][0] = 'back[0][1]';
  } else if (centre$[2][0] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[2][0] = 'back[1][0]';
  } else if (centre$[2][0] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[2][0] = 'back[1][2]';
  } else if (centre$[2][0] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[2][0] = 'back[2][1]';
  } else if (centre$[2][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[2][0] = 'centre[0][0]';
  } else if (centre$[2][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[2][0] = 'centre[0][2]';
  } else if (centre$[2][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[2][0] = 'centre[2][0]';
  } else if (centre$[2][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[2][0] = 'centre[2][2]';
  } else if (centre$[2][0] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[2][0] = 'front[0][1]';
  } else if (centre$[2][0] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[2][0] = 'front[1][0]';
  } else if (centre$[2][0] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[2][0] = 'front[1][2]';
  } else if (centre$[2][0] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[2][0] = 'front[2][1]';
  }

  if (centre$[2][2] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[2][2] = 'back[0][1]';
  } else if (centre$[2][2] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[2][2] = 'back[1][0]';
  } else if (centre$[2][2] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[2][2] = 'back[1][2]';
  } else if (centre$[2][2] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[2][2] = 'back[2][1]';
  } else if (centre$[2][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[2][2] = 'centre[0][0]';
  } else if (centre$[2][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[2][2] = 'centre[0][2]';
  } else if (centre$[2][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[2][2] = 'centre[2][0]';
  } else if (centre$[2][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[2][2] = 'centre[2][2]';
  } else if (centre$[2][2] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[2][2] = 'front[0][1]';
  } else if (centre$[2][2] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[2][2] = 'front[1][0]';
  } else if (centre$[2][2] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[2][2] = 'front[1][2]';
  } else if (centre$[2][2] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[2][2] = 'front[2][1]';
  }

  if (front$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[2][1] = 'back[0][1]';
  } else if (front$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[2][1] = 'back[1][0]';
  } else if (front$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[2][1] = 'back[1][2]';
  } else if (front$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[2][1] = 'back[2][1]';
  } else if (front$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[2][1] = 'centre[0][0]';
  } else if (front$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[2][1] = 'centre[0][2]';
  } else if (front$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[2][1] = 'centre[2][0]';
  } else if (front$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[2][1] = 'centre[2][2]';
  } else if (front$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[2][1] = 'front[0][1]';
  } else if (front$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[2][1] = 'front[1][0]';
  } else if (front$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[2][1] = 'front[1][2]';
  } else if (front$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[2][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[2][0] == 'back[0][0]') {
    back[0][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'back[0][2]') {
    back[0][2] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'back[2][0]') {
    back[2][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'back[2][2]') {
    back[2][2] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[0][0]') {
    front[0][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[0][2]') {
    front[0][2] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[2][0]') {
    front[2][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[2][2]') {
    front[2][2] = '100 100 -100';
  }

  if (CubeAtback[2][2] == 'back[0][0]') {
    back[0][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'back[0][2]') {
    back[0][2] = '100 100 100';
  } else if (CubeAtback[2][2] == 'back[2][0]') {
    back[2][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'back[2][2]') {
    back[2][2] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[0][0]') {
    front[0][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[0][2]') {
    front[0][2] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[2][0]') {
    front[2][0] = '100 100 100';
  } else if (CubeAtback[2][2] == 'front[2][2]') {
    front[2][2] = '100 100 100';
  }

  if (CubeAtfront[2][0] == 'back[0][0]') {
    back[0][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'back[0][2]') {
    back[0][2] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'back[2][0]') {
    back[2][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'back[2][2]') {
    back[2][2] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[0][0]') {
    front[0][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[0][2]') {
    front[0][2] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[2][0]') {
    front[2][0] = '-100 100 -100';
  } else if (CubeAtfront[2][0] == 'front[2][2]') {
    front[2][2] = '-100 100 -100';
  }

  if (CubeAtfront[2][2] == 'back[0][0]') {
    back[0][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'back[0][2]') {
    back[0][2] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'back[2][0]') {
    back[2][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'back[2][2]') {
    back[2][2] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[0][0]') {
    front[0][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[0][2]') {
    front[0][2] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[2][0]') {
    front[2][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[2][2]') {
    front[2][2] = '-100 100 100';
  }

  //Setting EDGES
  if (CubeAtback[2][1] == 'back[0][1]') {
    back[0][1] = '100 100 0';
  } else if (CubeAtback[2][1] == 'back[1][0]') {
    back[1][0] = '100 100 0';
  } else if (CubeAtback[2][1] == 'back[1][2]') {
    back[1][2] = '100 100 0';
  } else if (CubeAtback[2][1] == 'back[2][1]') {
    back[2][1] = '100 100 0';
  } else if (CubeAtback[2][1] == 'centre[0][0]') {
    centre[0][0] = '100 100 0';
  } else if (CubeAtback[2][1] == 'centre[2][0]') {
    centre[2][0] = '100 100 0';
  } else if (CubeAtback[2][1] == 'centre[0][2]') {
    centre[0][2] = '100 100 0';
  } else if (CubeAtback[2][1] == 'centre[2][2]') {
    centre[2][2] = '100 100 0';
  } else if (CubeAtback[2][1] == 'front[0][1]') {
    front[0][1] = '100 100 0';
  } else if (CubeAtback[2][1] == 'front[1][0]') {
    front[1][0] = '100 100 0';
  } else if (CubeAtback[2][1] == 'front[1][2]') {
    front[1][2] = '100 100 0';
  } else if (CubeAtback[2][1] == 'front[2][1]') {
    front[2][1] = '100 100 0';
  }

  if (CubeAtcentre[2][0] == 'back[0][1]') {
    back[0][1] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'back[1][0]') {
    back[1][0] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'back[1][2]') {
    back[1][2] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'back[2][1]') {
    back[2][1] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'centre[0][0]') {
    centre[0][0] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'centre[2][0]') {
    centre[2][0] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'centre[0][2]') {
    centre[0][2] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'centre[2][2]') {
    centre[2][2] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'front[0][1]') {
    front[0][1] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'front[1][0]') {
    front[1][0] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'front[1][2]') {
    front[1][2] = '0 100 -100';
  } else if (CubeAtcentre[2][0] == 'front[2][1]') {
    front[2][1] = '0 100 -100';
  }

  if (CubeAtcentre[2][2] == 'back[0][1]') {
    back[0][1] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'back[1][0]') {
    back[1][0] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'back[1][2]') {
    back[1][2] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'back[2][1]') {
    back[2][1] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'centre[0][0]') {
    centre[0][0] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'centre[2][0]') {
    centre[2][0] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'centre[0][2]') {
    centre[0][2] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'centre[2][2]') {
    centre[2][2] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'front[0][1]') {
    front[0][1] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'front[1][0]') {
    front[1][0] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'front[1][2]') {
    front[1][2] = '0 100 100';
  } else if (CubeAtcentre[2][2] == 'front[2][1]') {
    front[2][1] = '0 100 100';
  }

  if (CubeAtfront[2][1] == 'back[0][1]') {
    back[0][1] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'back[1][0]') {
    back[1][0] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'back[1][2]') {
    back[1][2] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'back[2][1]') {
    back[2][1] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[0][0]') {
    centre[0][0] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[2][0]') {
    centre[2][0] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[0][2]') {
    centre[0][2] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[2][2]') {
    centre[2][2] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'front[0][1]') {
    front[0][1] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'front[1][0]') {
    front[1][0] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'front[1][2]') {
    front[1][2] = '-100 100 0';
  } else if (CubeAtfront[2][1] == 'front[2][1]') {
    front[2][1] = '-100 100 0';
  }
}

function rotDnFaceAntiClk() {
  //Detecting CORNERS
  if (back$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][0] = 'back[0][0]';
  } else if (back$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][0] = 'back[0][2]';
  } else if (back$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][0] = 'back[2][0]';
  } else if (back$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][0] = 'back[2][2]';
  } else if (back$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][0] = 'front[0][0]';
  } else if (back$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][0] = 'front[0][2]';
  } else if (back$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][0] = 'front[2][0]';
  } else if (back$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][0] = 'front[2][2]';
  }

  if (back$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][2] = 'back[0][0]';
  } else if (back$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][2] = 'back[0][2]';
  } else if (back$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][2] = 'back[2][0]';
  } else if (back$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][2] = 'back[2][2]';
  } else if (back$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][2] = 'front[0][0]';
  } else if (back$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][2] = 'front[0][2]';
  } else if (back$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][2] = 'front[2][0]';
  } else if (back$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][2] = 'front[2][2]';
  }

  if (front$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][0] = 'back[0][0]';
  } else if (front$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][0] = 'back[0][2]';
  } else if (front$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][0] = 'back[2][0]';
  } else if (front$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][0] = 'back[2][2]';
  } else if (front$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][0] = 'front[0][0]';
  } else if (front$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][0] = 'front[0][2]';
  } else if (front$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][0] = 'front[2][0]';
  } else if (front$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][0] = 'front[2][2]';
  }

  if (front$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateY(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][2] = 'back[0][0]';
  } else if (front$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateY(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][2] = 'back[0][2]';
  } else if (front$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateY(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][2] = 'back[2][0]';
  } else if (front$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateY(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][2] = 'back[2][2]';
  } else if (front$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateY(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][2] = 'front[0][0]';
  } else if (front$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateY(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][2] = 'front[0][2]';
  } else if (front$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateY(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][2] = 'front[2][0]';
  } else if (front$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateY(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[2][1] = 'back[0][1]';
  } else if (back$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[2][1] = 'back[1][0]';
  } else if (back$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[2][1] = 'back[1][2]';
  } else if (back$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[2][1] = 'back[2][1]';
  } else if (back$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[2][1] = 'centre[0][0]';
  } else if (back$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[2][1] = 'centre[0][2]';
  } else if (back$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[2][1] = 'centre[2][0]';
  } else if (back$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[2][1] = 'centre[2][2]';
  } else if (back$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[2][1] = 'front[0][1]';
  } else if (back$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[2][1] = 'front[1][0]';
  } else if (back$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[2][1] = 'front[1][2]';
  } else if (back$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[2][1] = 'front[2][1]';
  }

  if (centre$[2][0] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[2][0] = 'back[0][1]';
  } else if (centre$[2][0] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[2][0] = 'back[1][0]';
  } else if (centre$[2][0] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[2][0] = 'back[1][2]';
  } else if (centre$[2][0] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[2][0] = 'back[2][1]';
  } else if (centre$[2][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[2][0] = 'centre[0][0]';
  } else if (centre$[2][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[2][0] = 'centre[0][2]';
  } else if (centre$[2][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[2][0] = 'centre[2][0]';
  } else if (centre$[2][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[2][0] = 'centre[2][2]';
  } else if (centre$[2][0] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[2][0] = 'front[0][1]';
  } else if (centre$[2][0] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[2][0] = 'front[1][0]';
  } else if (centre$[2][0] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[2][0] = 'front[1][2]';
  } else if (centre$[2][0] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[2][0] = 'front[2][1]';
  }

  if (centre$[2][2] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtcentre[2][2] = 'back[0][1]';
  } else if (centre$[2][2] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtcentre[2][2] = 'back[1][0]';
  } else if (centre$[2][2] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtcentre[2][2] = 'back[1][2]';
  } else if (centre$[2][2] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtcentre[2][2] = 'back[2][1]';
  } else if (centre$[2][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtcentre[2][2] = 'centre[0][0]';
  } else if (centre$[2][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtcentre[2][2] = 'centre[0][2]';
  } else if (centre$[2][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtcentre[2][2] = 'centre[2][0]';
  } else if (centre$[2][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtcentre[2][2] = 'centre[2][2]';
  } else if (centre$[2][2] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtcentre[2][2] = 'front[0][1]';
  } else if (centre$[2][2] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtcentre[2][2] = 'front[1][0]';
  } else if (centre$[2][2] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtcentre[2][2] = 'front[1][2]';
  } else if (centre$[2][2] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtcentre[2][2] = 'front[2][1]';
  }

  if (front$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateY(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[2][1] = 'back[0][1]';
  } else if (front$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateY(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[2][1] = 'back[1][0]';
  } else if (front$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateY(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[2][1] = 'back[1][2]';
  } else if (front$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateY(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[2][1] = 'back[2][1]';
  } else if (front$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateY(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[2][1] = 'centre[0][0]';
  } else if (front$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateY(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[2][1] = 'centre[0][2]';
  } else if (front$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateY(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[2][1] = 'centre[2][0]';
  } else if (front$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateY(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[2][1] = 'centre[2][2]';
  } else if (front$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateY(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[2][1] = 'front[0][1]';
  } else if (front$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateY(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[2][1] = 'front[1][0]';
  } else if (front$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateY(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[2][1] = 'front[1][2]';
  } else if (front$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateY(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[2][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[2][0] == 'back[0][0]') {
    back[0][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'back[0][2]') {
    back[0][2] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'back[2][0]') {
    back[2][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'back[2][2]') {
    back[2][2] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[0][0]') {
    front[0][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[0][2]') {
    front[0][2] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[2][0]') {
    front[2][0] = '-100 100 100';
  } else if (CubeAtback[2][0] == 'front[2][2]') {
    front[2][2] = '-100 100 100';
  }

  if (CubeAtback[2][2] == 'back[0][0]') {
    back[0][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'back[0][2]') {
    back[0][2] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'back[2][0]') {
    back[2][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'back[2][2]') {
    back[2][2] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[0][0]') {
    front[0][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[0][2]') {
    front[0][2] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[2][0]') {
    front[2][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[2][2]') {
    front[2][2] = '-100 100 -100';
  }

  if (CubeAtfront[2][0] == 'back[0][0]') {
    back[0][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'back[0][2]') {
    back[0][2] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'back[2][0]') {
    back[2][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'back[2][2]') {
    back[2][2] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[0][0]') {
    front[0][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[0][2]') {
    front[0][2] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[2][0]') {
    front[2][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[2][2]') {
    front[2][2] = '100 100 100';
  }

  if (CubeAtfront[2][2] == 'back[0][0]') {
    back[0][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'back[0][2]') {
    back[0][2] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'back[2][0]') {
    back[2][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'back[2][2]') {
    back[2][2] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[0][0]') {
    front[0][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[0][2]') {
    front[0][2] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[2][0]') {
    front[2][0] = '100 100 -100';
  } else if (CubeAtfront[2][2] == 'front[2][2]') {
    front[2][2] = '100 100 -100';
  }

  //Setting EDGES
  if (CubeAtback[2][1] == 'back[0][1]') {
    back[0][1] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'back[1][0]') {
    back[1][0] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'back[1][2]') {
    back[1][2] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'back[2][1]') {
    back[2][1] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'centre[0][0]') {
    centre[0][0] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'centre[2][0]') {
    centre[2][0] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'centre[0][2]') {
    centre[0][2] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'centre[2][2]') {
    centre[2][2] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'front[0][1]') {
    front[0][1] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'front[1][0]') {
    front[1][0] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'front[1][2]') {
    front[1][2] = '-100 100 0';
  } else if (CubeAtback[2][1] == 'front[2][1]') {
    front[2][1] = '-100 100 0';
  }

  if (CubeAtcentre[2][0] == 'back[0][1]') {
    back[0][1] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'back[1][0]') {
    back[1][0] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'back[1][2]') {
    back[1][2] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'back[2][1]') {
    back[2][1] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'centre[0][0]') {
    centre[0][0] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'centre[2][0]') {
    centre[2][0] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'centre[0][2]') {
    centre[0][2] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'centre[2][2]') {
    centre[2][2] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'front[0][1]') {
    front[0][1] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'front[1][0]') {
    front[1][0] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'front[1][2]') {
    front[1][2] = '0 100 100';
  } else if (CubeAtcentre[2][0] == 'front[2][1]') {
    front[2][1] = '0 100 100';
  }

  if (CubeAtcentre[2][2] == 'back[0][1]') {
    back[0][1] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'back[1][0]') {
    back[1][0] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'back[1][2]') {
    back[1][2] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'back[2][1]') {
    back[2][1] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'centre[0][0]') {
    centre[0][0] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'centre[2][0]') {
    centre[2][0] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'centre[0][2]') {
    centre[0][2] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'centre[2][2]') {
    centre[2][2] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'front[0][1]') {
    front[0][1] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'front[1][0]') {
    front[1][0] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'front[1][2]') {
    front[1][2] = '0 100 -100';
  } else if (CubeAtcentre[2][2] == 'front[2][1]') {
    front[2][1] = '0 100 -100';
  }

  if (CubeAtfront[2][1] == 'back[0][1]') {
    back[0][1] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'back[1][0]') {
    back[1][0] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'back[1][2]') {
    back[1][2] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'back[2][1]') {
    back[2][1] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[0][0]') {
    centre[0][0] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[2][0]') {
    centre[2][0] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[0][2]') {
    centre[0][2] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'centre[2][2]') {
    centre[2][2] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'front[0][1]') {
    front[0][1] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'front[1][0]') {
    front[1][0] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'front[1][2]') {
    front[1][2] = '100 100 0';
  } else if (CubeAtfront[2][1] == 'front[2][1]') {
    front[2][1] = '100 100 0';
  }
}

function rotFtFaceClk() {
  //Detecting CORNERS
  if (front$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][0] = 'back[0][0]';
  } else if (front$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][0] = 'back[0][2]';
  } else if (front$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][0] = 'back[2][0]';
  } else if (front$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][0] = 'back[2][2]';
  } else if (front$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][0] = 'front[0][0]';
  } else if (front$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][0] = 'front[0][2]';
  } else if (front$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][0] = 'front[2][0]';
  } else if (front$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][0] = 'front[2][2]';
  }

  if (front$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][2] = 'back[0][0]';
  } else if (front$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][2] = 'back[0][2]';
  } else if (front$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][2] = 'back[2][0]';
  } else if (front$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][2] = 'back[2][2]';
  } else if (front$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][2] = 'front[0][0]';
  } else if (front$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][2] = 'front[0][2]';
  } else if (front$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][2] = 'front[2][0]';
  } else if (front$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][2] = 'front[2][2]';
  }

  if (front$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][0] = 'back[0][0]';
  } else if (front$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][0] = 'back[0][2]';
  } else if (front$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][0] = 'back[2][0]';
  } else if (front$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][0] = 'back[2][2]';
  } else if (front$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][0] = 'front[0][0]';
  } else if (front$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][0] = 'front[0][2]';
  } else if (front$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][0] = 'front[2][0]';
  } else if (front$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][0] = 'front[2][2]';
  }

  if (front$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][2] = 'back[0][0]';
  } else if (front$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][2] = 'back[0][2]';
  } else if (front$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][2] = 'back[2][0]';
  } else if (front$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][2] = 'back[2][2]';
  } else if (front$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][2] = 'front[0][0]';
  } else if (front$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][2] = 'front[0][2]';
  } else if (front$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][2] = 'front[2][0]';
  } else if (front$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (front$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[0][1] = 'back[0][1]';
  } else if (front$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[0][1] = 'back[1][0]';
  } else if (front$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[0][1] = 'back[1][2]';
  } else if (front$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[0][1] = 'back[2][1]';
  } else if (front$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[0][1] = 'centre[0][0]';
  } else if (front$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[0][1] = 'centre[0][2]';
  } else if (front$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[0][1] = 'centre[2][0]';
  } else if (front$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[0][1] = 'centre[2][2]';
  } else if (front$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[0][1] = 'front[0][1]';
  } else if (front$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[0][1] = 'front[1][0]';
  } else if (front$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[0][1] = 'front[1][2]';
  } else if (front$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[0][1] = 'front[2][1]';
  }

  if (front$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[1][0] = 'back[0][1]';
  } else if (front$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[1][0] = 'back[1][0]';
  } else if (front$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[1][0] = 'back[1][2]';
  } else if (front$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[1][0] = 'back[2][1]';
  } else if (front$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[1][0] = 'centre[0][0]';
  } else if (front$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[1][0] = 'centre[0][2]';
  } else if (front$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[1][0] = 'centre[2][0]';
  } else if (front$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[1][0] = 'centre[2][2]';
  } else if (front$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[1][0] = 'front[0][1]';
  } else if (front$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[1][0] = 'front[1][0]';
  } else if (front$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[1][0] = 'front[1][2]';
  } else if (front$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[1][0] = 'front[2][1]';
  }

  if (front$[1][2] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[1][2] = 'back[0][1]';
  } else if (front$[1][2] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[1][2] = 'back[1][0]';
  } else if (front$[1][2] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[1][2] = 'back[1][2]';
  } else if (front$[1][2] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[1][2] = 'back[2][1]';
  } else if (front$[1][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[1][2] = 'centre[0][0]';
  } else if (front$[1][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[1][2] = 'centre[0][2]';
  } else if (front$[1][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[1][2] = 'centre[2][0]';
  } else if (front$[1][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[1][2] = 'centre[2][2]';
  } else if (front$[1][2] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[1][2] = 'front[0][1]';
  } else if (front$[1][2] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[1][2] = 'front[1][0]';
  } else if (front$[1][2] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[1][2] = 'front[1][2]';
  } else if (front$[1][2] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[1][2] = 'front[2][1]';
  }

  if (front$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[2][1] = 'back[0][1]';
  } else if (front$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[2][1] = 'back[1][0]';
  } else if (front$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[2][1] = 'back[1][2]';
  } else if (front$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[2][1] = 'back[2][1]';
  } else if (front$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[2][1] = 'centre[0][0]';
  } else if (front$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[2][1] = 'centre[0][2]';
  } else if (front$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[2][1] = 'centre[2][0]';
  } else if (front$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[2][1] = 'centre[2][2]';
  } else if (front$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[2][1] = 'front[0][1]';
  } else if (front$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[2][1] = 'front[1][0]';
  } else if (front$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[2][1] = 'front[1][2]';
  } else if (front$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[2][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtfront[0][0] == 'back[0][0]') {
    back[0][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'back[0][2]') {
    back[0][2] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'back[2][0]') {
    back[2][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'back[2][2]') {
    back[2][2] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[0][0]') {
    front[0][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[0][2]') {
    front[0][2] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[2][0]') {
    front[2][0] = '100 -100 100';
  } else if (CubeAtfront[0][0] == 'front[2][2]') {
    front[2][2] = '100 -100 100';
  }

  if (CubeAtfront[0][2] == 'back[0][0]') {
    back[0][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'back[0][2]') {
    back[0][2] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'back[2][0]') {
    back[2][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'back[2][2]') {
    back[2][2] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[0][0]') {
    front[0][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[0][2]') {
    front[0][2] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[2][0]') {
    front[2][0] = '100 100 100';
  } else if (CubeAtfront[0][2] == 'front[2][2]') {
    front[2][2] = '100 100 100';
  }

  if (CubeAtfront[2][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 100';
  } else if (CubeAtfront[2][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 100';
  }

  if (CubeAtfront[2][2] == 'back[0][0]') {
    back[0][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'back[0][2]') {
    back[0][2] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'back[2][0]') {
    back[2][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'back[2][2]') {
    back[2][2] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[0][0]') {
    front[0][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[0][2]') {
    front[0][2] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[2][0]') {
    front[2][0] = '-100 100 100';
  } else if (CubeAtfront[2][2] == 'front[2][2]') {
    front[2][2] = '-100 100 100';
  }

  //Setting EDGES
  if (CubeAtfront[0][1] == 'back[0][1]') {
    back[0][1] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'back[1][0]') {
    back[1][0] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'back[1][2]') {
    back[1][2] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'back[2][1]') {
    back[2][1] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[0][0]') {
    centre[0][0] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[2][0]') {
    centre[2][0] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[0][2]') {
    centre[0][2] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[2][2]') {
    centre[2][2] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'front[0][1]') {
    front[0][1] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'front[1][0]') {
    front[1][0] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'front[1][2]') {
    front[1][2] = '100 0 100';
  } else if (CubeAtfront[0][1] == 'front[2][1]') {
    front[2][1] = '100 0 100';
  }

  if (CubeAtfront[1][0] == 'back[0][1]') {
    back[0][1] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'back[1][0]') {
    back[1][0] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'back[1][2]') {
    back[1][2] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'back[2][1]') {
    back[2][1] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'centre[0][0]') {
    centre[0][0] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'centre[2][0]') {
    centre[2][0] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'centre[0][2]') {
    centre[0][2] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'centre[2][2]') {
    centre[2][2] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'front[0][1]') {
    front[0][1] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'front[1][0]') {
    front[1][0] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'front[1][2]') {
    front[1][2] = '0 -100 100';
  } else if (CubeAtfront[1][0] == 'front[2][1]') {
    front[2][1] = '0 -100 100';
  }

  if (CubeAtfront[1][2] == 'back[0][1]') {
    back[0][1] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'back[1][0]') {
    back[1][0] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'back[1][2]') {
    back[1][2] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'back[2][1]') {
    back[2][1] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'centre[0][0]') {
    centre[0][0] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'centre[2][0]') {
    centre[2][0] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'centre[0][2]') {
    centre[0][2] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'centre[2][2]') {
    centre[2][2] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'front[0][1]') {
    front[0][1] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'front[1][0]') {
    front[1][0] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'front[1][2]') {
    front[1][2] = '0 100 100';
  } else if (CubeAtfront[1][2] == 'front[2][1]') {
    front[2][1] = '0 100 100';
  }

  if (CubeAtfront[2][1] == 'back[0][1]') {
    back[0][1] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'back[1][0]') {
    back[1][0] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'back[1][2]') {
    back[1][2] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'back[2][1]') {
    back[2][1] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[0][0]') {
    centre[0][0] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[2][0]') {
    centre[2][0] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[0][2]') {
    centre[0][2] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[2][2]') {
    centre[2][2] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'front[0][1]') {
    front[0][1] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'front[1][0]') {
    front[1][0] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'front[1][2]') {
    front[1][2] = '-100 0 100';
  } else if (CubeAtfront[2][1] == 'front[2][1]') {
    front[2][1] = '-100 0 100';
  }
}

function rotFtFaceAntiClk() {
  //Detecting CORNERS
  if (front$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][0] = 'back[0][0]';
  } else if (front$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][0] = 'back[0][2]';
  } else if (front$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][0] = 'back[2][0]';
  } else if (front$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][0] = 'back[2][2]';
  } else if (front$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][0] = 'front[0][0]';
  } else if (front$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][0] = 'front[0][2]';
  } else if (front$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][0] = 'front[2][0]';
  } else if (front$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][0] = 'front[2][2]';
  }

  if (front$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[0][2] = 'back[0][0]';
  } else if (front$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[0][2] = 'back[0][2]';
  } else if (front$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[0][2] = 'back[2][0]';
  } else if (front$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[0][2] = 'back[2][2]';
  } else if (front$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[0][2] = 'front[0][0]';
  } else if (front$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[0][2] = 'front[0][2]';
  } else if (front$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[0][2] = 'front[2][0]';
  } else if (front$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[0][2] = 'front[2][2]';
  }

  if (front$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][0] = 'back[0][0]';
  } else if (front$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][0] = 'back[0][2]';
  } else if (front$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][0] = 'back[2][0]';
  } else if (front$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][0] = 'back[2][2]';
  } else if (front$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][0] = 'front[0][0]';
  } else if (front$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][0] = 'front[0][2]';
  } else if (front$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][0] = 'front[2][0]';
  } else if (front$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][0] = 'front[2][2]';
  }

  if (front$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtfront[2][2] = 'back[0][0]';
  } else if (front$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtfront[2][2] = 'back[0][2]';
  } else if (front$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtfront[2][2] = 'back[2][0]';
  } else if (front$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtfront[2][2] = 'back[2][2]';
  } else if (front$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtfront[2][2] = 'front[0][0]';
  } else if (front$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtfront[2][2] = 'front[0][2]';
  } else if (front$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtfront[2][2] = 'front[2][0]';
  } else if (front$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtfront[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (front$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[0][1] = 'back[0][1]';
  } else if (front$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[0][1] = 'back[1][0]';
  } else if (front$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[0][1] = 'back[1][2]';
  } else if (front$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[0][1] = 'back[2][1]';
  } else if (front$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[0][1] = 'centre[0][0]';
  } else if (front$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[0][1] = 'centre[0][2]';
  } else if (front$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[0][1] = 'centre[2][0]';
  } else if (front$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[0][1] = 'centre[2][2]';
  } else if (front$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[0][1] = 'front[0][1]';
  } else if (front$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[0][1] = 'front[1][0]';
  } else if (front$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[0][1] = 'front[1][2]';
  } else if (front$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[0][1] = 'front[2][1]';
  }

  if (front$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[1][0] = 'back[0][1]';
  } else if (front$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[1][0] = 'back[1][0]';
  } else if (front$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[1][0] = 'back[1][2]';
  } else if (front$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[1][0] = 'back[2][1]';
  } else if (front$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[1][0] = 'centre[0][0]';
  } else if (front$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[1][0] = 'centre[0][2]';
  } else if (front$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[1][0] = 'centre[2][0]';
  } else if (front$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[1][0] = 'centre[2][2]';
  } else if (front$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[1][0] = 'front[0][1]';
  } else if (front$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[1][0] = 'front[1][0]';
  } else if (front$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[1][0] = 'front[1][2]';
  } else if (front$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[1][0] = 'front[2][1]';
  }

  if (front$[1][2] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[1][2] = 'back[0][1]';
  } else if (front$[1][2] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[1][2] = 'back[1][0]';
  } else if (front$[1][2] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[1][2] = 'back[1][2]';
  } else if (front$[1][2] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[1][2] = 'back[2][1]';
  } else if (front$[1][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[1][2] = 'centre[0][0]';
  } else if (front$[1][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[1][2] = 'centre[0][2]';
  } else if (front$[1][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[1][2] = 'centre[2][0]';
  } else if (front$[1][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[1][2] = 'centre[2][2]';
  } else if (front$[1][2] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[1][2] = 'front[0][1]';
  } else if (front$[1][2] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[1][2] = 'front[1][0]';
  } else if (front$[1][2] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[1][2] = 'front[1][2]';
  } else if (front$[1][2] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[1][2] = 'front[2][1]';
  }

  if (front$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtfront[2][1] = 'back[0][1]';
  } else if (front$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtfront[2][1] = 'back[1][0]';
  } else if (front$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtfront[2][1] = 'back[1][2]';
  } else if (front$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtfront[2][1] = 'back[2][1]';
  } else if (front$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtfront[2][1] = 'centre[0][0]';
  } else if (front$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtfront[2][1] = 'centre[0][2]';
  } else if (front$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtfront[2][1] = 'centre[2][0]';
  } else if (front$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtfront[2][1] = 'centre[2][2]';
  } else if (front$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtfront[2][1] = 'front[0][1]';
  } else if (front$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtfront[2][1] = 'front[1][0]';
  } else if (front$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtfront[2][1] = 'front[1][2]';
  } else if (front$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtfront[2][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtfront[0][0] == 'back[0][0]') {
    back[0][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'back[0][2]') {
    back[0][2] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'back[2][0]') {
    back[2][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'back[2][2]') {
    back[2][2] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[0][0]') {
    front[0][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[0][2]') {
    front[0][2] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[2][0]') {
    front[2][0] = '-100 100 100';
  } else if (CubeAtfront[0][0] == 'front[2][2]') {
    front[2][2] = '-100 100 100';
  }

  if (CubeAtfront[0][2] == 'back[0][0]') {
    back[0][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'back[0][2]') {
    back[0][2] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'back[2][0]') {
    back[2][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'back[2][2]') {
    back[2][2] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[0][0]') {
    front[0][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[0][2]') {
    front[0][2] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[2][0]') {
    front[2][0] = '-100 -100 100';
  } else if (CubeAtfront[0][2] == 'front[2][2]') {
    front[2][2] = '-100 -100 100';
  }

  if (CubeAtfront[2][0] == 'back[0][0]') {
    back[0][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'back[0][2]') {
    back[0][2] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'back[2][0]') {
    back[2][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'back[2][2]') {
    back[2][2] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[0][0]') {
    front[0][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[0][2]') {
    front[0][2] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[2][0]') {
    front[2][0] = '100 100 100';
  } else if (CubeAtfront[2][0] == 'front[2][2]') {
    front[2][2] = '100 100 100';
  }

  if (CubeAtfront[2][2] == 'back[0][0]') {
    back[0][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'back[0][2]') {
    back[0][2] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'back[2][0]') {
    back[2][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'back[2][2]') {
    back[2][2] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[0][0]') {
    front[0][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[0][2]') {
    front[0][2] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[2][0]') {
    front[2][0] = '100 -100 100';
  } else if (CubeAtfront[2][2] == 'front[2][2]') {
    front[2][2] = '100 -100 100';
  }

  //Setting EDGES
  if (CubeAtfront[0][1] == 'back[0][1]') {
    back[0][1] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'back[1][0]') {
    back[1][0] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'back[1][2]') {
    back[1][2] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'back[2][1]') {
    back[2][1] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[0][0]') {
    centre[0][0] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[2][0]') {
    centre[2][0] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[0][2]') {
    centre[0][2] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'centre[2][2]') {
    centre[2][2] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'front[0][1]') {
    front[0][1] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'front[1][0]') {
    front[1][0] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'front[1][2]') {
    front[1][2] = '-100 0 100';
  } else if (CubeAtfront[0][1] == 'front[2][1]') {
    front[2][1] = '-100 0 100';
  }

  if (CubeAtfront[1][0] == 'back[0][1]') {
    back[0][1] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'back[1][0]') {
    back[1][0] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'back[1][2]') {
    back[1][2] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'back[2][1]') {
    back[2][1] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'centre[0][0]') {
    centre[0][0] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'centre[2][0]') {
    centre[2][0] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'centre[0][2]') {
    centre[0][2] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'centre[2][2]') {
    centre[2][2] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'front[0][1]') {
    front[0][1] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'front[1][0]') {
    front[1][0] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'front[1][2]') {
    front[1][2] = '0 100 100';
  } else if (CubeAtfront[1][0] == 'front[2][1]') {
    front[2][1] = '0 100 100';
  }

  if (CubeAtfront[1][2] == 'back[0][1]') {
    back[0][1] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'back[1][0]') {
    back[1][0] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'back[1][2]') {
    back[1][2] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'back[2][1]') {
    back[2][1] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'centre[0][0]') {
    centre[0][0] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'centre[2][0]') {
    centre[2][0] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'centre[0][2]') {
    centre[0][2] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'centre[2][2]') {
    centre[2][2] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'front[0][1]') {
    front[0][1] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'front[1][0]') {
    front[1][0] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'front[1][2]') {
    front[1][2] = '0 -100 100';
  } else if (CubeAtfront[1][2] == 'front[2][1]') {
    front[2][1] = '0 -100 100';
  }

  if (CubeAtfront[2][1] == 'back[0][1]') {
    back[0][1] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'back[1][0]') {
    back[1][0] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'back[1][2]') {
    back[1][2] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'back[2][1]') {
    back[2][1] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[0][0]') {
    centre[0][0] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[2][0]') {
    centre[2][0] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[0][2]') {
    centre[0][2] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'centre[2][2]') {
    centre[2][2] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'front[0][1]') {
    front[0][1] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'front[1][0]') {
    front[1][0] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'front[1][2]') {
    front[1][2] = '100 0 100';
  } else if (CubeAtfront[2][1] == 'front[2][1]') {
    front[2][1] = '100 0 100';
  }
}

function rotBkFaceClk() {
  //Detecting CORNERS
  if (back$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][0] = 'back[0][0]';
  } else if (back$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][0] = 'back[0][2]';
  } else if (back$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][0] = 'back[2][0]';
  } else if (back$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][0] = 'back[2][2]';
  } else if (back$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][0] = 'front[0][0]';
  } else if (back$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][0] = 'front[0][2]';
  } else if (back$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][0] = 'front[2][0]';
  } else if (back$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][0] = 'front[2][2]';
  }

  if (back$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][2] = 'back[0][0]';
  } else if (back$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][2] = 'back[0][2]';
  } else if (back$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][2] = 'back[2][0]';
  } else if (back$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][2] = 'back[2][2]';
  } else if (back$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][2] = 'front[0][0]';
  } else if (back$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][2] = 'front[0][2]';
  } else if (back$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][2] = 'front[2][0]';
  } else if (back$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][2] = 'front[2][2]';
  }

  if (back$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][0] = 'back[0][0]';
  } else if (back$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][0] = 'back[0][2]';
  } else if (back$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][0] = 'back[2][0]';
  } else if (back$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][0] = 'back[2][2]';
  } else if (back$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][0] = 'front[0][0]';
  } else if (back$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][0] = 'front[0][2]';
  } else if (back$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][0] = 'front[2][0]';
  } else if (back$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][0] = 'front[2][2]';
  }

  if (back$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][2] = 'back[0][0]';
  } else if (back$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][2] = 'back[0][2]';
  } else if (back$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][2] = 'back[2][0]';
  } else if (back$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][2] = 'back[2][2]';
  } else if (back$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][2] = 'front[0][0]';
  } else if (back$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][2] = 'front[0][2]';
  } else if (back$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][2] = 'front[2][0]';
  } else if (back$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[0][1] = 'back[0][1]';
  } else if (back$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[0][1] = 'back[1][0]';
  } else if (back$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[0][1] = 'back[1][2]';
  } else if (back$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[0][1] = 'back[2][1]';
  } else if (back$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[0][1] = 'centre[0][0]';
  } else if (back$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[0][1] = 'centre[0][2]';
  } else if (back$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[0][1] = 'centre[2][0]';
  } else if (back$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[0][1] = 'centre[2][2]';
  } else if (back$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[0][1] = 'front[0][1]';
  } else if (back$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[0][1] = 'front[1][0]';
  } else if (back$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[0][1] = 'front[1][2]';
  } else if (back$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[0][1] = 'front[2][1]';
  }

  if (back$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[1][0] = 'back[0][1]';
  } else if (back$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[1][0] = 'back[1][0]';
  } else if (back$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[1][0] = 'back[1][2]';
  } else if (back$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[1][0] = 'back[2][1]';
  } else if (back$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[1][0] = 'centre[0][0]';
  } else if (back$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[1][0] = 'centre[0][2]';
  } else if (back$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[1][0] = 'centre[2][0]';
  } else if (back$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[1][0] = 'centre[2][2]';
  } else if (back$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[1][0] = 'front[0][1]';
  } else if (back$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[1][0] = 'front[1][0]';
  } else if (back$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[1][0] = 'front[1][2]';
  } else if (back$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[1][0] = 'front[2][1]';
  }

  if (back$[1][2] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[1][2] = 'back[0][1]';
  } else if (back$[1][2] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[1][2] = 'back[1][0]';
  } else if (back$[1][2] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[1][2] = 'back[1][2]';
  } else if (back$[1][2] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[1][2] = 'back[2][1]';
  } else if (back$[1][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[1][2] = 'centre[0][0]';
  } else if (back$[1][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[1][2] = 'centre[0][2]';
  } else if (back$[1][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[1][2] = 'centre[2][0]';
  } else if (back$[1][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[1][2] = 'centre[2][2]';
  } else if (back$[1][2] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[1][2] = 'front[0][1]';
  } else if (back$[1][2] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[1][2] = 'front[1][0]';
  } else if (back$[1][2] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[1][2] = 'front[1][2]';
  } else if (back$[1][2] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[1][2] = 'front[2][1]';
  }

  if (back$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[2][1] = 'back[0][1]';
  } else if (back$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[2][1] = 'back[1][0]';
  } else if (back$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[2][1] = 'back[1][2]';
  } else if (back$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[2][1] = 'back[2][1]';
  } else if (back$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[2][1] = 'centre[0][0]';
  } else if (back$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[2][1] = 'centre[0][2]';
  } else if (back$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[2][1] = 'centre[2][0]';
  } else if (back$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[2][1] = 'centre[2][2]';
  } else if (back$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[2][1] = 'front[0][1]';
  } else if (back$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[2][1] = 'front[1][0]';
  } else if (back$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[2][1] = 'front[1][2]';
  } else if (back$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[2][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][0] == 'back[0][0]') {
    back[0][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'back[0][2]') {
    back[0][2] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'back[2][0]') {
    back[2][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'back[2][2]') {
    back[2][2] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[0][0]') {
    front[0][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[0][2]') {
    front[0][2] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[2][0]') {
    front[2][0] = '100 -100 -100';
  } else if (CubeAtback[0][0] == 'front[2][2]') {
    front[2][2] = '100 -100 -100';
  }

  if (CubeAtback[0][2] == 'back[0][0]') {
    back[0][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'back[0][2]') {
    back[0][2] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'back[2][0]') {
    back[2][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'back[2][2]') {
    back[2][2] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[0][0]') {
    front[0][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[0][2]') {
    front[0][2] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[2][0]') {
    front[2][0] = '100 100 -100';
  } else if (CubeAtback[0][2] == 'front[2][2]') {
    front[2][2] = '100 100 -100';
  }

  if (CubeAtback[2][0] == 'back[0][0]') {
    back[0][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'back[0][2]') {
    back[0][2] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'back[2][0]') {
    back[2][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'back[2][2]') {
    back[2][2] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[0][0]') {
    front[0][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[0][2]') {
    front[0][2] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[2][0]') {
    front[2][0] = '-100 -100 -100';
  } else if (CubeAtback[2][0] == 'front[2][2]') {
    front[2][2] = '-100 -100 -100';
  }

  if (CubeAtback[2][2] == 'back[0][0]') {
    back[0][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'back[0][2]') {
    back[0][2] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'back[2][0]') {
    back[2][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'back[2][2]') {
    back[2][2] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[0][0]') {
    front[0][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[0][2]') {
    front[0][2] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[2][0]') {
    front[2][0] = '-100 100 -100';
  } else if (CubeAtback[2][2] == 'front[2][2]') {
    front[2][2] = '-100 100 -100';
  }

  //Setting EDGES
  if (CubeAtback[0][1] == 'back[0][1]') {
    back[0][1] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'back[1][0]') {
    back[1][0] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'back[1][2]') {
    back[1][2] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'back[2][1]') {
    back[2][1] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[0][0]') {
    centre[0][0] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[2][0]') {
    centre[2][0] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[0][2]') {
    centre[0][2] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[2][2]') {
    centre[2][2] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'front[0][1]') {
    front[0][1] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'front[1][0]') {
    front[1][0] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'front[1][2]') {
    front[1][2] = '100 0 -100';
  } else if (CubeAtback[0][1] == 'front[2][1]') {
    front[2][1] = '100 0 -100';
  }

  if (CubeAtback[1][0] == 'back[0][1]') {
    back[0][1] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'back[1][0]') {
    back[1][0] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'back[1][2]') {
    back[1][2] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'back[2][1]') {
    back[2][1] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'centre[0][0]') {
    centre[0][0] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'centre[2][0]') {
    centre[2][0] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'centre[0][2]') {
    centre[0][2] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'centre[2][2]') {
    centre[2][2] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'front[0][1]') {
    front[0][1] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'front[1][0]') {
    front[1][0] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'front[1][2]') {
    front[1][2] = '0 -100 -100';
  } else if (CubeAtback[1][0] == 'front[2][1]') {
    front[2][1] = '0 -100 -100';
  }

  if (CubeAtback[1][2] == 'back[0][1]') {
    back[0][1] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'back[1][0]') {
    back[1][0] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'back[1][2]') {
    back[1][2] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'back[2][1]') {
    back[2][1] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'centre[0][0]') {
    centre[0][0] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'centre[2][0]') {
    centre[2][0] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'centre[0][2]') {
    centre[0][2] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'centre[2][2]') {
    centre[2][2] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'front[0][1]') {
    front[0][1] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'front[1][0]') {
    front[1][0] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'front[1][2]') {
    front[1][2] = '0 100 -100';
  } else if (CubeAtback[1][2] == 'front[2][1]') {
    front[2][1] = '0 100 -100';
  }

  if (CubeAtback[2][1] == 'back[0][1]') {
    back[0][1] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'back[1][0]') {
    back[1][0] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'back[1][2]') {
    back[1][2] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'back[2][1]') {
    back[2][1] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[0][0]') {
    centre[0][0] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[2][0]') {
    centre[2][0] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[0][2]') {
    centre[0][2] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[2][2]') {
    centre[2][2] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'front[0][1]') {
    front[0][1] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'front[1][0]') {
    front[1][0] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'front[1][2]') {
    front[1][2] = '-100 0 -100';
  } else if (CubeAtback[2][1] == 'front[2][1]') {
    front[2][1] = '-100 0 -100';
  }
}

function rotBkFaceAntiClk() {
  //Detecting CORNERS
  if (back$[0][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][0] = 'back[0][0]';
  } else if (back$[0][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][0] = 'back[0][2]';
  } else if (back$[0][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][0] = 'back[2][0]';
  } else if (back$[0][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][0] = 'back[2][2]';
  } else if (back$[0][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][0] = 'front[0][0]';
  } else if (back$[0][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][0] = 'front[0][2]';
  } else if (back$[0][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][0] = 'front[2][0]';
  } else if (back$[0][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][0] = 'front[2][2]';
  }

  if (back$[0][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[0][2] = 'back[0][0]';
  } else if (back$[0][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[0][2] = 'back[0][2]';
  } else if (back$[0][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[0][2] = 'back[2][0]';
  } else if (back$[0][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[0][2] = 'back[2][2]';
  } else if (back$[0][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[0][2] = 'front[0][0]';
  } else if (back$[0][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[0][2] = 'front[0][2]';
  } else if (back$[0][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[0][2] = 'front[2][0]';
  } else if (back$[0][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[0][2] = 'front[2][2]';
  }

  if (back$[2][0] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][0] = 'back[0][0]';
  } else if (back$[2][0] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][0] = 'back[0][2]';
  } else if (back$[2][0] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][0] = 'back[2][0]';
  } else if (back$[2][0] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][0] = 'back[2][2]';
  } else if (back$[2][0] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][0] = 'front[0][0]';
  } else if (back$[2][0] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][0] = 'front[0][2]';
  } else if (back$[2][0] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][0] = 'front[2][0]';
  } else if (back$[2][0] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][0] = 'front[2][2]';
  }

  if (back$[2][2] == back[0][0]) {
    rotback[0][0] = 'rotateZ(-90deg)' + rotback[0][0];
    document.getElementById('BUL').style.transform = rotback[0][0];
    CubeAtback[2][2] = 'back[0][0]';
  } else if (back$[2][2] == back[0][2]) {
    rotback[0][2] = 'rotateZ(-90deg)' + rotback[0][2];
    document.getElementById('BUR').style.transform = rotback[0][2];
    CubeAtback[2][2] = 'back[0][2]';
  } else if (back$[2][2] == back[2][0]) {
    rotback[2][0] = 'rotateZ(-90deg)' + rotback[2][0];
    document.getElementById('BDL').style.transform = rotback[2][0];
    CubeAtback[2][2] = 'back[2][0]';
  } else if (back$[2][2] == back[2][2]) {
    rotback[2][2] = 'rotateZ(-90deg)' + rotback[2][2];
    document.getElementById('BDR').style.transform = rotback[2][2];
    CubeAtback[2][2] = 'back[2][2]';
  } else if (back$[2][2] == front[0][0]) {
    rotfront[0][0] = 'rotateZ(-90deg)' + rotfront[0][0];
    document.getElementById('FUL').style.transform = rotfront[0][0];
    CubeAtback[2][2] = 'front[0][0]';
  } else if (back$[2][2] == front[0][2]) {
    rotfront[0][2] = 'rotateZ(-90deg)' + rotfront[0][2];
    document.getElementById('FUR').style.transform = rotfront[0][2];
    CubeAtback[2][2] = 'front[0][2]';
  } else if (back$[2][2] == front[2][0]) {
    rotfront[2][0] = 'rotateZ(-90deg)' + rotfront[2][0];
    document.getElementById('FDL').style.transform = rotfront[2][0];
    CubeAtback[2][2] = 'front[2][0]';
  } else if (back$[2][2] == front[2][2]) {
    rotfront[2][2] = 'rotateZ(-90deg)' + rotfront[2][2];
    document.getElementById('FDR').style.transform = rotfront[2][2];
    CubeAtback[2][2] = 'front[2][2]';
  }

  //Detecting EDGES
  if (back$[0][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[0][1] = 'back[0][1]';
  } else if (back$[0][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[0][1] = 'back[1][0]';
  } else if (back$[0][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[0][1] = 'back[1][2]';
  } else if (back$[0][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[0][1] = 'back[2][1]';
  } else if (back$[0][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[0][1] = 'centre[0][0]';
  } else if (back$[0][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[0][1] = 'centre[0][2]';
  } else if (back$[0][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[0][1] = 'centre[2][0]';
  } else if (back$[0][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[0][1] = 'centre[2][2]';
  } else if (back$[0][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[0][1] = 'front[0][1]';
  } else if (back$[0][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[0][1] = 'front[1][0]';
  } else if (back$[0][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[0][1] = 'front[1][2]';
  } else if (back$[0][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[0][1] = 'front[2][1]';
  }

  if (back$[1][0] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[1][0] = 'back[0][1]';
  } else if (back$[1][0] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[1][0] = 'back[1][0]';
  } else if (back$[1][0] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[1][0] = 'back[1][2]';
  } else if (back$[1][0] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[1][0] = 'back[2][1]';
  } else if (back$[1][0] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[1][0] = 'centre[0][0]';
  } else if (back$[1][0] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[1][0] = 'centre[0][2]';
  } else if (back$[1][0] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[1][0] = 'centre[2][0]';
  } else if (back$[1][0] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[1][0] = 'centre[2][2]';
  } else if (back$[1][0] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[1][0] = 'front[0][1]';
  } else if (back$[1][0] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[1][0] = 'front[1][0]';
  } else if (back$[1][0] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[1][0] = 'front[1][2]';
  } else if (back$[1][0] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[1][0] = 'front[2][1]';
  }

  if (back$[1][2] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[1][2] = 'back[0][1]';
  } else if (back$[1][2] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[1][2] = 'back[1][0]';
  } else if (back$[1][2] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[1][2] = 'back[1][2]';
  } else if (back$[1][2] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[1][2] = 'back[2][1]';
  } else if (back$[1][2] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[1][2] = 'centre[0][0]';
  } else if (back$[1][2] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[1][2] = 'centre[0][2]';
  } else if (back$[1][2] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[1][2] = 'centre[2][0]';
  } else if (back$[1][2] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[1][2] = 'centre[2][2]';
  } else if (back$[1][2] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[1][2] = 'front[0][1]';
  } else if (back$[1][2] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[1][2] = 'front[1][0]';
  } else if (back$[1][2] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[1][2] = 'front[1][2]';
  } else if (back$[1][2] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[1][2] = 'front[2][1]';
  }

  if (back$[2][1] == back[0][1]) {
    rotback[0][1] = 'rotateZ(-90deg)' + rotback[0][1];
    document.getElementById('BU').style.transform = rotback[0][1];
    CubeAtback[2][1] = 'back[0][1]';
  } else if (back$[2][1] == back[1][0]) {
    rotback[1][0] = 'rotateZ(-90deg)' + rotback[1][0];
    document.getElementById('BL').style.transform = rotback[1][0];
    CubeAtback[2][1] = 'back[1][0]';
  } else if (back$[2][1] == back[1][2]) {
    rotback[1][2] = 'rotateZ(-90deg)' + rotback[1][2];
    document.getElementById('BR').style.transform = rotback[1][2];
    CubeAtback[2][1] = 'back[1][2]';
  } else if (back$[2][1] == back[2][1]) {
    rotback[2][1] = 'rotateZ(-90deg)' + rotback[2][1];
    document.getElementById('BD').style.transform = rotback[2][1];
    CubeAtback[2][1] = 'back[2][1]';
  } else if (back$[2][1] == centre[0][0]) {
    rotcentre[0][0] = 'rotateZ(-90deg)' + rotcentre[0][0];
    document.getElementById('CUL').style.transform = rotcentre[0][0];
    CubeAtback[2][1] = 'centre[0][0]';
  } else if (back$[2][1] == centre[0][2]) {
    rotcentre[0][2] = 'rotateZ(-90deg)' + rotcentre[0][2];
    document.getElementById('CUR').style.transform = rotcentre[0][2];
    CubeAtback[2][1] = 'centre[0][2]';
  } else if (back$[2][1] == centre[2][0]) {
    rotcentre[2][0] = 'rotateZ(-90deg)' + rotcentre[2][0];
    document.getElementById('CDL').style.transform = rotcentre[2][0];
    CubeAtback[2][1] = 'centre[2][0]';
  } else if (back$[2][1] == centre[2][2]) {
    rotcentre[2][2] = 'rotateZ(-90deg)' + rotcentre[2][2];
    document.getElementById('CDR').style.transform = rotcentre[2][2];
    CubeAtback[2][1] = 'centre[2][2]';
  } else if (back$[2][1] == front[0][1]) {
    rotfront[0][1] = 'rotateZ(-90deg)' + rotfront[0][1];
    document.getElementById('FU').style.transform = rotfront[0][1];
    CubeAtback[2][1] = 'front[0][1]';
  } else if (back$[2][1] == front[1][0]) {
    rotfront[1][0] = 'rotateZ(-90deg)' + rotfront[1][0];
    document.getElementById('FL').style.transform = rotfront[1][0];
    CubeAtback[2][1] = 'front[1][0]';
  } else if (back$[2][1] == front[1][2]) {
    rotfront[1][2] = 'rotateZ(-90deg)' + rotfront[1][2];
    document.getElementById('FR').style.transform = rotfront[1][2];
    CubeAtback[2][1] = 'front[1][2]';
  } else if (back$[2][1] == front[2][1]) {
    rotfront[2][1] = 'rotateZ(-90deg)' + rotfront[2][1];
    document.getElementById('FD').style.transform = rotfront[2][1];
    CubeAtback[2][1] = 'front[2][1]';
  }

  //Setting CORNERS
  if (CubeAtback[0][0] == 'back[0][0]') {
    back[0][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'back[0][2]') {
    back[0][2] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'back[2][0]') {
    back[2][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'back[2][2]') {
    back[2][2] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[0][0]') {
    front[0][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[0][2]') {
    front[0][2] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[2][0]') {
    front[2][0] = '-100 100 -100';
  } else if (CubeAtback[0][0] == 'front[2][2]') {
    front[2][2] = '-100 100 -100';
  }

  if (CubeAtback[0][2] == 'back[0][0]') {
    back[0][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'back[0][2]') {
    back[0][2] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'back[2][0]') {
    back[2][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'back[2][2]') {
    back[2][2] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[0][0]') {
    front[0][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[0][2]') {
    front[0][2] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[2][0]') {
    front[2][0] = '-100 -100 -100';
  } else if (CubeAtback[0][2] == 'front[2][2]') {
    front[2][2] = '-100 -100 -100';
  }

  if (CubeAtback[2][0] == 'back[0][0]') {
    back[0][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'back[0][2]') {
    back[0][2] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'back[2][0]') {
    back[2][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'back[2][2]') {
    back[2][2] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[0][0]') {
    front[0][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[0][2]') {
    front[0][2] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[2][0]') {
    front[2][0] = '100 100 -100';
  } else if (CubeAtback[2][0] == 'front[2][2]') {
    front[2][2] = '100 100 -100';
  }

  if (CubeAtback[2][2] == 'back[0][0]') {
    back[0][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'back[0][2]') {
    back[0][2] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'back[2][0]') {
    back[2][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'back[2][2]') {
    back[2][2] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[0][0]') {
    front[0][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[0][2]') {
    front[0][2] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[2][0]') {
    front[2][0] = '100 -100 -100';
  } else if (CubeAtback[2][2] == 'front[2][2]') {
    front[2][2] = '100 -100 -100';
  }

  //Setting EDGES
  if (CubeAtback[0][1] == 'back[0][1]') {
    back[0][1] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'back[1][0]') {
    back[1][0] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'back[1][2]') {
    back[1][2] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'back[2][1]') {
    back[2][1] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[0][0]') {
    centre[0][0] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[2][0]') {
    centre[2][0] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[0][2]') {
    centre[0][2] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'centre[2][2]') {
    centre[2][2] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'front[0][1]') {
    front[0][1] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'front[1][0]') {
    front[1][0] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'front[1][2]') {
    front[1][2] = '-100 0 -100';
  } else if (CubeAtback[0][1] == 'front[2][1]') {
    front[2][1] = '-100 0 -100';
  }

  if (CubeAtback[1][0] == 'back[0][1]') {
    back[0][1] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'back[1][0]') {
    back[1][0] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'back[1][2]') {
    back[1][2] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'back[2][1]') {
    back[2][1] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'centre[0][0]') {
    centre[0][0] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'centre[2][0]') {
    centre[2][0] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'centre[0][2]') {
    centre[0][2] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'centre[2][2]') {
    centre[2][2] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'front[0][1]') {
    front[0][1] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'front[1][0]') {
    front[1][0] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'front[1][2]') {
    front[1][2] = '0 100 -100';
  } else if (CubeAtback[1][0] == 'front[2][1]') {
    front[2][1] = '0 100 -100';
  }

  if (CubeAtback[1][2] == 'back[0][1]') {
    back[0][1] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'back[1][0]') {
    back[1][0] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'back[1][2]') {
    back[1][2] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'back[2][1]') {
    back[2][1] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'centre[0][0]') {
    centre[0][0] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'centre[2][0]') {
    centre[2][0] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'centre[0][2]') {
    centre[0][2] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'centre[2][2]') {
    centre[2][2] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'front[0][1]') {
    front[0][1] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'front[1][0]') {
    front[1][0] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'front[1][2]') {
    front[1][2] = '0 -100 -100';
  } else if (CubeAtback[1][2] == 'front[2][1]') {
    front[2][1] = '0 -100 -100';
  }

  if (CubeAtback[2][1] == 'back[0][1]') {
    back[0][1] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'back[1][0]') {
    back[1][0] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'back[1][2]') {
    back[1][2] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'back[2][1]') {
    back[2][1] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[0][0]') {
    centre[0][0] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[2][0]') {
    centre[2][0] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[0][2]') {
    centre[0][2] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'centre[2][2]') {
    centre[2][2] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'front[0][1]') {
    front[0][1] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'front[1][0]') {
    front[1][0] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'front[1][2]') {
    front[1][2] = '100 0 -100';
  } else if (CubeAtback[2][1] == 'front[2][1]') {
    front[2][1] = '100 0 -100';
  }
}

//Front Face
function fdrFt() {
  if (RtFaceAntiClk == 1) {
    rotRtFaceAntiClk();
  } else {
    RtFaceClk = 1;
    setTimeout(function(){
      RtFaceClk = 0;
    }, 1000);
  }
  if (DnFaceAntiClk == 1) {
    rotDnFaceAntiClk();
  } else {
    DnFaceClk = 1;
    setTimeout(function(){
      DnFaceClk = 0;
    }, 1000);
  }
}

function furFt() {
  if (RtFaceClk == 1) {
    rotRtFaceClk();
  } else {
    RtFaceAntiClk = 1;
    setTimeout(function(){
      RtFaceAntiClk = 0;
    }, 1000);
  }
  if (UpFaceAntiClk == 1) {
    rotUpFaceAntiClk();
  } else {
    UpFaceClk = 1;
    setTimeout(function(){
      UpFaceClk = 0;
    }, 1000);
  }
}

function fdlFt() {
  if (LtFaceAntiClk == 1) {
    rotLtFaceAntiClk();
  } else {
    LtFaceClk = 1;
    setTimeout(function(){
      LtFaceClk = 0;
    }, 1000);
  }
  if (DnFaceClk == 1) {
    rotDnFaceClk();
  } else {
    DnFaceAntiClk = 1;
    setTimeout(function(){
      DnFaceAntiClk = 0;
    }, 1000);
  }
}

function fulFt() {
  if (LtFaceClk == 1) {
    rotLtFaceClk();
  } else {
    LtFaceAntiClk = 1;
    setTimeout(function(){
      LtFaceAntiClk = 0;
    }, 1000);
  }
  if (UpFaceClk == 1) {
    rotUpFaceClk();
  } else {
    UpFaceAntiClk = 1;
    setTimeout(function(){
      UpFaceAntiClk = 0;
    }, 1000);
  }
}

//Left Face
function fdlLt() {
  if (FtFaceAntiClk == 1) {
    rotFtFaceAntiClk();
  } else {
    FtFaceClk = 1;
    setTimeout(function(){
      FtFaceClk = 0;
    }, 1000);
  }
  if (DnFaceAntiClk == 1) {
    rotDnFaceAntiClk();
  } else {
    DnFaceClk = 1;
    setTimeout(function(){
      DnFaceClk = 0;
    }, 1000);
  }
}

function fulLt() {
  if (FtFaceClk == 1) {
    rotFtFaceClk();
  } else {
    FtFaceAntiClk = 1;
    setTimeout(function(){
      FtFaceAntiClk = 0;
    }, 1000);
  }
  if (UpFaceAntiClk == 1) {
    rotUpFaceAntiClk();
  } else {
    UpFaceClk = 1;
    setTimeout(function(){
      UpFaceClk = 0;
    }, 1000);
  }
}

function bdlLt() {
  if (BkFaceAntiClk == 1) {
    rotBkFaceAntiClk();
  } else {
    BkFaceClk = 1;
    setTimeout(function(){
      BkFaceClk = 0;
    }, 1000);
  }
  if (DnFaceClk == 1) {
    rotDnFaceClk();
  } else {
    DnFaceAntiClk = 1;
    setTimeout(function(){
      DnFaceAntiClk = 0;
    }, 1000);
  }
}

function bulLt() {
  if (BkFaceClk == 1) {
    rotBkFaceClk();
  } else {
    BkFaceAntiClk = 1;
    setTimeout(function(){
      BkFaceAntiClk = 0;
    }, 1000);
  }
  if (UpFaceClk == 1) {
    rotUpFaceClk();
  } else {
    UpFaceAntiClk = 1;
    setTimeout(function(){
      UpFaceAntiClk = 0;
    }, 1000);
  }
}

//Right Face
function fdrRt() {
  if (FtFaceClk == 1) {
    rotFtFaceClk();
  } else {
    FtFaceAntiClk = 1;
    setTimeout(function(){
      FtFaceAntiClk = 0;
    }, 1000);
  }
  if (DnFaceClk == 1) {
    rotDnFaceClk();
  } else {
    DnFaceAntiClk = 1;
    setTimeout(function(){
      DnFaceAntiClk = 0;
    }, 1000);
  }
}

function furRt() {
  if (FtFaceAntiClk == 1) {
    rotFtFaceAntiClk();
  } else {
    FtFaceClk = 1;
    setTimeout(function(){
      FtFaceClk = 0;
    }, 1000);
  }
  if (UpFaceClk == 1) {
    rotUpFaceClk();
  } else {
    UpFaceAntiClk = 1;
    setTimeout(function(){
      UpFaceAntiClk = 0;
    }, 1000);
  }
}

function bdrRt() {
  if (BkFaceClk == 1) {
    rotBkFaceClk();
  } else {
    BkFaceAntiClk = 1;
    setTimeout(function(){
      BkFaceAntiClk = 0;
    }, 1000);
  }
  if (DnFaceAntiClk == 1) {
    rotDnFaceAntiClk();
  } else {
    DnFaceClk = 1;
    setTimeout(function(){
      DnFaceClk = 0;
    }, 1000);
  }
}

function burRt() {
  if (BkFaceAntiClk == 1) {
    rotBkFaceAntiClk();
  } else {
    BkFaceClk = 1;
    setTimeout(function(){
      BkFaceClk = 0;
    }, 1000);
  }
  if (UpFaceAntiClk == 1) {
    rotUpFaceAntiClk();
  } else {
    UpFaceClk = 1;
    setTimeout(function(){
      UpFaceClk = 0;
    }, 1000);
  }
}

//Back Face
function bdrBk() {
  if (RtFaceClk == 1) {
    rotRtFaceClk();
  } else {
    RtFaceAntiClk = 1;
    setTimeout(function(){
      RtFaceAntiClk = 0;
    }, 1000);
  }
  if (DnFaceClk == 1) {
    rotDnFaceClk();
  } else {
    DnFaceAntiClk = 1;
    setTimeout(function(){
      DnFaceAntiClk = 0;
    }, 1000);
  }
}

function burBk() {
  if (RtFaceAntiClk == 1) {
    rotRtFaceAntiClk();
  } else {
    RtFaceClk = 1;
    setTimeout(function(){
      RtFaceClk = 0;
    }, 1000);
  }
  if (UpFaceClk == 1) {
    rotUpFaceClk();
  } else {
    UpFaceAntiClk = 1;
    setTimeout(function(){
      UpFaceAntiClk = 0;
    }, 1000);
  }
}

function bdlBk() {
  if (LtFaceClk == 1) {
    rotLtFaceClk();
  } else {
    LtFaceAntiClk = 1;
    setTimeout(function(){
      LtFaceAntiClk = 0;
    }, 1000);
  }
  if (DnFaceAntiClk == 1) {
    rotDnFaceAntiClk();
  } else {
    DnFaceClk = 1;
    setTimeout(function(){
      DnFaceClk = 0;
    }, 1000);
  }
}

function bulBk() {
  if (LtFaceAntiClk == 1) {
    rotLtFaceAntiClk();
  } else {
    LtFaceClk = 1;
    setTimeout(function(){
      LtFaceClk = 0;
    }, 1000);
  }
  if (UpFaceAntiClk == 1) {
    rotUpFaceAntiClk();
  } else {
    UpFaceClk = 1;
    setTimeout(function(){
      UpFaceClk = 0;
    }, 1000);
  }
}

//Top Face
function furTp() {
  if (RtFaceAntiClk == 1) {
    rotRtFaceAntiClk();
  } else {
    RtFaceClk = 1;
    setTimeout(function(){
      RtFaceClk = 0;
    }, 1000);
  }
  if (FtFaceClk == 1) {
    rotFtFaceClk();
  } else {
    FtFaceAntiClk = 1;
    setTimeout(function(){
      FtFaceAntiClk = 0;
    }, 1000);
  }
}

function burTp() {
  if (RtFaceClk == 1) {
    rotRtFaceClk();
  } else {
    RtFaceAntiClk = 1;
    setTimeout(function(){
      RtFaceAntiClk = 0;
    }, 1000);
  }
  if (BkFaceClk == 1) {
    rotBkFaceClk();
  } else {
    BkFaceAntiClk = 1;
    setTimeout(function(){
      BkFaceAntiClk = 0;
    }, 1000);
  }
}

function fulTp() {
  if (LtFaceAntiClk == 1) {
    rotLtFaceAntiClk();
  } else {
    LtFaceClk = 1;
    setTimeout(function(){
      LtFaceClk = 0;
    }, 1000);
  }
  if (FtFaceAntiClk == 1) {
    rotFtFaceAntiClk();
  } else {
    FtFaceClk = 1;
    setTimeout(function(){
      FtFaceClk = 0;
    }, 1000);
  }
}

function bulTp() {
  if (LtFaceClk == 1) {
    rotLtFaceClk();
  } else {
    LtFaceAntiClk = 1;
    setTimeout(function(){
      LtFaceAntiClk = 0;
    }, 1000);
  }
  if (BkFaceAntiClk == 1) {
    rotBkFaceAntiClk();
  } else {
    BkFaceClk = 1;
    setTimeout(function(){
      BkFaceClk = 0;
    }, 1000);
  }
}

//Bottom Face
function fdrBt() {
  if (RtFaceClk == 1) {
    rotRtFaceClk();
  } else {
    RtFaceAntiClk = 1;
    setTimeout(function(){
      RtFaceAntiClk = 0;
    }, 1000);
  }
  if (FtFaceAntiClk == 1) {
    rotFtFaceAntiClk();
  } else {
    FtFaceClk = 1;
    setTimeout(function(){
      FtFaceClk = 0;
    }, 1000);
  }
}

function bdrBt() {
  if (RtFaceAntiClk == 1) {
    rotRtFaceAntiClk();
  } else {
    RtFaceClk = 1;
    setTimeout(function(){
      RtFaceClk = 0;
    }, 1000);
  }
  if (BkFaceAntiClk == 1) {
    rotBkFaceAntiClk();
  } else {
    BkFaceClk = 1;
    setTimeout(function(){
      BkFaceClk = 0;
    }, 1000);
  }
}

function fdlBt() {
  if (LtFaceClk == 1) {
    rotLtFaceClk();
  } else {
    LtFaceAntiClk = 1;
    setTimeout(function(){
      LtFaceAntiClk = 0;
    }, 1000);
  }
  if (FtFaceClk == 1) {
    rotFtFaceClk();
  } else {
    FtFaceAntiClk = 1;
    setTimeout(function(){
      FtFaceAntiClk = 0;
    }, 1000);
  }
}

function bdlBt() {
  if (LtFaceAntiClk == 1) {
    rotLtFaceAntiClk();
  } else {
    LtFaceClk = 1;
    setTimeout(function(){
      LtFaceClk = 0;
    }, 1000);
  }
  if (BkFaceClk == 1) {
    rotBkFaceClk();
  } else {
    BkFaceAntiClk = 1;
    setTimeout(function(){
      BkFaceAntiClk = 0;
    }, 1000);
  }
}

var Y = 45;
var X = -30;
function rotYpos(){
  Y = Y + 5;
  var put = "rotateX("+X+"deg) rotateY("+Y+"deg)";
  document.getElementById('senscene').style.transform = put;
  document.getElementById('scene').style.transform = put;
  if (Y == 360) {
    Y = 0;
  }
  if (Y == -360) {
    Y = 0;
  }
}
function rotYneg(){
  Y = Y - 5;
  var put = "rotateX("+X+"deg) rotateY("+Y+"deg)";
  document.getElementById('senscene').style.transform = put;
  document.getElementById('scene').style.transform = put;
  if (Y == 360) {
    Y = 0;
  }
  if (Y == -360) {
    Y = 0;
  }
}
function rotXpos(){
  if (X < 30) {
    X = X + 5;
    var put = "rotateX("+X+"deg) rotateY("+Y+"deg)";
    document.getElementById('senscene').style.transform = put;
    document.getElementById('scene').style.transform = put;
  }
}
function rotXneg(){
  if (X > -30) {
    X = X - 5;
    var put = "rotateX("+X+"deg) rotateY("+Y+"deg)";
    document.getElementById('senscene').style.transform = put;
    document.getElementById('scene').style.transform = put;
  }
}

function RtFaceClk() {
  if (Y >= 45 && Y < 135) {
    rotFtFaceClk();
  } else if (Y >= -45 && Y < 45) {
    rotRtFaceClk();
  } else if (Y >= -135 && Y < -45) {
    rotBkFaceAntiClk();
  } else if (Y >= -225 && Y < -135) {
    rotLtFaceAntiClk();
  } else if (Y >= 135 && Y < 225) {
    rotLtFaceAntiClk();
  } else if (Y >= 225 && Y < 315) {
    rotBkFaceAntiClk();
  } else if (Y >= 315 || Y < -315) {
    rotRtFaceClk();
  } else if (Y >= -315 && Y < -225) {
    rotFtFaceClk();
  }
}

function RtFaceAntiClk() {
  if (Y >= 45 && Y < 135) {
    rotFtFaceAntiClk();
  } else if (Y >= -45 && Y < 45) {
    rotRtFaceAntiClk();
  } else if (Y >= -135 && Y < -45) {
    rotBkFaceClk();
  } else if (Y >= -225 && Y < -135) {
    rotLtFaceClk();
  } else if (Y >= 135 && Y < 225) {
    rotLtFaceClk();
  } else if (Y >= 225 && Y < 315) {
    rotBkFaceClk();
  } else if (Y >= 315 || Y < -315) {
    rotRtFaceAntiClk();
  } else if (Y >= -315 && Y < -225) {
    rotFtFaceAntiClk();
  }
}

function FtFaceClk() {
  if (Y >= 45 && Y < 135) {
    rotLtFaceAntiClk();
  } else if (Y >= -45 && Y < 45) {
    rotFtFaceClk();
  } else if (Y >= -135 && Y < -45) {
    rotRtFaceClk();
  } else if (Y >= -225 && Y < -135) {
    rotBkFaceAntiClk();
  } else if (Y >= 135 && Y < 225) {
    rotBkFaceAntiClk();
  } else if (Y >= 225 && Y < 315) {
    rotRtFaceClk();
  } else if (Y >= 315 || Y < -315) {
    rotFtFaceClk();
  } else if (Y >= -315 && Y < -225) {
    rotLtFaceAntiClk();
  }
}

function FtFaceAntiClk() {
  if (Y >= 45 && Y < 135) {
    rotLtFaceClk();
  } else if (Y >= -45 && Y < 45) {
    rotFtFaceAntiClk();
  } else if (Y >= -135 && Y < -45) {
    rotRtFaceAntiClk();
  } else if (Y >= -225 && Y < -135) {
    rotBkFaceClk();
  } else if (Y >= 135 && Y < 225) {
    rotBkFaceClk();
  } else if (Y >= 225 && Y < 315) {
    rotRtFaceAntiClk();
  } else if (Y >= 315 || Y < -315) {
    rotFtFaceAntiClk();
  } else if (Y >= -315 && Y < -225) {
    rotLtFaceClk();
  }
}

function LtFaceClk() {
  if (Y >= 45 && Y < 135) {
    rotBkFaceClk();
  } else if (Y >= -45 && Y < 45) {
    rotLtFaceClk();
  } else if (Y >= -135 && Y < -45) {
    rotFtFaceAntiClk();
  } else if (Y >= -225 && Y < -135) {
    rotRtFaceAntiClk();
  } else if (Y >= 135 && Y < 225) {
    rotRtFaceAntiClk();
  } else if (Y >= 225 && Y < 315) {
    rotFtFaceAntiClk();
  } else if (Y >= 315 || Y < -315) {
    rotLtFaceClk();
  } else if (Y >= -315 && Y < -225) {
    rotBkFaceClk();
  }
}

function LtFaceAntiClk() {
  if (Y >= 45 && Y < 135) {
    rotBkFaceAntiClk();
  } else if (Y >= -45 && Y < 45) {
    rotLtFaceAntiClk();
  } else if (Y >= -135 && Y < -45) {
    rotFtFaceClk();
  } else if (Y >= -225 && Y < -135) {
    rotRtFaceClk();
  } else if (Y >= 135 && Y < 225) {
    rotRtFaceClk();
  } else if (Y >= 225 && Y < 315) {
    rotFtFaceClk();
  } else if (Y >= 315 || Y < -315) {
    rotLtFaceAntiClk();
  } else if (Y >= -315 && Y < -225) {
    rotBkFaceAntiClk();
  }
}

function BkFaceClk() {
  if (Y >= 45 && Y < 135) {
    rotRtFaceAntiClk();
  } else if (Y >= -45 && Y < 45) {
    rotBkFaceClk();
  } else if (Y >= -135 && Y < -45) {
    rotLtFaceClk();
  } else if (Y >= -225 && Y < -135) {
    rotFtFaceAntiClk();
  } else if (Y >= 135 && Y < 225) {
    rotFtFaceAntiClk();
  } else if (Y >= 225 && Y < 315) {
    rotLtFaceClk();
  } else if (Y >= 315 || Y < -315) {
    rotBkFaceClk();
  } else if (Y >= -315 && Y < -225) {
    rotRtFaceAntiClk();
  }
}

function BkFaceAntiClk() {
  if (Y >= 45 && Y < 135) {
    rotRtFaceClk();
  } else if (Y >= -45 && Y < 45) {
    rotBkFaceAntiClk();
  } else if (Y >= -135 && Y < -45) {
    rotLtFaceAntiClk();
  } else if (Y >= -225 && Y < -135) {
    rotFtFaceClk();
  } else if (Y >= 135 && Y < 225) {
    rotFtFaceClk();
  } else if (Y >= 225 && Y < 315) {
    rotLtFaceAntiClk();
  } else if (Y >= 315 || Y < -315) {
    rotBkFaceAntiClk();
  } else if (Y >= -315 && Y < -225) {
    rotRtFaceClk();
  }
}

var Anti = 0;

function uniCharCode(event) {
  var key = event.keyCode;
  if (key == 16) {
    Anti = 1;
    setTimeout(function(){Anti = 0;},1000);
  }
  if (key == 87) {
    rotXneg();
  }
  if (key == 65) {
    rotYpos();
  }
  if (key == 68) {
    rotYneg();
  }
  if (key == 83) {
    rotXpos();
  }
  if (key == 73 && Anti == 0) {
    RtFaceClk();
  }
  if (key == 79 && Anti == 0) {
    rotUpFaceClk();
  }
  if (key == 80 && Anti == 0) {
    FtFaceClk();
  }
  if (key == 75 && Anti == 0) {
    LtFaceClk();
  }
  if (key == 76 && Anti == 0) {
    rotDnFaceClk();
  }
  if (key == 59 && Anti == 0) {
    BkFaceAntiClk();
  }
  if (key == 73 && Anti == 1) {
    RtFaceAntiClk();
  }
  if (key == 79 && Anti == 1) {
    rotUpFaceAntiClk();
  }
  if (key == 80 && Anti == 1) {
    FtFaceAntiClk();
  }
  if (key == 75 && Anti == 1) {
    LtFaceAntiClk();
  }
  if (key == 76 && Anti == 1) {
    rotDnFaceAntiClk();
  }
  if (key == 59 && Anti == 1) {
    BkFaceAntiClk();
  }
}
