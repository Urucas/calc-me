
export default function calc(x, args) {
  let calc = x;
  let ops = ["+", "-", "*", "/"];
  let ops_regex = /[\+\-\*\/]/;
  let inc_regex = /\+{2}/;
  let dinc_regex = /\-{2}/;
  let num_regex = /\d+/;

  if(typeof args == "string") {
    args = [args];
  }

  for(let i=0;i<args.length;i++) {
    let op = args[i];
    if(op == undefined)
      op = calc;
    if(inc_regex.test(op)) 
      op = "+1";
    if(dinc_regex.test(op)) 
      op = "-1";
    if(!ops_regex.test(op))
      op = "+"+op;
    if(!num_regex.test(op))
      op = op+calc;
    
    calc = eval(calc+op);
  }
  return calc;
}
