'use client';
import React from "react";

export interface ClientComponentProps {
    children: React.ReactNode;
}
export default function ClientComponent({ children }: ClientComponentProps) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Server Component</h2>
            <div className="text-gray-700">
                {children}
            </div>
        </div>
    );
}