import { useState } from 'react';
import { subjectMatter } from 'subjectMatter';

const bodyHeaders = () => {

    const [bodyvalues, setBodyvalues] = useState(
    // Insert json here
    [
        {
            id: 1,
            headerName: "Subject Matter",
            descrip: "The lazy fox jumps over the quick dog",
            content: {subjectMatter}
        }
    ]
    );

    return (
        <main>
            {
                bodyvalues.map((bodyvalue) => (
                    <div>
                        <h1>{bodyvalue.headerName}</h1>
                        <p>{bodyvalue.descrip}</p>
                        {bodyvalue.content}
                    </div>
                ))
            }
        </main>
    )
}

export default bodyHeaders
