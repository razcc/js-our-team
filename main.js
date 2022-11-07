const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


let percorso = 'img/';


for (let i = 0; i < team.length; i++) {

    let cardCorrente = team[i];
    console.log(cardCorrente.name);

    console.log(cardCorrente.role);

    console.log(cardCorrente.image);

    console.log("......");


    let print = document.getElementById("containerCard").innerHTML += ` 
    <div class="card col-4">
        <img src=${percorso + cardCorrente.image} class="card-img-top" alt="Team">

        <div class="card-body">
            <h5 class="card-title">${cardCorrente.name}</h5>
            <p class="card-text">${cardCorrente.role}</p>
      
        </div>
    </div>`;

}