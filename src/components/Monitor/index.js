import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1E1F21;
  color: #DCDDDD;
  padding: 16px;
`;

const TextWrapper = styled('span')`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
`;

const ButtonWrappers = styled('div')`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled('button')`
  border: unset;
  background-color: #565759;
  height: 20px;
  margin-right: 2px;
  border-radius: 4px;
  color: #E6E6E6;
  outline: unset;
  cursor: pointer;
`;

const TodayButton = styled(ButtonWrapper)`
  padding-right: 16px;
  padding-left: 16px;
  font-weight: bold;
`;

const Monitor = ({today,prevHandler,nextHandler,todayHandler}) => {
    return (
        <DivWrapper>
            <div>
                <TitleWrapper>
                    {today.format('MMMM')}
                </TitleWrapper>
                <TextWrapper>  {today.format('YYYY')}</TextWrapper>
            </div>
            <ButtonWrappers>
                <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>
                <TodayButton onClick={todayHandler}>Today</TodayButton>
                <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
            </ButtonWrappers>
        </DivWrapper>
    );
};

export default Monitor;