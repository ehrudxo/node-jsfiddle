/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.3.0(6d75d678b60a87d50d0499985d5e11cc4fd9a8d1)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/bat",["require","exports"],function(t,e){e.conf={comments:{lineComment:"REM"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]}]},e.language={defaultToken:"",ignoreCase:!0,tokenPostfix:".bat",brackets:[{token:"punctuation.bracket",open:"{",close:"}"},{token:"punctuation.parenthesis",open:"(",close:")"},{token:"punctuation.square",open:"[",close:"]"}],keywords:/call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,symbols:/[=><!~?&|+\-*\/\^;\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[[/^(\s*)(rem(?:\s.*|))$/,["","comment"]],[/(\@?)(@keywords)(?!\w)/,[{token:"support.function"},{token:"support.function.$2"}]],[/[ \t\r\n]+/,""],[/setlocal(?!\w)/,{token:"support.function.tag-setlocal",bracket:"@open"}],[/endlocal(?!\w)/,{token:"support.function.tag-setlocal",bracket:"@close"}],[/[a-zA-Z_]\w*/,""],[/:\w*/,"metatag"],[/%[^%]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"punctuation"],[/\d*\.\d+([eE][\-+]?\d+)?/,"constant.numeric.float"],[/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,"constant.numeric.hex"],[/\d+/,"constant.numeric"],[/[;,.]/,"punctuation"],[/"/,"string",'@string."'],[/'/,"string","@string.'"]],string:[[/[^\\"'%]+/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/%[\w ]+%/,"variable"],[/%%[\w]+(?!\w)/,"variable"],[/["']/,{cases:{"$#==$S2":{token:"string",next:"@pop"},"@default":"string"}}],[/$/,"string","@popall"]]}}});