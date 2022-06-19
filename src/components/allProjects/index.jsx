import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import NavBar from "../navBar";
import { FaFileCode } from "react-icons/fa";
import Footer from "../footer";
import UpArrow from "../upArrow";

const AllProjects = () => {
  let projectArr = [
    {
      name: "tesla-clone_bl4bsg",
      title: "Tesla Clone",
      webUrl: "https://tesla-clone-one.netlify.app/",
      codeUrl: "https://github.com/primelos/tesla-clone",
    },
    {
      name: "netflix_jmnf7z",
      title: "Netflix Clone",
      webUrl: "https://netflixclone-26bcf.web.app/",
      codeUrl: "https://github.com/primelos/netflix-clone",
    },
    {
      name: "spacetagram_yhvlxr",
      title: "Spacetagram",
      webUrl: "https://spacestagram21.vercel.app/",
      codeUrl: "https://github.com/primelos/Spacestagram21",
    },
    {
      name: "champs_zc4eiz",
      title: "Machester Page",
      webUrl: "https://futbol-dun.vercel.app/",
      codeUrl: "https://github.com/primelos/futbol",
    },
    {
      name: "gpt3_xrpg7n",
      title: "GPT3 AI",
      webUrl: "https://gpt-3-murex.vercel.app/",
      codeUrl: "https://github.com/primelos/GPT-3",
    },
    {
      name: "pintrest_wo3d0o",
      title: "Pintrest Clone",
      webUrl: "https://pintrest-clone.vercel.app/",
      codeUrl: "https://github.com/primelos/pintrest-clone",
    },
    {
      name: "disney_e6aip4",
      title: "Disney Clone",
      webUrl: "https://disneyplus-cf094.web.app/",
      codeUrl: "https://github.com/primelos/disney-plus-clone",
    },
    {
      name: "starbucks_xwoczk",
      title: "Starbucks Clone",
      webUrl: "https://starbucks-clone-green.vercel.app/",
      codeUrl: "https://github.com/primelos/Starbucks-clone",
    },
    {
      name: "shoppies_sez61k",
      title: "Favorite Movies",
      webUrl: "https://shoppies-cfv.vercel.app/",
      codeUrl: "https://github.com/primelos/Shoppies-cfv",
    },
    {
      name: "uber-clone_waaoin",
      title: "Uber Clone",
      webUrl: "https://uber-clone-gold.vercel.app/",
      codeUrl: "https://github.com/primelos/uber-clone",
    },
    {
      name: "gdrive_tmhhub",
      title: "Google Drive Clone",
      webUrl: "https://google-drive-clone.vercel.app/",
      codeUrl: "https://github.com/primelos/google-drive-clone",
    },
    {
      name: "todo-list_prwfux",
      title: "Todo List",
      webUrl: "https://priceless-lamport-ee903d.netlify.app/",
      codeUrl: "https://github.com/primelos/cp_todo_app",
    },
    {
      name: "djevent_jorspt",
      title: "DJ Events",
      webUrl: "https://djevents2021.vercel.app/",
      codeUrl: "https://github.com/primelos/dj-events-2021",
    },
    {
      name: "lotto_qzxsz3",
      title: "Lotto Numbers",
      webUrl: "https://my-lotto-cvenegas9.vercel.app/",
      codeUrl: "https://github.com/primelos/my-lotto",
    },
    {
      name: "crown_oqfjqz",
      title: "Crown Clothing",
      webUrl: "",
      codeUrl: "https://github.com/primelos/google-drive-clone",
    },
    {
      name: "calcu_ro8lqk",
      title: "Calculator",
      webUrl: "https://react-calc-eta.vercel.app/",
      codeUrl: "https://github.com/primelos/react-calc",
    },
    {
      name: "budget_wht9ry",
      title: "Budget",
      webUrl: "https://my-budget-app.vercel.app/",
      codeUrl: "https://github.com/primelos/my-budget-app",
    },
    {
      name: "memory_d3jbod",
      title: "Memory Game",
      webUrl: "https://memory-g.vercel.app/",
      codeUrl: "https://github.com/primelos/memoryG",
    },
    {
      name: "ranNum_njfzfp",
      title: "Random Number",
      webUrl: "https://rand-number.vercel.app/",
      codeUrl: "https://github.com/primelos/randNumber",
    },
    {
      name: "recipe_s47mgb",
      title: "Recipe",
      webUrl: "https://recipes-app-delta.vercel.app/",
      codeUrl: "https://github.com/primelos/recipes-app",
    },
    {
      name: "monsters_nnbqxq",
      title: "Monsters",
      webUrl: "https://primelos.github.io/rolodex/",
      codeUrl: "https://github.com/primelos/rolodex",
    },
    {
      name: "snake_kczpgm",
      title: "Snake",
      webUrl: "https://snake-ebon.vercel.app/",
      codeUrl: "https://github.com/primelos/Snake",
    },
    {
      name: "car-sales_wx8fog",
      title: "Car Sales",
      webUrl: "https://carbuyercom.netlify.app/",
      codeUrl: "https://github.com/primelos/Car-Sales/tree/carlos-venega",
    },
    {
      name: "rickandmorty_vww3jo",
      title: "Rick & Morty",
      webUrl:
        "https://sprint-challenge2-single-page-apps2-cvenegas9.vercel.app/",
      codeUrl:
        "https://github.com/primelos/SprintChallenge2-Single-Page-Apps/tree/carlos-venegashttps://github.com/primelos/Car-Sales/tree/carlos-venega",
    },
    {
      name: "monsters_nnbqxq",
      title: "Game of Life",
      webUrl: "https://cs-build-week.vercel.app/",
      codeUrl: "https://github.com/primelos/CS-Build-Week",
    },
    {
      name: "meme_khvbol",
      title: "Meme Creator",
      webUrl: "https://meme-generator-ashen.vercel.app/",
      codeUrl: "https://github.com/primelos/memeGenerator",
    },
    {
      name: "tictactoe_coanjf",
      title: "Tic Tac Toe",
      webUrl: "https://tic-tac-toe-snowy-chi.vercel.app/",
      codeUrl: "https://github.com/primelos/TicTacToe",
    },
    {
      name: "gmail_mc0g1o",
      title: "Gmail Clone",
      webUrl: "https://gmail-clone-cfv.netlify.app/",
      codeUrl: "https://github.com/primelos/gmail-clone",
    },
    {
      name: "instagram_vl5k6y",
      title: "Instagram Clone",
      webUrl: "https://instagram-clone-9eee0.firebaseapp.com/",
      codeUrl: "https://github.com/primelos/instagram-clone",
    },
  ];

  return (
    <Wrapper>
      <NavBar />
      <Header>Projects Examples</Header>
      <CardContainer>
        {projectArr.map((test, i) => {
          const cld = new Cloudinary({
            cloud: {
              cloudName: "primelos",
            },
          });
          const myImage = cld.image(test.name);
          myImage.resize(fill().width(250).height(250));
          return (
            <Card key={test.name} style={{ width: "20rem", margin: "20px" }}>
              <AdvancedImage cldImg={myImage} />
              <Card.Body>
                <Card.Title style={{ fontSize: "1.7rem" }}>
                  {test.title}
                </Card.Title>
                {/* <Card.Text>Built with React</Card.Text> */}

                <a
                  className="btn btn-primary "
                  href={test.webUrl ? test.webUrl : null}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  Browse
                </a>

                <a
                  className="btn btn-primary ms-3"
                  href={test.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  <IconBox />
                </a>
              </Card.Body>
            </Card>
          );
        })}
      </CardContainer>
      <Footer />
      <UpArrow />
    </Wrapper>
  );
};

export default AllProjects;

const Wrapper = styled.div``;

const Header = styled.div`
  margin: 40px 0 100px 0;
  color: whitesmoke;
  text-align: center;
  font-size: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconBox = styled(FaFileCode)`
  font-size: 25px;
`;
