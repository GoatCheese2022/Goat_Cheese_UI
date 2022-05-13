import React from 'react';
import { Box, Container, Flex } from 'styled-minimal';

function Footer() {
  return (
    <Box as="footer" borderTop="0.1rem solid #ddd">
      <Container py={3}>
        <Flex justifyContent="space-between">
          <iframe
            frameBorder="0"
            height="20px"
            scrolling="0"
            src="https://ghbtns.com/github-btn.html?user=GoatCheese2022&repo=Goat_Cheese_UI&type=star&count=true"
            title="GitHub Stars"
            width="110px"
          />
          <iframe
            frameBorder="0"
            height="20px"
            scrolling="0"
            src="https://ghbtns.com/github-btn.html?user=GoatCheese2022&type=follow&count=true"
            title="GitHub Follow"
            width="200px"
          />
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
