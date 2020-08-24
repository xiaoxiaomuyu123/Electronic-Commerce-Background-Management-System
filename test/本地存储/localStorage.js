/********* 1. 在浏览器中用 js 添加 localStorage *********/
window.localStorage.setItem('name', 'phone');

// 不能以对象的方式存储，也就是下面的这种方式不行
window.localStorage.setItem('name', {name: 'value'});

// 如果一定想要存储一个对象，必须使用 JSON  转换成 JSON.stringify 字符串的形式
window.localStorage.setItem('name', JSON.stringify({name: 'value'}));


/********* 2. 在浏览器中用 js 查看 localStorage *********/
window.localStorage.getItem('name');
window.localStorage;

// 也可以在 appliciton 里面的 localStorage 里面查看

/********* 3. 在浏览器中用 js 删除 localStorage *********/
window.localStorage.removeItem('name');




