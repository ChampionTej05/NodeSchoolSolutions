const args = process.argv;

let sum = 0;
for (let i=2 ; i< args.length; i++){
  const num = Number(args[i]);
  sum+=num;
}

console.log(sum);