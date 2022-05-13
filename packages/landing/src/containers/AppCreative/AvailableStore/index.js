import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Select from 'common/components/Select';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import BarCode from 'common/assets/image/appCreative/bar-code.png';
import SectionWrapper, {
  ThumbWrapper,
  TextWrapper,
  Subscribe,
  SubscribeField,
  BarCodeArea,
  Nav,
} from './availableStore.style';
import Link from 'next/link';

import { availableStore, footerWidget } from 'common/data/AppCreative';

const AvailableStore = () => {
  const { title, description, thumb, numberPrefix } = availableStore;
  return (
    <SectionWrapper id="contact-us">
      <Container>
        <TextWrapper>
          <Heading content={title} />
          <Text content={description} />
          <Text content={'Tin Players'} />
          {/* <Text content={'+64 221266951'} /> */}
          <Text content={'business@tinplayers.xyz'} />
          <Nav className="social__share">
                {footerWidget.socialLinks.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <a className={item.name}>{item.icon}</a>
                  </Link>
                ))}
              </Nav>
          {/* <Subscribe>
            <SubscribeField>
              <Select
                options={numberPrefix}
                placeholder="+14"
                className="phone_search_select"
                aria-label="select options"
              />
              <Input
                inputType="text"
                placeholder="Phone Number"
                iconPosition="left"
                aria-label="number"
              />
            </SubscribeField>
            <Button title="Send" type="submit" />
          </Subscribe> */}
          {/* <BarCodeArea>
            <Button
              className="bar__code"
              variant="textButton"
              icon={<NextImage src={BarCode} alt="Scan" />}
              iconPosition="left"
              title="Scan to download"
            />
          </BarCodeArea> */}
        </TextWrapper>
        <ThumbWrapper>
          <Fade right>
            <NextImage src={thumb} alt="App Image" />
          </Fade>
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AvailableStore;
