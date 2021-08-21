import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { deleteCow } from '../../actions/profile';


const Cow = ({ cow, deleteCow }) => {
    const cows = cow.map(cow => (
        <tr key={cow._id}>
            <td>{cow.cow_id}</td>
            <td>
                {formatDate(cow.from)}
            </td>
            <td className="hide-sm">{cow.weight}</td>
            <td className="hide-sm">{cow.color}</td>
            <td className="hide-sm">{cow.pregnancy}</td>
            <td className="hide-sm">{cow.grass}</td>
            <td className="hide-sm">{cow.solid}</td>
            <td className="hide-sm">{cow.milking}</td>
            <td className="hide-sm">{cow.blood_pressure}</td>
            <td className="hide-sm">{cow.temparature}</td>
            <td className="hide-sm">{cow.feed_cost}</td>
            {/* <td className="hide-sm">{cow.fertility}</td> */}

            <td>
                <button onClick={() => deleteCow(cow._id)}
                    className="btn btn-danger"
                >Delete</button>
            </td>

        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Cow Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className="hide-sm">Date </th>
                        <th className="hide-sm">Weight</th>
                        <th className="hide-sm">Color</th>
                        <th className="hide-sm">Pregnancy</th>
                        <th className="hide-sm">Grass</th>
                        <th className="hide-sm">Solid</th>
                        <th className="hide-sm">Milking</th>
                        <th className="hide-sm">BP</th>
                        <th className="hide-sm">Temperature</th>
                        <th className="hide-sm">Feeding Cost</th>
                        {/* <th className="hide-sm">Fertility</th> */}
                    </tr>
                </thead>
                <tbody>{cows}</tbody>
            </table>
        </Fragment>
    );
};

Cow.propTypes = {
    cow: PropTypes.array.isRequired,
    deleteCow: PropTypes.func.isRequired,

};

export default connect(null, { deleteCow })(Cow);
