import {Content, HeaderText, Hills, MainContainer, SocialContainer, SocialLink, StarContainer} from "./styles";
import bgStars from '../../assets/images/bg-stars.svg'
import hills from '../../assets/images/pattern-hills.svg'
import FlipCountdown from '@rumess/react-flip-countdown';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import pinterestIcon from '../../assets/images/icon-pinterest.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';

const Home = () => {


  return (
    <MainContainer>
      <StarContainer bg={bgStars}>
        <Content>
          <HeaderText> WE'RE LAUNCHING SOON</HeaderText>
          <FlipCountdown
            size='large'
            titlePosition='bottom'
            hideYear
            hideMonth
            dayTitle='Days'
            hourTitle='Hours'
            minuteTitle='Minutes'
            secondTitle='Seconds'
            endAt={'2022-12-12 01:26:58'} // Date/Time
          />
          <SocialContainer>
            <SocialLink>
              <img src={facebookIcon} alt={'facebook icon'}/>
            </SocialLink>
            <SocialLink>
              <img src={pinterestIcon} alt={'pinterest icon'}/>
            </SocialLink>
            <SocialLink>
              <img src={instagramIcon} alt={'instagram icon'} />
            </SocialLink>
          </SocialContainer>
        </Content>
        <Hills hills={hills}/>
      </StarContainer>
    </MainContainer>
  )
}


export default Home;