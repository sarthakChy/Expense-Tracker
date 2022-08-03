import { makeStyles } from '@material-ui/core/styles';
import { red, green, blue } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpenses: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],

  },
  avatarInvestments: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],

  },

}))