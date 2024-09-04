<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript logo"></a> <a href="https://svelte.dev"><img src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" alt="svelte logo"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html logo"/></a> <a href="https://kit.svelte.dev"><img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white" alt="svelte kit logo"></a> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css logo"/></a> <a href="https://firebase.google.com"><img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="firebase logo"></a> <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind logo" /></a> <a href="https://axios-http.com"><img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" alt="axios logo" /></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
<h1>Daily Dish</h1>
  <h2 align="center">Meal Planner</h2>
  <h3 align="center">by Event Handlers</h3>

  <p align="center">
    <br />
    <a href="https://github.com/coderRaph1/FE---Meal-Planner"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://thedailydish.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/coderRaph1/FE---Meal-Planner/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/coderRaph1/FE---Meal-Planner/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#hosting">Hosting</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Daily Dish Backend Screen Shot][product-screenshot]

This app is the product of our [Northcoders][NC-url] final group project. The backend API can be found in this [repo][BE-repo-url].

This full stack app:

- Is built primarily with Svelte and SvelteKit
- Utilises Google OAuth2.0 for user logins and signups 
- Accesses a Firebase Firestore using a handmade API

### Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript logo"></a> <a href="https://svelte.dev"><img src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" alt="svelte logo"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html logo"/></a> <a href="https://kit.svelte.dev"><img src="https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=Svelte&logoColor=white" alt="svelte kit logo"></a> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css logo"/></a> <a href="https://firebase.google.com"><img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" alt="firebase logo"></a> <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind logo" /></a> <a href="https://axios-http.com"><img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" alt="axios logo" /></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. If you haven't already, visit our guide for to create your own backend API [here](https://github.com/nldblanch/event-handlers-meal-planner-BE/blob/main/README.md), including creating your own database.
2. Clone the repo
   ```sh
   git clone https://github.com/coderRaph/FE---Meal-Planner.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Add a .env.development file as guided in our backend [guide](https://github.com/nldblanch/event-handlers-meal-planner-BE/blob/main/README.md#installation)

    Make sure you add the FIREBASECONFIG environment variable, except this time add it as
   ```js
   VITE_FIREBASECONFIG=""
   ```
   This allows Vite to hook your environment variable when it's building.

6. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Hosting

It's very easy to get this site running on your local machine. Simply run
```js
npm run dev
```
But how about your own hosted website?

#### 1. Sign up for Netlify 

There are many ways to host a website, but we used Netlify. Create yourself an account and connect your GitHub profile.

#### 2. Add a new site

Once you have done that, navigate to the Sites tab and click Add new site. Import an existing project - your GitHub project you just created! Everything will be setup already - most importantly though, check the branch is 'main' and the build command is npm run build.

#### 3. Add environment variables

Add your environment variable from your Front-end repo into Netlify's environment variables section. It will give you the option to copy and paste the contents of a .env file. 

#### 4. Deploy

Deploy your project and wait for it to finish building. That's it! You're done. You have your own site, and you can redeploy it any time you make changes. Alternatively, you can modify the settings of your Netlify site to deploy every time you push changes to your GitHub Main branch. If you do, make sure you make use of branching in Git to avoid pushing anything that could break your live site!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Try adding your own meal to the database!

Or perhaps try searching for a meal on the database.

_For more examples, please refer to the [Documentation](https://github.com/coderRaph1/FE---Meal-Planner)_

### Top contributors:

<a href="https://github.com/coderRaph1/FE---Meal-Planner/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=coderRaph1/FE---Meal-Planner" alt="contrib.rocks image" />
</a>

## Acknowledgments

- [Northcoders][NC-url]
- [Google Calendar API][google-calendar-API]
- [Free Meal API][free-meal-api]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[BE-repo-url]: https://github.com/nldblanch/event-handlers-meal-planner-BE
[NC-url]: https://northcoders.com
[contributors-shield]: https://img.shields.io/github/contributors/coderRaph1/FE---Meal-Planner.svg?style=for-the-badge
[contributors-url]: https://github.com/coderRaph1/FE---Meal-Planner/graphs/contributors
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nathanblanch
[product-screenshot]: https://github.com/user-attachments/assets/a1de4a1c-c0cd-4412-9902-a03d9c31e759
[BE-host]: https://event-handlers-meal-planner-be.onrender.com/api
[google-calendar-API]: https://developers.google.com/calendar
[free-meal-api]: https://www.themealdb.com/api.php