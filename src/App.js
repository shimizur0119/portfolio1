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
import { Grid, Link, Button, Avatar } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import PaletteIcon from "@material-ui/icons/Palette";
import CodeIcon from "@material-ui/icons/Code";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Tooltip from "@material-ui/core/Tooltip";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import GitHubIcon from "@material-ui/icons/GitHub";

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
import pic_chatbot from "./pic/chatbot.png";
import pic_gas_app from "./pic/gas_app.png";
import pic_react_logo from "./pic/react_logo.png";
import pic_my from "./pic/my.png";

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
  pic_gas
];

const WorkBox = props => {
  const classes = useStyle();
  return (
    <Grid item>
      <Tooltip title={props.title} placement="top" arrow>
        <img src={props.pic} className={classes.workPic} />
      </Tooltip>
    </Grid>
  );
};

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
  "お客様の要望をヒアリングし、現状の問題点を洗い出し、効果的なプランを作成いたします。認識の齟齬が発生しないために、最適な開発手法のご提案を行います。(アジャイル/ウォーターフォール)　また、より良いUI・UXを追及するためのご提案をさせていただきます。";
const text2 =
  "ヒアリングに基づいたプランに沿って、デザインを作成いたします。人の使うものであることを常に意識して、使う人が迷わない、目的を達成できるデザインを心がけています。インターフェースの重要性が増す中でデザインの役割を理解し、そのプランに最適な提案をさせていただきます。";
const text3 =
  "デザインを再現するだけでなく、保守性の高いコードでの実装に努めることで、柔軟な変更対応が可能な状態を目指します。また、処理速度にもこだわり「UXを向上させる」ことをモチベーションとしてコーディングに取り組みます。";

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography component="div">
        <Slide in={true}>
          <Box
            id="top"
            mt={15}
            ml={3}
            fontFamily="Roboto"
            letterSpacing={6}
            fontSize="h4.fontSize"
            textAlign="left"
          >
            Shimizu's Portfolio
          </Box>
        </Slide>
        <Box pr={10} pb={5} fontFamily="Roboto">
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="center"
            justify="flex-end"
          >
            <Grid item>
              <Button>
                <AnchorLink
                  href="#service"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="SERVICE"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#works"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="WORKS"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#aboutMe"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="ABOUT ME"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#technologies"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="TECHNOLOGIES"
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <img src={pic_cat2} alt="pic1" className={classes.media} />
        <Box
          id="service"
          my={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          Service
        </Box>
        <Box mb={15}>
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
        </Box>
        <Box
          id="works"
          mt={15}
          mb={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          Works
        </Box>
        <Box>
          <Grid container direction="row" justify="center" spacing={6}>
            <WorkBox pic={pic_chatbot} title="チャットボット" />
            <WorkBox pic={pic_react_logo} title="自動化対応WEBツール" />
            <WorkBox pic={pic_gas_app} title="web報告システム" />
          </Grid>
        </Box>
        <Box
          id="aboutMe"
          mt={15}
          mb={5}
          fontFamily="Helvetica Neue"
          letterSpacing={1}
          fontSize="h2.fontSize"
          textAlign="center"
        >
          About Me
        </Box>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          spacing={5}
        >
          <Grid item>
            <Box component="p" fontSize="h6.fontSize">
              都内にてWeb関連の開発をしております。 <br />
              2017年:SIerの営業職として社会人スタート
              <br />
              2018年:「自分でシステムを作りたい」そんな衝動に駆られてエンジニアデビュー
              <br />
              基本フルスタック開発(たまにインフラまで)を経て現在に至る。
              <br />
              よくいる文系出身プログラマー
              <br />
            </Box>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
              spacing={10}
            >
              <Grid item>
                <img alt="avatar" src={pic_my} className={classes.avatar} />
              </Grid>
              <Grid item>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>清水 僚太 Shimizu Ryota</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Age</TableCell>
                      <TableCell>25</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>From</TableCell>
                      <TableCell>愛知</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Live</TableCell>
                      <TableCell>東京　足立区</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>DM</TableCell>
                      <TableCell>otsukaresamannsatabasa@gmail.com</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Link href="https://github.com/shimizur0119" target="_blank">
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
        <Box
          id="technologies"
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
          業務で利用実績のある技術
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
                <img src={e} className={classes.logo} />
              </Grid>
            );
          })}
        </Grid>
        <Box pr={10} py={10} fontFamily="Roboto">
          <Grid
            container
            direction="row"
            spacing={2}
            alignItems="center"
            justify="flex-end"
          >
            <Grid item>
              <Button>
                <AnchorLink
                  href="#top"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="TOP"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#service"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="SERVICE"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#works"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="WORKS"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#aboutMe"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="ABOUT ME"
                />
              </Button>
            </Grid>
            <Grid item>
              <Button>
                <AnchorLink
                  href="#technologies"
                  style={{ textDecoration: "none", color: "initial" }}
                  children="TECHNOLOGIES"
                />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
