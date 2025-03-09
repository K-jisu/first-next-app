import React from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>admin페이지 입니다</h1>
      {children}
    </div>
  );
};

export default AdminLayout;
