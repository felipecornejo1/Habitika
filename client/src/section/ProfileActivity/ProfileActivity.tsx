import React from "react";
import AlignItemsList from "../../components/List/AlignItemsList";

const ProfileActivity = ()=>{
    return(
        <div>
        <div className="flexbox-container activity">
            <h3 id="activity-text">Activity</h3>
        </div>
        <AlignItemsList/>
        </div>
    )
}

export default ProfileActivity