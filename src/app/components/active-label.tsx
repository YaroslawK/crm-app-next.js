import React from 'react';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export const StatusLabel = ({ children, status }: StatusLabelProps) => {
  return (
    <div
      className={`inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium ${
        (status === Status.Active && 'text-green-500 bg-green-100') ||
        (status === Status.NotActive && 'text-red-500 bg-green-100') ||
        (status === Status.Pending && 'text-orange-500 bg-green-100') ||
          (status === Status.Suspended && 'text-blue-500 bg-green-100') ||
              ""
      }`}>
          <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
      {children}
    </div>
  );
};
