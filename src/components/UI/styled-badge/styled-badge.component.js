import { Badge, withStyles } from '@material-ui/core';
import { BTTO_GREEN } from '../../../common-styles/vars';

const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: BTTO_GREEN,
        color: BTTO_GREEN,
        minWidth: 16,
        height: 16,
        '&::after': {
            position: 'absolute',
            top: -1,
            left: -1,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '1px solid currentColor',
            content: '""'
        }
    }
}))(Badge)

export default StyledBadge