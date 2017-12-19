import "../css/index.scss";
let loading = require('../../common/utils/loading/index');
{{#analytics}}
let logger = require('../../common/utils/logger/index');
{{/analytics}}
loading.init({title:'Loading...',txt:''});
loading.show();
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loading.hide();
  }
};