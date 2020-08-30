import React from 'react';
import { CurrentTimeContainer } from './current-time.styles'

const CurrentTime = ( { currentTimeInPercent } ) => (
    <CurrentTimeContainer currentTimeInPercent={currentTimeInPercent} />
)

export default CurrentTime;