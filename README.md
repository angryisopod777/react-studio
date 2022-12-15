
README Questions

Deployment link: https://angryisopod777.github.io/react-studio/

1. The goal of the application is to provide a way for users to view the items available at the most prestigious bakery in Providence: Scripts' Scones and Java, and favorite the items that they enjoy the most (or want to buy in the future). This website allows users to sort items by when they should be eaten (dessert or Breakfast), see items in their price range, and sort items based on how expensive they are.
2. My app consists of 3 components, the main App which houses the item list state and core functionality to show the item grid, a Side-pane component that displays and collects data from the filters and sorting buttons, and components for each item. The main app component reads in the BakeryItem data and passes it into each Item so that it can be displayed accurately. AddToCart and RemoveFromCart functions are also passed into Items so that those buttons are clicked in the item, the cart can be updated. Item State is stored in its properties list, which can be modified in the Item component and then the resulting item can be passed back to the main app component through the cart functions given in Item props. 

For the side-bar, functions and the variables that they rely on are passed in as props, and the HTML for the necessary buttons and formatting are returned and added to the main app through the passed-in functions. The main app contains the logic necesary to take the returned input information from the side-bar and manipulate the item grid to display the correct items, keeping track of the item state to make changes (filter, sort, ect) to the list of currently visible items.

3. Learnability: The app has bold, informative headings for each section of the side-bar (filtering, sorting, favorites) so that it is easy for users to find and remember the functionality of these features. Sub-headings for the different filtering methods and sorting mechanisms are also smaller than the main headings, making the layout of the side-bar more intuitive and easy to navigate. Radio buttons are used for filtering by price so users know they can only select one action.

Efficiency: Once an item is added to favorites, the add button is greyed out in order for the user to efficiently know that they can't re-add items to favorites, but can now remove the ones they added. 

Accessibility: I ensured that my website has high contrast and that all form elements are labeled for screen reader users. 
