import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from './banner.style';

import bannerImg from 'common/assets/image/appCreative/bannerImg.png';
import bannerImgMobile from 'common/assets/image/appCreative/availableThumb.png';

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

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Wormhole Connecting Web 2 & Web 3 Gaming"
            />
          </Fade>
          <Fade up delay={200}>
            <Text content="Make decentralized Virtual Sports Real for Everyone" />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              {/* <Button className="primary" title="Start 14-days free trail" />
              <div onClick={handleVideoModal}>
                <Button
                  className="text"
                  variant="textButton"
                  icon={<Icon icon={playCircle} />}
                  iconPosition="left"
                  title="How it works"
                />
              </div> */}
              <Button
                  className="text"
                  variant="textButton"
                  title="WEB 3 INTERFACE" />
               <Button
                  className="text"
                  variant="textButton"
                  title="TOKENIZE PIPELINE" />
                   <Button
                  className="text"
                  variant="textButton"
                  title="GAME ECONOMICS" />
                   <Button
                  className="text"
                  variant="textButton"
                  title="SCHOLARSHIP" />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <NextImage src={bannerImg} alt="Banner" />
        </BannerImage>
        <BannerImageMobile>
          <NextImage src={bannerImgMobile} alt="Mobile Banner" />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
