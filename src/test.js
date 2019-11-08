for (let i = 0; i < 3; i++) {
  ;(function(i) {
    setTimeout(function() {
      console.info('i', i)
    }, 1000)
  })(i)
}

var i = 0
function aa() {
  setTimeout(function() {
    //put your program here
    console.log('program in for:' + i)
    i++
    if (i < 5) {
      aa()
    }
  }, 1000)
}
aa()
