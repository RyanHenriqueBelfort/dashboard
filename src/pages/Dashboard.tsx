import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import {Header} from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'),{
  ssr: false
})


const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false,
  },
  tooltip:{
    enabled: false,
  },
  xaxis :{
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-03-18T00:00:00.000z',
      '2022-03-19T00:00:00.000z',
      '2022-03-20T00:00:00.000z',
      '2022-03-21T00:00:00.000z',
      '2022-03-22T00:00:00.000z',
      '2022-03-23T00:00:00.000z',
      '2022-03-24T00:00:00.000z',
      '2022-03-25T00:00:00.000z',
      '2022-03-26T00:00:00.000z',
    ],
    

  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.9,
      opacityTo: 0.3
    }
  }
}
const serie = [
  {name: 'series1', data: [40, 20, 190, 100, 58, 97, 40, 29, 10]}
]

export default function Dashboard() {
  return (
    <Flex h='100vh' direction={'column'}>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx="auto"
        px="6"
      >
         <Sidebar/>

         <SimpleGrid flex='1' gap='4' minChildWidth="320px" alignItems='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb="4">
              Inscritos da semana
            </Text>
            <Chart
              type='area'
              height={160}
              options={options}
              series={serie}
            />

          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
          >
            <Text fontSize='lg' mb="4">
              Taxa de abertura
            </Text>
            <Chart
              type='area'
              height={160}
              options={options}
              series={serie}
            />

          </Box>

         </SimpleGrid>
      </Flex>
    </Flex>
  )
}
