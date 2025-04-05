import {type PropsWithChildren} from 'react';
import {Container} from '@/components/container';

export default function Layout({children}: PropsWithChildren) {
  return (
    <Container>
      {children}
    </Container>
  );
}
