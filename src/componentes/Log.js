import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";


export const Log = () => {

    const loggedUsername = useContext(UserContext).username
    const [data, setData] = React.useState([])

    const fetchLogData= async() => {
        const response = await fetch (`http://localhost:8586/event/${loggedUsername}`)
        const data = await response.json()
        setData(data)
        return 
    };

    React.useEffect(() => {
        fetchLogData()
    }, [])

    return (
        <div>
            <h1>Logs de {loggedUsername}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>FechaEvento</th>
                    </tr>
                </thead>
                <tbody>
            {
            data.map(log => {
                return(<tr>
                    <td>{log.event}</td>
                    <td>{log.fechaEvento}</td>
                    </tr>)
            })
            }
                </tbody>
            </table>
        </div>

    )
}