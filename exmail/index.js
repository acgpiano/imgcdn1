$(document).ready(function() {
  $('#send').on('click', function() {
    var formData = new FormData();
    var username = $('#username').val();
    var password = $('#password').val();
    if (!username || !password) {
      alert('请输入用户名和密码！');
      return;
    }
    formData.append('file', $('#uploadFile')[0].files[0]);
    formData.append('username', username);
    formData.append('password', password);
    $('button').hide();
    $('.spinner').show();
    $('#msg-text').html('');
    $.ajax({
      url: '/exmail',
      method: 'POST',
      async: true,
      timeout: 0,
      data: formData,
      contentType: false,
      processData: false,
      cache: false,
    }).success(function(res) {
      $('button').show();
      $('.spinner').hide();
      $('#msg-text').html(res.msg);
    });
  });

  $('#test').on('click', function() {
    alert(123);
    $.ajax({
      url: '/test',
      method: 'POST',
    });
  });
});