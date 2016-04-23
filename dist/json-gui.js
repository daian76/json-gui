angular.module("templateCache",[]).run(["$templateCache",function(e){e.put("datetime/datetime.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col datetime-col" ng-class="{\'has-error\': !parameter.evaluate()}">\n        <input ng-if="parameter.hasDate" type="date" ng-model="parameter.value" class="form-control">\n        <input ng-if="parameter.hasTime" type="time" step="60" ng-model="parameter.value" class="form-control">\n        <div class="error-message">{{parameter.message}}</div>\n    </div>\n</div>\n'),e.put("domains/domains.html",'<div class="row parameter-row">\n\n    <div class="col-xs-12 col-md-6 col-md-offset-3 par-name-col ng-binding">\n        <div style="width:100%;height:{{height}}" id="{{parameter.dbName}}map" ng-class="{\'map-has-error\' : !parameter.evaluate()}"></div>\n        <div class="error-message">{{parameter.message}}</div>\n        <div ng-repeat="val in range() track by $index">\n            Domain number {{$index+1}} - South-West: ({{parameter.value[val].southWest.lat | number:4}}, {{parameter.value[val].southWest.long | number:4}}) North-East: ({{parameter.value[val].northEast.lat | number:4}}, {{parameter.value[val].northEast.long | number:4}})<br/>\n        </div>\n    </div>\n    <div class="modal fade" id="{{parameter.dbName}}modal">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n                    <h4 class="modal-title">Delete domain</h4>\n                </div>\n                <div class="modal-body">\n                    <p>Do you want to delete domain number <span id="number"></span><span ng-if="parameter.onlyNested" id="lastDomain"> and all his sub-domains</span>?</p>\n                </div>\n                <div class="modal-footer">\n                    <button type="button" class="btn btn-warning" data-dismiss="modal">No</button>\n                    <button type="button" class="btn btn-success">Yes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'),e.put("fileupload/fileupload.html",'<div class="row parameter-row" id="{{parameter.dbName}}">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col upload-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !parameter.evaluate()}">\n        <!--        <div ngf-drop ngf-select ng-model="file" class="drop-box" ngf-drag-over-class="dragover" ngf-multiple="true" ngf-allow-dir="false" accept="image/*,application/pdf" ngf-pattern="\'image/*,application/pdf\'">Drop Namelist</div>-->\n\n        <form  action="upload.php" method="POST" enctype="multipart/form-data">\n\n            <fieldset>\n                <div>\n                    <input type="file" id="fileselect" name="fileselect[]" multiple="multiple"  style="visibility:hidden"/>\n                    <div id="filedrag" ng-click="openInput()">Click or drop files here</div>\n                </div>\n\n                <div id="submitbutton">\n                    <button type="submit">Upload Files</button>\n                </div>\n                <div class="error-message">{{parameter.message}}</div>\n                <div class="error-message">\n                    <div ng-repeat="val in errorUpload">{{val}}\n                    </div>\n                </div>\n                 <div class="success-message" ng-show="uploadedFilesDescription.length!=0">\n                   Uploaded files:\n                   <ul>\n                    <li ng-repeat="file in uploadedFilesDescription track by $index">\n                        <span class="uploaded-file">{{file.name}}</span>&nbsp;&nbsp;&nbsp;<span ng-click="removeFile($index)" class="file-unload">Remove</span>\n                    </li>\n                  </ul>\n                </div>\n            </fieldset>\n\n        </form>\n    </div>\n    <!--\n<div class="modal fade" id="modal">\n<div class="modal-dialog">\n<div class="modal-content">\n<div class="modal-header">\n<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n<h4 class="modal-title">Warning</h4>\n</div>\n<div class="modal-body">\n</div>\n<div class="modal-footer">\n<button type="button" class="btn btn-warning" data-dismiss="modal">Ok</button>\n</div>\n</div>\n</div>\n</div>\n\n-->\n\n\n</div>\n'),e.put("float/float.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !parameter.evaluate()}">\n        <input type="number" step="1" ng-model="parameter.value" class="form-control">\n        <div class="error-message">{{parameter.message}}</div>\n    </div>\n</div>\n'),e.put("integer/integer.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !parameter.evaluate()}">\n        <input type="number" step="1" ng-model="parameter.value" class="form-control">\n        <div class="error-message">{{parameter.message}}</div>\n    </div>\n</div>\n'),e.put("json-gui/json-gui.html",'<div class="container-fluid" id="model-container">\n    <div class="row">\n        <div class="col-xs-12 col-md-10 groups">\n            <div ng-repeat="group in data.parametersCategories">\n                <div class="row group-container">\n                    <div class="group-name" id="group{{group.value}}">\n                        {{group.name}}\n                    </div>\n                    <div class="group-parameters col-xs-12">\n                        <div ng-repeat="(key, value) in hashToArray(pars)">\n                            <integer ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'integer\'" parameter="pars[value]" dependencies = "dep[value]"></integer>\n                            <float ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'float\'" parameter="pars[value]" dependencies = "dep[value]"></float>\n                            <datetime ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'datetime\'" parameter="pars[value]" dependencies = "dep[value]"></datetime>\n                            <select-parameter ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'select\'" parameter="pars[value]" dependencies =" dep[value]"></select-parameter>\n                            <text-parameter ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'text\'" parameter="pars[value]" dependencies = "dep[value]"></text-parameter>\n                            <domains  ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'domains\'" parameter="pars[value]" dependencies = "dep[value]"></domains>\n                            <fileupload  ng-if="pars[value].parameterCategory==group.value && pars[value].parameterType==\'fileupload\'" parameter="pars[value]" dependencies = "dep[value]"></fileupload>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="col-md-2" id="scrollspy" style="padding-left:0px">\n            <ul id="nav" class="nav hidden-xs hidden-sm" style="margin-top:20px;width:100%;padding-left:10px; border-left:1px solid #dedede;">\n                <li ng-repeat="group in data.parametersCategories">\n                    <a href="#group{{group.value}}">{{group.name}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n'),e.put("text/text.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !parameter.evaluate()}">\n        <textarea ng-model="parameter.value" class="form-control" style="resize:none"></textarea>\n        <div class="error-message">{{parameter.message}}</div>\n    </div>\n</div>\n'),e.put("select/select.html",'<div class="row parameter-row">\n    <div class="col-xs-6 col-md-3 col-md-offset-3 par-name-col">\n        {{parameter.displayName}}\n    </div>\n    <div class="col-xs-6 col-md-3 par-value-col" ng-class="{\'has-error\': !parameter.evaluate()}">\n        <select ng-model="parameter.value" ng-options="option.value as option.name for option in parameter.values" class="form-control"></select>\n        <div class="error-message">{{parameter.message}}</div>\n    </div>\n</div>\n')}]);var directives=angular.module("json-gui",["ngFileUpload","templateCache"]);directives.directive("datetime",function(){return{restrict:"E",templateUrl:"datetime/datetime.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(e,a,t){e.dependencies;e.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+e.parameter.isValid+" return isValid;}")(),e.parameter.value=new moment(e.parameter.value).toDate(),e.timeValid=function(){return"undefined"==typeof e.parameter.value||"Invalid Date"==e.parameter.value?(e.parameter.message="Select a valid date",!1):(e.parameter.message="",!0)},e.parameter.evaluate=function(){e.parameter.message="";var a=e.validationFunction(e.parameter,e.dependencies);return e.timeValid()?a.valid?(e.parameter.message="",!0):(e.parameter.message=a.message,!1):!1},e.$watch("parameter.message",function(){})}}}),directives.directive("domains",["$timeout",function(e){return{restrict:"E",templateUrl:"domains/domains.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(a,t,n){var r=a.parameter.dbName;a.dependencies;a.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+a.parameter.isValid+" return isValid;}")(),a.domainsValid=function(){return"undefined"==typeof a.mapRectangles||0===Object.keys(a.mapRectangles).length?(a.parameter.message="Select at least one domain",!1):!0},a.parameter.evaluate=function(){a.parameter.message="";var e=a.validationFunction(a.parameter,a.dependencies);return a.domainsValid()?e.valid?(a.parameter.message="",!0):(a.parameter.message=e.message,!1):!1},a.initializeParameter=function(){var t=2*parseInt($("body").css("width"))/6;a.height=t+"px",a.mapRectangles=[],i(),e(function(){var t=Object.keys(a.parameter.value).length,n=0;for(var i in a.parameter.value){if(n==a.parameter.maxDomains)return void e(function(){a.parameter.value.splice(n,t-n)});var s=p(a.parameter.value[r+n],a.map);if(a.mapRectangles[r+s.zIndex]=s,!d(s.zIndex))break;n++}a.value=a.parameter.value,a.modal=$("#"+a.parameter.dbName+"modal"),a.modal.find(".btn-success").click(function(){o(a.deletingIndex)})},!0)};var i=function(){var e=document.getElementById(a.parameter.dbName+"map"),t={center:new google.maps.LatLng(a.parameter.center.lat,a.parameter.center["long"]),zoom:a.parameter.mapZoom,mapTypeId:google.maps.MapTypeId.HYBRID};a.map=new google.maps.Map(e,t),a.rectOptions={strokeColor:"#00BCD4",strokeWeight:1,draggable:!0,fillColor:"#00BCD4",fillOpacity:.5,editable:!0,clickable:!0,zIndex:10,map:a.map},a.drawingManager=new google.maps.drawing.DrawingManager({drawingControl:!0,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:[google.maps.drawing.OverlayType.RECTANGLE]},rectangleOptions:a.rectOptions}),a.drawingManager.setMap(a.map),google.maps.event.addListener(a.drawingManager,"rectanglecomplete",function(e){var t=a.rectOptions.zIndex+1;return a.rectOptions.zIndex=t,a.drawingManager.setOptions({rectangleOptions:a.rectOptions}),Object.keys(a.mapRectangles).length-1==a.parameter.maxDomains?void e.setMap(null):(e.addListener("bounds_changed",function(){s(e,t)}),e.addListener("click",function(){l(t)}),a.mapRectangles[r+t]=e,m(e,t),void d(t))})},s=function(t,n){var i=t.getBounds();e(function(){var e=a.parameter.value[r+n];"undefined"!=typeof e&&(e.northEast.lat=i.getNorthEast().lat(),e.northEast["long"]=i.getNorthEast().lng(),e.southWest.lat=i.getSouthWest().lat(),e.southWest["long"]=i.getSouthWest().lng(),d(n))})},l=function(e){a.modal.find("#number").html(parseInt(c(r+e))+1),e==Object.keys(a.mapRectangles).length-1?a.modal.find("#lastDomain").css("display","none"):a.modal.find("#lastDomain").css("display","inline"),a.deletingIndex=parseInt(c(r+e)),a.modal.modal("show")},o=function(t){a.modal.modal("hide"),a.parameter.onlyNested?e(function(){for(var e=t,n=Object.keys(a.mapRectangles),r=n.length-e,i=0;r>i;i++)a.mapRectangles[n[i+e]].setMap(null),delete a.mapRectangles[n[i+e]],delete a.parameter.value[n[i+e]]},0):e(function(){a.mapRectangles[r+t].setMap(null),delete a.mapRectangles[r+t],delete a.parameter.value[r+t]},0)},d=function(t){if(!a.parameter.onlyNested)return!0;var n=Object.keys(a.mapRectangles),i=a.mapRectangles[r+t],s=i.getBounds(),l=c(r+t);if(l>0){var o=n[l-1],d=a.mapRectangles[o].getBounds();if(s.getSouthWest().lat()<d.getSouthWest().lat()||s.getSouthWest().lat()>d.getNorthEast().lat()||s.getSouthWest().lng()<d.getSouthWest().lng()||s.getSouthWest().lng()>d.getNorthEast().lng()||s.getNorthEast().lat()>d.getNorthEast().lat()||s.getNorthEast().lat()<d.getSouthWest().lat()||s.getNorthEast().lng()>d.getNorthEast().lng()||s.getNorthEast().lng()<d.getSouthWest().lng()){var p=n.length-l;return e(function(){for(var e,t=0;p>t;t++){if(e=t+l,"undefined"==typeof a.mapRectangles[n[e]])return!1;a.mapRectangles[n[e]].setMap(null),delete a.mapRectangles[n[e]],delete a.parameter.value[n[e]]}}),!1}}if(l<n.length-1){var m=a.mapRectangles[n[l+1]].getBounds();if(s.getSouthWest().lat()>m.getSouthWest().lat()||s.getSouthWest().lng()>m.getSouthWest().lng()||s.getNorthEast().lat()<m.getNorthEast().lat()||s.getNorthEast().lng()<m.getNorthEast().lng()){var p=n.length-l-1;return e(function(){for(var e=0;p>e;e++){var t=e+l+1;if("undefined"==typeof a.mapRectangles[n[t]])return;a.mapRectangles[n[t]].setMap(null),delete a.mapRectangles[n[t]],delete a.parameter.value[n[t]]}}),!1}}return!0},p=function(e,t){var n=new google.maps.Rectangle({strokeColor:"#00BCD4",strokeWeight:1,draggable:!0,fillColor:"#00BCD4",fillOpacity:.5,editable:!0,clickable:!0,zIndex:Object.keys(a.mapRectangles).length,map:t,bounds:{north:e.northEast.lat,south:e.southWest.lat,east:e.northEast["long"],west:e.southWest["long"]}}),r=Object.keys(a.mapRectangles).length;return n.addListener("bounds_changed",function(){s(n,r)}),n.addListener("click",function(){l(r)}),n},m=function(t,n){var i=t.getBounds().getSouthWest(),s=t.getBounds().getNorthEast(),l={southWest:{lat:i.lat(),"long":i.lng()},northEast:{lat:s.lat(),"long":s.lng()}};e(function(){a.parameter.value[r+n]=l})},c=function(e){for(var t=Object.keys(a.mapRectangles),n=0;n<t.length;n++)if(t[n]===e)return n};a.range=function(){return Object.keys(a.parameter.value)},e(function(){google.maps.event.addDomListener(window,"load",a.initializeParameter())}),a.$watch("parameter.message",function(){})}}}]),directives.directive("fileupload",["$timeout","Upload",function(e,a){return{restrict:"E",templateUrl:"fileupload/fileupload.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(a,t,n){a.parameter.dbName,a.dependencies;a.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+a.parameter.isValid+" return isValid;}")(),a.fileuploadValid=function(){return"undefined"==typeof a.parameter.value||a.parameter.value.length<a.parameter.minUpload?(a.parameter.message="Upload at least "+a.parameter.minUpload,a.parameter.message+=1==a.parameter.minUpload?" file":" files",!1):!0},a.parameter.evaluate=function(){a.parameter.message="";var e=a.validationFunction(a.parameter,a.dependencies);return a.fileuploadValid()?e.valid?(a.parameter.message="",!0):(a.parameter.message=e.message,!1):!1},a.initFileReader=function(){window.File&&window.FileList&&window.FileReader&&a.init()},a.init=function(){a.maxLengthByte=r(a.parameter.maxSize);var e=$("#"+a.parameter.dbName),t=e.find("#fileselect")[0],n=e.find("#filedrag")[0],i=e.find("#submitbutton")[0];t.addEventListener("change",a.fileSelectHandler,!1);var s=new XMLHttpRequest;s.upload&&(n.addEventListener("dragover",a.fileDragHover,!1),n.addEventListener("dragleave",a.fileDragHover,!1),n.addEventListener("drop",a.fileSelectHandler,!1),n.style.display="block",i.style.display="none")},a.fileDragHover=function(e){e.stopPropagation(),e.preventDefault(),e.target.className="dragover"==e.type?"hover":""},a.parseFile=function(t){if(!a.fileHasAllowedExtension(t))return void i("This extension is not allowed. Allowed extensions are: "+a.parameter.allowedExtensions);if(t.size>a.maxLengthByte)return void i("The file named "+t.name+" is too big. The maximum dimension accepted is "+a.parameter.maxSize+".");var n=new FileReader;n.onload=function(t){e(function(){a.parameter.value.push(t.target.result)})},n.readAsDataURL(t),e(function(){a.uploadedFilesDescription.push(t)})},a.fileSelectHandler=function(e){a.fileDragHover(e);var t=e.target.files||e.dataTransfer.files;if(a.uploadedFilesDescription.length+t.length>a.parameter.maxUpload)return void i("Reached maximum file uploads allowed ("+a.parameter.maxUpload+").");for(var n,r=0;n=t[r];r++)a.parseFile(n)},a.openInput=function(){$("#"+a.parameter.dbName).find("#fileselect").click()};var r=function(e){e=e.toLowerCase();var a=parseInt(e);return e.indexOf("kb")>0?1e3*a:e.indexOf("mb")>0?1e6*a:e.indexOf("gb")>0?1e9*a:a},i=function(t){e(function(){a.errorUpload.splice(0,0,t)}),e(function(){a.errorUpload.splice(0,1)},5e3)};a.removeFile=function(e){a.parameter.value.splice(e,1),a.uploadedFilesDescription.splice(e,1),console.log(e)},a.fileHasAllowedExtension=function(e){var t=a.parameter.allowedExtensions;if("undefined"==typeof t)return!0;if("string"==typeof t&&""!=t)return e.name.endsWith("."+t);if(Array.isArray(t)){for(var n=0;n<t.length;n++)if(e.name.endsWith("."+t[n]))return!0;return!1}return!0},a.errorUpload=[],a.uploadedFilesDescription=[],e(function(){a.initFileReader()})}}}]),directives.directive("float",function(){return{restrict:"E",templateUrl:"float/float.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(e,a,t){e.dependencies;e.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+e.parameter.isValid+" return isValid;}")(),e.floatValid=function(){return"undefined"==typeof e.parameter.value||"NaN"===e.parameter.value?(e.parameter.message="Number format is not valid",!1):(e.parameter.message="",!0)},e.parameter.evaluate=function(){e.parameter.message="";var a=e.validationFunction(e.parameter,e.dependencies);return e.floatValid()?a.valid?(e.parameter.message="",!0):(e.parameter.message=a.message,!1):!1},e.$watch("parameter.message",function(){})}}}),directives.directive("integer",function(){return{restrict:"E",templateUrl:"integer/integer.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(e,a,t){e.dependencies;e.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+e.parameter.isValid+" return isValid;}")(),e.integerValid=function(){return e.parameter.value%1!==0||"NaN"===e.parameter.value?(e.parameter.message="Number is not an Integer",!1):(e.parameter.message="",!0)},e.parameter.evaluate=function(){e.parameter.message="";var a=e.validationFunction(e.parameter,e.dependencies);return e.integerValid()?a.valid?(e.parameter.message="",!0):(e.parameter.message=a.message,!1):!1},e.$watch("parameter.message",function(){})}}}),directives.directive("jsonGui",["$timeout",function($timeout){return{restrict:"E",templateUrl:"json-gui/json-gui.html",replace:!0,scope:{data:"="},link:function(scope,elm,attr){scope.pars=[],scope.dep=[],scope.buildParametersArray=function(){var e=scope.data.parameters;for(var a in e)scope.pars[e[a].dbName]=e[a]},$timeout(function(){$("#nav").affix({offset:{}}),$("body").scrollspy({target:"#scrollspy"})}),scope.buildDependencies=function(){var e;for(var a in scope.pars){var t={};e=scope.pars[a].dependencies;for(var n=0;n<e.length;n++)t[e[n]]=scope.pars[e[n]];scope.dep[a]=t}},scope.saveConfiguration=function(){console.log(scope.pars.upload.value);var namelist="";for(var par in scope.pars){if(!scope.pars[par].evaluate())return void console.log("Error in some parameter");var functionBody=scope.buildComputingFunction(par);namelist+=scope.pars[par].displayName+": "+eval(functionBody)+";\n"}console.log(namelist)},scope.buildComputingFunction=function(e){var a="var parameter = scope.pars[par];";return a+="var dependencies = [];",scope.pars[e].dependencies.forEach(function(e){a+="dependencies['"+e+"'] = scope.pars['"+e+"'];"}),a+"(function(){"+scope.pars[e].computedResult+"}())"},scope.hashToArray=function(e){var a=[],t=0;for(item in e)a[t]=item,t++;return a};var unbind=scope.$watch("data",function(){console.log("data was changed"),scope.buildParametersArray(),scope.buildDependencies(),scope.data.getComputedResults=function(){var results=[],result;for(var par in scope.pars){if(result={},!scope.pars[par].evaluate())return void console.log("Error in some parameter");var functionBody=scope.buildComputingFunction(par);result.value=eval(functionBody),result.name=scope.pars[par].dbName,result.parameterType=scope.pars[par].parameterType,results.push(result)}return results},unbind()})}}}]),directives.directive("textParameter",function(){return{restrict:"E",templateUrl:"text/text.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(e,a,t){e.dependencies;e.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+e.parameter.isValid+" return isValid;}")(),e.textValid=function(){return""===e.parameter.value?(e.parameter.message="Insert some text",!1):(e.parameter.message="",!0)},e.parameter.evaluate=function(){e.parameter.message="";var a=e.validationFunction(e.parameter,e.dependencies);return e.textValid()?a.valid?(e.parameter.message="",!0):(e.parameter.message=a.message,!1):!1}}}}),directives.directive("selectParameter",function(){return{restrict:"E",templateUrl:"select/select.html",replace:!0,scope:{parameter:"=",dependencies:"="},link:function(e,a,t){e.dependencies;e.validationFunction=new Function("return function v(parameter, dependencies){var isValid = {valid:true, message:''};"+e.parameter.isValid+" return isValid;}")(),e.selectValid=function(){return!0},e.parameter.evaluate=function(){e.parameter.message="";var a=e.validationFunction(e.parameter,e.dependencies);return e.selectValid()?a.valid?(e.parameter.message="",!0):(e.parameter.message=a.message,!1):!1}}}});