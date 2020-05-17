
window.onscroll = function() {
    var dv = document.getElementById('video-box');
    var v = document.getElementById('i_video');
    if ((window.scrollY < (dv.offsetTop + dv.offsetHeight)) && ((window.scrollY + window.outerHeight) > dv.offsetTop)) {
        if (v.src=='' || v.src==location.href) {
            v.src='VIDEO_URL';
        }
    } else {
        v.src='';
    }
}