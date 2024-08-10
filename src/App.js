import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Heading,
  Text,
  Link,
  Stack,
  IconButton,
  Container
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionContainer = motion(Container);

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl" p={5} className="header"> {/* Added className */}
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <MotionHeading as="h1" size="2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Aviral Asthana
            </MotionHeading>
            <MotionText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
              Contact: 8528830902
            </MotionText>
            <MotionText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
              Email: <Link href="mailto:asthana.aviral0902@gmail.com">asthana.aviral0902@gmail.com</Link>
            </MotionText>
            <Stack direction="row" spacing={4} align="center" justify="center">
              <Link href="https://linkedin.com/in/aviral-asthana-4393b4234" isExternal>
                <IconButton icon={<FaLinkedin />} isRound size="lg" />
              </Link>
              <Link href="https://twitter.com/actual_aviral" isExternal>
                <IconButton icon={<FaTwitter />} isRound size="lg" />
              </Link>
              <Link href="https://medium.com/@AVIRAL.ASTHANA" isExternal>
                <IconButton icon={<FaMedium />} isRound size="lg" />
              </Link>
            </Stack>
            <MotionContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
              <MotionHeading as="h2" size="lg" mb={4}>Objective</MotionHeading>
              <MotionText mb={6}>
                Driven by an insatiable curiosity and a commitment to continuous learning, I stay abreast of
                the latest advancements in machine learning and artificial intelligence.
              </MotionText>
              
              <MotionHeading as="h2" size="lg" mb={4}>Education</MotionHeading>
              <MotionText>Bachelor of Technology (B.Tech.) - Artificial Intelligence</MotionText>
              <MotionText>Vellore Institute of Technology, Bhopal</MotionText>
              <MotionText>Aug 2021 - Jul 2025 (Expected)</MotionText>
              <MotionText>GPA: 8.6</MotionText>
              <MotionText mb={6}>Relevant Coursework: Deep Learning, Natural Language Processing, Computer Vision, Artificial Neural Networks</MotionText>
              <MotionText mb={6}>Project: Omdena local project on monitoring water quality in Bhopal using satellite imagery and GIS technique</MotionText>
              
              <MotionHeading as="h2" size="lg" mb={4}>Experience</MotionHeading>
              <MotionText>Project Trainee</MotionText>
              <MotionText>Trinetradhar Info Solution Pvt. Ltd., Lucknow</MotionText>
              <MotionText>Nov 2023 - Jan 2024</MotionText>
              <MotionText mb={6}>Designed the database for "e-Reporting System for Uttar Pradesh Prosecution Department" and performed research and analysis, and tested the database on various benchmarks</MotionText>
              
              <MotionHeading as="h2" size="lg" mb={4}>Author</MotionHeading>
              <MotionText>Medium</MotionText>
              <MotionText>Aug 2022 - Present</MotionText>
              <MotionText mb={6}>Write articles on Science and Cosmos</MotionText>

              <MotionHeading as="h2" size="lg" mb={4}>Projects</MotionHeading>
              <MotionText mb={6}>DAWG: Detected stray dogs using an enhanced YOLOv7 algorithm, sending information to the closest Municipal Corporation</MotionText>
              <MotionText mb={6}>AI-Based Career Counsellor: Developed an AI model to suggest career options based on user responses</MotionText>
              <MotionText mb={6}>Alzheimer’s Detection using CNN: Used Convolutional Neural Networks to detect Alzheimer's from brain X-rays</MotionText>
              <MotionText mb={6}>FRUITIPEDIA: Automated fruit grading using CNNs, created an encyclopedia for different fruit classes and varieties</MotionText>
              <MotionText mb={6}>Tomato Leaf Disease Prediction: Built a CNN model for diagnosing diseases in tomato leaves from images</MotionText>
              
              <MotionHeading as="h2" size="lg" mb={4}>Skills</MotionHeading>
              <MotionText mb={6}>Machine Learning, Flutter Framework, Cloud Computing, Database Management</MotionText>

              <MotionHeading as="h2" size="lg" mb={4}>Certifications</MotionHeading>
              <MotionText mb={6}>AWS Cloud Practitioner, Amazon Web Services (2024)</MotionText>
              <MotionText mb={6}>Database Developer on Oracle Cloud, Oracle (2024)</MotionText>
              <MotionText mb={6}>Applied Machine Learning in Python, University of Michigan (2023)</MotionText>
              <MotionText mb={6}>Complete Python Bootcamp, Udemy (2022)</MotionText>

              <MotionHeading as="h2" size="lg" mb={4}>Extracurricular Activities</MotionHeading>
              <MotionText mb={6}>Core Member, Content Team - Dev Code Community: Hosted Dev Talks Podcasts and CodeHack Hackathon</MotionText>
              <MotionText mb={6}>Project Collaborator - Omdena local project: Monitored water quality in Bhopal using satellite imagery and GIS techniques</MotionText>
              <MotionText mb={6}>Attendee - Rendezvous event at IIT Delhi: Networked with industry leaders like Rajat Sharma and Aman Gupta</MotionText>
            </MotionContainer>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;