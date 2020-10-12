import { TableCell, withStyles } from '@material-ui/core';

const CustomTableCell = withStyles({
    root: {
        backgroundColor: '#fff',
        border: 'none',
        padding: 0,
        marginRight: 'auto',
        verticalAlign: 'top',
        position: 'relative'
    }
})(TableCell)

export default CustomTableCell