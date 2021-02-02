import { ChatEngine } from 'react-chat-engine';
import './App.css'

require('dotenv').config()



const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID={process.env.PROJECT_ID}
            userName='BkAdmin'
            userSecret='password'

        />
    )
}

export default App;