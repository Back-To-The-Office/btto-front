import { Badge, withStyles } from '@material-ui/core';
import { BTTO_GREEN } from '../../../common-styles/vars';

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: BTTO_GREEN,
        color: BTTO_GREEN,
        minWidth: 16,
        height: 16
    }
}))(Badge)

export default StyledBadge