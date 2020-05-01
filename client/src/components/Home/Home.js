import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { getTransactions } from '../../actions/TransActions';

import Grid from '@material-ui/core/Grid';

class Home extends Component {

    state = { open: false }
    handleOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };
    componentDidMount() {
        this.props.getTransactions();
    }
    render() {

        return (

            <div >
                <CssBaseline />
                <Grid container spacing={10} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12}>

                    </Grid>

                    <Grid item xs={9} >
                        <TableContainer component={Paper} >
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>tnx_id</TableCell>
                                        <TableCell align="right">User</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">View</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.transaction.loading == true ? 'Loading' : this.props.transaction.transactions.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell component="th" scope="row" >
                                                {row._id}
                                            </TableCell>
                                            <TableCell align="right">{row.user}</TableCell>
                                            <TableCell align="right">{row.description}</TableCell>
                                            <TableCell align="right">{row.date}</TableCell>
                                            <TableCell align="right"><Button variant="contained" size="small" color='primary'  onClick={() => this.props.history.push('/view/' + row._id)}>></Button></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={1}>
                        <Fab color="primary" aria-label="add" href='/add'>
                            <AddIcon />
                        </Fab>

                    </Grid>
                </Grid>
            </div>
        )
    };
}
const mapStateToProps = (state) => ({
    transaction: state.transaction,
    error: state.error
})

export default connect(mapStateToProps, { getTransactions })(Home);
