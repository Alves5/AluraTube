import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline";
import {StyledFavoritos} from "../src/components/Favoritos";
import {StyledBanner} from "../src/components/Banner";

function HomePage() {

    return  (
        <>
            <CSSReset/>
            <div  style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Banner/>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}/>
                <Favoritos playlistFavoritos={config.playlistFavoritos}/>
            </div>
        </>
    );
  }
  
  export default HomePage

//   function Menu(){
//     return (
//         <div>Menu</div>    
//     )
// }
function Banner(){
    return (
        <StyledBanner>
            <img src={config.banner}/>
        </StyledBanner>    
    )
}

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
function Header(){
    return (
        <StyledHeader>
            {/* <img src=""/> */}
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
function Timeline(props){
    const playlistNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playlistNames.map(playlistName => {
                const videos = props.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map(video => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb}/>
                                            <span>{video.title}</span>
                                        </a>
                                    )
                                })
                            }
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
                    <section>
                        <h2>{config.titleAluraFavoritos}</h2>
                      <div>
                        {
                            bloco.map(blo => {
                                return (
                                    <div>
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