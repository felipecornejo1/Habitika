import React from "react";
import { Button } from "@mui/material";

const ProfileHeader = () => {
    return(
        <div>
            <div className="flexbox-container">
                <div className="flexbox-item profilePicture">
                    <img src="https://i.imgur.com/JgYD2nQ.jpg" className="profilePicture" />
                </div>
                <h2 className="name">Felipe Comejo</h2>
            </div>
            <p className="flexbox-item">123 followers</p>
            <div className="flexbox-item">
                    <Button variant="outlined" className="profile-btn">Follow</Button>
                    <Button variant="outlined" className="profile-btn">Message</Button>   
            </div>
        </div>
    )
}

export default ProfileHeader;