import { useState } from 'react';

const bodyHeaders = () => {

    const [bodyvalues, setBodyvalues] = useState(
    // Insert json here
    [{
        id: 1,
        headerName: "Subject Matter",
        content: "[subject matter body]",
        childimage: ""
    },
    {
        id: 2,
        headerName: "Code",
        content: "[Code body]",
        childimage: ""
    },{
        id: 3,
        headerName: "Environments",
        content: "[ Environment body]",
        childimage: ""
    },{
        id: 4,
        headerName: "Team Roles",
        content: "[Team Roles body]",
        childimage: ""
    }]
    );

    return (
        <main>
            {
                bodyvalues.map((bodyvalue) => (
                    <div>
                        <h1>{bodyvalue.headerName}</h1>
                        <p>{bodyvalue.content}</p>
                        <img src="{bodyvalue.childimage}"/>
                    </div>
                ))
            }
        </main>
    )
}

export default bodyHeaders
