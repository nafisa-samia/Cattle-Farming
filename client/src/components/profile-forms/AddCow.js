import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCow } from '../../actions/profile';

const AddCow = ({ addCow, history }) => {
    const [formData, setFormData] = useState({
        cow_id: '',
        from: '',
        to: '',
        current: false,
        weight: '',
        color: '',
        grass: '',
        solid: '',
        milking: '',
        pregnancy: '',
        blood_pressure: '',
        temparature: '',
        feed_cost: '',
        // fertility: '',
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const {
        cow_id,
        from,
        to,
        current,
        weight,
        color,
        grass,
        solid,
        milking,
        pregnancy,
        blood_pressure,
        temparature,
        feed_cost,
        // fertility,
        description
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1 className="large text-primary">Add A Cow</h1>
            <p className="lead">
                <i className="fas fa-paw" /> Add any current cow</p>
            <small>* = required field</small>
            <form
                className="form"
                onSubmit={e => {
                    e.preventDefault();
                    addCow(formData, history);
                }}>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Cow ID"
                        name="cow_id"
                        value={cow_id}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <p>
                        <input
                            type="checkbox"
                            name="current"
                            checked={current}
                            value={current}
                            onChange={e => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                        />{' '}
                        Currently Available </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input
                        type="date"
                        name="to"
                        value={to}
                        onChange={e => onChange(e)}
                        disabled={toDateDisabled ? 'disabled' : ''}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Weight"
                        name="weight"
                        value={weight}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Color"
                        name="color"
                        value={color}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Grass"
                        name="grass"
                        value={grass}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Solid"
                        name="solid"
                        value={solid}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Milking"
                        name="milking"
                        value={milking}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Pregnancy"
                        name="pregnancy"
                        value={pregnancy}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Blood Pressure"
                        name="blood_pressure"
                        value={blood_pressure}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Temperature"
                        name="temparature"
                        value={temparature}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Feeding Cost"
                        name="feed_cost"
                        value={feed_cost}
                        onChange={e => onChange(e)}
                    />
                </div>
                {/* <div className="form-group">
                    <input
                        type="text"
                        placeholder="Fertility"
                        name="fertility"
                        value={fertility}
                        onChange={e => onChange(e)}
                    />
                </div> */}



                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Other Description"
                        value={description}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">
                    Go Back
        </Link>
            </form>
        </Fragment>
    );
};

AddCow.propTypes = {
    addCow: PropTypes.func.isRequired
};

export default connect(null, { addCow })(withRouter(AddCow));