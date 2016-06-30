/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.2(d49899a916fd99840f6f9178f2dd06e0e7013646)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/base/common/worker/workerServer.nls.es",{"vs/base/common/errors":["{0}. Código de error: {1}","Permiso denegado (HTTP {0})","Permiso denegado","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Error de conexión desconocido ({0})","Error de conexión desconocido. Es posible que ya no esté conectado a Internet o que el servidor al que se había conectado esté sin conexión.","{0}:{1}","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","Se produjo un error del sistema ({0})","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","{0} ({1} errores en total)","Se ha producido un error desconocido. Consulte el registro para obtener más detalles.","Sin implementar","Argumento no válido: {0}","Argumento no válido","Estado no válido: {0}","Estado no válido","No se pudo cargar un archivo necesario. O bien no está conectado a Internet o el servidor al que se había conectado está sin conexión. Actualice el explorador y vuelva a intentarlo.","No se pudo cargar un archivo requerido. Reinicie la aplicación para intentarlo de nuevo. Detalles: {0}"],"vs/base/common/severity":["Error","Advertencia","Información"],"vs/editor/common/config/defaultConfig":["Contenido del editor"],"vs/editor/common/model/textModelWithTokens":["Error en el modo al convertir la entrada en tokens."],"vs/editor/common/modes/modesRegistry":["Texto sin formato"],"vs/editor/common/modes/supports/suggestSupport":["Enable word based suggestions."],"vs/editor/common/services/modeServiceImpl":["Aporta declaraciones de lenguaje.","Identificador del lenguaje.","Alias de nombre para el lenguaje.","Extensiones de archivo asociadas al lenguaje.","Nombres de archivo asociados al lenguaje.","Patrones globales de nombre de archivo asociados al lenguaje.","Tipos MIME asociados al lenguaje.","Expresión regular que coincide con la primera línea de un archivo del lenguaje.","Ruta de acceso relativa a un archivo que contiene opciones de configuración para el lenguaje.",'Valor vacío para "contributes.{0}"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir y debe ser de tipo "string[]"','Elemento "contributes.{0}" no válido. Se esperaba una matriz.'],"vs/editor/common/services/modelServiceImpl":['Actualice la configuración: `editor.detectIndentation` reemplaza a `editor.tabSize`: "auto" o `editor.insertSpaces`: "auto"'],"vs/platform/configuration/common/configurationRegistry":["Aporta opciones de configuración.","Resumen de la configuración. Esta etiqueta se usará en el archivo de configuración como comentario divisor.","Descripción de las propiedades de configuración.",'si se establece, "configuration.type" debe establecerse en "object"',"configuration.title debe ser una cadena","configuration.properties debe ser un objeto"],"vs/platform/extensions/common/abstractExtensionService":["La extensión `{1}` no se pudo activar. Motivo: dependencia `{0}` desconocida.","La extensión `{1}` no se pudo activar. Motivo: La dependencia `{0}` no se pudo activar.","La extensión `{0}` no se pudo activar. Motivo: más de 10 niveles de dependencias (probablemente sea un bucle de dependencias).","Error al activar la extensión `{0}`: {1}."],"vs/platform/extensions/common/extensionsRegistry":["Se obtuvo una descripción vacía de la extensión.",'la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` es obligatoria y debe ser de tipo "object"','la propiedad `{0}` es obligatoria y debe ser de tipo "string"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"','la propiedad `{0}` se puede omitir o debe ser de tipo "string[]"',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente",'la propiedad `{0}` se puede omitir o debe ser de tipo "string"','Se esperaba que "main" ({0}) se hubiera incluido en la carpeta de la extensión ({1}). Esto puede hacer que la extensión no sea portátil.',"las propiedades `{0}` y `{1}` deben especificarse u omitirse conjuntamente","Nombre para mostrar de la extensión que se usa en la galería de VS Code.","Categorías que usa la galería de VS Code para clasificar la extensión.","Banner usado en VS Code Marketplace.","Color del banner en el encabezado de página de VS Code Marketplace.","Tema de color de la fuente que se usa en el banner.","El publicador de la extensión VS Code.","Eventos de activación de la extensión VS Code.","Dependencias a otras extensiones. El identificador de una extensión siempre es ${publisher}.${name}. Por ejemplo: vscode.csharp.","Script que se ejecuta antes de publicar el paquete como extensión VS Code.","Todas las contribuciones de la extensión VS Code representadas por este paquete."],"vs/platform/jsonschemas/common/jsonContributionRegistry":["Describe un archivo JSON mediante un esquema. Vea json-schema.org para obtener más información.","Un identificador único para el esquema.","El esquema para comprobar el documento ","Un título descriptivo del elemento","Una descripción larga del elemento. Se usa en menús y sugerencias que aparecen al mantener el puntero.","Un valor predeterminado. Lo usan las sugerencias.","Un número que debe dividir de forma exacta el valor actual (es decir, sin resto).","El máximo valor numérico, inclusivo de forma predeterminada.","Hace exclusiva la propiedad maximum.","El valor numérico mínimo, inclusivo de forma predeterminada.","Hace exclusiva la propiedad minimum.","La longitud máxima de una cadena.","La longitud mínima de una cadena.","Una expresión regular con la que hacer coincidir la cadena. No está anclada de forma implícita.",'Para matrices, solo cuando los elementos se hayan establecido como una matriz. Si es un esquema, valida los elementos después de los que haya especificado la matriz de elementos. Cuando se establece en "false", los elementos adicionales provocarán un error en la validación.',"Para matrices. Puede ser un esquema respecto al que validar cada elemento o una matriz de esquemas respecto a la que validar cada elemento por orden (el primer esquema validará al primer elemento, el segundo esquema validará al segundo elemento y así sucesivamente).","El número máximo de elementos que puede haber en una matriz. Inclusivo.","El número mínimo de elementos que puede haber en una matriz. Inclusivo.","Si todos los elementos en la matriz deben ser únicos. El valor predeterminado es false.","El número máximo de propiedades que puede tener un objeto. Inclusivo.","El número mínimo de propiedades que puede tener un objeto. Inclusivo.","Una matriz de cadenas que enumera los nombres de todas las propiedades necesarias para este objeto.",'Esquema o valor booleano. Si es un esquema, se usa para validar todas las propiedades sin coincidencias con "properties" o "patternProperties". Si es false, las propiedades sin este tipo de coincidencias provocarán un error del esquema.',"No se usa para validar. Coloque aquí los esquemas secundarios a los que desee hacer referencia en línea con $ref","Mapa de nombres de propiedad para esquemas para cada propiedad.","Mapa de expresiones regulares de nombres de propiedad para hacer coincidir las propiedades de los esquemas.","Asignación de nombres de propiedad a una matriz de nombres de propiedad o a un esquema. Una matriz de nombres de propiedad implica que, para que sea válida, la propiedad nombrada en la clave depende de las propiedades de la matriz que se encuentren en el objeto. Si el valor es un esquema, este se aplica solamente al objeto si la propiedad en la clave existe en el objeto.","El conjunto de valores literales que son válidos","Una cadena de uno de los tipos de esquema básicos (número, entero, nulo, matriz, objeto, booleano, cadena) o una matriz de cadenas que especifica un subconjunto de esos tipos.","Describe el formato que se espera para el valor.","Una matriz de esquemas, todos los cuales deben coincidir.","Una matriz de esquemas, donde al menos uno debe coincidir.","Una matriz de esquemas, de los cuales uno debe coincidir.","Un esquema que no debe tener coincidencias."],"vs/platform/message/common/message":["Cerrar","Cancelar"]});
//# sourceMappingURL=../../../../../min-maps/vs/base/common/worker/workerServer.nls.es.js.map