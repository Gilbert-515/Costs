import {MsgSuccess, MsgError } from "./styles";
import { useState, useEffect } from "react";

function Message({type, msg}) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(!msg){
            setVisible(false);
            return;
        }
        setVisible(true);
        setTimeout(() => setVisible(false), 3500);

        return;

    },[msg]);

    let message;
    if(type === 'success'){
        message = (<MsgSuccess> {msg} </MsgSuccess>);
    }
    else{
        message = (<MsgError> {msg} </MsgError>);
    }

    return (<>
            {visible && message}
            </>
    );

}

export default Message;