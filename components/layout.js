import Header from "./header/header";
import LastContent from "./lastContent/lastContent";
import Container from "./container/container";
import Main from "./main/main";

export default function Layout({ children }) {
  return (
    <>
      <Header />
        <Main>
          <Container>{children}</Container>
        </Main>
      <LastContent />
    </>
  );
}
