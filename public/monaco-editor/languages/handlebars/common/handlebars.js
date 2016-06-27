/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.2(d49899a916fd99840f6f9178f2dd06e0e7013646)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function(){var e=["vs/languages/handlebars/common/handlebarsTokenTypes","exports","require","vs/languages/handlebars/common/handlebars","vs/editor/common/modes","vs/languages/html/common/html","vs/base/common/async","vs/editor/common/services/modeService","vs/editor/common/modes/languageConfigurationRegistry","vs/editor/common/modes/abstractMode","vs/platform/thread/common/thread","vs/platform/instantiation/common/instantiation"],t=function(t){for(var n=[],r=0,i=t.length;r<i;r++)n[r]=e[t[r]];return n};define(e[0],t([2,1]),function(e,t){"use strict";t.EMBED="punctuation.expression.unescaped.handlebars",t.EMBED_UNESCAPED="punctuation.expression.handlebars",t.KEYWORD="keyword.helper.handlebars",t.VARIABLE="variable.parameter.handlebars"});var n=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},r=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},i=this&&this.__param||function(e,t){return function(n,r){t(n,r,e)}};define(e[3],t([2,1,4,5,0,11,7,8,9,10,6]),function(e,t,o,s,a,c,d,l,u,p,h){"use strict";!function(e){e[e.HTML=0]="HTML",e[e.Expression=1]="Expression",e[e.UnescapedExpression=2]="UnescapedExpression"}(t.States||(t.States={}));var g=t.States,f=function(e){function t(t,n,r,i,o,s,a,c){e.call(this,t,n,i,o,s,a,c),this.kind=n,this.handlebarsKind=r,this.lastTagName=i,this.lastAttributeName=o,this.embeddedContentType=s,this.attributeValueQuote=a,this.attributeValue=c}return n(t,e),t.prototype.makeClone=function(){return new t(this.getMode(),this.kind,this.handlebarsKind,this.lastTagName,this.lastAttributeName,this.embeddedContentType,this.attributeValueQuote,this.attributeValue)},t.prototype.equals=function(n){return n instanceof t&&e.prototype.equals.call(this,n)},t.prototype.tokenize=function(t){switch(this.handlebarsKind){case g.HTML:if(t.advanceIfString("{{{").length>0)return this.handlebarsKind=g.UnescapedExpression,{type:a.EMBED_UNESCAPED};if(t.advanceIfString("{{").length>0)return this.handlebarsKind=g.Expression,{type:a.EMBED};break;case g.Expression:case g.UnescapedExpression:if(this.handlebarsKind===g.Expression&&t.advanceIfString("}}").length>0)return this.handlebarsKind=g.HTML,{type:a.EMBED};if(this.handlebarsKind===g.UnescapedExpression&&t.advanceIfString("}}}").length>0)return this.handlebarsKind=g.HTML,{type:a.EMBED_UNESCAPED};if(t.skipWhitespace().length>0)return{type:""};if("#"===t.peek())return t.advanceWhile(/^[^\s}]/),{type:a.KEYWORD};if("/"===t.peek())return t.advanceWhile(/^[^\s}]/),{type:a.KEYWORD};if(t.advanceIfString("else")){var n=t.peek();if(" "===n||"\t"===n||"}"===n)return{type:a.KEYWORD};t.goBack(4)}if(t.advanceWhile(/^[^\s}]/).length>0)return{type:a.VARIABLE}}return e.prototype.tokenize.call(this,t)},t}(s.State);t.HandlebarsState=f;var v=function(e){function t(t,n,r,i){e.call(this,t,n,r,i)}return n(t,e),t.prototype._registerSupports=function(){var e=this;o.HoverProviderRegistry.register(this.getId(),{provideHover:function(t,n,r){return h.wireCancellationToken(r,e._provideHover(t.uri,n))}},!0),o.ReferenceProviderRegistry.register(this.getId(),{provideReferences:function(t,n,r,i){return h.wireCancellationToken(i,e._provideReferences(t.uri,n,r))}},!0),o.SuggestRegistry.register(this.getId(),{triggerCharacters:[".",":","<",'"',"=","/"],shouldAutotriggerSuggest:!0,provideCompletionItems:function(t,n,r){return h.wireCancellationToken(r,e._provideCompletionItems(t.uri,n))}},!0),o.DocumentHighlightProviderRegistry.register(this.getId(),{provideDocumentHighlights:function(t,n,r){return h.wireCancellationToken(r,e._provideDocumentHighlights(t.uri,n))}},!0),o.LinkProviderRegistry.register(this.getId(),{provideLinks:function(t,n){return h.wireCancellationToken(n,e._provideLinks(t.uri))}},!0),l.LanguageConfigurationRegistry.register(this.getId(),t.LANG_CONFIG)},t.prototype.getInitialState=function(){return new f(this,s.States.Content,g.HTML,"","","","","")},t.prototype.getLeavingNestedModeData=function(t,n){var r=e.prototype.getLeavingNestedModeData.call(this,t,n);return r&&(r.stateAfterNestedMode=new f(this,s.States.Content,g.HTML,"","","","","")),r},t.LANG_CONFIG={wordPattern:u.createWordRegExp("#-?%"),comments:{blockComment:["<!--","-->"]},brackets:[["<!--","-->"],["{{","}}"]],__electricCharacterSupport:{embeddedElectricCharacters:["*","}","]",")"]},autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:"+s.EMPTY_ELEMENTS.join("|")+"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:o.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(?!(?:"+s.EMPTY_ELEMENTS.join("|")+"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:o.IndentAction.Indent}}]},t=r([i(1,c.IInstantiationService),i(2,d.IModeService),i(3,p.IThreadService)],t)}(s.HTMLMode);t.HandlebarsMode=v})}).call(this);
//# sourceMappingURL=../../../../../min-maps/vs/languages/handlebars/common/handlebars.js.map