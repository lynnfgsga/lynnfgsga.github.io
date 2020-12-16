var xiaokang = new xkTool("transparent");

// 设置随机背景的图片
xiaokang.imgList = [
    "https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg",
    "https://ae01.alicdn.com/kf/Hb4b6a83a124049819bd561439312edc96.jpg",
    "https://ae01.alicdn.com/kf/H146b0a3e074a4e91b11fcce994098034y.jpg",
    "https://ae03.alicdn.com/kf/H76674cd5901840be9b12f8596bb649bdP.jpg",
  ];
  // 调用随机背景
xiaokang.randomBg();

xiaokang.footFish();
xiaokang.aplayer({
    audio: [
        {
            name: "SB",
            artist: "SB",
            url: "http://music.163.com/song/media/outer/url?id=574566207.mp3",
            cover: "SB",
        },
    ],
    fixed: true,
    mini: true,
});

$(document).ready(function(e){
    $('.copyright').html('©2020 <i class="fa-fw fas fa-heart card-announcement-animation cc_pointer"></i> shadow');
})

$(document).ready(function(e){
    $('.framework-info').html('本站已运行<SPAN id=span_dt_dt style="color: #fff;"></SPAN>');
})

function show_date_time(){
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("11/16/2020 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML=' <font style=color:#2d85f0>'+daysold+'</font> 天 <font style=color:#f4433c>'+hrsold+'</font> 时 <font style=color:#ffbc32>'+minsold+'</font> 分 <font style=color:#0aa858>'+seconds+'</font> 秒';
}
show_date_time();