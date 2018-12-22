var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}


function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}


function appendKitten(name){
 return [...kittens, name]
  
}


function prependKitten(name){
[name, ...kittens];
 return name.concat(kittens);
  
}


function removeLastKitten(){
  kittens.slice(0, - 1);
  return kittens.concat();
}

function removeFirstKitten(){
  kittens.slice(1);
  return kittens.concat();
}




