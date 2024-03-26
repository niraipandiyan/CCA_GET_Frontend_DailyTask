import { faker } from "@faker-js/faker";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, TableFooter, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import TablePagination from '@mui/material/TablePagination';

let USERS = [],
  STATUS = ["Active", "Inactive", "Offline"],
  AGE = [23,25,45,67,45,34,22,26],
  ROLE = ["Admin", "Owner", "Member"];
for (let i = 0; i < 15; i++) {
  USERS[i] = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    status: STATUS[Math.floor(Math.random() * STATUS.length)],
    age: AGE[Math.floor(Math.random() * AGE.length)],
    role: ROLE[Math.floor(Math.random() * ROLE.length)],
    images: faker.image.avatar()
  };
}

console.log(USERS);
export default function Mtable() {
  // const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <TableContainer 
    component={Paper} 
    style={{borderRadius:15,  
    display: 'flex',
    justifyContent:'space-between'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor:'#dfe6e7',alignContent:'center'}}>
          <TableRow>
            <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>NAME</TableCell>
            <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>TITLE</TableCell>
            <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>STATUS</TableCell>
            <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>AGE</TableCell>
            <TableCell style={{fontWeight:'bold', color:'#767c7c'}}>ROLE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Grid container>
                    <Grid item lg={1.5}>
                        <Avatar src={row.images} alt={row.name} />
                    </Grid>
                    <Grid item lg={10.5}>
                        <Typography style={{fontWeight:'bold',color:'blueviolet'}}>{row.name}</Typography>
                        <Typography color='GrayText' variant="body2">{row.email}</Typography>
                    </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color='blueviolet' variant="subtitle2">{row.jobTitle}</Typography>
              </TableCell>
              <TableCell>
                <Typography
                style={{
                    fontWeight:'bolder',
                    fontSize: '0.75rem',
                    color:'black',
                    backgroundColor:((row.status === 'Active' && '#7db58e')||
                    (row.status === 'Inactive' && '#eeaa34') || 
                    (row.status === 'Offline' && '#ff3716')),
                    borderRadius: 8,
                    padding: '3px 10px',
                    display:'inline-block'
                }}>
                 {row.status}
                </Typography>
            </TableCell>
            <TableCell>
                {row.age}
            </TableCell>
            <TableCell>
                {row.role}
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={USERS.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
