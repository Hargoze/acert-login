import React from "react";
import Head from "next/head"
import { useRouter } from 'next/router'
import { Box, Stack, Flex, Text, Input, InputGroup, Icon, InputRightElement, Button, Checkbox, Link, Image } from "@chakra-ui/react"
import { Container } from '../components/Container'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const Post = () => {
  const language=useRouter().locale
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
  <Container>
  <Head>
    <link rel="icon" sizes="48x48" href="/miniLogo.ico"/>
    <meta charSet="utf-8" />
    <meta name="description" content="page description"/>
    <title>acert | accedez à votre compte</title>
  </Head>
  <Flex w="100%">
    <Link href="/">
      <Image ml="6" src="/SodaLogo300-120.png" alt="Acert Logo" width="225px" height="90px"/>
    </Link>
  </Flex>
    <Stack
    w="full" h="930px"
    bgImage="url('/apiagro-background.png')" bgRepeat="no-repeat" bgSize="contain"
    align="center" justify="center" display={{base:"none", lg:"flex"}}>
      <Flex rounded="lg" overflow="hidden" w={{default:"90%", lg:"50%"}}>
        <Stack align="center" justify="center" bg="blue.400" w="50%" h="420px">
          <Text color="white" px="10" fontSize="26px">Bienvenue sur la plateforme d’échanges de données utiles pour le secteur agricole</Text>
        </Stack>
        <Stack align="start" justify="start" w="50%" h="420px" bg="white" p="6">
          <Text>adresse email professionnelle</Text>
          <Input placeholder="Email pro"/>
          <Text>mot de passe</Text>
          <Input placeholder="Mot de passe" type="password"/>
          <Button rounded="lg" colorScheme="primary">s'identifier</Button>
          <Checkbox>se souvenir de moi</Checkbox>
          <Text>Vous n'avez pas encore de compte ?</Text>
          <Link color="blue.500"> Inscrivez-vous</Link>
          <Text>Vous avez oublié votre mot de passe ? </Text>
          <Link color="blue.500">Réinitialiser</Link>
        </Stack>
      </Flex>
    </Stack>
    <Stack display={{base:"flex", lg:"none"}}>
      <Stack align="center" justify="center" w="100%" lineHeight="1.2" py="6">
        <Text color="secondary.500" px="10" fontSize="26px">Bienvenue sur la plateforme d’échanges de données utiles pour le secteur agricole</Text>
      </Stack>
      <Stack align="start" justify="start" w="100%" bg="white" p="6" fontSize="18px">
        <Text>adresse email professionnelle</Text>
        <Input placeholder="Email pro"/>
        <Text>mot de passe</Text>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Entrez votre mot de passe"
          />
          <InputRightElement width="4.5rem">
            <Icon onClick={handleClick} as={show ? ViewIcon : ViewOffIcon}/>
          </InputRightElement>
        </InputGroup>
        <Button rounded="lg" colorScheme="primary">s'identifier</Button>
        <Checkbox>se souvenir de moi</Checkbox>
        <Text>Vous n'avez pas encore de compte ?</Text>
        <Link color="blue.500"> Inscrivez-vous</Link>
        <Text>Vous avez oublié votre mot de passe ? </Text>
        <Link color="blue.500">Réinitialiser</Link>
      </Stack>
    </Stack>
  </Container>
  )
}

export default Post