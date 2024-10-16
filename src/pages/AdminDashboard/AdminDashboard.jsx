// src/components/AdminDashboard.jsx
import React from "react";
import "./AdminDashboard.css";
import AddTrack from "../../Components/AddTrack/AddTrack.jsx"
import AdminHeader from "../../Components/Common/AdminHeader/AdminHeader.jsx";

const AdminDashboard = () => {
    return (
        <>
        <AdminHeader />
        <div className="admin-dashboard">
            <AddTrack/>
        </div>
        </>
    );
};

export default AdminDashboard;
