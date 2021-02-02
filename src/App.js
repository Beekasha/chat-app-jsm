import { ChatEngine } from 'react-chat-engine';
require('dotenv').config()


const App = () => {

    return (
        <ChatEngine
            height='100vh'
            projectID={process.env.REACT_APP_PROJECT_ID}
            userName='BkAdmin'
            userSecret='password'

        />
    )
}

export default App;