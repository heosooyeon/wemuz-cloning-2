import styled from "styled-components";
import topImg from "../src/images/top_header_bg.png";
import botImg from "../src/images/benefits_header_bg.png";
import ReactPlayer from "react-player";

function Top() {
    return (
    <Block>
      <Header>
        <MainText>뮤커톤</MainText>
        <HeaderText>세상에 없던 나의 첫 음악<br></br>함께 즐기면서 경험하는 음악 협업 프로젝트</HeaderText>
      </Header>
       <Middle>
        <IntroText>
          <IntroText1>What is</IntroText1>
          <IntroText2>Mukathon?</IntroText2>
          <IntroText3>뮤커톤은 음악을 즐기고 싶은 일반인들을 대상으로<br></br>전문가들의 가이드를 통해 정해진 기간 내에 팀을 구성하여<br></br>커버곡 또는 자작곡을 완성하고 앨범 제작 및 공연까지<br></br>진행하는 음악 협업 경험 프로젝트입니다.</IntroText3>
        </IntroText>
          <ReactPlayer url={'https://youtu.be/trE4htAzay8'} width={'570px'} height={'320px'}></ReactPlayer>
       </Middle>
      <BenefitsHeader>
          <BottomTitle>뮤커톤만의 혜택</BottomTitle>
      </BenefitsHeader>
      <BenefitsDetails>
      <One>
        <Num>01</Num>
        <Title>다른 뮤지션과 함께 경험하는<br></br>음악 협업</Title>
        <Text>나와 맞는 뮤지션을 매칭하여 팀을 이룰 수 있습니다.<br></br>팀을 이룬 후 협업을 통해 버스킹, 뮤직 mt<br></br>그리고 최종 공연까지 참가 기간 동안<br></br>다양한 음악 활동을 경험할 수 있습니다.</Text>
      </One>
      <Two>
        <Num>02</Num>
        <Title>음악활동을 도와주는<br></br>든든한 멘토진</Title>
        <Text>맞춤 멘토링부터 공연 음악 편곡, 믹싱까지<br></br>음악전문학원에서 제공하는 연습실에서<br></br>소속 멘토 선생님들과 함께 멘토링을 진행하며<br></br>팀이 원하는 음악을 만들 수 있도록 도와줍니다.</Text>
      </Two>
      <Three>
        <Num>03</Num>
        <Title>잊지 못할 추억을<br></br>간직할 수 있는 굿즈까지</Title>
        <Text>녹음한 공연 곡과 공연 영상을 함께 편집한<br></br>영상 앨범부터 뮤커톤 참가 기념 굿즈까지<br></br>뮤커톤을 통해 만난 값진 추억을 선물로 드립니다.</Text>
      </Three>
      </BenefitsDetails>
    </Block>
    );
}


const Block = styled.main`

`;

const Header= styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${topImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items:center;
    }
`;

const MainText = styled.div`
    padding-top: 8%;
    color:white;
    font-size: 50px;
    font-weight: bold;
`;

const HeaderText = styled.div`
  padding-top: 1%;
  text-align: center;
  color:white;
  font-size: 20px;
  font-weight: lighter;
`;

const Middle = styled.div`
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-wrap: wrap;
	align-content: stretch;
  }
`;
const IntroText = styled.div`
  padding-top: 3%;
`;
const IntroText1 = styled.div`
  color:#785FFA;
  font-weight: lighter;
  font-size: 40px;
`;
const IntroText2 = styled.div`
  color:#785FFA;
  font-weight: normal;
  font-size: 40px;
`;
const IntroText3 = styled.div`
  padding-top: 5%;
  color:#808080;
  font-weight: lighter;
  font-size: 16px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
	  align-content: stretch;
    padding-bottom: 10%;
  }
`;
const BenefitsHeader = styled.div`
  width: 95%;
  height: 250px;
  background-image: url(${botImg});
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items:center;
  }
`;
const BottomTitle=styled.div`
  padding-top: 7%;
  color:white;
  font-size: 40px;
`;
const Num = styled.div`
  color: #D3D3D3;
  font-size: 80px;
  position: absolute;
  @media (max-width: 768px) {
    position: absolute;
  }
`;
const Title = styled.div`
  position: absolute;
  top: 35%;
  line-hight:5px;
  font-size: 20px;
  @media (max-width: 768px) {
    position: absolute;
    line-height: 20px;
    top: 25%;
  }
`;
const Text = styled.div`
  padding-top: 35%;
  color: #808080;
  font-size: 13px;
  @media (max-width: 768px) {
    padding-top: 120%;
  }
`;
const BenefitsDetails = styled.div`
  display: grid;
  padding-top: 10%;
  padding-left: 15%;
  grid-template-columns: 30% 30% 30%;
  @media (max-width: 768px) {
    display: grid;
    padding-left: 40%;
    grid-template-columns: 30%;
  }
`;
const One = styled.div`
  position: relative;
  @media (max-width: 768px) {
    position: relative;   
  }
`;
const Two = styled.div`
  position: relative;
  @media (max-width: 768px) {
    position: relative;   
  }
`;
const Three = styled.div`
  position: relative;
  @media (max-width: 768px) {
    position: relative;   
  } 
`;
export default Top;