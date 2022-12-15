# React Studio

Use this stencil code to get started!

Make sure you're signed into your GitHub account (either real or anonymous is fine for this).

If you do not follow these three steps, your react app WILL NOT DEPLOY CORRECTLY!

1) Start to copy the stencil by clicking the green **"Use this template"** button above.

2) In the configuration menu, set the name to `react-studio` and **make it Public**

3) Lastly, you MUST **check "Include all branches"**

Then, click "create repository from template" to create the repo in your github account. You can now clone the repository onto your local computer and open it in your editor of choice.

## Getting started

First, make sure you install all dependencies by running `npm install` in the project directory.

Then, in the project directory, you can run `npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

You may also see any lint errors in the console.

## Deploying

We've included a GitHub Actions workflow that will automatically deploy your React app to GitHub Pages every time you push to the `main` branch. You can visit your site by visiting https://\<your GitHub username\>.github.io/react-studio

Also there may be some latency with deploying, so it may take around 5 minutes after a commit to main before the website properly works.
_____________________________________________________________
README Question Answers

1. The goal of the application is to provide a way for users to view the items available at the most prestigeous bakery in Providence: Scripts' Scones and Java, and favorite the items that they enjoy the most (or want to buy in the future). This website allows users to sort items by when they should be eaten (dessert or Breakfast), see items in their price range, and sort items based on how expensive they are.
2. My app consists of 3 components, the main App which houses the item list and core functionality to show the item grid, a Side-pane component that displays and collects data from the filters and sorting buttons, and components for each item. The main app component reads in the BakeryItem data and passes it into each Item so that it can be displayed accurately. AddToCart and RemoveFromCart functions are also passed into Items so that those buttons are clicked in the item, the cart can be updated. Item State is stored in its properties, which can be modified in the Item component and then the resulting item can be passed back to the main app component through the cart functions given in Item props. 

For the side-bar, functions and the variables that they rely on are passed in as props, and the HTML for the necesary buttons linked the the passed-in functions is returned. The main app contains the logic necesary to take the returned input information from the side-bar and manipulate the item grid to display the correct items, keeping track of the item state to make changes to the items that can be reflected on the visual Item grid.

3. Learnability: The app has big bold headings for each section of the side-bar (filtering, sorting, favorites) so that it is easy for users to find and remember the functionality of these features. Sub-headings for the different filtering methods and sorting mechanisms are also smaller than the main headings, making the layout of the side-bar more intuitive.
Effency: Once an item is added to favorites, the add button is greyed out in order for the usre to efficiently know that they can't re-add items to favorites, but can now remove the ones they added. 
Accessibility: I ensured that my website has high contrast and that all form elements are labeled for screen reader users. 
