import React from 'react';
import { Span, Copyrights, Paragraph } from '../styled/styledFooter';


const Footer = () => {
  return (
    <Copyrights>
      <Span>&copy;Copyrights</Span>
      <Paragraph>Wszelkie prawa zastrzeżone. Produkcja <strong>Tomii Technologii</strong> 2020</Paragraph>
    </Copyrights>
  );
}

export default Footer;