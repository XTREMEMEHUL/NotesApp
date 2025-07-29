import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo , onLogout }) => {
  return (
    <div className="flex items-center gap-3">
       <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
    {getInitials(userInfo.fullName)}
  </div>

    <div className="flex flex-col items-start space-y-1">
      <p className="text-sm font-semibold text-gray-800">{userInfo.fullName}</p>
      <button
        className="text-xs text-gray-500 underline hover:text-red-500 transition duration-200"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>

    </div>
  );
};

export default ProfileInfo;