'use client'
import axios from 'axios'
import { Button, Container, Flex, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import useSWR from "swr"
import { SpinnerCircular } from 'spinners-react';

import { useIsMounted } from '@/app/hooks/useIsMounted';



const NOUN_API_URL = "https://api.cloudnouns.com/v1/pfp"
const BEACON_NODE = "http://localhost:5052"

async function getBlobFromSlot(slot: string | number) {
  const result = await axios.get(`http://34.134.77.77:3333/stream/svg?slot=${slot}`);

  return Promise.all(([
    134604,
134607,
134611,
134614,
134617,
134621,
134624,
134627,
  ]).map(async slot => axios.get(`http://34.134.77.77:3333/stream/svg?slot=${slot}`).then(r => r.data)))
}

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
  const { data: nounceBlobs, isLoading: nounceBlobLoading } = useSWR(BEACON_NODE, () => getBlobFromSlot(134614))

  
  if (!isMounted) {
    return
  }

  return (
    <Flex direction="column"  >
      {nounceBlobs?.map((b, i) => (
        (
          <Container key={i} margin="30px">
            <div
        dangerouslySetInnerHTML={{ __html: b }}
      />
          </Container>
        ) 
      ))}
      {isLoading ? <SpinnerCircular /> : (
        <Button backgroundColor="nouns.pink" _hover={{
          backgroundColor: "black"
        }} color="white" onClick={() => setFetchNoun(prev => !prev)}>Create a Noun</Button>
      )}
    </Flex>
  )
}