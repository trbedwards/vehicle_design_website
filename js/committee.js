// The template 
var template = Handlebars.templates['committee'];

// The div/container that we are going to display results
var resultsPlaceholder = document.getElementById('committee');

// The data to fill the template with
var data = {"committee":
[
    {
        "name": "Sebastian Reymert",
        "title": "Chair",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "Hello everyone! My name is Sebastian Reymert and I am the chair of the Vehicle Design Society. It was a love for all vehicles, be it planes, boats, cars or anything in between that drove me to create the society. The idea slowly developed during my first year as a student of Aeronautics. With the aid of those that sit on the committee today it has now become a part of the Imperial College Union and it is my goal to make the organisation the go-to for any and all interested in design projects." 
    },
    {
        "name": "Sean Cartmale",
        "title": "Treasurer",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "My name is Sean and I am the Vehicle Design treasurer. I hope to be working with all of you to ensure the projects are fully funded and overall successful. I will mainly be working with the Eco-marathon team but will be overviewing all the projects financially. Happy engineering!"
    },
    {
        "name": "Javier Maurino",
        "title": "Operations",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "Born in Argentina, raised in Spain and now studying Aeronautics in Imperial College. He's in charge of the technical and managerial aspects of the CubeSat project. His job is to make sure that, in the end, we put a good piece of technology into orbit. In his spare time, he enjoys writing about himself in the third person."
    },
    {
        "name": "Oliver Parker",
        "title": "Sponsorship Secretary",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "My name is Oli and I am the society’s sponsorship officer. I am a fourth year mechanical engineer and have always had a strong interest in cars and motorcycles, particularly their mechanical design. As sponsorship officer I am responsible for finding and approaching suitable companies to secure funding for both the society itself and its specific projects. I am involved in similar projects within my department and would really like to see more student led vehicle design projects with involvement from students across departments."
    },
    {
        "name": "Joseph Ibrahim",
        "title": "Secretary",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "I am a second year Aeronautics student and the secretary for the Vehicle Design society. As secretary, I have a more administrative role to play, but I was captivated by the idea of the Shell Eco Marathon and I am very excited to be involved in the project itself!"
    },
    {
        "name": "Karan Dhall",
        "title": "Vice Chair",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "My name is Karan and I am your Vice Chair for this year. I will be working closely with Sebastian overviewing the society and making sure you can all design the vehicles you want. Primarily, I will be working on the eco marathon structures and aerodynamics team."
    },
    {
        "name": "William Taylor",
        "title": "Strategy Officer",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "I'm Will Taylor and I'm the strategy officer on the vehicle design committee. I'm a second year aeronautics student and I helped set up the club last year in an effort to not only do something reasonably useful but also, in specific regard to the eco marathon, to do something useful with a car. I'm mainly interested in the car racing side of things but will obviously endeavour to keep all vehicle design projects running smoothly."
    },
    {
        "name": "Piranavan Kirupakaran",
        "title": "Head of Manufacturing",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "Hello and welcome! I'm Piranavan. Call me Pro for short. I am a second year Mechanical Engineering student. I am Head of Manufacturing in Vehicle Designs, therefore will be working on the production of Cube-sat and Eco-Marathon. I am looking forward to the use of industrial machining such as drilling, milling during the manufacturing phase along with the modelling phase through the use of Solidworks and Creo to create the back-bone structure for both projects. I am so confident that we are, as a Vehicle Design Unit, able to produce to high quality, competitive, fit for purpose products. Join the quest and work as a unit to succeed with end products in the summer of 2015. I look forward to meeting you guys."
    }
]
};

// Replace the inner html in the results placeholder with the data filled template
resultsPlaceholder.innerHTML = template(data);
