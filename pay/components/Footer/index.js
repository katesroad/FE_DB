import { Facebook, Logo, Twitter, Linkedin } from 'components/Icons';
import { NavItem, BtnPrimary } from 'components/lib';
import * as React from 'react';
import { Field, Formik } from 'formik';
import {
  Footer,
  SocialIcons,
  NavItems,
  FooterContent,
  Column,
  ReadyToStart,
  FillForm
} from './styles';

export default function PageFooter() {
  return (
    <>
      <ReadyToStart>
        <h2>Ready to start</h2>
        <Formik initialValues={{ contactEmail: '' }}>
          {() => (
            <FillForm>
              <Field name="contactEmail" id="contactEmail" placeholder="Enter email address" />
              <BtnPrimary>Schedule a demo</BtnPrimary>
            </FillForm>
          )}
        </Formik>
      </ReadyToStart>
      <Footer>
        <FooterContent>
          <Column>
            <Logo />
            <NavItems>
              <NavItem href="/pricing">Pricing</NavItem>
              <NavItem href="/about">about</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </NavItems>
          </Column>
          <SocialIcons>
            <Facebook />
            <Twitter />
            <Linkedin />
          </SocialIcons>
        </FooterContent>
      </Footer>
    </>
  );
}
