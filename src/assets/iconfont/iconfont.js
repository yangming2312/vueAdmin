(function (window) {
  var svgSprite = "<svg>" + "" + '<symbol id="icon-accessory" viewBox="0 0 1024 1024">' + "" + '<path d="M842.72 259.904a159.04 159.04 0 0 0-113.056-46.912h-0.16a158.592 158.592 0 0 0-112.768 46.656l-0.096 0.064-294.528 294.528a95.968 95.968 0 0 0 68.128 163.712c24.512 0 49.024-9.28 67.648-27.968l294.496-294.496a31.968 31.968 0 1 0-45.248-45.248l-294.496 294.496a31.872 31.872 0 0 1-45.088-0.16 31.552 31.552 0 0 1-0.192-45.088l294.496-294.496a95.04 95.04 0 0 1 67.648-28h0.096a95.52 95.52 0 0 1 67.872 28.16c18.112 18.112 28.096 42.24 28.128 67.84a95.136 95.136 0 0 1-27.968 67.776l-79.52 79.52-0.512 0.48-220.416 220.48a160.32 160.32 0 0 1-226.432 0.096A158.912 158.912 0 0 1 224 628.224c0-42.816 16.672-83.04 46.912-113.28l300.288-300.32a31.968 31.968 0 1 0-45.248-45.248l-300.288 300.288A222.848 222.848 0 0 0 160 628.224c0 59.872 23.264 116.16 65.504 158.4a223.168 223.168 0 0 0 158.336 65.44 223.68 223.68 0 0 0 158.592-65.6l311.456-311.424a31.68 31.68 0 0 0 7.104-11.072c18.496-26.56 28.64-57.92 28.608-91.04a159.104 159.104 0 0 0-46.88-113.024"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-other" viewBox="0 0 1024 1024">' + "" + '<path d="M779.776 480h-387.2a32 32 0 0 0 0 64h387.2a32 32 0 0 0 0-64M779.776 672h-387.2a32 32 0 0 0 0 64h387.2a32 32 0 0 0 0-64M256 288a32 32 0 1 0 0 64 32 32 0 0 0 0-64M392.576 352h387.2a32 32 0 0 0 0-64h-387.2a32 32 0 0 0 0 64M256 480a32 32 0 1 0 0 64 32 32 0 0 0 0-64M256 672a32 32 0 1 0 0 64 32 32 0 0 0 0-64" fill="#1296db" ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-other-copy" viewBox="0 0 1024 1024">' + "" + '<path d="M544.0000000000001 779.776l-5.684341886080802e-14-387.2a32 32 0 0 0-64 1.4210854715202004e-14l5.684341886080802e-14 387.2a32 32 0 0 0 64-1.4210854715202004e-14M352 779.776l-5.684341886080802e-14-387.2a32 32 0 0 0-64 1.4210854715202004e-14l5.684341886080802e-14 387.2a32 32 0 0 0 64-1.4210854715202004e-14M736 255.99999999999994a32 32 0 1 0-64 1.4210854715202004e-14 32 32 0 0 0 64-1.4210854715202004e-14M672 392.576l5.684341886080802e-14 387.2a32 32 0 0 0 64-1.4210854715202004e-14l-5.684341886080802e-14-387.2a32 32 0 0 0-64 1.4210854715202004e-14M544 256a32 32 0 1 0-64 1.4210854715202004e-14 32 32 0 0 0 64-1.4210854715202004e-14M352 256.00000000000006a32 32 0 1 0-64 1.4210854715202004e-14 32 32 0 0 0 64-1.4210854715202004e-14" fill="#1296db" ></path>' + "" + "</symbol>" + "" + "</svg>";
  var script = function () {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1]
  }();
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn()
        };
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }
    function IEContentLoaded(w, fn) {
      var d = w.document, done = false, init = function () {
        if (!done) {
          done = true;
          fn()
        }
      };
      var polling = function () {
        try {
          d.documentElement.doScroll("left")
        } catch (e) {
          setTimeout(polling, 50);
          return
        }
        init()
      };
      polling();
      d.onreadystatechange = function () {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init()
        }
      }
    }
  };
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  };
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  };

  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)
