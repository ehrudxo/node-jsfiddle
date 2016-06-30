/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.3.0(6d75d678b60a87d50d0499985d5e11cc4fd9a8d1)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/xml",["require","exports"],function(e,t){t.conf={comments:{blockComment:["<!--","-->"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"]],autoClosingPairs:[{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}]},t.language={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter.start",bracket:"@open"},{token:"tag.tag-$2",bracket:"@open",next:"@tag.$2"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter.end",bracket:"@open"},{token:"tag.tag-$2",bracket:"@close"},"",{token:"delimiter.end",bracket:"@close"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter.start",bracket:"@open"},{token:"metatag.instruction",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter.start",bracket:"@open"},{token:"metatag.declaration",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",bracket:"@open",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",bracket:"@close",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter.start",bracket:"@close",next:"@pop"}],[/(\/)(>)/,[{token:"tag.tag-$S2",bracket:"@close"},{token:"delimiter.start",bracket:"@close",next:"@pop"}]],[/>/,{token:"delimiter.start",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",bracket:"@open",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",bracket:"@close",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}}});