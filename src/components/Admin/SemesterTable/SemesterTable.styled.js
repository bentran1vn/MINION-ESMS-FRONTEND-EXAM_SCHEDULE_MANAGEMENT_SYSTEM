import styled from "styled-components";
import { Flex, Table } from "antd";
import Theme from "@/Theme";

export const DivTable = styled.div`
    margin-top: 20px;
    padding-top: 50px;
    position: relative;

    .ant-modal-title {
        font-family: ${Theme.font.primary_font};
    }
`;

export const FlexStyled = styled(Flex)`
    display: flex;
    justify-content: center;
    align-items: center;

    .form__title {
        min-width: 100px;
        font-family: ${Theme.font.primary_font};
    }
    .form__input {
        font-family: ${Theme.font.primary_font};
        width: 100%;
    }
`;

export const StyledTable = styled(Table)`
    .ant-table-cell {
        height: 65px;
        font-family: ${Theme.font.primary_font};
        font-size: 1.5rem;
    }

    .ant-typography {
        font-family: ${Theme.font.primary_font};
        font-size: 1.4rem;
    }

    .ant-tag {
        font-family: ${Theme.font.primary_font};
    }
`;