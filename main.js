var tiktok_wrapper = document.getElementById('tiktok_wrapper');
var title = document.getElementById('title');

var query = window.location.href.split('?')[1];
var vid_ids = query.split('&');
title.innerHTML = decodeURI(vid_ids.shift());

function changeVideo(id) {
    console.log(id)
    var old_id = tiktok_wrapper.innerHTML.match(/data-video-id="(\d+)"/g)[0].substring(15);
    old_id = old_id.substring(0,old_id.length-1);
    tiktok_wrapper.innerHTML = tiktok_wrapper.innerHTML.replaceAll(old_id, id);
}

function decompress(value) {
    return value;
    // var range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    // var from_base = range.length
    // var to_base = 10

    // var from_range = range.slice(0, from_base);
    // var to_range = range.slice(0, to_base);
    
    // var dec_value = value.split('').reverse().reduce(function (carry, digit, index) {
    //   if (from_range.indexOf(digit) === -1) throw new Error('Invalid digit `'+digit+'` for base '+from_base+'.');
    //   return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
    // }, 0);
    
    // var new_value = '';
    // while (dec_value > 0) {
    //   new_value = to_range[dec_value % to_base] + new_value;
    //   dec_value = (dec_value - (dec_value % to_base)) / to_base;
    // }
    // return new_value || '0';
}

var ind = 0;
changeVideo(decompress(vid_ids[ind]));

var rewind = document.getElementById('rewind');
var share = document.getElementById('share');
var ff = document.getElementById('ff');

ff.onclick = () => {
    ind++;

    rewind.disabled = false;
    
    if (ind==vid_ids.length-1) {
        ff.disabled = true;
    }

    changeVideo(decompress(vid_ids[ind]));
}

rewind.onclick = () => {
    ind--;

    ff.disabled = false;
    
    if (ind==0) {
        rewind.disabled = true;
    }

    changeVideo(vid_ids[ind]);
}

rewind.disabled = true;
if (vid_ids.length==1) {
    ff.disabled = true;
}