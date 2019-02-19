(function() {
  console.log('in ajax.js...');
  var divInfo = document.getElementById('divInfo');
  document.getElementById('btnSend').addEventListener('click', function() {
    divInfo.innerHTML = '发起ajax请求中...<br>';
    //创建一个ajax请求
    var xhr = new XMLHttpRequest();
    //监听状态变化
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          divInfo.innerHTML += xhr.responseText + '<br>';
        }
      } else {
        divInfo.innerHTML += '请求状态：' + xhr.readyState + '<br>';
      }
    };
    //发起POST请求
    xhr.open('POST', 'http://demo.huhuiyu.top/projectsdataservice/');
    //设置post数据类型
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //post的数据
    xhr.send('echo=' + document.getElementById('txtEcho').value);
  });
})();
