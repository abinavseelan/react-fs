const React = require('react');
const express = require('express');
const { render, createFSElement } = require('./FS');
const fs = require('fs');

const app = express();

const Project = ({ name }) => (
    <folder name={name}>
        <folder name='client'>
            <folder name='assets' />
            <folder name='css' />
            <folder name='js' />
            <file name='index' extension='.html'>
                {
                    '<html><head><title>Sample</title></head><body</html>'
                }
            </file>
        </folder>
    </folder>
)

app.post('/:projectName', async (req, res) => {
    render(
        <Project name={req.params.projectName} />,
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