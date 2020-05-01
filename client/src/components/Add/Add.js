import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { addTransaction } from '../../actions/TransActions';

class Add extends Component {
    state = {
        user: '',
        description: ''
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = async () => {
        const { user, description } = this.state;
        const newTransaction = {
            user,
            description
        };


        var res = await this.props.addTransaction(newTransaction).then(res => console.log(res));
        this.props.history.push('/');
    }
    render() {
        return (<Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={3} style={{ marginTop: '230px' }}>
                <Card variant="outlined">
                    <CardContent>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField
                                    name="user"
                                    label="User"
                                    multiline
                                    rowsMax={4}
                                    onChange={e => {

                                        this.setState({
                                            [e.target.name]: e.target.value
                                        })
                                    }}
                                />
                                <TextField
                                    name="description"
                                    label="Description"

                                    onChange={e => {

                                        this.setState({
                                            [e.target.name]: e.target.value
                                        })
                                    }}
                                    multiline
                                />
                            </div>
                        </form>
                    </CardContent>
                    <CardActions style={{ float: 'right' }}>
                        <Button variant="contained" size="small" color='primary' onClick={this.onClick}>Add Transaction</Button>
                    </CardActions>
                </Card>

            </Grid>
        </Grid>);
    }
}

const mapStateToProps = (state) => ({
    transaction: state.transaction,
    error: state.error
})
export default connect(mapStateToProps, { addTransaction })(Add);
