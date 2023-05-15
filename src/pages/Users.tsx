import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { usePersistedState } from "../hooks/usePersistedState";
import { keys } from "../constants/storageKeys";
import { useEffect } from "react";
import { getUsers } from "../api/api";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Users() {
  const [users, setUsers] = usePersistedState<User[]>(keys.usersData, []);
  const tableCells = ["ID", "Name", "Username", "Email"];

  useEffect(() => {
    if (users.length === 0) {
      getUsers().then((data) => setUsers(data));
    }
  });

  const headerRow = tableCells.map((item) => {
    return (
      <TableCell align={item === "ID" ? "left" : "left"}>{item}</TableCell>
    );
  });

  const tableBody = users.map((user) => {
    return (
      <TableRow
        key={user.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {user.id}
        </TableCell>
        <TableCell align="left">{user.name}</TableCell>
        <TableCell align="left">{user.username}</TableCell>
        <TableCell align="left">{user.email}</TableCell>
      </TableRow>
    );
  });

  return (
    <Container>
      <Toolbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>{headerRow}</TableRow>
          </TableHead>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
