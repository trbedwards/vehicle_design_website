// The template 
var template = Handlebars.templates['committee'];

// The div/container that we are going to display results
var resultsPlaceholder = document.getElementById('committee');

// The data to fill the template with
var data = {"committee":
[
    {
        "name": "Abdul Ali Akbar",
        "title": "Aerodynamics/Structures Engineering Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "As an individual, I love engineering and how stuff works generally and have even once nearly burned down my room by experimenting with a toaster! Having participated in eco-related engineering projects (such as Green Wave Project by Sembcorp) in the past, I am a firm believer of using engineering to making the world a better place without causing harm to Mother Nature. Currently leading the Aero/Structures Team for Imperial Vehicle Design’s Shell Eco-Marathon Project, I believe as a team we are able to come out with the best design to improve fuel efficiency and make travelling by car greener. Word." 
    },
    {
        "name": "Wai Tong Chung",
        "title": "Systems Team Leader",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "Hi all! My name is Wai Tong Chung and I'm the Systems Leader for the Shell Eco-marathon project. I'm currently in 2nd year Mech Eng, hence my interest in joining this car-building project. To instill your trust in me as System's Leader , allow me to elaborate on my experiences with engineering projects. During my summer internship last year, I was involved in 2 different hospital construction projects. I also own a personal start-up with some friends to play around with android software. Along with that, I have had multiple leadership roles in Rotaract, Model United Nation's Club, Student Council and Debating Society during my college years. I hope that I can utilise my experiences and skills learnt from these experiences to create the best and funnest working experience for you guys. So join my system's team if you're looking for a fun and interesting way to develop your professional profile as an engineer!" 
    }
]
};

// Replace the inner html in the results placeholder with the data filled template
resultsPlaceholder.innerHTML = template(data);
