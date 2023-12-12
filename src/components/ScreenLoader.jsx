import React, { useState, useEffect } from 'react';

const ScreenLoader = () => {
    return (
        <div className="loader-container fixed inset-0 flex justify-center items-center bg-secondary">
            <span className="loader"></span>
        </div>
    );
};

export default ScreenLoader;
