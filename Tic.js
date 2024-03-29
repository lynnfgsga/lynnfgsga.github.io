(function (window, undefiend) {
    var xkTool = function (selector, filter) {
      return new xkTool.prototype.init(selector, filter);
    };
    xkTool.prototype = {
      constructor: xkTool,
      init: function (bgUrl, filter) {
        this.changeBanner(bgUrl, filter);
        return this;
      },
      version: "3.1.1",
      selector: "",
      imgList: [
        "https://ae01.alicdn.com/kf/Uc32240fb1b134adc8b256577bd78b9a3j.jpg",
      ],
      bannerList: [
        "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
      ],
    };
    xkTool.extend = xkTool.prototype.extend = function (obj) {
      for (var key in obj) {
        this[key] = obj[key];
      }
    };
    xkTool.extend({
      randomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      },
    });
    xkTool.extend({
      setColor: function (content_inner, opacity) {
        var light_bg_color =
          "--light_bg_color: rgb(255, 255, 255," + opacity + ");";
        var dark_bg_color = "--dark_bg_color: rgba(18,18,18," + opacity + ");";
        content_inner.setAttribute("style", light_bg_color + dark_bg_color);
      },
      setBg: function (img) {
        $("#web_bg").css({
          backgroundImage: "url(" + img + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        });
      },
      setBanner: function (img, filter) {
        if (!filter) {
          $(".full_page").css({ backgroundImage: "url(" + img + ")" });
        } else {
          $(".full_page").css({
            backgroundImage:
              'url("https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url(' +
              img +
              ")",
          });
        }
      },
    });
    xkTool.prototype.extend({
      consoleAnchor: function () {
        $(".toc-link").click(function (e) {
          console.log(this.href);
        });
        return this;
      },
      codeFull: function () {
        $(".highlight-tools").append(
          '<i class="fas fa-fingerprint fullScreen"></i>'
        );
        $(".highlight-tools").delegate(".fullScreen", "click", function () {
          $(this).parent().parent().toggleClass("code-block-fullscreen");
        });
        return this;
      },
    });
    xkTool.prototype.extend({
      changeBanner: function (imageUrl, filter = false) {
        if (imageUrl != undefined && imageUrl.search("http") != -1) {
          xkTool.setBanner(imageUrl, filter);
        } else if (imageUrl == "transparent") {
          $(".full_page").css({ background: "transparent" });
        }
        return this;
      },
      randomBanner: function (
        startUrl,
        endUrl,
        startNum,
        endNum,
        filter = false
      ) {
        var num;
        if ((arguments.length = 1 && startUrl == true)) {
          filter = true;
        }
        if (arguments.length < 4) {
          var imgLength = this.bannerList.length;
          num = xkTool.randomNum(0, imgLength);
          console.log(this.bannerList[num], num);
          xkTool.setBanner(this.bannerList[num], filter);
        } else {
          num = xkTool.randomNum(startNum, endNum + 1);
          xkTool.setBanner(startUrl + num + endUrl, filter);
        }
        return xkTool;
      },
      mobileSidebar: function () {
        var mobile_sidebar_menus = document.getElementById(
          "mobile-sidebar-menus"
        );
        var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
          "menus_item_child"
        );
        var menus_expand = mobile_sidebar_menus.getElementsByClassName(
          "menus-expand"
        );
        for (var i = 0; i < menus_item_child.length; i++) {
          menus_item_child[i].style.display = "none";
          menus_expand[i].className += " menus-closed";
        }
        return this;
      },
      bgPage: function () {
        var web_bg = document.getElementById("web_bg");
        var content_inner = document.getElementById("content-inner");
        var opacity = Cookies.get("opacity") ? Cookies.get("opacity") : 0.5;
        var bg = Cookies.get("bg");
        var animation = Cookies.get("animation");
        var type = Cookies.get("type");
        if (bg) {
          web_bg.style.background = bg;
          web_bg.setAttribute("data-type", type);
          if (animation) {
            web_bg.style.animation = animation;
          }
        }
        xkTool.setColor(content_inner, opacity);
        return this;
      },
      randomBg: function (startUrl, endUrl, startNum, endNum) {
        var num;
        if (arguments.length < 4) {
          var imgLength = this.imgList.length;
          num = xkTool.randomNum(0, imgLength);
          xkTool.setBg(this.imgList[num]);
        } else {
          num = xkTool.randomNum(startNum, endNum + 1);
          xkTool.setBg(startUrl + num + endUrl);
        }
        return xkTool;
      },
    });
    xkTool.prototype.extend({
      appendSocial: function (obj) {
        for (var svgId in obj) {
          $(".card-info-social-icons").append(
            '<a class="social-icon" href="' +
              obj[svgId] +
              '" target="_blank"><svg class="icon" aria-hidden="true" style="width: 1em;height: 1em;vertical-align: -0.15em;fill: currentColor;overflow: hidden;"><use xlink:href="#' +
              svgId +
              '"></use></svg></a>'
          );
        }
      },
      cheatTitle: function (leaveTitle, backTitle, leaveIcon, backIcon) {
        var OriginTitle = document.title;
        var titleTime;
        document.addEventListener("visibilitychange", function () {
          if (document.hidden) {
            $('[rel="icon"]').attr(
              "href",
              leaveIcon
                ? leaveIcon
                : "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"
            );
            document.title = leaveTitle ? leaveTitle : "！！这里这里 ◕ ں ◕ ";
            clearTimeout(titleTime);
          } else {
            $('[rel="icon"]').attr(
              "href",
              backIcon
                ? backIcon
                : "https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico"
            );
            document.title = backTitle
              ? backTitle
              : "(ฅ>ω<*ฅ) 欢迎回来哦！爱你哟~" + OriginTitle;
            titleTime = setTimeout(function () {
              document.title = OriginTitle;
            }, 2000);
          }
        });
        return this;
      },
      magicCirle: function (radius, densety, color, clearOffset) {
        $(".scroll-down").after(
          '<canvas id="canvas" width="1700px" height="470"></canvas>'
        );
        $("");
        $.fn.circleMagic = function (options) {
          let width,
            height,
            largeContainer,
            canvas,
            ctx,
            target,
            animateHeader = true;
          let circles = [];
          let settings = $.extend(
            {
              elem: ".header",
              color: "rgba(255,225,225,.4)",
              radius: 20,
              densety: 0.3,
              clearOffset: 0.2,
            },
            options
          );
          initContainer();
          addListeners();
          function initContainer() {
            width = $(window).width();
            height = $(window).height();
            target = { x: 0, y: height };
            largeContainer = document.querySelector(settings.elem);
            largeContainer.style.height = height + "px";
            initCanvas();
            canvas = document.getElementById("canvas");
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext("2d");
            for (let x = 0; x < width * settings.densety; x++) {
              let c = new Circle();
              circles.push(c);
            }
            animate();
          }
          function initCanvas() {
            let canvasElement = document.createElement("canvas");
            canvasElement.id = "canvas";
            largeContainer.append(canvasElement);
          }
          function addListeners() {
            window.addEventListener("scroll", scrollCheck);
            window.addEventListener("resize", resize);
          }
          function scrollCheck() {
            if (document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
          }
          function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeContainer.style.height = height + "px";
            canvas.width = width;
            canvas.height = height;
          }
          function animate() {
            if (animateHeader) {
              ctx.clearRect(0, 0, width, height);
              for (let i in circles) {
                circles[i].draw();
              }
            }
            requestAnimationFrame(animate);
          }
          function randomColor() {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            let alpha = Math.random().toPrecision(2);
            let rgba = `rgba(${r},${g},${b},${alpha})`;
            return rgba;
          }
          function Circle() {
            let self = this;
            (function () {
              self.pos = {};
              init();
            })();
            function init() {
              self.pos.x = Math.random() * width;
              self.pos.y = height + Math.random() * 100;
              self.alpha = 0.1 + Math.random() * settings.clearOffset;
              self.scale = 0.1 + Math.random() * 0.3;
              self.speed = Math.random();
              if (settings.color === "random") {
                self.color = randomColor();
              } else {
                self.color = settings.color;
              }
            }
            this.draw = function () {
              if (self.alpha <= 0) {
                init();
              }
              self.pos.y -= self.speed;
              self.alpha -= 0.0005;
              ctx.beginPath();
              ctx.arc(
                self.pos.x,
                self.pos.y,
                self.scale * settings.radius,
                0,
                2 * Math.PI,
                false
              );
              ctx.fillStyle = self.color;
              ctx.fill();
              ctx.closePath();
            };
          }
        };
        $(".full_page")
          .css({ overflow: "hidden" })
          .circleMagic({
            elem: ".full_page",
            radius: radius ? radius : 18,
            densety: densety ? densety : 0.1,
            color: color ? color : "random",
            clearOffset: clearOffset ? clearOffset : 0.3,
          });
        return this;
      },
      footFish: function () {
        $("#footer-wrap").css({
          position: "absolute",
          "text-align": "center",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          "z-index": 99,
        });
        $("footer").append(
          `<div class="container"id="jsi-flying-fish-container"></div>`
        );
        $("body").append(
          '<script src="https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>'
        );
        return this;
      },
      aplayer: function (obj) {
        $("head").append(
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        );
        $.getScript(
          "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js",
          function () {
            $("body").prepend('<div id="xiaokang-aplayer"></div>');
            aplayerObj = {
              container: document.getElementById("xiaokang-aplayer"),
            };
            for (var key in obj) {
              if (key != "container") aplayerObj[key] = obj[key];
            }
            const ap = new APlayer(aplayerObj);
            console.log(aplayerObj);
            return ap;
          }
        );
      },
      meting: function (id, server, type) {
        $("head").append(
          '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css" class="aplayer-style-marker">'
        );
        let APlayerJs = $.getScript(
          "https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js"
        );
        let MetingJS = $.getScript(
          "https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"
        );
        let pAll = Promise.all([APlayerJs, MetingJS]);
        pAll.then(() => {
          $("body").append(
            `<meting-js id=${id}server=${server}type=${type}fixed="true"mini="true"></meting-js>`
          );
        });
      },
    });
    xkTool.prototype.init.prototype = xkTool.prototype;
    window.xkTool = xkTool;
  })(window);
  