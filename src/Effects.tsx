import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);

    useEffect(() => {
        const setMessageCallback = (msg: number) => setMessage(msg);
        subscribe(props.sourceId, setMessageCallback);
        return () => {
            unsubscribe(props.sourceId, setMessageCallback);
            setMessage(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
