import React from "react";
import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu"
import { StyledTimeline } from "../src/components/Timeline";
import {StyledFavoritos} from "../src/components/Favoritos";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return  (
        <>
            <CSSReset/>
            <div  style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
                <Favoritos playlistFavoritos={config.playlistFavoritos}/>
            </div>
        </>
    );
  }
  
  export default HomePage

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

`;
const StyledBanner = styled.div`
    background-image: url(${config.banner});
    height: 230px;
`;
function Header(){
    return (
        <StyledHeader>
            <StyledBanner />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}
function Timeline({searchValue, ...props}){
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map(playlistName => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>{video.title}</span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>    
                )
            })}
        </StyledTimeline>    
    )
}
function Favoritos(props){
    const favoritosNames = Object.keys(props.playlistFavoritos);
    return (
        <StyledFavoritos> 
            {favoritosNames.map(favoritoName => {
            
               const bloco = props.playlistFavoritos[favoritoName];
               return (
                    <section key={favoritoName}>
                        <h2>{config.titleAluraFavoritos}</h2>
                      <div>
                        {
                            bloco.map(blo => {
                                return (
                                    <div key={blo.perfil}>
                                        <img src={blo.perfil}/>
                                        <p>{blo.name}</p>
                                    </div>
                                )
                            })
                        }
                      </div>
                    </section>
                )
            })}
        </StyledFavoritos>    
    )
}