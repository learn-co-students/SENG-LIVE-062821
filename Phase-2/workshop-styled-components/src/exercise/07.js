import { useState } from "react";
import styled, { css } from "styled-components";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageWrapper>
      <h2>Modal Popup</h2>
      {/* clicking outside the window closes it */}
      <ModalWrapper isOpen={isOpen} onClick={() => setIsOpen(false)}>
        {/* stopPropagation prevents the event from bubbling up and closing the window */}
        <ModalWindow onClick={e => e.stopPropagation()}>
          <Box background="palegreen">
            <h4>Modal Content</h4>
            <p>Whatever you want in the box</p>
            <Visual background="lavender" />
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </Box>
        </ModalWindow>
      </ModalWrapper>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <h2>CenteredLayout</h2>
      <CenteredLayout>
        <Box background="papayawhip">:)</Box>
      </CenteredLayout>

      <h2>DeconstructedPancakeLayout</h2>
      <DeconstructedPancakeLayout>
        <Box background="aliceblue">1</Box>
        <Box background="aliceblue">2</Box>
        <Box background="aliceblue">3</Box>
      </DeconstructedPancakeLayout>

      <h2>SidebarSaysLayout</h2>
      <SidebarSaysLayout>
        <Box background="papayawhip">
          Sidebar takes up at least 150px, and at most 25%
        </Box>
        <Box>This element takes up the remaining space</Box>
      </SidebarSaysLayout>

      <h2>PancakeStackLayout</h2>
      <PancakeStackLayout>
        <Box background="lightpink">Header</Box>
        <Box>Main</Box>
        <Box background="lavender">Footer</Box>
      </PancakeStackLayout>

      <h2>HolyGrailLayout</h2>
      <HolyGrailLayout>
        <header>Header</header>
        <aside className="left">Left Sidebar</aside>
        <main>Main Content</main>
        <aside className="right">Right Sidebar</aside>
        <footer>Footer</footer>
      </HolyGrailLayout>

      <h2>TwelveSpanGrid</h2>
      <TwelveSpanGrid>
        <Box className="span-12" background="lightpink">
          Span 12
        </Box>
        <Box className="span-6" background="palegreen">
          Span 6
        </Box>
        <Box className="span-4" background="lavender">
          Span 4
        </Box>
        <Box className="span-2" background="papayawhip">
          Span 2
        </Box>
      </TwelveSpanGrid>

      <h2>RAMLayout</h2>
      <RAMLayout>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </RAMLayout>

      <h2>LineUpLayout</h2>
      <LineUpLayout>
        <Box className="card">
          <h4>Title 1</h4>
          <p>Medium length description with a few more words here.</p>
          <Visual background="lavender" />
        </Box>
        <Box className="card">
          <h4>Title 2</h4>
          <p>
            Long Description. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
          <Visual background="palegreen" />
        </Box>
        <Box className="card">
          <h4>Title 3</h4>
          <p>Short Description.</p>
          <Visual background="lightpink" />
        </Box>
      </LineUpLayout>

      <h2>ClampingMyStyleLayout</h2>
      <ClampingMyStyleLayout>
        <Box className="card">
          <h4>Title</h4>
          <Visual background="palegreen" />
          <p>
            As this is resized, the minimum it will be is 23 characters; the max
            is 46; and in between it will take up 50% of the parent container
          </p>
        </Box>
      </ClampingMyStyleLayout>

      <h2>RespectForAspectLayout</h2>
      <RespectForAspectLayout>
        <Box className="card">
          <h4>Video Title</h4>
          <div className="video" />
          <p>Descriptive Text. This demo works in Chromium 84+.</p>
        </Box>
      </RespectForAspectLayout>
    </PageWrapper>
  );
}

// Using this to give all the layouts some of the styles to keep this code DRY
const layoutBox = css`
  width: 80%;
  min-height: 300px;
  resize: both;
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  > * {
    border: 1px dashed rgba(0, 0, 0, 0.1);
  }
`;

const ModalWrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  place-items: center;
  background: rgba(255, 255, 255, 0.7);
`;

const ModalWindow = styled.div`
  width: 400px;
  height: 400px;
`;

const CenteredLayout = styled.div`
  display: grid;
  place-items: center;
  ${layoutBox}
`;

const DeconstructedPancakeLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${layoutBox}

  /* child styles */
  div {
    flex: 0 1 150px;
    margin: 5px;
  }
`;

const SidebarSaysLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
  ${layoutBox};
`;

const PancakeStackLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${layoutBox};
`;

const HolyGrailLayout = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  ${layoutBox};

  header {
    grid-column: 1 / 4;
    background: lavender;
    padding: 1rem;
  }

  .left {
    grid-column: 1 / 2;
    background: skyblue;
    padding: 1rem;
  }

  main {
    grid-column: 2 / 3;
    background: papayawhip;
    padding: 1rem;
  }

  .right {
    grid-column: 3 / 4;
    background: aliceblue;
    padding: 1rem;
  }

  footer {
    grid-column: 1 / 4;
    background: palegreen;
    padding: 1rem;
  }
`;

const TwelveSpanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  ${layoutBox};

  .span-12 {
    grid-column: 1 / span 12;
  }

  .span-6 {
    grid-column: 1 / span 6;
  }

  .span-4 {
    grid-column: 4 / span 4;
  }

  .span-2 {
    grid-column: 3 / span 2;
  }
`;

const RAMLayout = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  ${layoutBox};
`;

const LineUpLayout = styled.div`
  height: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  ${layoutBox};

  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
  }
`;

const ClampingMyStyleLayout = styled.div`
  display: grid;
  place-items: center;
  ${layoutBox};

  .card {
    width: clamp(23ch, 50%, 46ch);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

const RespectForAspectLayout = styled.div`
  display: grid;
  place-items: center;
  ${layoutBox};

  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
    width: 50%;
  }

  .card .video {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: palegreen;
  }
`;

// Utilities
const PageWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding-bottom: 200px;
`;

const Box = styled.div`
  background: ${props => props.background || "aliceblue"};
  display: grid;
  place-items: center;
  padding: 1rem;
  font-weight: bold;
`;

const Visual = styled.div`
  background: ${props => props.background || "aliceblue"};
  height: 120px;
  width: 100%;
`;
