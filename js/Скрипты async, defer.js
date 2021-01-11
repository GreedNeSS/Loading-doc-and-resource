// document.addEventListener('DOMContentLoaded',
// 	() => alert('Дерево DOM готово после скрипта с defer'));


// ! Динамически загружаемые скрипты, по умолчанию async

let script = document.createElement('script');
script.src = 'https://javascript.info/article/script-async-defer/small.js';
script.async = false;
document.body.append(script);