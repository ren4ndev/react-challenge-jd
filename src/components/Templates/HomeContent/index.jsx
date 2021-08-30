import React from 'react';
import Content from '../../Segments/Content';
import firstSectionMob from '../../../assets/images/first-section.png';
import firstSectionDesk from '../../../assets/images/first-section-desk.png';
import {
  Section,
} from './styles';

const content = [
  {
    type: 'containedImage',
    imageSrcDesk: firstSectionDesk,
    imageSrcMob: firstSectionMob,
    title: 'Share your home, nanny and costs',
    desc: 'You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.',
  },
];

export default function HomeContent() {
  return (
    <>
      {content.map((section) => (
        <Section>
          <Content {...section} />
        </Section>
      ))}
    </>
  );
}
