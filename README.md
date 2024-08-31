# JetStack

JetStack is a habit-forming web application designed to help users build and sustain enduring habits based on principles from *Atomic Habits* by James Clear. The app allows users to create and track habits, visualize their progress, and receive motivational feedback.

## Project Goals

- **Habit Creation**: Users can create new habits and set goals.
- **Habit Tracking**: Track the progress of habits and maintain streaks.
- **Habit Stacking**: Receive suggestions for stacking habits based on user data.
- **Progress Visualization**: Visualize progress over time with charts and graphs.

## Technologies Used

- **Frontend**: 
  - **React.js**: For building a dynamic and responsive user interface.
  - **Tailwind CSS**: For custom and efficient styling.
  - **D3.js/Chart.js**: For data visualization.

- **Backend**: 
  - **Node.js with Express**: For RESTful API development.
  - **Firebase**: For real-time database and user authentication.

- **Database**: 
  - **Firestore (Firebase)**: For storing user data and tracking logs.

- **Authentication**: 
  - **Firebase Authentication**: For handling user sign-up/sign-in.

- **Deployment**: 
  - **Vercel/Netlify**: For frontend deployment.
  - **Firebase Hosting**: For seamless integration with Firebase services.

## Getting Started

### Cloning the Repository

```
git clone https://github.com/yourusername/jetstack.git
cd jetstack

npm install
```
### Setting Up Environment Variables

Create a `.env` file in the root directory and add your Firebase credentials:

```
JETSTACK_FIREBASE_API_KEY="your-api-key"
JETSTACK_FIREBASE_AUTH_DOMAIN="your-auth-domain"
JETSTACK_FIREBASE_PROJECT_ID="your-project-id"
JETSTACK_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
JETSTACK_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
JETSTACK_FIREBASE_APP_ID="your-app-id"
```
### Running the Application

```npm start```


### Running Tests
```npm test```


### Contributing
Contributions are welcome! Please follow the coding style guidelines and ensure tests pass before submitting pull requests.

