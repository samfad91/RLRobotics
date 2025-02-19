const filtreDate = document.getElementById('filtre-date');
const filtreCritere1 = document.getElementById('filtre-critere1');
const filtreCritere2 = document.getElementById('filtre-critere2');
const liste = document.getElementById('liste');

// Fonction pour filtrer la liste
function filtrerListe() {
    const dateFiltre = filtreDate.value;
    const critere1Filtre = filtreCritere1.value;
    const critere2Filtre = filtreCritere2.value;

    const elements = liste.children;

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const dateElement = element.querySelector('span:nth-child(2)').textContent.split(' : ')[1];
        const critere1Element = element.querySelector('span:nth-child(3)').textContent.split(' : ')[1];
        const critere2Element = element.querySelector('span:nth-child(4)').textContent.split(' : ')[1];

        if ((dateFiltre === '' || dateFiltre === dateElement) &&
            (critere1Filtre === '' || critere1Filtre === critere1Element) &&
            (critere2Filtre === '' || critere2Filtre === critere2Element)) {
            element.style.display = 'block';
        }  else {
            element.style.display = 'none';
        }
    }
}

// Ajouter un événement pour filtrer la liste lorsqu'un champ de filtre change
filtreDate.addEventListener('change', filtrerListe);
filtreCritere1.addEventListener('change', filtrerListe);
filtreCritere2.addEventListener('change', filtrerListe);