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
        "last": "Treasurer",
        "profile_pic": "img/Anonymous_emblem.svg",
        "bio": "My name is Sean and I am the Vehicle Design treasurer. I hope to be working with all of you to ensure the projects are fully funded and overall successful. I will mainly be working with the Eco-marathon team but will be overviewing all the projects financially. Happy engineering!"
    }
]
};

// Replace the inner html in the results placeholder with the data filled template
resultsPlaceholder.innerHTML = template(data);
