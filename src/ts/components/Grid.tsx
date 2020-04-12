import * as React from 'react'

import styled from 'styled-components'

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: ${({col}) => typeof col == 'string' ? col : `repeat(${col}, 1fr)` };
    grid-template-rows: ${({rows}) => typeof rows == 'string' ? rows : `repeat(${rows}, 1fr)` };
`

interface StyledGridProps {
    cols: number | string
    rows: number | string
}

const Grid: React.SFC<StyledGridProps> = ({cols, rows, limit, limitMode}) => (
    <StyledGrid>
    </StyledGrid>
)

export default Grid