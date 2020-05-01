import React, { Component, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { singleTransaction } from '../../actions/TransActions';

import Grid from '@material-ui/core/Grid';

class Single extends Component {
    state = {}

    componentDidMount() {
        const { tnx_id } = this.props.match.params;
        this.props.singleTransaction(tnx_id);
    }
    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            this.props.history.push('/404');
        }
    }
    render() {
        const { singleTransaction } = this.props.transaction;
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={3} style={{ marginTop: '230px' }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                                Single Transaction
                </Typography>
                            {this.props.transaction.loading === true ? 'Loading' : <Fragment><Typography color="textSecondary" >
                                Tnx_id : {singleTransaction._id}
                            </Typography>
                                <Typography color="textSecondary">
                                    User: {singleTransaction.user}
                                </Typography>
                                <Typography color="textSecondary">
                                    Description: {singleTransaction.description}

                                </Typography>
                                <Typography color="textSecondary">
                                    Description: {singleTransaction.date}

                                </Typography></Fragment>}

                        </CardContent>

                    </Card>

                </Grid>
            </Grid>
        );
    }
}


const mapStateToProps = (state) => ({
    transaction: state.transaction,
    error: state.error
})

export default connect(mapStateToProps, { singleTransaction })(Single);
