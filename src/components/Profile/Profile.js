import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div className="container">
            <div className="card">
                <h2>Your Profile</h2>
                <hr />
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-thumbnail" src={user.photoURL} alt={user.DisplayName} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <table className=" text-start fs-6">
                            <tbody>
                                <tr>
                                    <td className="py-1 fw-bolder fs-4" >{user.displayName}</td>
                                </tr>
                                <tr>
                                    <td className="py-1"><b>Email: </b>{user.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;