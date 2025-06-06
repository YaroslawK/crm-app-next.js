import React from 'react';

export interface ServerComponentProps {
    children: React.ReactNode;
}
export default function ServerComponent({ children }: ServerComponentProps) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Server Component</h2>
            <div className="text-gray-700">
                {children}
            </div>
        </div>
    );
}