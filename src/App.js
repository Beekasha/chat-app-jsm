import { ChatEngine } from 'react-chat-engine';
require('dotenv').config()


const App = () => {

    return (
        <ChatEngine
            height='100vh'
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName={process.env.REACT_APP_USER_NAME}
            userSecret={process.env.REACT_APP_USER_SECRET}

        />
    )
}

export default App;