import { Box, FormControl, Button, FormLabel, Input, Card, CardBody } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box marginTop={"60px"}>
      <Card>
        <CardBody>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type='email' placeholder="email" />
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder="password" />
          </FormControl>
          <Button marginTop={"10px"} width={"100%"} >Login</Button>
        </CardBody>
      </Card>
    </Box>
  );
}
