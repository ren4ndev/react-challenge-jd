import React from 'react';
import Content from '../../Segments/Content';
import firstSectionMob from '../../../assets/images/first-section-mob.png';
import firstSectionDesk from '../../../assets/images/first-section-desk.png';
import thirdSectionMob from '../../../assets/images/third-section-mob.webp';
import thirdSectionDesk from '../../../assets/images/third-section-desk.webp';
import {
  Section,
  Divider,
  Line,
} from './styles';

const content = [
  { // first
    type: 'contained',
    imageSrcDesk: firstSectionDesk,
    imageSrcMob: firstSectionMob,
    title: 'Share your home, nanny and costs',
    desc: 'You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.',
    link: {
      text: 'Ready to get started?',
      href: '',
    },
  },
  { // third
    type: 'contained',
    imageSrcDesk: thirdSectionDesk,
    imageSrcMob: thirdSectionMob,
    title: 'Share your home, nanny and costs',
    desc: 'You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.',
    link: {
      text: 'Ready to get started?',
      href: '',
    },
  },
];

export default function HomeContent() {
  return (
    <>
      {content.map((section, index) => {
        if (index !== content.length) {
          return (
            <>
              <Section>
                <Content {...section} />
              </Section>
              <Divider><Line /></Divider>
            </>
          );
        }
        return (
          <Section>
            <Content {...section} />
          </Section>
        );
      })}
    </>
  );
}
