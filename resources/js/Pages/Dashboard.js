import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

export default function Dashboard(props) {
    return (
        <Authenticated breadcrumbs={[{ name: 'Dashboard', link: '#' }]}>
            <div className="py-4">
                <div className="mx-auto mb-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Hai, {props.auth.user.name}
                        </div>
                    </div>
                </div>

                <div className="shadow stats">
                    <div className="stat">
                        <div className="stat-title">Total Page Views</div>
                        <div className="stat-value">89,400</div>
                        <div className="stat-desc">
                            21% more than last month
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
