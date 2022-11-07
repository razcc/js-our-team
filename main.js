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

  for(let i= 0; i < team.length; i++){
    let nameTeam = team[i].name;
    console.log(`Team composto da: ${nameTeam}`);

    let professioneTeam = team[i].role;   
    console.log(`${nameTeam} ha il ruolo di ${professioneTeam}`);

    let photoTeam = team[i].image;
    console.log(`Photo: ${photoTeam}`);

    console.log(".......")
    
  }