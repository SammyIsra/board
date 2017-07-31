import React from 'react';
import Column from './column';
import styled from 'styled-components';

const MemberIssuesContainer = styled.div`
`;

const ColumnsContainer = styled.div`
    display: flex;
    align-content: stretch;
`;

const MemberInitials = styled.h3`
    padding: 1rem;
    font-size: 1.4rem;
`;

const CountOfIssues = styled.span`
    color: rgb(112, 112, 112);
    font-size: 1.2rem;
`;

const BoardGrid = ({columns, initials}) => (
    <MemberIssuesContainer>
        <MemberInitials>
            {initials + ' '}
            <CountOfIssues>{columns.length} issues</CountOfIssues>
        </MemberInitials>

        <ColumnsContainer>
            {columns.map((items, key) => <Column key={key} items={items} />)}
        </ColumnsContainer>
    </MemberIssuesContainer>
);

export default BoardGrid;