import { makeStyles } from "@material-ui/core/styles";
import gif1 from "../pic/boxs.gif";
import gif2 from "../pic/boxs2.gif";
import gif3 from "../pic/boxs3.gif";
import gif4 from "../pic/giphy.gif";
import pic1 from "../pic/logo_ver1.png";

const useStyles = makeStyles(theme => ({
  media: {
    width: "100%"
  },
  serviceBox: {
    width: theme.spacing(30)
  },
  logo: {
    width: "auto",
    height: theme.spacing(10)
  }
}));

export default useStyles;
