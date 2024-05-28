function afficher() {
    var form = document.querySelector('form');
    var children = form.children;
    console.log("Enfants de la balise form:");
    for (var i = 0; i < children.length; i++) {
        console.log(children[i].tagName);
    }

    var button = document.querySelector('button');
    var previousSibling = button.previousElementSibling;
    if (previousSibling) {
        console.log("Le frère avant de la balise button est:", previousSibling.tagName);
    } else {
        console.log("La balise button n'a pas de frère avant.");
    }

    var parent = form.parentElement;
    console.log("Le parent de la balise form est:", parent.tagName);
}