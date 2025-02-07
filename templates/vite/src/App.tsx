import { HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { AppShell, Header, Main, Radio, RadioGroup, Sidebar, themeNames, UIProvider } from '@mariusz.sh/ui';
import _ from 'lodash';
import { useTheme } from 'next-themes';
import { BsLayoutSidebar, BsLayoutSidebarInset } from 'react-icons/bs';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';

export function ThemeSelector() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <RadioGroup onChange={(event) => setTheme(event.target.value)} value={resolvedTheme}>
      <HStack gap='6'>
        {themeNames.map((theme) => (
          <Radio key={theme} value={theme}>
            {theme}
          </Radio>
        ))}
      </HStack>
    </RadioGroup>
  );
}

export function App() {
  const { open: sidebarOpen, setOpen: setSidebarOpen } = useDisclosure();

  return (
    <UIProvider>
      <AppShell
        header={<Header center='Center' left='Left' right='Right' />}
        sidebar={
          <Sidebar
            items={[
              { icon: FiHome, label: 'Home' },
              { icon: FiTrendingUp, label: 'Trending asdf asdf asdf asdf as' },
              { icon: FiCompass, label: 'Explore' },
              { icon: FiStar, label: 'Favourites' },
              { icon: FiSettings, label: 'Settings' },
            ]}
            open={sidebarOpen}
          />
        }
        stickySidebar
      >
        <Main>
          <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <BsLayoutSidebar /> : <BsLayoutSidebarInset />}
          </IconButton>
          <br />
          Main
          <br />
          <ThemeSelector />
          {_.range(100).map((i) => (
            <>
              {i}
              <br />
            </>
          ))}
          {/* <Button>Button</Button> */}
        </Main>
      </AppShell>
    </UIProvider>
  );
}
