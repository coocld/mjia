define("common/router/main",["av","loli"],function(e,n){"use strict";var t=n.unit,m="modules/menu/menu";e.state("menu",{controller:"main",url:"/menu",views:{"":{templateUrl:t.html(m),onChange:require([t.style(m),t.js(m)])}}})});