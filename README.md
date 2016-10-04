# Socket.io Chat

Socket.io Chat is a chat application that uses [socket.io](socket.io) to let the application update in real time. I made this application in an effort to familiarize myself with socket.io so that I can get started on developing a socket.io tester. After logging in users choose a display name and can see who else is in chat. They can send messages that everyone else can see. Users are also notified when users connect and disconnect from the chat.

Planned features include:

  * show a "is typing..." notification
  * add private chat rooms with just one or more other people
  * implement a true log in system instead of just choosing a display name every time
  * store messages in a database for persistent storage

To run this project locally:

```
git clone https://github.com/Kinzeng/socket.io-chat.git
cd type-trainer
npm install
npm start
```

Finally, visit [http://localhost:8080](http://localhost:8080). You may open multiple tabs to simulate multiple users logging in.
