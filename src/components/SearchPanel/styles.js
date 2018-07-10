import styled from 'styled-components';

const Block = styled.div`
    width: auto;
    height: 40px;
    background-color: #d2d3d5;
    color: #272727;
    padding: 30px 20px;
    margin-bottom: 8px;
`;

const Form = styled.form``;

const Input = styled.input`
    ${ props => {
        if (props.type === "text")
            return "font-size: 24px;\
                    padding-left: 10px;\
                    float: left;\
                    margin-right: 20px;";
        return "width: 90px;\
                height: 34px;\
                background-color: #890e4f;\
                border-width: 0px;\
                text-align: left;\
                padding-left: 20px;\
                color: white;\
                font-size: 24px;\
                float: left;\
                &:disabled {\
                    background-color: #888888;\
                }";
    }};
`;

export { Block, Form, Input };