**Insight News** is a responsive and dynamic news web application developed using **ReactJS** and the **News API**, delivering real-time news from across the globe. Whether you're interested in business, politics, sports, entertainment, science, or technology, Insight News covers it all. 

## Features

- **React Functional Components**: The application is built using React functional components, ensuring maintainable and modern code practices.
  
- **React Router Integration**: Smooth navigation between different news categories is achieved using React Router, providing users with a seamless browsing experience.

- **Light/Dark Mode Toggle**: To enhance user experience, a light/dark mode toggle has been implemented. Users can switch between themes for more personalized browsing.

- **Infinite Scroll**: For continuous news updates, Infinite Scroll is integrated, allowing users to load more articles effortlessly as they scroll down.

- **Lifecycle Hooks**: The app uses the `useEffect` hook to fetch the latest news articles upon component mount, ensuring timely and efficient data retrieval.

- **PropTypes for Validation**: PropTypes are implemented for type-checking props, ensuring that the right types of data are passed to each component, which increases reliability.

- **Async/Await for API Calls**: Data fetching from the News API is handled using `async/await` to maintain readability and manage asynchronous operations smoothly.
- **LLM-based Article Summarization**: The application integrates an LLM API (like Hugging Face) to summarize news articles. Users can click on the "Show Summary" button to display a brief summary of each news article, improving content accessibility and saving time for users who want quick insights.

## Future Enhancements

While Insight News offers a great browsing experience, several features can further improve it, such as:

- **News from Different Regions**: Extend the app's functionality by providing news options from multiple countries to cater to a broader audience.

- **Personalized News**: Implement user preferences so readers can receive tailored content based on their interests and preferred categories.

## Screenshots 
<img width="1280" alt="Screenshot 2024-10-19 at 10 35 07 AM" src="https://github.com/user-attachments/assets/92abb0f8-223d-44ce-bd98-b897de1053dd">

![1393EC1D-0FA5-49A4-A3C6-DF2365650E25_1_201_a](https://github.com/user-attachments/assets/073936ca-cc13-48c2-8169-55579cc6a6bc)

<img width="1280" alt="Screenshot 2024-11-12 at 6 08 53 PM" src="https://github.com/user-attachments/assets/90425e3a-1f17-4822-87b9-7623d54e3630">


## How to Run the Project Locally

To run **Insight News** on your local machine, follow these steps:

- **Prerequisites**:
  - Install [Node.js](https://nodejs.org/) and npm (comes with Node.js).

- **Clone the Repository**:
  - Clone the project using the following command:
    ```bash
    git clone https://github.com/Sanjana0712/Insight-News.git
    ```

- **Navigate to the Project Directory**:
  - Move into the project folder:
    ```bash
    cd Insight-News
    ```

- **Install Dependencies**:
  - Install the required packages:
    ```bash
    npm install
    ```

- **Set Up News API Key**:
  - Create a `.env` file in the root of the project.
  - Add the following to the `.env` file:
    ```bash
    REACT_APP_NEWS_API=your_api_key_here
    ```
  - Replace `your_api_key_here` with your [NewsAPI](https://newsapi.org/) key.

- **Run the Application**:
  - Start the development server:
    ```bash
    npm start
    ```

- **Build the Application for Production**:
  - To build the project for production:
    ```bash
    npm run build
    ```
  - This will create the optimized production build in the `build/` folder.

---

By following these steps, you'll be able to run **Insight News** locally on your machine.

