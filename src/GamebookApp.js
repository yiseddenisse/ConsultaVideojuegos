import React, {useState} from "react";
import { UserContext } from "./hooks/UserContext";
import { MainAppRouter } from "./routers/MainAppRouter";

export const GamebookApp = () => {
    const [user, setUser] = useState({});

    return(
        <>
            <UserContext.Provider value = {
                {
                    user,
                    setUser
                }
            }>
                <MainAppRouter/>
            </UserContext.Provider>
        </>
    )
}
