import React from 'react';
import Logo from 'common/components/UIElements/Logo';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import { openModal, closeModal } from '@redq/reuse-modal';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import { SectionHeader } from '../appCreative.style';
import FeatureBlock from 'common/components/FeatureBlock';

import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  VideoWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './projects.style';
import { projects } from 'common/data/AppCreative';

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/hW98BFnVCm8"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Projects = () => {
  const { slogan, title, features, video_theme, clients } = projects;

  return (
    <SectionWrapper id="platform">
      <Container>
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <ClientWrapper>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Projects;
