'use strict';

// Ограничивает и является хорошей практикой
let myCoolVariable = 1;

if (true) {
  myCoolVariable = 3;
  function a() {
    console.log('test');
  }
}

a();
console.log(myCoolVariable);

function a(b) {
  console.log(b);
}
a(1, 1);
