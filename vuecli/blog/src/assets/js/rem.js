
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        var rem = width / 7.5; // 将屏幕宽度分成7.5份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
    }
    
    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
    }, false);
    win.addEventListener('pageshow', function(e) {        /*加载页面 可多次加载   onload 加载页面 只能加载一次*/
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 10);
        }
    }, false);

    refreshRem();

})(window);