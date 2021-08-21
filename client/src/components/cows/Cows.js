import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CowItem from './CowItem';
import CowForm from './CowForm';
import { getCows } from '../../actions/cow';
import { Link } from 'react-router-dom'

const Cows = ({ getCows, cow: { cows } }) => {
    useEffect(() => {
        getCows();
    }, [getCows]);

    return (
        <Fragment>
            <h1 className="large text-primary">Cows for Sale</h1>
            <Link to='/add-cow-sales' className='btn btn-light'>
                <i className='fas fa-paw text-primary' /> Add Cow for Sales
            </Link>
            <div className="posts">
                {cows.map((cow) => (
                    <CowItem key={cow._id} cow={cow} />
                ))}
            </div>
        </Fragment>
    );
};

Cows.propTypes = {
    getCows: PropTypes.func.isRequired,
    cow: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    cow: state.cow
});

export default connect(mapStateToProps, { getCows })(Cows);