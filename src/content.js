const reactAppContent = `
import React from 'react';

const App = () => (
    <h1>React Meetup!</h1>
);

export default App;
`;

const reactIndexContent = `
import React from 'react';
import { render } from 'react-dom';

render(<App />, document.getElementById('root'));
`;

const basicIndexContent = `
<html>
    <head>
        <title>Demo Project</title>
    </head>
    <body>
        <h1>React Meetup!</h1>
    </body>
</html>
`

module.exports = {
    react: {
        appContent: reactAppContent,
        indexContent: reactIndexContent,
    },
    basic: {
        indexContent: basicIndexContent
    }
}