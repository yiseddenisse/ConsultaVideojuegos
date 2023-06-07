import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../hooks/UserContext";

export const Log = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLogData = async () => {
      try {
        const response = await fetch(`http://localhost:8586/event/${user.name}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching log data:", error);
      }
    };

    fetchLogData();
  }, [user.name]);

  return (
    <div>
      <h1>Logs de {user.name}</h1>
      <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>FechaEvento</th>
          </tr>
        </thead>
        <tbody>
          {data.map((log) => (
            <tr key={log._id}>
              <td>{log.evento}</td>
              <td>{log.fechaEvento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
