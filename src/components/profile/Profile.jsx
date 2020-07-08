import React from 'react'

const Profile = () => {
    return (
        <div className="profile">
            <div className="container-lg">

                <div className="card shadow bg-dark-two">
                    <div className="align-center">
                        <div className="img-placeholder"></div>
                        <h1 className="text-light">John Doe</h1>
                        <div className="row">
                            <div className="col">
                                <p className="text-light">Instagram</p>
                            </div>
                            <div className="col">
                                <p className="text-light">Email</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow bg-dark-two">
                    <div className="align-center">
                        <h2 className="text-yellow">About</h2>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis et, tempora corporis, ipsum earum autem eius amet aspernatur ducimus dolore libero quidem sunt culpa fuga? Est quisquam earum cupiditate nulla rem corporis quas placeat soluta cum? Alias rem sequi laboriosam quod placeat, eius porro id enim, sunt, voluptatum aut!</p>
                    </div>
                </div>

            </div>

        </div>
        
    )
}

export default Profile
