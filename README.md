# 📸 React Image Carousel

> A React app that displays an image carousel with next/previous navigation, practicing props, defaultProps, state, and click events.

[![React](https://img.shields.io/badge/react-18%2B-blue)](https://reactjs.org/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Testing](#testing)  
7. [Contributing](#contributing)  
9. [Contact](#contact)  

---

## 🌟 About

This exercise features a simple image carousel component in React. You can navigate forward and backward through a set of images by clicking arrow buttons. The assignment focuses on:

- Passing props and defaultProps to components  
- Managing component state for the current image index  
- Handling click events for navigation arrows  

---

## ✨ Features

- **Next/Previous Navigation**: Click arrows to move through the image array.  
- **Props & defaultProps**: Carousel accepts an array of image URLs via props, with sensible defaults.  
- **State Management**: Tracks current image index in component state.  
- **Edge Behavior**: (Part of the assignment) Arrow buttons hide appropriately at the ends of the image list.  

---

## 🛠 Tech Stack

- **Library:** React 18+ (functional or class components)  
- **Testing:** Jest & React Testing Library  
- **Build Tool:** Create React App or Vite  
- **Styling:** CSS 

---

## 🏁 Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm (bundled with Node.js) or Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/carousel.git
cd carousel

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm start
# or
yarn start
```
---
### 📖 Usage

- Click the › (right arrow) to advance to the next image.

- Click the ‹ (left arrow) to go back to the previous image.

- (After fixing edge behavior) The left arrow hides on the first image; the right arrow hides on the last.
---
### 🧪 Testing

1. Smoke tests for both the Card and Carousel components.

2. Snapshot tests for both components to catch unintended markup changes.

3. Bug tests for:

    - Left arrow navigation moving backwards correctly.

    - Arrow visibility at the ends of the image array.
      
```bash
npm test
# or
yarn test
```
## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com
