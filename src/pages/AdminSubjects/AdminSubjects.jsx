// import PropTypes from "prop-types";

import SubjectTable from "@/components/AdminTable/SubjectTable";
import { Col, Divider, Row } from "antd";

const AdminSubjects = () => {
    return (
        <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
                <Divider orientation="left">Subject</Divider>
                <SubjectTable />
            </Col>
        </Row>
    );
};

AdminSubjects.propTypes = {};

export default AdminSubjects;