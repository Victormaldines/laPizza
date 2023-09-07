import { useSelector } from 'react-redux';

import { HomeSection, HomeContainer } from './styled';

export default function Home() {
  const username = useSelector((state) => state.auth.user.name);

  return (
    <HomeContainer className="grid-template">
      <HomeSection className="message">
        {username ? (
          <span>
            <span>Olá, {username}!</span>
            <span>o que vai para hoje?</span>
          </span>
        ) : (
          <span>criamos suas melhores sensações</span>
        )}
      </HomeSection>
      <HomeSection className="info">
        <span className="title">Localização</span>
        <section className="location">
          <section className="address">
            <span className="emphasis">Hollownest</span>
            <span>Palácio Branco, 101 - HK</span>
          </section>
          <span className="telephone">00 1234-5678</span>
          <span className="button emphasis">Ir para local</span>
          <section className="schedule">
            <span>Todos os dias das 18:30 às 23:30</span>
          </section>
        </section>
      </HomeSection>
    </HomeContainer>
  );
}
