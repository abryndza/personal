import { Box, Center, Text } from "@mantine/core";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" py="md" px="md">
      <Center>
        <Text size="sm" c="dimmed">
          © {year} Adam Bryndza.
        </Text>
      </Center>
    </Box>
  );
};
