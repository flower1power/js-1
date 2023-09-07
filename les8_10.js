/*
    Дан произвольный url вида - 
    'https://purpleschool.ru/course/javascript'
    Нужно сделать функцию, которая выводит в консоль:
    -Протокол (https)
    -Доменное имя (purpleschool.ru)
    -Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'purpleschool.ru/course/javascript';


function getUrlPaths(url){
  const [protocol, _, host, ...path] = url.split('/');
  if (protocol === 'https:' || protocol === 'http:') {
    if (!host.includes('.')){
      return;
    }
    console.log (`Протокол: ${protocol.split(':')[0]}`);
    console.log (`Доменное имя: ${host}`);
    console.log (`Путь внутри сайта: /${path.join('/')}`);
  }
}



getUrlPaths(url2);

let arr = ['1', '2', '3', '4'];
let [one, , three] = ['1', '2', '3', '4'];
console.log(one, three);