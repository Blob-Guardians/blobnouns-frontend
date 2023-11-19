'use client'
import axios from 'axios'
import { Button, Flex, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr"
import ReactPlayer from 'react-player'
import { SpinnerCircular } from 'spinners-react';

import { useIsMounted } from '@/app/hooks/useIsMounted';



const NOUN_API_URL = "https://api.cloudnouns.com/v1/pfp"

async function createNounBlobTransaction(url: string) {
  const nounSvg = await axios.get(url).then(r => r.data)
  const svgBlob = new Blob([nounSvg], { type: 'image/svg+xml' });

  const formData = new FormData();

  formData.append("file", svgBlob);

  const result = await axios.post("http://34.134.77.77:3333/upload", formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  console.log(result)
}

export const CreateNounButton: React.FC = function () {
  const isMounted = useIsMounted()
  const [fetchNoun, setFetchNoun] = useState(false)
  const { data, isLoading, error } = useSWR(fetchNoun ? NOUN_API_URL : undefined , createNounBlobTransaction)

  if (!isMounted) {
    return
  }

  return (
    <Flex direction="column"  >
     
      {isLoading ? <SpinnerCircular /> : (
        <Button backgroundColor="nouns.pink" _hover={{
          backgroundColor: "black"
        }} color="white" onClick={() => setFetchNoun(prev => !prev)}>Create a Noun</Button>
      )}
    </Flex>
  )
}