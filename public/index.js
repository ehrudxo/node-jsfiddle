$(function () {
  require.config({ paths: { 'vs': 'monaco-editor/min/vs' }});

  var eGlobal={model:{}};
  eGlobal.container = document.getElementById("tab_content");

  require(['vs/editor/editor.main'], function() {
    eGlobal.editor = monaco.editor.create(eGlobal.container,{value:"put your fiddle url",language: "javascript",	theme: "vs-dark"});

    $('#fiddleurl').change(function(){
      var url = $( this ).val();
      $.get("http://localhost:3000/"+url, function(data){
        console.log(data);
        eGlobal.sourceData = JSON.parse(data);
        console.log(eGlobal.sourceData);
        eGlobal.model.js = monaco.editor.createModel(eGlobal.sourceData.js, "javascript");
        eGlobal.model.css = monaco.editor.createModel(eGlobal.sourceData.css, "css");
        eGlobal.model.html = monaco.editor.createModel(eGlobal.sourceData.html, "html");
        draw('js');
      });
    });
  });
  var draw = function(modelIdentifier){
    // var currentState = eGlobal.editor.saveViewState();
    // var currentModel = eGlobal.editor.getModel();
    // if (currentModel === eGlobal.js.model) {
    //   eGlobal.js.state = currentState;
    // } else if (currentModel === eGlobal.css.model) {
    //   eGlobal.css.state = currentState;
    // } else if (currentModel === eGlobal.html.model) {
    //   eGlobal.html.state = currentState;
    // }
    eGlobal.editor.setModel(eGlobal.model[modelIdentifier]);
    // eGlobal.editor.restoreViewState(eGlobal.sourceData[modelIdentifier]);

    eGlobal.editor.focus();
  }

  $("ul.tabs li").click(function () {
    $("ul.tabs li").removeClass("active").css("color", "#333");
    $(this).addClass("active").css("color", "darkred");
    var modelIdentifier = $(this).attr("rel");
    draw(modelIdentifier);
  });
}());
