(function() {
  var divDemo = document.getElementById('divDemo');
  document.getElementById('btnJson').addEventListener('click', function() {
    try {
      var jsonObj = JSON.parse(document.getElementById('taJson').value);
      divDemo.innerHTML = JSON.stringify(jsonObj) + '<br>';
      divDemo.innerHTML += JSON.stringify(huhuiyu.JsonUtil.jsonToFlat(jsonObj)) + '<br>';
    } catch (ex) {
      alert(JSON.stringify(ex));
    }
  });

  document.getElementById('btnMd5').addEventListener('click', function() {
    divDemo.innerHTML = huhuiyu.MD5Encoder.md5(document.getElementById('txtMd5').value);
  });
})();
