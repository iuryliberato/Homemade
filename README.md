
# General Assembly


## Project 3 - Homemade 👩‍🍳🧑‍🍳👨‍🍳


## Project Link

[Homemade](https://recipes-homemade.herokuapp.com/)


## Brief 

This was an 8 day group project. Myself, Vez and Jason were asked to build a full Stack application with a React front-end and a Node back-end, a fully functional Express API with all routes (GET, POST, PUT, DELETE), custom authentication (register/login) and a pre-planned wireframe for the front-end.  

## Overview & Concept 

A React App with a Node back-end that uses Express, MongoDB and  Mongoose. Users can create accounts, write recipes, leave reviews including a picture of the recipe they made. They can also search recipes and view user profiles.

##Technologies Used



* HTML5.
* CSS.
* SASS.
* React JS.
* JavaScript.
* Express JS.
* Node.
* MongoDB.
* Yarn.
* Git.
* Github.
* Google Fonts.
* Photoshop.

##Approach Taken

We would have zooms call in the morning, make clear what we wanted to each get done and then touch base as the day went on and we progressed with our tasks.



* Day 1 was a planning day. I came up with the idea of a recipe site, so we started by looking at other recipe sites for inspiration. We had a main site we used for referencing (bon appetit). We made some photoshop mockups of site design for us to reference towards which everyone contributed ideas to. We listed all of the features that we want to implement and who could do what.

    ![Website Flow](https://user-images.githubusercontent.com/86430160/143269364-eeb15075-e485-4570-99da-74489d767943.png)




* Days 2-3 were coded with a shared screen in order to build the back-end using Express JS and MongoDB. We coded this together via screen-sharing in order to avoid any clashing and so we all knew where everything was when it came to implementing the front-end. These days included making the recipe and review schemas with a few seeded recipes so that we had some content to work with whilst building the front-end.


```
const  reviewSchema  =  new  mongoose.Schema({

owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: 		true },
text: { type: String, maxlength: 400 },
rating: { type: Number, min: 1, max: 5, required: true },
image: { type: String }
}, {
    timestamps: true
})


const  recipeSchema  =  new  mongoose.Schema({
	name: { type: String, required: false, unique: true },
	summary: { type: String, maxlength: 500 },
	vegan: { type: Boolean, required: true },
	vegetarian: { type: Boolean, required: true },
	ingredients: [{ type: String, required: true }],
	time: { type: Number, required: true },
	image: { type: String, required: true },
	cuisine: { type: String, required: true },
	method: [{ type: String, required: true }],
	difficulty: { type: String, required: true },
	serves: { type: Number },
	owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
	reviews: [reviewSchema]
})

```



* Day 4 we began to build the front-end using React JS. We started by planning out the main components we were going to need: nav-bar, login, sign-up, footer, home, auth, image upload, profile, profile-edit, recipe-edit, recipe-new, search-recipe, single-recipe, review-edit, review-new, stars, user-profile.

We started by focusing on nav-bar, reviews, login, and homepage. Our focus for this day was on the nav-bar and the login form.

<img width="1726" alt="Screenshot 2021-11-22 at 16 50 49" src="https://user-images.githubusercontent.com/86430160/143270399-b784f8d6-c283-4e67-b96f-bcfd87a1d5b0.png">


<img width="1726" alt="Screenshot 2021-11-22 at 17 25 31" src="https://user-images.githubusercontent.com/86430160/143269508-9c7f94c4-9dca-4085-bfdc-cc61fc9fa4c8.png">





* Day 5 - I was responsible for building the homepage, including virtual fields for the average ratings and filter methods for all recipes, nav-bar functional and connected the built components to the links and added a carousel for the homepage. I also added some content introducing the webpage and its features.



<img width="1726" alt="Screenshot 2021-11-22 at 16 49 55" src="https://user-images.githubusercontent.com/86430160/143269599-c419e068-6bf8-4edd-bd51-5edd96ecc3f7.png">


<img width="1726" alt="Screenshot 2021-11-22 at 16 52 10" src="https://user-images.githubusercontent.com/86430160/143269677-ee679d30-9700-4f48-a79f-53107665ff2e.png">



* Day 6 - I was also responsible for creating the ‘All Recipes’ page. I used filter and map methods in order to filter in different ways what recipes you would want to look at, filter such as:
* Diets: all diets, vegetarian and vegan.
* Difficulty: easy, medium and hard.
* Average rating: from 1 ⭐️  to 5 ⭐️⭐️⭐️⭐️⭐️.

I also used a search bar to filter the name of the recipes, designed the cards and filtered the card to only show 12 recipes at time, unless you click on the ‘Load more’ button which would show the next 12 recipes.

Vez and Jason were responsible for creating the authentication and the secure route such as login, signup and review components. The add reviews section was also added to the bottom of each recipe page. With the authentication sorted, Vez made sure the nav-bar was also made to change when someone logins so they could see logout and create a recipe.


```
<Link  className="navLink"  to='/'>    
    <div  className="logo-container">    
	    <img  src={logo}  alt=""  className="logo"  />    
    </div>    
</Link>    


<ul>              
    {    
    userIsAuthenticated() ?    
	    <ul  className="nav-links-authenticated">    
		    <li  className="navLink"  onClick={handleLogout}>Logout</li>    
		    <li  className="navLink"><Link  to='/addRecipe'>Add Recipe</Link></li>    
		    <li  className="navLink"><Link  to='/SearchRecipe'>All Recipes</Link></li>    
		    <li  className="navLink"><Link  to='/profile'>My Profile</Link></li>    
	    </ul>    
	    :    
	    <ul  className="nav-links-authenticated">    
		    <li  className="navLink"><Link  to='/Login'>Login</Link></li>    
		    <li  className="navLink"><Link  to='/SignUp'>SignUp</Link></li>    
		    <li  className="navLink"><Link  to='/SearchRecipe'>All Recipes</Link></li>    
	    </ul>    
	 }             
	</ul>
  </div
</div>
```


I added the star rating so you could see what the average star ratings for each recipe were.



* Day 7 - We started by designing the all recipes page together by screen sharing photoshop. Then focused on searching for all recipes using the filter 

    
![homemade_all_recipes](https://user-images.githubusercontent.com/86430160/143269806-cf11b84c-1428-42fe-972c-1c12580c31cb.png)



    I was responsible for actually build the all recipe page implementing all the features 


    Vez added the functionality to the forms for creating recipes and adding reviews following the same format as the other forms.

* Day 8 - We screen shared to begin making the website responsive for different screen sizes. We completed the review component and I added the star rating function. Login and signup errors were added. General css was tidied up and added in, better quality photos were added in.
* On day 9 we added some final functionality. On each recipe page the recipe displayed the owner of the recipe which led to the owner's profile. We added a way for people to change their name and profile image. We added in some more seeds to fill out the site some more.


<img width="1726" alt="Screenshot 2021-11-22 at 17 31 34" src="https://user-images.githubusercontent.com/86430160/143269981-3d029da3-84d4-4cc2-830e-a7a1edecf45e.png">




## Key learnings:



* Learned how to use the carousel.
* Learned how to implement front-end only pagination using react state.
* Learned how to input a rating using the stars library.


## Challenges:



* Finding and using a specific library when needed.
* Making it responsive for mobile.
* Solving merge conflicts when pushed to git.


## Future improvements:



* Make it responsive for tablet size.
* Make the menu as hamburger menu for mobile and tablet screen size.
* Add a video field.

## Bugs:

* The downloaded images have to be a specific size otherwise it won’t load.
