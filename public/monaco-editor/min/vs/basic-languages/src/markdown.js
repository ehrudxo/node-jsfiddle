/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.3.0(6d75d678b60a87d50d0499985d5e11cc4fd9a8d1)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/markdown",["require","exports"],function(e,t){function n(e){return $+e}var s="entity.name.tag",o="entity.name.tag",a="entity.other.attribute-name",c="meta.separator",i="comment",r="keyword",d="string",m="variable.source",p="meta.tag.assign.html",g="entity.other.attribute-name.html",l="string.html",$="entity.name.tag.tag-";t.conf={comments:{blockComment:["<!--","-->"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[]},t.language={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white",s,o,o]],[/^\s*(=+|\-+)\s*$/,a],[/^\s*((\*[ ]?)+)\s*$/,c],[/^\s*>+/,i],[/^\s*([\*\-+:]|\d+\.)\s/,r],[/^(\t|[ ]{4})[^ ].*$/,d],[/^\s*~{3}\s*((?:\w|[\/\-#])+)?\s*$/,{token:d,next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+)\s*$/,{token:d,next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*`{3}\s*$/,{token:d,next:"@codeblock"}],{include:"@linecontent"}],codeblock:[[/^\s*~{3}\s*$/,{token:d,next:"@pop"}],[/^\s*`{3}\s*$/,{token:d,next:"@pop"}],[/.*$/,m]],codeblockgh:[[/```\s*$/,{token:"@rematch",switchTo:"@codeblockghend",nextEmbedded:"@pop"}],[/[^`]*$/,m]],codeblockghend:[[/\s*```/,{token:m,next:"@pop"}],[/./,"@rematch","@pop"]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{[^}]+\}/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,n("$1")],[/<(\w+)/,{cases:{"@empty":{token:n("$1"),next:"@tag.$1"},"@default":{token:n("$1"),bracket:"@open",next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:n("$1"),bracket:"@close"}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,[g,p,l,{token:l,switchTo:"@tag.$S2.$4"},l]],[/(type)(\s*=\s*)(')([^']+)(')/,[g,p,l,{token:l,switchTo:"@tag.$S2.$4"},l]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,[g,p,l]],[/\w+/,g],[/\/>/,n("$S2"),"@pop"],[/>/,{cases:{"$S2==style":{token:n("$S2"),switchTo:"@embedded.$S2",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:n("$S2"),switchTo:"@embedded.$S2",nextEmbedded:"$S3"},"@default":{token:n("$S2"),switchTo:"@embedded.$S2",nextEmbedded:"text/javascript"}}},"@default":{token:n("$S2"),next:"@pop"}}}]],embedded:[[/[^"'<]+/,""],[/<\/(\w+)\s*>/,{cases:{"$1==$S2":{token:"@rematch",next:"@pop",nextEmbedded:"@pop"},"@default":""}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string",'@string."'],[/'/,"string","@string.'"],[/</,""]],string:[[/[^\\"']+/,"string"],[/@jsescapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}]]}}});