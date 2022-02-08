1ère étape : 
- Il va falloir réussir à générer du HTML au moment où on tape dans le formulaire

2eme étape :
- En utilisant la fonction précédemment créée, pour chaque nouvelle entrée on va créer un nouvel objet en conservant les anciens. 
Attention cependant, le fait de submit une entrée dans un formulaire effectue un évènement par défaut, la difficulté sera de récupérer l'entrée sans que cet évènement s'effectue.
Ici l'autre difficulté sera de faire une boucle autour d'un objet . Il faudra transformer l'objet en un tableau (array) qui comportera les clés de l'objet. On pourra ainsi boucler sur ses clés pour récupérer ses entrées. 

3eme étape :
- Enregistrer le HTML dans l'objet
On a ici un objet en dur dans notre javascript, mais on veut pouvoir effectuer de nouvelles entrées sur notre page et les ajouter à notre objet dynamiquement (timestamp)

4eme étape : 
Gérer les évènements. Les éléments créés dynamiquement ont du mal à récupérer les events. 
Quand on génère du HTML en dur, il suffit de récupérer l'élément HTML dans une constante et de venir vérifier une condition au clic sur mon élément. 
Quand on génère du HTML en JS il faut chercher à passer un évènement sur un objet créé dynamiquement.

5eme étape : 
Enregistrer l'objet dans le localStorage
Difficulté : On ne peut stocker que des chaînes de caractères (string) dans le localStorage, ici on veut stocker un objet, il faut trouver un moyen de transformer un objet en chaîne de caractère et quand on va le récupérer du localStorage il faudra à nouveau le transformer en objet. 