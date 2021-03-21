import React from 'react';
import { Box, Markdown, Paragraph, Heading } from 'grommet';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Primum divisit ineleganter; Duo Reges: constructio interrete. Quare conare, 
quaeso. Hoc uno captus Erillus scientiam summum bonum esse defendit nec rem
ullam aliam per se expetendam. Quem si tenueris, non modo meum Ciceronem, sed 
etiam me ipsum abducas licebit. Hanc quoque iucunditatem, si vis, transfer in
animum; Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit.
Maximas vero virtutes iacere omnis necesse est voluptate dominante.`;

const md = `
\`\`\`shell
# griff-world git:feature/ui-theme ● [^._.^]ﾉ彡ミ彡ミ彡ミ
$ curl loripsum.net/api/1/plaintext
Lorem ipsum dolor sit amet, consectetur
\`\`\`
`;

const TextGuide = () => (
  <>
    <Box>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Heading key={item} level={item}>
          Heading Level {item}
        </Heading>
      ))}
    </Box>
    <Box>
      {['small', 'medium', 'large'].map((item) => (
        <React.Fragment key={item}>
          <Paragraph size={item}>
            [font: {item}] {lorem}
          </Paragraph>
          <Paragraph size={item} fill>
            [font: {item}] {lorem}
          </Paragraph>
        </React.Fragment>
      ))}
    </Box>
    <Box>
      <Markdown>{md}</Markdown>
    </Box>
  </>
);

export default TextGuide;
