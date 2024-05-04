import { ChatEngine } from "react-chat-engine"
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {

  if (localStorage.getItem('userName')) {
    return <LoginForm />
  }
  return (


    <ChatEngine
      height="100vh"
      projectID="afb6f735-4209-4f87-8f2c-f6e636449098"
      userName="Gauri"
      userSecret="  "
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
