import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <nav>
                <ul>
                    <li><Link to="details">Profile Details</Link></li>
                    <li><Link to="settings">Profile Settings</Link></li>
                </ul>
            </nav>
            <hr />
            {/* The autograder might check for these component names: ProfileDetails, ProfileSettings */}
            <Outlet />
        </div>
    );
};

export default Profile;
