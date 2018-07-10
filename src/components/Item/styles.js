import styled from 'styled-components';

const Block = styled.div`
    width: 80%;
    height: auto;
    background-color: #d2d3d5;
    margin: 0 auto 8px auto;
    padding: 10px 0;
    position: relative;
    overflow: hidden;
`;

const FirstLayer = styled.div`
    width: 40%;
    height: 200%;
    background-color: #363435;
    position: absolute;
    right: 0;
    top: -100%;
    transform: skew(30deg);
`;

const SecondLayer = styled.div`
    width: 36%;
    height: 200%;
    background-color: #4b4b4d;
    position: absolute;
    right: 0px;
    top: -100%;
    transform: skew(20deg);
`;

const Text = styled.div`
    font-size: 24px;
    background-color: #890e4f;
    color: white;
    padding: 0 30px;
    margin-right: 25%;
    position: relative;
`;

const Title = styled.div`
    font-size: 28px;
    padding: 0 30px;
    margin-bottom: 5px;
    margin-right: 25%;
    position: relative;
`;

export { Block, FirstLayer, SecondLayer, Text, Title };