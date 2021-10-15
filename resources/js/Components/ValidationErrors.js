import React from 'react';

export default function ValidationErrors({ errors }) {
    return (
        Object.keys(errors).length > 0 && (
            <div className="alert alert-error">
                <div className="flex-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 mx-2 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        ></path>
                    </svg>
                    <label>
                        <div className="mb-4">
                            <div className="font-medium text-red-600">Whoops! Something went wrong.</div>

                            <ul className="mt-3 list-disc list-inside text-sm text-red-600">
                                {Object.keys(errors).map(function (key, index) {
                                    return <li key={index}>{errors[key]}</li>;
                                })}
                            </ul>
                        </div>
                    </label>
                </div>
            </div>
        )
    );
}
