import React from "react";
import './Profile.css'

export default function Profile() {
    return(
        <div className="profile-page">
            <div className="profile-container">
                <img src="public/images/profile/avatar.jpg" className="profile-pfp" />
                <div className="profile-names">
                    <h1 className="name">Example Name</h1>
                    <p className="nickname">@nickname</p>
                </div>

                <button className="edit-btn">Редактировать профиль</button>

            </div>
        </div>
    )
}