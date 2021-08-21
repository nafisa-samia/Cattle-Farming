import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import CowItem from '../cows/CowItem';
import CommentForm from '../cow/CommentForm';
import CommentItem from '../cow/CommentItem';
import { getCow } from '../../actions/cow';

const Cow = ({ getCow, cow: { cow, loading }, match }) => {
    useEffect(() => {
        getCow(match.params.id);
    }, [getCow, match.params.id]);

    return loading || cow === null ? (
        <Spinner />
    ) : (
            <Fragment>
                <Link to="/cows" className="btn">
                    Back To Cows
      </Link>
                <CowItem cow={cow} showActions={false} />
                <CommentForm cowId={cow._id} />
                <div className="comments">
                    {cow.comments.map((comment) => (
                        <CommentItem key={comment._id} comment={comment} cowId={cow._id} />
                    ))}
                </div>
            </Fragment>
        );
};

Cow.propTypes = {
    getCow: PropTypes.func.isRequired,
    cow: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    cow: state.cow
});

export default connect(mapStateToProps, { getCow })(Cow);