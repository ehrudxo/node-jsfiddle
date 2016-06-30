/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.2(d49899a916fd99840f6f9178f2dd06e0e7013646)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.fr",{"vs/base/common/keyCodes":["Windows","Contrôle","Maj","Alt","Commande","Windows","Ctrl","Maj","Alt","Commande","Windows"],"vs/languages/html/common/htmlTags":["L'élément html représente la racine d'un document HTML.","L'élément head représente une collection de métadonnées pour le document.","L'élément title représente le titre ou le nom du document. Les auteurs doivent utiliser des titres qui identifient leurs documents, même quand ces derniers sont utilisés hors contexte, par exemple dans l'historique ou les signets d'un utilisateur, ou dans les résultats de la recherche. Le titre du document est souvent différent du premier titre de page, car ce dernier ne reste pas isolé quand il est pris hors contexte.","L'élément base permet aux auteurs de spécifier l'URL de base du document pour résoudre les URL relatives, ainsi que le nom du contexte de navigation par défaut pour suivre les liens hypertexte. Cet élément ne représente aucun autre contenu que ces informations.","L'élément link permet aux auteurs de lier leur document à d'autres ressources.","L'élément meta représente diverses sortes de métadonnées qui ne peuvent pas être représentées par les éléments title, base, link, style et script.","L'élément style permet aux auteurs d'intégrer des informations de style dans leurs documents. L'élément style est l'une des nombreuses entrées du modèle de traitement de style. L'élément ne représente pas du contenu pour l'utilisateur.","L'élément body représente le contenu du document.","L'élément article représente un contenu complet ou autonome dans un document, une page, une application ou un site qui est, en principe, prévu pour être distribué ou réutilisé indépendamment, par exemple dans un flux de syndication. Il peut s'agir d'un billet sur un forum, d'un article de journal ou de magazine, d'une entrée dans un blog, d'un commentaire d'utilisateur, d'un widget ou gadget interactif, ou de tout autre élément de contenu indépendant. Vous devez identifier chaque article, généralement en incluant un titre (élément h1 à h6) en tant qu'enfant de l'élément article.","L'élément section représente une section générique d'un document ou d'une application. Une section, dans ce contexte, désigne un groupement thématique de contenu. Vous devez identifier chaque section, généralement en incluant un titre (élément h1 à h6) en tant qu'enfant de l'élément section.","L'élément nav représente une section d'une page ayant des liens vers d'autres pages ou des fragments de cette page : une section avec des liens de navigation.","L'élément aside représente une section de page dont le contenu est indirectement lié à ce qui l'entoure, et qui peut être séparé de cet environnement. De telles sections sont souvent représentées sous forme d'encadrés en typographie imprimée.","L'élément h1 représente un titre de section.","L'élément h2 représente un titre de section.","L'élément h3 représente un titre de section.","L'élément h4 représente un titre de section.","L'élément h5 représente un titre de section.","L'élément h6 représente un titre de section.","L'élément header représente un contenu d'introduction pour son contenu de section ancêtre le plus proche ou un élément racine de section. Un en-tête contient généralement un groupe d'introduction ou une aide à la navigation. Quand le contenu de section ancêtre le plus proche ou l'élément racine de section est l'élément body, il s'applique à l'ensemble de la page.","L'élément footer représente un pied de page pour le contenu de section ancêtre ou l'élément racine de section le plus proche. Un pied de page contient habituellement des informations sur l'auteur de la section, les données relatives au copyright ou les liens vers d'autres documents en relation.","L'élément address représente les informations de contact de l'ancêtre de l'élément article ou body le plus proche. S'il s'agit de l'élément body, les informations de contact s'appliquent à l'ensemble du document.","L'élément p représente un paragraphe.","L'élément hr représente un changement thématique entre des éléments de paragraphe, par exemple un changement de décor dans un récit, ou un changement de sujet au sein d'une section d'un livre de référence.","L'élément pre représente un bloc de texte préalablement mis en forme, dans lequel la structure est représentée par les conventions typographiques plutôt que par des éléments.","L'élément blockquote représente un contenu qui est repris d'une autre source, éventuellement avec une citation qui doit figurer dans un pied de page ou un élément cite, et le cas échéant avec des changements en ligne tels que des annotations et des abréviations.","L'élément ol représente une liste d'éléments, ceux-ci étant ordonnés de manière intentionnelle, afin que toute modification de cet ordre entraîne un changement de sens du document.","L'élément ul représente une liste d'éléments, où l'ordre des éléments n'a pas d'importance. Ainsi, le fait de changer l'ordre ne modifie pas concrètement le sens du document.","L'élément li représente un élément de liste. Si son élément parent est ol, ul ou menu, l'élément est un élément de la liste de l'élément parent, tel que défini pour ces éléments. Autrement dit, l'élément de liste n'a aucune relation définie liée à une liste avec un autre élément li.","L'élément dl représente une liste associative constituée de zéro ou plusieurs groupes nom-valeur (liste de définitions). Un groupe nom-valeur comprend un ou plusieurs noms (éléments dt), suivis d'une ou de plusieurs valeurs (éléments dd), sans tenir compte des nœuds autres que les éléments dt et dd. Dans un élément dl, il ne doit y avoir qu'un seul élément dt pour chaque nom.","L'élément dt représente le terme, ou nom, faisant partie d'un groupe de termes de définition dans une liste de définitions (élément dl).","L'élément dd représente la description, définition ou valeur faisant partie d'un groupe de termes de définition au sein d'une liste de définitions (élément dl).","L'élément figure représente un contenu de flux indépendant, éventuellement accompagné d'une légende (comme une phrase complète). Il est généralement référencé de manière unique, bien qu'il soit en lien avec le contenu principal.","L'élément figcaption représente un sous-titre ou une légende pour le reste du contenu de l'élément parent de l'élément figure parent de l'élément figcaption, le cas échéant.","L'élément main représente le contenu principal du corps du document ou de l'application. La zone de contenu principale est constituée d'un contenu directement lié au sujet principal du document ou à la fonctionnalité principale d'une application, ou qui les étend.","L'élément div n'a aucune signification particulière. Il représente ses enfants. Il peut être utilisé avec les attributs class, lang et title pour marquer un élément sémantique commun à un groupe d'éléments consécutifs.","Si l'élément a un attribut href, il représente alors un lien hypertexte (une ancre hypertexte) étiqueté par son contenu.","L'élément em sert à mettre l'accent sur un contenu.","L'élément strong représente une grande importance, la gravité ou l'urgence de son contenu.","L'élément small représente des annotations, comme les petits caractères (informations légales ou liées au copyright, par exemple).","L'élément s représente un contenu qui n'est plus d'actualité ou n'est plus pertinent.","L'élément cite représente une référence à une œuvre de création. Il doit inclure le titre de l'œuvre ou le nom de l'auteur (personne, groupe ou organisation), une URL ou une référence abrégée selon les conventions d'usage pour l'ajout de métadonnées de citation.","L'élément q représente une citation courte issue d'une autre source.","L'élément dfn représente l'instance de définition d'un terme. Le paragraphe, le groupe de liste de définitions ou la section qui représente l'ancêtre le plus proche de l'élément dfn doit également contenir la ou les définitions du terme indiquées par l'élément dfn.","L'élément abbr représente une abréviation ou un acronyme, avec éventuellement son développement. L'attribut title peut être utilisé pour fournir le développement complet de l'abréviation. L'attribut, s'il est spécifié, doit contenir le développement complet de l'abréviation, et rien d'autre.","L'élément ruby permet de marquer un ou plusieurs fragments de contenu de phrasé avec des annotations ruby. Les annotations ruby sont de petits morceaux de texte présentés à côté du texte de base, principalement utilisés dans la typographie est-asiatique comme guide de prononciation ou pour inclure d'autres annotations. En japonais, cette forme de typographie est également connue sous le nom de furigana. Le texte ruby peut apparaître d'un côté ou de l'autre, et parfois des deux côtés à la fois, du texte de base. De plus, il est possible de contrôler sa position via CSS. Vous trouverez une présentation plus complète de ruby dans le document décrivant les cas d'usage et les approches exploratoires du langage ruby (Use Cases & Exploratory Approaches for Ruby Markup), ainsi que dans le module CSS pour ruby niveau 1. [RUBY-UC] [CSSRUBY]","L'élément rb marque la partie de texte de base d'une annotation ruby. Quand il est l'enfant d'un élément ruby, il ne représente rien d'autre à part lui-même, mais son élément ruby parent l'utilise pour déterminer ce qu'il représente.","L'élément rt marque la partie de texte ruby d'une annotation ruby. Quand il est l'enfant d'un élément ruby ou d'un élément rtc lui-même enfant d'un élément ruby, il ne représente rien d'autre que lui-même. Toutefois, son élément ruby ancêtre l'utilise pour déterminer ce qu'il représente.","L'élément rp est utilisé pour fournir le texte de remplacement affiché par les agents utilisateurs qui ne prennent pas en charge les annotations ruby. Une convention très répandue consiste à placer des parenthèses autour de la partie de texte ruby d'une annotation ruby.","L'élément time représente son contenu, avec une forme lisible par la machine des contenus figurant dans l'attribut datetime. Le contenu se limite à différents genres de dates, d'heures, de décalages de fuseaux horaires et de durées, tel que décrit ci-dessous.","L'élément code représente un fragment de code informatique Il peut s'agir d'un nom d'élément XML, d'un nom de fichier, d'un programme informatique ou de toute autre chaîne reconnue par l'ordinateur.","L'élément var représente une variable. Il peut s'agir d'une variable réelle dans une expression mathématique ou un texte lié à la programmation, d'un identificateur représentant une constante, d'un symbole d'identification d'une grandeur physique, d'un paramètre de fonction, ou tout simplement d'un terme utilisé comme espace réservé dans du texte.","L'élément samp représente un échantillon ou une sortie produite par un autre programme ou système informatique.","L'élément kbd représente les entrées effectuées par l'utilisateur (habituellement les entrées au clavier, mais il peut aussi être utilisé pour représenter d'autres entrées, telles que des commandes vocales).","L'élément sub représente un indice.","L'élément sup représente un exposant.","L'élément i représente un fragment de texte dans une autre voix ou humeur, ou qui se différencie du texte principal d'une manière qui indique une qualité de texte différente, par exemple une désignation taxonomique, un terme technique, une phrase idiomatique dans une langue étrangère, une translittération, une pensée ou un nom de navire dans les textes occidentaux.","L'élément b représente une partie de texte stylistiquement différente par rapport à du texte normal, sans lui apporter une importance particulière et sans implication d'une autre voix ou humeur. C'est le cas, par exemple, des mots clés dans un résumé, des noms de produits dans une revue d'évaluation, des mots cliquables dans un logiciel utilisant du texte interactif, ou de la première phrase de chaque paragraphe d'un article.","L'élément u représente un fragment de texte avec une annotation non textuelle, dont le sens n'est pas précisé mais qui est tout de même affichée. Il peut s'agir, par exemple, de marquer un texte comme étant un nom propre chinois ou de marquer un texte mal orthographié.","L'élément mark représente un passage de texte marqué ou surligné à des fins de référence en raison de sa pertinence dans un autre contexte. Quand il est utilisé dans une citation ou tout autre bloc de texte de même nature, il sert à mettre l'accent sur un texte qui a été rajouté pour attirer l'attention du lecteur sur un élément que l'auteur d'origine n'a peut-être pas considéré comme important au moment de son écriture, mais qui fait maintenant l'objet d'un intérêt non prévu initialement. Quand il est utilisé dans le texte principal d'un document, il met en avant un contenu pertinent pour l'activité actuelle de l'utilisateur.","L'élément bdi représente une portion de texte qui doit être isolée de son environnement pour la mise en forme de texte bidirectionnelle. [BIDI]","L'élément bdo représente un contrôle explicite de mise en forme de l'orientation du texte pour ses enfants. Il permet aux auteurs de remplacer l'algorithme bidirectionnel Unicode en spécifiant explicitement une substitution d'orientation. [BIDI]","Pris isolément, l'élément span ne représente rien. Toutefois, il peut être utile avec des attributs globaux, par exemple class, lang ou dir. Il représente ses enfants.","L'élément br représente un saut de ligne.","L'élément wbr représente une possibilité de saut de ligne.","L'élément ins représente un ajout de texte au document.","L'élément del représente une suppression de texte dans un document.","L'élément picture est un conteneur qui fournit plusieurs sources à son élément img contenu pour permettre aux auteurs d'effectuer un contrôle déclaratif ou de donner des conseils à l'agent utilisateur sur la ressource image à utiliser, en fonction de la densité de pixels de l'écran, de la taille de la fenêtre d'affichage, du format de l'image et d'autres facteurs. Il représente ses enfants.","Un élément img représente une image.","L'élément iframe représente un contexte de navigation imbriqué.","L'élément embed représente un point d'intégration pour une application externe ou du contenu interactif (généralement non HTML).","L'élément object représente une ressource externe, qui, en fonction du type de la ressource, peut être interprétée comme une image, un contexte de navigation imbriqué ou une ressource externe à traiter comme un plug-in.","L'élément param définit les paramètres des plug-ins invoqués par des éléments object. Pris isolément, il ne représente rien.","Un élément video est utilisé pour la lecture de vidéos ou de films, et de fichiers audio avec des légendes.","Un élément audio représente un contenu sonore ou un flux audio.","L'élément source permet aux auteurs de spécifier plusieurs ressources multimédias alternatives pour les éléments multimédias. Pris isolément, il ne représente rien.","L'élément track permet aux auteurs de spécifier explicitement du texte chronométré pour les éléments multimédias. Pris isolément, il ne représente rien.","L'élément map, en association avec un élément img et des descendants d'un élément area, définit une image interactive. L'élément représente ses enfants.","L'élément area représente soit un lien hypertexte avec du texte et une zone correspondante sur une image interactive, soit une zone morte sur une image interactive.","L'élément table représente des données en deux dimensions ou plus, sous la forme d'un tableau.","L'élément caption représente le titre du tableau qui est son parent, s'il a un parent et s'il s'agit d'un élément table.","L'élément colgroup représente un groupe de colonnes au sein du tableau qui est son parent, s'il a un parent et s'il s'agit d'un élément table.","Si un élément col a un parent et s'il est un élément colgroup qui a lui-même un parent qui est un élément table, l'élément col représente alors une ou plusieurs colonnes dans le groupe de colonnes représenté par ce colgroup.","L'élément tbody représente un ensemble de lignes constituées d'un corps de données pour l'élément table parent, si l'élément tbody a un parent et s'il s'agit d'un tableau.","L'élément thead représente l'ensemble de lignes qui composent les étiquettes de colonnes (en-têtes) de l'élément table parent, si l'élément thead a un parent et s'il s'agit d'un tableau.","L'élément tfoot représente l'ensemble de lignes qui composent les résumés de colonnes (pieds de page) de l'élément table parent, si l'élément tfoot a un parent et s'il s'agit d'un tableau.","L'élément tr représente une ligne de cellules dans un tableau.","L'élément td représente une cellule de données dans un tableau.","L'élément th représente une cellule d'en-tête dans un tableau.","L'élément form représente une collection d'éléments liés à un formulaire, dont certains peuvent constituer des valeurs modifiables qui peuvent être envoyées à un serveur pour traitement.","L'élément label représente une légende dans une interface utilisateur. La légende peut être associée à un contrôle de formulaire spécifique, appelé contrôle étiqueté de l'élément label, soit via l'attribut for, soit via l'insertion du contrôle de formulaire dans l'élément label lui-même.","L'élément input représente un champ de données de saisie, associé généralement à un contrôle de formulaire pour permettre à l'utilisateur de modifier les données.","L'élément button représente un bouton étiqueté par son contenu.","L'élément select représente un contrôle permettant de faire une sélection parmi un ensemble d'options.","L'élément datalist représente un ensemble d'éléments option qui représentent des options prédéfinies pour d'autres contrôles. Dans le rendu, l'élément datalist ne représente rien. Il doit, tout comme ses enfants, être masqué.","L'élément optgroup représente un groupe d'éléments option ayant une étiquette commune.","L'élément option représente une option dans un élément select, ou une partie d'une liste de suggestions dans un élément datalist.","L'élément textarea représente un contrôle d'édition de texte simple multiligne pour la valeur brute de l'élément. Le contenu du contrôle représente la valeur par défaut de ce dernier.","L'élément output représente le résultat d'un calcul effectué par l'application, ou le résultat d'une action de l'utilisateur.","L'élément progress représente l'avancement d'une tâche. Parfois, l'avancement est indéterminé, quand la tâche progresse mais sans précision sur le travail restant avant la fin de la tâche (par exemple, quand la tâche attend une réponse d'un hôte distant). Parfois, l'avancement est déterminé, quand le niveau de progression actuel est un nombre compris dans une plage allant de zéro à une valeur maximale, ce qui représente la fraction de travail effectuée jusqu'à présent.","L'élément meter représente une mesure scalaire dans un intervalle connu, ou une valeur fractionnaire connue. Il peut s'agir, par exemple, d'un quota d'utilisation de disque, de la pertinence d'un résultat de requête ou de la proportion de votants ayant choisi un candidat spécifique.","L'élément fieldset représente un ensemble de contrôles de formulaire, éventuellement regroupés sous un nom commun.","L'élément legend représente une légende pour le reste du contenu de l'élément fieldset parent de l'élément legend, le cas échéant.","L'élément details représente un widget de communication à partir duquel l'utilisateur peut obtenir des informations ou des contrôles supplémentaires.","L'élément summary représente une option de résumé, de légende ou la légende du reste du contenu de l'élément details parent de l'élément summary, le cas échéant.","L'élément dialog représente une partie d'une application avec laquelle l'utilisateur interagit pour exécuter une tâche, par exemple une boîte de dialogue, un inspecteur ou une fenêtre.","L'élément script permet aux auteurs d'inclure un script dynamique et des blocs de données au sein de leurs documents. L'élément ne représente pas du contenu pour l'utilisateur.","L'élément noscript ne représente rien si les scripts sont activés, et représente ses enfants si les scripts sont désactivés. Il est utilisé pour présenter différentes balises aux agents utilisateurs qui prennent en charge les scripts et ceux qui ne prennent pas en charge les scripts, en affectant la façon dont le document est analysé.","L'élément template est utilisé pour déclarer des fragments de code HTML qui peuvent être copiés et insérés dans le document via un script.","L'élément canvas fournit des scripts pour une zone graphique dépendant de la résolution. Ces scripts peuvent être utilisés pour le rendu de graphiques, de graphismes de jeux, de motifs ou d'autres images à la volée.","À l'exception du style, la case à cocher et l'entrée de case à cocher HTML ne présentent aucune différence. La case à cocher se comporte comme toute autre case à cocher AngularJS.","La directive ionContent fournit une zone de contenu conviviale qui peut être configurée de manière à utiliser l'affichage déroulant personnalisé d'Ionic ou la fonction de défilement intégrée au navigateur en cas de dépassement de la capacité.","Enfant d'ionItem","Ajoute une barre de pied de page fixe en dessous d'un contenu. Il peut aussi s'agir d'un pied de page secondaire (plus haut) si la classe \"bar-subfooter\" est appliquée.","Ajoute une barre d'en-tête fixe au-dessus d'un contenu. Il peut aussi s'agir d'un en-tête secondaire (plus bas) si la classe \"bar-subheader\" est appliquée.","Enfant d'ionContent ou d'ionScroll. La directive ionInfiniteScroll vous permet d'appeler une fonction chaque fois que l'utilisateur arrive tout en bas de la page ou à proximité.","ionInput est destiné aux entrées de type texte uniquement. Ionic utilise un élément HTML <input type=\"text\"> dans le composant, avec un habillage Ionic pour mieux gérer l'expérience utilisateur et l'interactivité.","Enfant d'ionList.","List est un élément d'interface largement utilisé dans la quasi-totalité des applications mobiles. Il peut inclure divers contenus comme du texte simple, mais aussi des boutons, des boutons bascules, des icônes et des miniatures.","Modal est un volet de contenu qui peut se superposer temporairement à l'affichage principal de l'utilisateur. Il est généralement utilisé pour opérer une sélection ou modifier un élément.","Enfant d'ionNavBar. Crée un bouton Précédent à l'intérieur d'un ionNavBar. Ce bouton s'affiche quand l'utilisateur peut revenir en arrière dans la pile de navigation actuelle.","Si vous avez une directive ionNavView, vous pouvez également créer un <ion-nav-bar>. Vous obtenez alors une barre supérieure qui se met à jour à mesure que l'état de l'application change.","Enfant d'ionNavView. Utilisez IonNavButtons pour définir les boutons sur votre ionNavBar à partir d'un ionView.","Enfant d'ionNavView. La directive ionNavTitle remplace un texte de titre ionNavBar par du code HTML personnalisé à partir d'un modèle ionView.","La directive ionNavView permet de restituer les modèles dans votre application. Chaque modèle fait partie d'un état. Les états, généralement mappés à une URL, sont définis par programmation avec angular-ui-router.","Enfant d'ionItem. Crée, dans un élément de liste, une case d'option qui est visible quand l'utilisateur fait glisser l'élément vers la gauche.",'Conteneur simple adapté au contenu, sans effets secondaires. Ajoute la classe "pane" à l\'élément.',"Popover est un affichage qui flotte au-dessus du contenu d'une application. Popover offre un moyen simple de présenter des informations à l'utilisateur ou d'en collecter.","À l'exception du style, la case d'option ionRirective et l'entrée de case d'option HTML ne présentent aucune différence. ionRadio se comporte comme une entrée de case d'option AngularJS.","Enfant d'ionContent ou d'ionScroll. Permet d'ajouter la fonction \"Tirer pour actualiser\" à un scrollView. Placez-le en tant que premier enfant de votre élément ionContent ou ionScroll.","Enfant d'ionItem.","Crée un conteneur déroulant pour tout le contenu.","Enfant d'ionSideMenus. Conteneur pour un menu latéral, frère d'une directive ionSideMenuContent.","Enfant d'ionSideMenus. Conteneur pour le contenu principal visible, frère d'une ou plusieurs directives ionSideMenu.","Élément de conteneur pour le ou les menus latéraux et le contenu principal. Permet à l'utilisateur d'activer/désactiver le menu gauche et/ou droit en faisant glisser la zone de contenu principal d'un côté à l'autre.","Enfant d'ionSlideBox. Affiche une diapositive dans une zone de diapositives.","Slide Box est un conteneur multipage dans lequel l'utilisateur peut balayer ou faire glisser chaque page.","La directive ionSpinner propose de nombreux compteurs animés.","Enfant d'ionTabs. Contient le contenu d'un onglet. Le contenu n'existe que si l'onglet donné est sélectionné.","Génère une interface à plusieurs onglets avec une barre d'onglets et un ensemble de \"pages\" accessibles en passant d'un onglet à l'autre.","ion-titre est un composant qui définit le titre d'ionNavbar","Un bouton bascule est un commutateur animé qui lie un modèle donné à un booléen. Autorise le glissement de la poignée du commutateur. Le bouton bascule se comporte comme toute autre case à cocher AngularJS.","Enfant d'ionNavView. Conteneur pour le contenu de l'affichage et toute information sur la navigation et la barre d'en-tête."]});
//# sourceMappingURL=../../../../../min-maps/vs/languages/html/common/htmlWorker.nls.fr.js.map