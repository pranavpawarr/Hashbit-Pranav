import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const IplPointsTable = () => {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/FreSauce/json-ipl/data"
        );
        const data = await response.json();

        // Sort teams by NRR in ascending order
        const sortedTeams = data.sort((a, b) => a.nrr - b.nrr);

        setTeams(sortedTeams);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching IPL data:", error);
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Position</TableHead>
          <TableHead>Team</TableHead>
          <TableHead>Matches</TableHead>
          <TableHead>Won</TableHead>
          <TableHead>Lost</TableHead>
          <TableHead>NRR</TableHead>
          <TableHead>Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams.map((team, index) => (
          <TableRow key={team.team}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{team.team}</TableCell>
            <TableCell>{team.matches}</TableCell>
            <TableCell>{team.won}</TableCell>
            <TableCell>{team.lost}</TableCell>
            <TableCell>{team.nrr.toFixed(3)}</TableCell>
            <TableCell>{team.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default IplPointsTable;
