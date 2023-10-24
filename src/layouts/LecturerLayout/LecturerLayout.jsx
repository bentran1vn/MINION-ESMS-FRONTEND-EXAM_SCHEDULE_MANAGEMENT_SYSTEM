import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import items, { item } from "./LecturerLayout.items";

import AdminHeader from "@/components/HeaderLayout/index.js";
import { useState } from "react";
// import { useState } from "react";
import * as St from "./LecturerLayout.styled";
import logo from "@/assets/images/Logo.svg";
import FooterContent from "@/components/FooterContent/FooterContent";

const { Content } = Layout;

const LecturerLayout = ({ children }) => {
    // const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState(window.location.pathname);

    const handleClick = (e) => {
        navigate(e.key);
        setActiveKey(e.key);
    };
    const handleClickLogo = () => {
        navigate("/lecturer");
        setActiveKey("/lecturer");
    };

    return (
        <Layout style={{ height: "100vh" }}>
            <St.StyleSider
                style={{
                    background: "transparent",
                }}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="top__wrapper">
                    <St.SideDiv onClick={handleClickLogo}>
                        <div className="sidebar__image">
                            <img className="image" src={logo} alt="" />
                        </div>
                        <h1 className="sidebar__heading">MINIONS</h1>
                    </St.SideDiv>
                    <Menu
                        style={{ borderInlineEnd: "none" }}
                        // defaultSelectedKeys={[window.location.pathname]}
                        selectedKeys={[activeKey]}
                        mode="inline"
                        items={items}
                        onClick={handleClick}
                    />
                </div>
                <div className="bottom__wrapper">
                    <Menu
                        style={{ borderInlineEnd: "none", marginBottom: "2px" }}
                        // defaultSelectedKeys={[window.location.pathname]}
                        selectedKeys={[activeKey]}
                        mode="inline"
                        items={item}
                    />
                </div>
            </St.StyleSider>
            <Layout>
                <AdminHeader />
                <Content
                    style={{
                        margin: "16px 16px 0 16px",
                        padding: 24,
                        backgroundColor: "white",
                        overflowY: "auto", // Cho phép cuộn nếu nội dung vượt quá chiều cao
                        height: "calc(100vh - 64px - 24px)", // Trừ đi chiều cao của Header và margin của Content
                    }}
                >
                    <div style={{ minHeight: "calc(100vh - 100px)" }}>
                        {children}
                    </div>
                    <FooterContent />
                </Content>
            </Layout>
        </Layout>
    );
};

LecturerLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LecturerLayout;
