import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { deleteCow } from '../../actions/cow';
import cow_img from './cow_img.jpg';



const CowItem = ({
    deleteCow,
    auth,
    cow: { _id, cow_id, origin, purchase_date, selling_price, weight,
        text, cow_image, date, farmer_name, name, avatar, user, comments },
    showActions
}) => (
        <div className="post bg-white p-1 my-1">
            <div>
                <img className="round-img" src={cow_img} alt="" />
                <Link to={`/profile/${user}`}>
                    <h4>Farmer: {farmer_name}</h4>
                </Link>
            </div>
            <div>
                <p className="post-date">Posted on {formatDate(date)}</p>
                {/* <h4>Sale Details </h4> */}
                <table className='tablecow'>
                    <tr>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Cow ID: </strong>{cow_id}</p>
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Origin: </strong>{origin}</p>
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Since When: </strong>{formatDate(purchase_date)}</p>
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Weight: </strong>{weight}</p>
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Selling Price: </strong>{selling_price}</p>
                        </td>
                    </tr>

                </table>

                {/* <h4>Additional Details </h4>
                <table className='tablecow'>
                    <tr>

                        <td className="hide-sm">
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Pregnancy: </strong>{pregnancy}</p>
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Calving Date: </strong>{formatDate(calving_date)}</p>
                        </td>
                        <td className="hide-sm">
                            <p className="my-1"><strong>Fertility: </strong>{fertility}</p>
                        </td>
                    </tr>

                </table> */}
                <p className="my-1"><strong>Other Details: </strong>{text}</p>


                {showActions && (
                    <Fragment>

                        <Link to={`/cows/${_id}`} className="btn btn-primary">
                            Discussion{' '}
                            {comments.length > 0 && (
                                <span className="comment-count">{comments.length}</span>
                            )}
                        </Link>
                        {!auth.loading && user === auth.user._id && (
                            <button
                                onClick={() => deleteCow(_id)}
                                type="button"
                                className="btn btn-danger"
                            >
                                <i className="fas fa-times" />
                            </button>
                        )}
                    </Fragment>
                )}
            </div>
        </div>
    );

CowItem.defaultProps = {
    showActions: true
};

CowItem.propTypes = {
    cow: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteCow: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteCow })(
    CowItem
);