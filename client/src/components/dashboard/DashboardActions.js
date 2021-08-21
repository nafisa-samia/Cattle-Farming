// import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

// const DashboardActions = ({
//     profile: {
//         user: { _id, name, avatar },
//         status,
//         company,
//         location,
//         skills
//     }
// }) => {

//     return (
//         <div className='dash-buttons'>
//             <Link to={`/profile/${_id}`} className='btn btn-primary'>
//                 View Profile
//         </Link>
//             <Link to='/edit-profile' className='btn btn-light'>
//                 <i className='fas fa-user-circle text-primary' /> Edit Profile
//         </Link>
//             <Link to='/add-experience' className='btn btn-light'>
//                 <i className='fab fa-black-tie text-primary' /> Add Experience
//         </Link>
//             <Link to='/add-education' className='btn btn-light'>
//                 <i className='fas fa-graduation-cap text-primary' /> Add Education
//         </Link>
//             <Link to='/add-cow' className='btn btn-light'>
//                 <i className='fas fa-paw text-primary' /> Add Cow
//         </Link>
//         </div>
//     );
// };

// DashboardActions.propTypes = {
//     profile: PropTypes.object.isRequired
// };

// export default DashboardActions;


import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {

    return (
        <div className='dash-buttons'>
            <Link to='/edit-profile' className='btn btn-light'>
                <i className='fas fa-user-circle text-primary' /> Edit Profile
        </Link>
            <Link to='/add-experience' className='btn btn-light'>
                <i className='fab fa-black-tie text-primary' /> Add Experience
        </Link>
            <Link to='/add-education' className='btn btn-light'>
                <i className='fas fa-graduation-cap text-primary' /> Add Education
        </Link>
            <Link to='/add-cow' className='btn btn-light'>
                <i className='fas fa-paw text-primary' /> Add Cow
        </Link>
        </div>
    );
};

export default DashboardActions;

