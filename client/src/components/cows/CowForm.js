import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCow } from '../../actions/cow';
import { Link } from 'react-router-dom'


const CowForm = ({ addCow, history }) => {
    // const [text, setText] = useState('');
    const [formData, setFormData] = useState({
        cow_id: '',
        origin: '',
        purchase_date: '',
        weight: '',
        selling_price: '',
        text: '',
        date: '',
        cow_image: '',
    });

    const {
        cow_id,
        origin,
        purchase_date,
        weight,
        selling_price,
        text,
        date,
        cow_image,
    } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Add your cow for sale</h3>
            </div>
            <form
                className='form my-1'
                onSubmit={e => {
                    e.preventDefault();
                    addCow(formData, history);
                }}
            >
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
                    <input
                        type="text"
                        placeholder="Origin"
                        name="origin"
                        value={origin}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <h4>Since when you are looking after this cow or your purchase date</h4>
                    <input
                        type="date"
                        name="purchase_date"
                        value={purchase_date}
                        onChange={e => onChange(e)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Selling Price"
                        name="selling_price"
                        value={selling_price}
                        onChange={e => onChange(e)}
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
                    <textarea
                        name="text"
                        cols="30"
                        rows="5"
                        placeholder="Other Description"
                        value={text}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type='submit' className='btn my-1' value='Insert Image' />
                <input type='submit' className='btn btn-primary my-1' value='Submit' />

            </form>
        </div>
    );
};

CowForm.propTypes = {
    addCow: PropTypes.func.isRequired
};

export default connect(
    null,
    { addCow }
)(CowForm);