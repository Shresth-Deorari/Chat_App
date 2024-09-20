import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent display="flex" alignItems="center" justifyContent="center" minH="100vh">
      <Box bg="gray.800" w="100%" p={4} borderRadius="lg" borderWidth="1px" boxShadow="lg">
        <Tabs isFitted variant="soft-rounded" colorScheme="purple">
          <TabList mb="1em">
            <Tab _selected={{ color: "white", bg: "purple.600" }}>Login</Tab>
            <Tab _selected={{ color: "white", bg: "purple.600" }}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
