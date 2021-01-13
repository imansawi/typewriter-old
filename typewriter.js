let sentence = "hello there from lighthouse labs";
let counter = 0;
sentence = sentence + "\n";
for (let char of sentence){
  counter+= 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, counter);
}
process.stdout.write('  \n');