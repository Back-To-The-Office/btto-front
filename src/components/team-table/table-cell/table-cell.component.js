import { TableCell, withStyles } from '@material-ui/core';

const CustomTableCell = withStyles({
    root: {
        backgroundColor: '#fff',
        border: 'none',
        padding: 0,
        verticalAlign: 'top'
    }
})(TableCell)

export default CustomTableCell