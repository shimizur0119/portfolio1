import React from "react";
import logo from "./logo.svg";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./style/theme";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import pic_cat2 from "./pic/cat2.jpg";
import useStyle from "./style/index";
import { Grid } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import PaletteIcon from "@material-ui/icons/Palette";
import CodeIcon from "@material-ui/icons/Code";

import pic_git from "./pic/git.png";
import pic_gitlab from "./pic/gitlab.png";
import pic_github from "./pic/github.png";
import pic_apatch from "./pic/apatch.jpg";
import pic_bootstrap from "./pic/bootstrap.png";
import pic_couch from "./pic/couch.svg";
import pic_css from "./pic/css.png";
import pic_django from "./pic/django.png";
import pic_gcp from "./pic/gcp.png";
import pic_gitlab_runner from "./pic/gitlab-runner.png";
import pic_html from "./pic/html.png";
import pic_ibmcloud from "./pic/ibmcloud.png";
import pic_ibmwatson from "./pic/ibmwatson.jpg";
import pic_jquery from "./pic/jquery.jpg";
import pic_js from "./pic/js.png";
import pic_linux from "./pic/linux.png";
import pic_mongo from "./pic/mongo.png";
import pic_next from "./pic/next.png";
import pic_nginx from "./pic/nginx.svg";
import pic_node from "./pic/node.svg";
import pic_nodered from "./pic/nodered.jpg";
import pic_postgresql from "./pic/postgresql.png";
import pic_python from "./pic/python.png";
import pic_react from "./pic/react.png";
import pic_sphinx from "./pic/sphinx.png";
import pic_storybook from "./pic/storybook.png";
import pic_typescript from "./pic/typescript.png";
import pic_uwsgi from "./pic/uwsgi.png";
import pic_vagrant from "./pic/vagrant.png";
import pic_vue from "./pic/vue.png";
import pic_gas from "./pic/gas.png";

const logos = [
  pic_html,
  pic_css,
  pic_js,
  pic_typescript,
  pic_react,
  pic_next,
  pic_vue,
  pic_bootstrap,
  pic_jquery,
  pic_storybook,
  pic_node,
  pic_nodered,
  pic_python,
  pic_django,
  pic_sphinx,
  pic_git,
  pic_gitlab,
  pic_github,
  pic_gitlab_runner,
  pic_mongo,
  pic_couch,
  pic_postgresql,
  pic_nginx,
  pic_apatch,
  pic_uwsgi,
  pic_vagrant,
  pic_linux,
  pic_ibmcloud,
  pic_ibmwatson,
  pic_gcp,
  pic_gas,
];

const ServiceBox = props => {
  const classes = useStyle();
  return (
    <Box className={classes.serviceBox}>
      <Grid container direction="column" spacing={5}>
        <Grid item>
          <>
            <Box textAlign="center" fontSize="h5.fontSize" pb={1}>
              {props.title}
            </Box>
            <Box textAlign="center">{props.title2}</Box>
          </>
        </Grid>
        <Grid item>
          <Box textAlign="center">{props.icon}</Box>
        </Grid>
        <Grid item alignItems="flex-start">
          {props.text}
        </Grid>
      </Grid>
    </Box>
  );
};

const text1 =
  "お客様の要望をヒアリングし、現状の問題点を洗い出し、効果的なプランを作成いたします。制作ではデザインに入る前の事前の準備が特に重要になります。何が必要で何が必要でないのかを判断し、費用対効果の高いWebサイトを作るための土台を作ります。";
const text2 =
  "ヒアリングに基づいたプランに沿って、デザインを作成いたします。人の使うものであることを常に意識して、使う人が迷わない、目的を達成できるデザインを心がけています。インターフェースの重要性が増す中でデザインの役割を理解し、そのプランに最適な提案をさせていただきます。";
const text3 =
  "デザインの意図を理解し、動きや効果を適切に使用することでWebサイトの仕上がりは大きく変わります。スマートフォンサイト、ワードプレスを使用した更新性の高いサイト、Javascriptを使用した動きのあるサイトなど、様々なサイトのコーディングを行っております。";

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography component="div">
        <Slide in={true}>
          <Box
            my={10}
            ml={3}
            fontFamily="Roboto"
            letterSpacing={6}
            fontSize="h4.fontSize"
            textAlign="left"
          >
            Shimizu's Portfolio
          </Box>
        </Slide>
        <img src={pic_cat2} alt="pic1" className={classes.media} />
        <Box
          my={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          Service
        </Box>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
          spacing={10}
        >
          <Grid item>
            <ServiceBox
              title="ディレクション"
              title2="DIRECTION"
              icon={<CreateIcon fontSize="large" />}
              text={text1}
            />
          </Grid>
          <Grid item>
            <ServiceBox
              title="デザイン"
              title2="DESIGN"
              icon={<PaletteIcon fontSize="large" />}
              text={text2}
            />
          </Grid>
          <Grid item>
            <ServiceBox
              title="コーディング"
              title2="CODING"
              icon={<CodeIcon fontSize="large" />}
              text={text3}
            />
          </Grid>
        </Grid>
        <img src={pic_cat2} alt="pic1" className={classes.media} />
        <Box
          mt={15}
          mb={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          Works
        </Box>
        <img src={pic_cat2} alt="pic1" className={classes.media} />
        <Box
          mt={15}
          mb={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          About Me
        </Box>
        <img src={pic_cat2} alt="pic1" className={classes.media} />
        <Box
          mt={15}
          mb={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          Technologies
        </Box>
        <Box
          mb={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          textAlign="center"
          fontSize="h5.fontSize"
        >
          業務で利用実績のある技術です。
        </Box>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
          spacing={1}
        >
          {logos.map(e => {
            return (
              <Grid item>
                <img src={e} className={classes.logo}/>
              </Grid>
            );
          })}
        </Grid>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
