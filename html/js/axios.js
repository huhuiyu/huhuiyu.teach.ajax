(function() {
  var app = new Vue({
    el: '#vue-app',
    data: {
      echo: '测试',
      info: ''
    },
    methods: {
      send: function() {
        axios
          .post('http://demo.huhuiyu.top/projectsdataservice/', Qs.stringify({ echo: app.echo }))
          .then(function(response) {
            app.info = JSON.stringify(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  });
})();
