import radarimg from './images/radar_radar_equipment_navigation.jpg';
import tradeimg from './images/analysis_trading_forex_515243.jpg';
import pythonimg from 'images/python_png.png' 
import cppimg from 'images\hello_world_c_png.jpg'
import matlabimg from 'images\matlab_logo_png.jpg'
import bashimg from 'images\programming_html_code_coding.jpg'
import jsimg from 'images\code_coding_web_development.jpg'
import dockerimg from 'images\docker.png'
import gitlabimg from 'images\gitlab.png'
import awsimg from 'images\aws.png'
import tlimg from 'images\techlead.jpg'
import pmimg from 'images\pm.png'

const smdata = 
    [
        {
            header: "Subject Matter",
            descrip: "The lazy fox jumps over the quick dog"
        },
        [{
            id: 1,
            cardHeaderName: "Sensors",
            content: "[Sensors help us automate the perception of our environments. My work spans many sensor modalities.]",
            dropdowns: [
                {iter: "0", msg: "Sensor Phenomenology"},
                {iter: "1", msg: "Sensor Fusion"},
                {iter: "2", msg: "Environmental Domains"}
            ],
            childimage: radarimg
        },
            {
                id: 2,
                cardHeaderName: "Stock Market",
                content: "[Predicting future price movement seems like a fool's errand. My analysis seeks to determine whether the Efficient Markets Theory is valid at short time scales.]",
                dropdowns: [
                    {iter: "0", msg: "Technical Analysis"},
                    {iter: "1", msg: "Fundamental Analysis"},
                    {iter: "2", msg: "News/Social Media Sentiment Analysis"}
                ],
                childimage: tradeimg
            }]
    ];

const codedata = 
    [
        {
            header: "Code",
            descrip: "The lazy fox jumps over the quick dog"
        },
        [{
            id: 1,
            cardHeaderName: "Python",
            content: "[Python]",
            dropdowns: [
                {iter: "0", msg: "Useful Packages"},
                {iter: "1", msg: "Use Cases"}
            ],
            childimage: pythonimg
        },
            {
                id: 2,
                cardHeaderName: "C++",
                content: "[C++]",
                dropdowns: [
                    {iter: "0", msg: "Useful Packages"},
                    {iter: "1", msg: "Use Cases"}
                ],
                childimage: cppimg
            },
            {
                id: 3,
                cardHeaderName: "MATLAB",
                content: "[MATLAB]",
                dropdowns: [
                    {iter: "0", msg: "Use Cases"}
                ],
                childimage: matlabimg
            },
            {
                id: 4,
                cardHeaderName: "Bash/Batch",
                content: "[Bash/Batch]",
                dropdowns: [
                    {iter: "0", msg: "Use Cases"}
                ],
                childimage: bashimg
            },
            {
                id: 5,
                cardHeaderName: "Javascript",
                content: "[Javascript]",
                dropdowns: [
                    {iter: "0", msg: "Useful Libraries"},
                    {iter: "1", msg: "Use Cases"}
                ],
                childimage: jsimg
            }]
    ];

const envdata = 
    [
        {
            header: "Environments",
            descrip: "The lazy fox jumps over the quick dog"
        },
        [{
            id: 1,
            cardHeaderName: "Docker",
            content: "[Docker]",
            dropdowns: [
                {iter: "0", msg: "Use Cases"}
            ],
            childimage: dockerimg
        },
        {
            id: 2,
            cardHeaderName: "GitLab",
            content: "[GitLab]",
            dropdowns: [
                {iter: "0", msg: "Use Cases"}
            ],
            childimage: gitlabimg
        },
        {
            id: 3,
            cardHeaderName: "AWS",
            content: "[AWS]",
            dropdowns: [
                {iter: "0", msg: "Useful Services"},
                {iter: "1", msg: "Use Cases"}
            ],
            childimage: awsimg
        }]
];

const trdata = 
    [
        {
            header: "Team Roles",
            descrip: "The lazy fox jumps over the quick dog"
        },
        [{
            id: 1,
            cardHeaderName: "Technical Lead",
            content: "[Technical Lead]",
            dropdowns: [
                {iter: "0", msg: "Experience"}        
            ],
            childimage: tlimg
        },
            {
                id: 2,
                cardHeaderName: "Project Manager",
                content: "[Project Manager]",
                dropdowns: [
                    {iter: "0", msg: "Tasks"},
                    {iter: "1", msg: "Role"}
                ],
                childimage: pmimg
            }]
    ];

export default { smdata, codedata, envdata, trdata }
