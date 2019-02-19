$(function() {
  console.log('in jquery.js...');

  var divInfo = $('#divInfo');

  $('#btnSend').click(function() {
    divInfo.html('发起ajax请求中...<br>');
    //创建一个ajax请求
    $.ajax({ url: 'http://demo.huhuiyu.top/projectsdataservice/', method: 'POST', data: { echo: $('#txtEcho').val() }, dataType: 'json' }).done(function(data) {
      console.log(data);
      divInfo.append('应答结果:' + JSON.stringify(data));
    });
  });
});
