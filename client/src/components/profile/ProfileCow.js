import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileCow = ({
    cow: {
        cow_id,
        from,
        to,
        current,
        weight,
        color,
        pregnancy,
        grass,
        solid,
        milking,
        blood_pressure,
        temparature,
        feed_cost,
        fertility,
        description }
}) => (
        <div>
            {/* <h3 className="text-dark">{company}</h3>
            <p>
                {formatDate(from)} - {to ? formatDate(to) : 'Now'}
            </p>
            <p>
                <strong>Position: </strong> {title}
            </p>
            <p>
                <strong>Location: </strong> {location}
            </p>
            <p>
                <strong>Description: </strong> {description}
            </p> */}

            <table className="table">
                <tr>
                    <th>ID</th>
                    <th className="hide-sm">Date </th>
                    <th className="hide-sm">Weight</th>
                    <th className="hide-sm">Color</th>
                    <th className="hide-sm">Details</th>
                </tr>
                <tr>
                    <td>{cow_id}</td>
                    <td>
                        {formatDate(from)} - {to ? formatDate(to) : 'Now'}
                    </td>
                    <td className="hide-sm">{weight}</td>
                    <td className="hide-sm">{color}</td>
                    <td className="hide-sm">{description}</td>
                </tr>

            </table>

        </div>
    );

ProfileCow.propTypes = {
    cow: PropTypes.object.isRequired
};

export default ProfileCow;