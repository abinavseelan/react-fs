const React = require('react');
const express = require('express');
const { render, createFSElement } = require('./FS');

const app = express();

const Project = ({ name }) => (
    <folder name={name}>
        <folder name='client'>
            <folder name='assets' />
            <folder name='css' />
            <folder name='js' />
            <file name='index.html'>
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

app.listen(1337, () => {
    console.log('Server running on port 1337');
});