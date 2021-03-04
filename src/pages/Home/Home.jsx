import {Hills, MainContainer, StarContainer} from "./styles";
import bgStars from '../../assets/images/bg-stars.svg'
import hills from '../../assets/images/pattern-hills.svg'

const Home = () => {
  return (
    <MainContainer>
      <StarContainer bg={bgStars}>



        <Hills hills={hills}/>
      </StarContainer>
    </MainContainer>
  )
}


export default Home;