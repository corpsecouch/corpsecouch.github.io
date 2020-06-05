const Encryption = {};

Encryption.install = function(Vue, options) {
  //this.map = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
};

Encryption.map = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

Encryption.process = function(arr) {
  //let o = [];

  //console.log(this.map);
  //console.log(this.rotn);

  return this.rotN(
    //arr[0] + '@' + arr[1] + '.' + arr[2],
    arr,
    this.map
  );
}

// https://stackoverflow.com/questions/3408586/need-a-rot47-javascript-implementation
Encryption.rotN = function(text, map) {
  // Generic ROT-n algorithm for keycodes in MAP.
  var R = new String();
  var i, j, c, len = map.length;
  for(i = 0; i < text.length; i++) {
    c = text.charAt(i)
    j = map.indexOf(c)
    if (j >= 0) {
      c = map.charAt((j + len / 2) % len)
    }
    R = R + c
  }
  return R;
}

export default Encryption;
