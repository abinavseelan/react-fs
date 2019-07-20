const React = require('react');
const express = require('express');
const { render, createFSElement } = require('./FS');
const fs = require('fs');

const app = express();

const {
    react: {
        appContent: reactAppContent,
        indexContent: reactIndexContent,
    },
    basic: {
        indexContent: basicIndexContent,
    }
} = require('./content');

class BasicProject extends React.Component {
    constructor(props) {
        super(props);

        this.name = `${this.props.name}-${Date.now()}`;
    }
    render() {
        return (
            <folder name={this.name}>
                <folder name='client'>
                    <folder name='assets' />
                    <folder name='css' />
                    <folder name='js' />
                    <file name='index' extension='.html'>
                        {basicIndexContent}
                    </file>
                </folder>
            </folder>
        )
    }
}

class ReactProject extends React.Component {
    constructor(props) {
        super(props);

        this.name = `${this.props.name}-${Date.now()}`;
    }

    render() {
        return (
            <folder name={this.name}>
                <folder name='src'>
                    <folder name='client'>
                        <file name='app' extension='.jsx'>
                            {reactAppContent}
                        </file>
                        <file name='index' extension='.jsx'>
                            {reactIndexContent}
                        </file>
                    </folder>
                </folder>
            </folder>
        );
    }
}

const Project = ({ projectType, name }) => {
    if (projectType === 'react') {
        return (
            <ReactProject name={name} />
        );
    }

    if (projectType === 'basic') {
        return (
            <BasicProject name={name} />
        );
    }
}

app.post('/:type/:projectName', async (req, res) => {
    render(
        <Project name={req.params.projectName} projectType={req.params.type} />,
        './projects'
    );

    return res.sendStatus(204);
});

if (!fs.existsSync('./projects')) {
    fs.mkdirSync('./projects');
}

app.listen(1337, () => {
    console.log('Server running on port 1337');
});