import React from "react";
import styled from 'styled-components'
import moment from "moment";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns:repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.isHeader ? '#1E1F21' : '#4D4C4D'};
  ${props => props.isHeader && 'border-bottom:1px solid #4D4C4D'}
`;

const CellWrapper = styled.div`
  min-width: 140px;
  min-height: ${props => props.isHeader ? 24 : 80}px;
  background-color: ${props => props.isWeekend ? '#272829' : '#1E1F21'};
  color: ${props => props.isSelectedMonth ?'#DCDCDC' :'#555759'}
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  ${props => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrapper = styled.div`
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

const CurrentDay = styled('div')`
  height: 88%;
  width: 100%;
  background: #f00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({startDay,today}) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())
    const isSelectedMonth = (day) =>moment().isSame(day, 'month');
    const isCurrentDay = (day) => today.isSame(day, 'day');
    return (
        <>
            <GridWrapper isHeader >

                {[...Array(7)].map((_, i) => (<CellWrapper isSelectedMonth isHeader>
                        <RowInCell
                            justifyContent={'flex-end'} pr={1}>
                            {moment().day(i + 1).format('ddd')}
                        </RowInCell>
                    </CellWrapper>
                ))}
            </GridWrapper>
            <GridWrapper>

                {
                    daysArray.map((dayItem) => (
                        <CellWrapper
                            key={dayItem.format('DDMMYYYY')}
                            isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
                            isSelectedMonth = {isSelectedMonth()}
                        >
                            <RowInCell
                                justifyContent={'flex-end'}>
                                <DayWrapper>
                                    <DayWrapper>
                                        {!isCurrentDay(dayItem) && dayItem.format('D')}
                                        {isCurrentDay(dayItem) && <CurrentDay>{dayItem.format('D')}</CurrentDay>}
                                    </DayWrapper>
                                </DayWrapper>
                            </RowInCell>
                        </CellWrapper>
                    ))
                }
            </GridWrapper>
        </>
    )
}

export default CalendarGrid