This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Restaurant and Café Search Application
## Overview

We are developing an application using Next.js that allows users to search for places and view nearby restaurants and cafes. By integrating the Google Places API, we will provide detailed information about these places, including reviews and ratings.

## Motivation

- **Next.js Routing**: Next.js offers simple and efficient routing, perfect for our project.
- **Server-Side API Requests**: Google Places API requires requests to be made from the server-side to protect the API key and enhance security.
- **Server-Side Design**: Next.js is optimized for server-side rendering, improving performance and SEO.
- **Client-Side Alternatives**: If necessary, we can use the JavaScript kit for the client-side or a proxy to handle API requests.

## Requirements

### Core Features:
- **Responsive Design**: The application will be mobile-friendly and work well on various devices.
- **Search Functionality**: Users can search for specific places.
- **Filtering**: Ability to filter search results based on different criteria.
- **Google Places API Integration**: Fetch and display data from the Google Places API.
- **Favorites Storage**: Users can save and manage their favorite places.

### Additional Features (Nice to Have):
- **Map Integration**: Display places on an interactive map.
- **Reviews and Ratings**: Show user reviews and ratings for restaurants and cafes.
- **Accessibility and Preferences**: Information on accessibility and vegan-friendly options.
- **Recommendation Algorithm**: A simple algorithm to recommend places based on user preferences.
- **Sorting Buttons**: Ability to sort results based on different criteria.
- **Exploration of Google Solutions and APIs**: Explore additional solutions and APIs from Google if time permits.

## Objective

The goal of this project is to create a robust and intuitive application that enhances the user experience of searching for and finding restaurants and cafes. Leveraging the power of Next.js and the Google Places API, we aim to deliver a fast and secure service with high usability and functionality.
