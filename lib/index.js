
const ops_regex = /[\+\-\*\/]/, inc_regex = /\+{2}/,
      dinc_regex = /\-{2}/, num_regex = /\d+/
      
function operator(calc, op) {
    if(op == undefined) return calc
    if(inc_regex.test(op)) return "+1"
    if(dinc_regex.test(op)) return "-1"
    if(!ops_regex.test(op)) return "+"+op
    if(!num_regex.test(op)) return op+calc
    return op
}

export default function calc() {
  let calc = 0
  Object.keys(arguments).map( (key) => {
    let op = arguments[key]
    if(parseInt(key) == 0) {
        calc = op
    }else{
       op = operator(calc, op)
       calc = eval(calc+op);
    }
  })
  return calc
}
