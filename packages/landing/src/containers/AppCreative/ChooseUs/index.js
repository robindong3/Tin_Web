import React from 'react';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import SectionWrapper, { ThumbWrapper, TextWrapper } from './chooseUs.style';

import { chooseUs } from 'common/data/AppCreative';

const ChooseUs = () => {
  const { title, thumb, features } = chooseUs;
  return (
    <SectionWrapper id='about'>
      <Container>
        <ThumbWrapper>
          <NextImage src={thumb} alt="App Image" />
        </ThumbWrapper>

        <TextWrapper>
          <Heading content={title} />
          {/* <Text content="Advanced Framework to Improve AI Level & Traning" />
          <Button
                  title="our works"
                /> */}
          {features.map((item) => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<Text as="span" content={'0' + item.id} />}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
