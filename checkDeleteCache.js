        // 웹 캐시 삭제
        function checkDeleteCache(t)
        {
            var osType = t;
            cacheVersion = getAppCacheVersion();
            var _cacheVersion = cacheVersion;
            if(cacheVersion == "")cacheVersion="0000000";

            var options = {};
            options.type = "GET";
            options.url = '/hybridapp/renew/common/cache/check';
            options.data = {
                    cache_cd : cacheVersion,
                    os_type : osType
            };
            options.success = function(response){
                // alert(JSON.stringify(response.data)+' app:'+cacheVersion);
                // console.debug("App Info : ",cacheVersion,osType);
                // console.debug(JSON.stringify(response.data));
                _cacheVersion = response.data.cache_cd;
                if(response.data.cache_yn=="Y"){
                    if(osType == "IOS"){
                        setTimeout(function(){self.location.href = "lmscp://main.deleteCache";}, 300);
                    }else{
                        window.base.cmd('deleteCache');
                    }
                    // console.debug("cache delete");
                    // alert("cache delete ok");
                }else{
                    // console.debug("Cache Check Pass....");
                    // alert("cache delete Pass");
                }
            }
            options.error = function(x, t, e){
                console.log("checkDeleteCache API error : ",x,t,e);
                // alert('API ERROR'+' '+cacheVersion+' '+osType);
                if(x.status === 503){
                    if(getCookie("reloaded")) return;
                    if(osType == "IOS"){
                        setTimeout(function(){self.location.href = "lmscp://main.deleteCache";}, 300);
                    }else{
                        window.base.cmd('deleteCache');
                    }
                    window.location.replace('/index.html');
                    setCookie("reloaded", true);
                    // delete cookie : document.cookie = 'reloaded' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                }
            }
            options.complete = function(){
                setAppCacheVersion(_cacheVersion);
            }
            send_request_public(options);
        }