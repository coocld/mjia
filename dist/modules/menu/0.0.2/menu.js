define("modules/menu/menu",["av"],function(e){"use strict";{var u="modules.menu.menu",t=e.define({$id:u+".vm",view:{title:{t1:"hi"}}});e.define("Model",{$id:u+".menuModel",setting:{url:require.toUrl("modules/menu/menu.json"),success:function(){console.log("===menu===")}}}),e.define("Model",{$id:u+".m2Model",setting:{url:require.toUrl("modules/menu/m2.json"),success:function(){console.log("===m2===")}}})}t.scan()});