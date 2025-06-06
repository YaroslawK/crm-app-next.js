import Sidebar from "../components/sidebar"

export interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({children}:LayoutProps) => {
    return <>
        <Sidebar></Sidebar>
        <div className="ml-60">{children}</div>
    </>
}

export default Layout;