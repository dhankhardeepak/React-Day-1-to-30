import React from 'react'

const CircularProgressBar = ({progress}) => {
    const radius = 54
    const circumference = 2 * Math.PI * radius;
    return (
        <div>
            <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
            >
                {/* Background circle (track) */}
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="#eee"
                    strokeWidth="12"
                    fill="none"
                />

                {/* Progress circle (animated stroke) */}
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    stroke="blue"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (progress / 100) * circumference} // Start hidden, animate this
                    transform="rotate(-90 60 60)" // Start from top
                />
            </svg>
        </div>
    )
}

export default CircularProgressBar
