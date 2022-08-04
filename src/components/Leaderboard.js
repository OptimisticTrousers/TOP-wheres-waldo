import { StyledLeaderBoard } from "./styled/StyledLeaderBoard";
import { LeaderboardImages } from "./styled/LeaderboardImages.styled";
import beach from "../assets/beach.jpg";
import fruitland from "../assets/fruitland.jpg";
import hollywood from "../assets/hollywood.jpg";
import space from "../assets/space.jpg";
import track from "../assets/track.jpg";
import winter from "../assets/winter.jpg";
import { useContext, useState } from "react";
import { ImageContext } from "../context/Store";

export default function Leaderboard() {
  const { images } = useContext(ImageContext);
  const [userClickedImage, setUserClickedImage] = useState(false);

  function handleClick(event) {
    setUserClickedImage((prevValue) => !prevValue);
  }

  const style = {
    backgroundColor: userClickedImage && "rgb(254, 226, 226, 1)",
  };

  const renderedImages = images.map(({ image, name }, index) => {
    return (
      <div onClick={handleClick}>
        <img src={image} alt={name} />
        <p>Level {index + 1}</p>
      </div>
    );
  });
  return (
    <StyledLeaderBoard>
      <div>
        <LeaderboardImages>{renderedImages}</LeaderboardImages>
        <table>
          <caption>Leaderboard</caption>
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
            <tr>
              <td>#1</td>
              <td>Leandro Rezende</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledLeaderBoard>
  );
}
