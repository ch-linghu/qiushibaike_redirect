// ==UserScript==
// @name          糗事百科地址转换器
// @namespace     http://ch-linghu.me/
// @description   将旧版糗事百科地址转换成新版的地址
// @include       http://www.qiushibaike.com/articles/*
// ==/UserScript==

    var old_url = window.location.href;
    if (old_url.indexOf("http://www.qiushibaike.com/articles/") == 0){
        var new_url = old_url.replace(/articles\/([0-9]+)\.htm.*/ig, 'new2/article/$1')
        window.location.href = new_url;
    }

