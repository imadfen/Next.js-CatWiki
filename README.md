# Next.js CatWiki

CatWiki is a full-stack website that helps people find cats breeds and their details, to find the best for them.

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Demo

Check out the live demo of the application: [Demo Link](http://catwiki-ten.vercel.app/)


## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering and routing.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.

## Installation

Follow these steps to get your project up and running:

1. **Clone the repository:**
```bach
git clone https://github.com/imadfen/Next.js-CatWiki.git
```
   
2. **Navigate to the project directory:**
```bach
cd Next.js-CatWiki
```
3. **Create a .env file in the root of your project and set it as follow:**

```env
NEXT_PUBLIC_API_KEY=your_api_key_from_https://thecatapi.com/
NEXT_PUBLIC_BREEDS_API_URL='https://api.thecatapi.com/v1/breeds?'
NEXT_PUBLIC_IMAGES_API_URL='https://api.thecatapi.com/v1/images/search?'
```

4. **Install dependencies:**
```bach
npm install
# or
yarn install
```

## Usage

To use the application, follow these steps:

1. **Run the development server:**
```bach
npm run dev
# or
yarn dev
```

2. **Open your browser:**

Visit http://localhost:3000 to see your application in action.
