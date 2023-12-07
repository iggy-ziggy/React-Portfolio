import { useEffect, useState } from "react";

function Messenger() {
    const message = '// oh, hi there. thanks for stopping by...';
    const [displayedMessage, setDisplayedMessage] = useState('');

    useEffect(() => {
        displayLetters();
    }, []);

    const displayLetters = () => {
        for (let i = 0; i < message.length; i++) {
            setTimeout(() => {
                setDisplayedMessage((prevMessage) => 
                prevMessage + message[i]);
            }, 100);
        }
    };

    return (
        <div className="messenger">
            <div id="message-container">
                <p id="display-message">{displayedMessage}</p>
            </div>
        </div>
    );
}

export default Messenger;