# Aivora - Next-gen Conversational AI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen?logo=render&logoColor=white)](https://aivora-5ole.onrender.com/)
[![React](https://img.shields.io/badge/React-18-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white)](https://socket.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

Aivora is a cutting-edge conversational AI platform designed for seamless, intelligent interactions. Built with advanced features like long-term memory via vector databases and real-time chat capabilities, Aivora delivers fast, secure, and reliable AI conversations available 24/7 for teams and creators.

![Aivora Interface](./Frontend/public/logo.png)

## ✨ Features

### Core Capabilities
- 🔐 **Secure Authentication System**
  - JWT-based authentication
  - HTTP-only cookies for enhanced security
  - Protected routes and API endpoints

- 💬 **Real-time Chat**
  - Socket.io integration for instant messaging
  - Typing indicators
  - Message history and persistence
  - Real-time updates

### Memory & Context
- 🧠 **Long-term Memory**
  - Pinecone vector database integration
  - Document and chat history embedding
  - Contextual conversation retrieval

- 📝 **Short-term Memory**
  - Immediate context awareness
  - Conversation state management
  - User session tracking

### AI Integration
- 🤖 **Gemini AI Integration**
  - Natural language processing
  - Context-aware responses
  - Customizable AI behavior

### User Experience
- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark theme
  - Intuitive navigation
  - Mobile-friendly interface

## 🛠️ Tech Stack

### Frontend
- React 18
- Redux Toolkit (State Management)
- Vite (Build Tool)
- Socket.io-client (Real-time Communication)
- React Router v6

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB (Database)
- Pinecone (Vector Database)
- Google's Gemini AI

## 🚀 Installation & Setup

### Prerequisites
- Node.js 20 or higher
- MongoDB
- Pinecone Account
- Gemini API Key

### Environment Variables
Create a \`.env\` file in the backend directory:
\`\`\`env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
\`\`\`

### Installation Steps

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/aivora.git
cd aivora
\`\`\`

2. Install Backend Dependencies
\`\`\`bash
cd Backend
npm install
\`\`\`

3. Install Frontend Dependencies
\`\`\`bash
cd Frontend
npm install
\`\`\`

4. Start the Backend Server
\`\`\`bash
cd Backend
npm run dev
\`\`\`

5. Start the Frontend Development Server
\`\`\`bash
cd Frontend
npm run dev
\`\`\`

<!-- ## 📚 API Documentation

### Authentication Endpoints

\`\`\`javascript
POST /api/auth/register
// Register a new user
{
  "email": "user@example.com",
  "password": "password123"
}

POST /api/auth/login
// Login existing user
{
  "email": "user@example.com",
  "password": "password123"
}

POST /api/auth/logout
// Logout user and clear cookies

GET /api/auth/me
// Get current user information
\`\`\`

### Chat Endpoints

\`\`\`javascript
GET /api/chat
// Get all chats for current user

POST /api/chat
// Create a new chat
{
  "message": "Hello, Aivora!"
}

GET /api/chat/:chatId
// Get specific chat history

DELETE /api/chat/:chatId
// Delete a specific chat
\`\`\` -->

## 🔥 Usage

1. Register or Login to access the chat interface
2. Create a new chat using the "New Chat" button
3. Start conversing with Aivora
4. Your conversations are automatically saved and can be accessed later
5. Use the sidebar to switch between different chat sessions

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request


## 🌟 Acknowledgments

- Google Gemini for AI capabilities
- Pinecone for vector database services
- MongoDB for database services
- The amazing open-source community

---

<p align="center">Made with ❤️ by Tushar Rai</p>
