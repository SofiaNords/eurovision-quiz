<h1 align="center">Eurovision Quiz</h1>

[View the live project here.](https://sofianords.github.io/eurovision-quiz/)

The Eurovision Quiz is a web application where users can test their knowledge about the Eurovision Song Contest. Through a series of engaging questions, participants can challenge themselves on Eurovision history. Whether you’re a seasoned Eurovision fan or a curious newcomer, this quiz provides an entertaining way to explore the world of Eurovision.

<h2 align="center"><img src="assets/images/responsive-eurovision-quiz.jpg"></h2>

## User Experience (UX)

-   ### User stories

    -   #### User goals

        1. Start the Quiz Effortlessly:
            - Users can seamlessly begin the quiz without any need for explicit instructions. The intuitive interface guides them through the process.
        
        2. View Performance Scores and Feedback:
           - Participants receive their quiz scores, enabling them to assess   their performance.
            - Clear feedback indicates whether their answer is correct or incorrect.
           -  If a user answers incorrectly, the correct answer is provided, helping them learn from their mistakes.
        3. Unlimited Retries:
            - Users enjoy the freedom to retake the quiz as many times as they desire. Whether aiming for improvement or simply having fun, unlimited retries enhance the user experience.

        4. Costumized Feedback Based on Performance:
            - Depending on how the user performs, the feedback will be costumized.

-   ### Design
    -   #### Layout
        - The 'Flex-box Layout Module' is used to make the layout easier, allowing it to be flexible and responsive. https://www.w3schools.com/css/css3_flexbox.asp
        - Using box-sizing:border-box property as a general style the elements are sized in a more intuitive way.
        https://www.w3schools.com/csS/css3_box-sizing.asp
        
    -   #### Colour Scheme
        - I extracted the colors from the image below, which features the Eurovision Song Contest. The text elements and body have a black background (#000000), while the ‘big-box’ background color is Hollywood Cerise (#FF01A3). The 'answer-buttons' are yellow (#FBC004). The confetti is blue (#0A2DE1) and yellow (#FBC004).

            <img src="assets/images/eurovision-color.jpg">   

            <img src="assets/images/color-scheme.jpg">  

    -   #### Typography
        -   The 'Protest Riot' is font used for the 'Eurovision Quiz!' heading while 'Sans-serif' is used for other content and also serving as the fallback font.

            <img src="assets/images/typography.jpg">

    -   #### Wireframes

        #### Mobile

        <img src="assets/images/wireframe-mobile.jpg">
        
        #### Tablet

        <img src="assets/images/wireframe-tablet.jpg">
        

        #### Laptop

        <img src="assets/images/wireframe-laptop.jpg">



## Features

- Start quiz

    <img src="assets/images/start-quiz.jpg">

    The first question is visible when the user enters the website. The question number and score is reseted to 0 and the 'next-button' is hidden. 

- Correct vs Incorrect answer

    <img src="assets/images/correct-incorrect-answer.jpg">

    If the user select the correct answer the background colour of the button turns green and the score increments. 
    
    If the user select the incorrect answer the backgroundcolour of the button turns red and the background colour of the button with the correct answer turns green. 
    
    When an answer is selected all the 'answer-buttons' are disabled.

- The 'next-button'

    <img src="assets/images/next-button.jpg">

    When the user select an answer the 'next-button' appears.


- Next question

    <img src="assets/images/question-no-2.jpg">

    When the user click the 'next-button' the quiz resets for the next question and hides the 'next-button' again. The reseteState function removes the 'answer-buttons'.
    
    The next question appears and new buttons are created with the answers related to the current question.



- The end of the quiz

    <img src="assets/images/end-of-quiz.jpg">

    When user click the 'next-button' after question number 10 the resetState removes the 'answer-buttons' and change the innerHTML of the 'next-button' to 'Play Again'.

    The scores shows and depending on how well the user played different messeges displays. If the user scores more then 9 points confetti appears.


- JavaScript Array forEach()

    Since each question has four answer options that should generate buttons with the content from the ‘question'array, I used the array forEach() method.

    https://www.w3schools.com/jsref/jsref_forEach.asp



- Other features

    The page is responsive on all devices...


### Future features

- Info button with pop-up function

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Protest Riot' font.
1. [Git:](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Favicon:](https://favicon.io/)
    - The 'favicon.io' page was used to downoload the musical note, which is used as the favicon on the webpage.


## Validator Testing

The W3C Markup Validator, W3C CSS Validator and JSHint Services were used to validate every page of the project to ensure there were no syntax errors in the project.

#### First Page

<img src="assets/images/html-checker.png">



## Lighthouse Testing

The Lighthouse report from Google Chrome DevTools showed very good results for Performance, Accessibility, SEO and best practises of the site.

#### First Page Desktop

<img src="assets/images/lighthouse-desktop.png">

#### First Page Mobile

<img src="assets/images/lighthouse-mobile.png">

#### News & Events Page Desktop

<img src="assets/images/lighthouse-desktop-news-events.png">

#### News & Events Page Mobile

<img src="assets/images/lighthouse-mobile-news-events.png">

#### Contact Page Desktop

<img src="assets/images/lighthouse-desktop-contact.png">

#### Contact Page Mobile

<img src="assets/images/lighthouse-mobile-contact.png">

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the association.

        1. On the first page, the users are greeted by a large picture of Tjuvkil Beach and a clear navigation bar where the user can navigate to the News & Event and Contact pages. 
        
        2. Below the large picture, there is also a summary of the latest news and an "About-section" where you can read about the bathing association. 
    

    2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find information.

        1. At the top of each page there is a clean navigation bar where each link describes what the page they will end up at clearly.
        
        2. In the summary of the latest news in the first page there are links from each news to the "News and Event-page". 
        
        3. Right under the "About-section" at the first page there is a link named "Become a member" which leads to the contact-page where the visitor can check a checkbox to become a member while sending a message.

    3. As a First Time Visitor, I would like to find links to      social media to learn more about the community in the association and get an idea of what it’s like to be a member.
        1. The footer on all pages contains links to social media where visitors can read about and view pictures of the association, including movies, as well as the community within it. It’s clear that there’s a strong sense of unity and that everyone helps each other to the best of their ability.

-   

### Further Testing

-   The Website was tested on Google Chrome, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone SE, iPhone 11 & Galaxy Fold.
-   A large amount of testing was done to ensure that all pages were linking correctly.



## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/SofiaNords/beach-club)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu..
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Deploy from a branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [Tjuvkil Beach](https://sofianords.github.io/beach-club/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/SofiaNords/beach-club)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   I was inspired by the "Love Running"-project and used similiar code to my navigation menu.
    https://sofianords.github.io/love-running/index.html

### Content

-   All content was written by the developer.


### Media

-   

### Acknowledgements

-   My Mentor, Spencer Barriball, for continuous helpful feedback.

-   Tutor support at Code Institute for their support.
