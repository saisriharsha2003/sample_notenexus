# NoteNexus

A **collaborative note-taking application** where users can register, log in, and manage their notes with privacy controls. Users can add, edit, view, and delete notes based on visibility settings (Public/Private). The platform ensures that only note owners can delete their private notes.

---

## Project Overview

**NoteNexus** is designed to simplify collaborative note management with the following key features:
- **User Authentication**: Secure registration and login system.
- **Home Page**: A personalized welcome screen with a navigation bar.
- **Add Notes**: Create notes with visibility options (`Public` or `Private`).
- **View Notes**: Displays public notes from all users and private notes of the current user.
- **Edit and Delete Notes**: Edit or delete notes with ownership-based access control.
- **Responsive Design**: Accessible and user-friendly across devices.

---

## Steps to Set Up and Run the Code

### Prerequisites:
- Ensure you have the following installed:
  - **Node.js** (v14+ recommended)
  - **MongoDB** (local or hosted)

### 1. Clone the Repository
```bash
git clone <repository_url>
cd NoteNexus
```

### 2. Install Dependencies

- Run the following command to install all required packages:

```bash
cd note-nexus-frontend
npm install
```

```bash
cd note-nexus-backend
npm install
```
  
### 3. Configuring Environment Variables

- Create a .env file in note-nexus-backend with the following values:

```bash
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret key>
```

### 4. Start the Application

```bash
cd note-nexus-frontend
npm start
```

```bash
cd note-nexus-backend
npm start
```

### 5. Access the Application

- Open http://localhost:3000 in your browser to use the app.

