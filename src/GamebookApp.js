import React from "react";
import { UserContext } from "./hooks/UserContext";
import { MainAppRouter } from "./routers/MainAppRouter";

const username = ""
const password = ""

export const GamebookApp = () => {

    return(
        <>
            <UserContext.Provider value = {
                {
                    username,
                    password
                }
            }>
                <MainAppRouter/>
            </UserContext.Provider>
        </>
    )
}
