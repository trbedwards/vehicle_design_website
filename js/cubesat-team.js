// The template 
var template = Handlebars.templates['committee'];

// The div/container that we are going to display results
var resultsPlaceholder = document.getElementById('committee');

// The data to fill the template with
var data = {"committee":
[
    {
        "name": "David Cava Pina",
        "title": "Systems Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "Hi, I'm David and I am System Leader with Dimitrios for the CubeSat project. I studied Aeronautical Engineering and Msc in Space Science in Madrid. Here in Imperial, I am studying a Msc in Computational Fluid Mechanics. I strongly believe this CubeSat is going to be one of the most relevant projects developed in Imperial and I am excited to be part of it. Are you with us?" 
    },
    {
        "name": "Dimitrios Nerantzis",
        "title": "Systems Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "My name is Dimitrios Nerantzis, I am a PhD candidate in the Chem. Eng. department at Imperial College London with background in mathematics. David Cava and me are the co-leaders of the systems group. We are responsible for the 'guts' of the cubesat: communications, payload, ACDS, power supply, thermal control. I am really excited by the idea of sending our own satellite into low earth orbit!!! (who wouldn't be?). There is a huge amount of new things to learn and in collaboration with all the team members we will do our best to make this happen!!!" 
    },
    {
        "name": "Andrea Vivaldi",
        "title": "Finance and Logistics Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "My name is Andrea, I come from Italy (what a beautiful country!) and I am the team leader in the Finance and Logistics team for the Cubesat Project. I am very excited about this project because it will give me and everyone who is involved the chance to explore the mysterious and fantastic world of space! In particular being in the F&amp;L team will give us the opportunity to deal with all aspects of the design and engineering process and we will also be in contact with industries and companies. A little bit more about me, I can tell you I am a big tennis fan and I always seek for people to play with, so I am looking forward to meet all of you outside whether for Cubesat or for tennis!"
    },
    {
        "name": "Danielle O’Driscoll",
        "title": "Structures Engineering Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "Hi I’m Danielle and am in 2nd year Aeronautics. My main motivation for being involved in the CubeSat project is my aspiration to contribute to space exploration. When I heard that we were doing a student run project that was actually going to put a satellite in space, I had to sign up.  I am the Structures Team Leader on the project and am really excited about being in charge of this team – we are going to be the people who get to design the majority of the CubeSat! I am currently PR officer for ICSEDS (Imperial College Students for the Exploration and Development of Space), where we build High Powered Rockets, do High Altitude Ballooning and also have a rocket engine design project. I went with the society to the National Student Space conference last year, which had loads of really cool talks on nearly everything you can imagine that is going on in the Space Industry. Who knows – our CubeSat may be able to feature in one of those talks once its up and orbiting. To give just a little bit more information in what I do at university; I’m in the orchestra, play in a folk band, and do some yoga and latin dancing on the side.  This project is a lot more technical and also quite different to anything I’ve done before so I am really looking forward to the challenge."
    },
    {
        "name": "Paul Grigoras",
        "title": "Software Engineering Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "I am the leader of the software engineering team in charge of the on-board and ground computing systems. My PhD (with the <a href='http://cc.doc.ic.ac.uk/'>Custom Computing Group</a>) focuses on the development of fast application-specific architectures. I am excited by the prospect of applying my research to develop reliable and efficient computing systems for CubeSat. For more information see <a href='http://paul-g.github.io/'>my personal webpage</a>."
    },
]
};

// Replace the inner html in the results placeholder with the data filled template
resultsPlaceholder.innerHTML = template(data);
