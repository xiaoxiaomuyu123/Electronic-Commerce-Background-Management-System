/********* 1. 在浏览器中用 js 查看 cookie *********/
let cookie = document.cookie



/*********  2. 用 js 设置 cookie *********/
document.cookie = 'name=tom';  // 这种方式没有设置其他内容，默认的 domain 就是当前的域名

//  设置 cookie 的 domain 和 过期时间
let time = new Date();
let expire = time.toUTCString();  // "Mon, 24 Aug 2020 07:22:11 GMT" (获得 utc 格式 的时间)
// 要保证国旗时间没有问题，才能设置成功
document.cookie = 'name=jack;domain=happymmall.com;expires=Mon, 24 Aug 2021 07:22:11 GMT';

/*********  3. 用 js 修改 cookie *********/
// 保证 domain 和 path 相同的情况下，可以修改 cookie 的值
document.cookie = 'name=mac';

/*********  4. 用 js 删除 cookie *********/
//  将过期时间设置成 0，或者不是当前的时间，是之前的时间，就可以删除掉该条 cookie
document.cookie = 'name=jack;expires=0';






