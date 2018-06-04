export const arrayMerge = (args = []) => {
    // console.log(args)
//   var args = arguments
  var hash = {}
  var arr = []
  for (var i = 0; i < args.length; i++) {
    if (!args[i]) continue
    for (var j = 0; j < args[i].length; j++) {
      if (hash[args[i][j]] !== true) {
        arr[arr.length] = args[i][j]
        hash[args[i][j]] = true
      }
    }
  }
  return arr
}
