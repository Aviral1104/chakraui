import React from 'react';
import { ChakraProvider, Box, VStack, Grid, Heading, Text, Link, Stack, IconButton, Container, Image } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionContainer = motion(Container);

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl" p={5} className="header">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <MotionHeading as="h1" size="4xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
          </VStack>
        </Grid>
      </Box>

      <Box className="main-content">
        <MotionContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
          <MotionHeading as="h2" size="3xl" mb={8}>About Me</MotionHeading>
          <MotionText mb={6}>
            Driven by an insatiable curiosity and a commitment to continuous learning, I stay abreast of
            the latest advancements in machine learning and artificial intelligence.
          </MotionText>

          <MotionHeading as="h2" size="3xl" mb={8}>Education</MotionHeading>
          <Box className="education-section">
            <MotionText fontSize="xl" fontWeight="bold" mb={4}>Bachelor of Technology (B.Tech.) - Artificial Intelligence</MotionText>
            <MotionText fontSize="lg" mb={2}>Vellore Institute of Technology, Bhopal</MotionText>
            <MotionText fontSize="lg" mb={4}>Aug 2021 - Jul 2025 (Expected), GPA: 8.6</MotionText>
            <MotionText fontSize="lg" mb={6}>Relevant Coursework: Deep Learning, Natural Language Processing, Computer Vision, Artificial Neural Networks</MotionText>
            <MotionText fontSize="lg" mb={6}>Project: Omdena local project on monitoring water quality in Bhopal using satellite imagery and GIS technique</MotionText>
          </Box>

          <MotionHeading as="h2" size="3xl" mb={8}>Experience</MotionHeading>
          <Box className="experience-section">
            <Box className="experience-item">
              <Image src="company-logo.png" alt="Company Logo" boxSize="100px" mr={6} />
              <Box>
                <MotionText fontSize="xl" fontWeight="bold" mb={2}>Project Trainee</MotionText>
                <MotionText fontSize="lg" mb={2}>Trinetradhar Info Solution Pvt. Ltd., Lucknow</MotionText>
                <MotionText fontSize="lg" mb={4}>Nov 2023 - Jan 2024</MotionText>
                <MotionText fontSize="lg">Designed the database for "e-Reporting System for Uttar Pradesh Prosecution Department" and performed research and analysis, and tested the database on various benchmarks</MotionText>
              </Box>
            </Box>
          </Box>

          <MotionHeading as="h2" size="3xl" mb={8}>Projects</MotionHeading>
          <Box className="projects-section">
            <Box className="project-item">
              <Image src="project-image.jpg" alt="Project Image" boxSize="200px" borderRadius="md" mr={6} />
              <Box>
                <MotionText fontSize="xl" fontWeight="bold" mb={2}>DAWG: Detected stray dogs using an enhanced YOLOv7 algorithm, sending information to the closest Municipal Corporation</MotionText>
                <MotionText fontSize="lg">Developed an AI model to detect and report stray dogs to the local authorities for further action.</MotionText>
              </Box>
            </Box>
            {/* Add more project items here */}
          </Box>

          <MotionHeading as="h2" size="3xl" mb={8}>Skills</MotionHeading>
          <MotionText fontSize="xl" mb={6}>Machine Learning, Flutter Framework, Cloud Computing, Database Management</MotionText>

          <MotionHeading as="h2" size="3xl" mb={8}>Certifications</MotionHeading>
          <Box className="certifications-section">
            <MotionText fontSize="lg" mb={4}>AWS Cloud Practitioner, Amazon Web Services (2024)</MotionText>
            <MotionText fontSize="lg" mb={4}>Database Developer on Oracle Cloud, Oracle (2024)</MotionText>
            <MotionText fontSize="lg" mb={4}>Applied Machine Learning in Python, University of Michigan (2023)</MotionText>
            <MotionText fontSize="lg" mb={4}>Complete Python Bootcamp, Udemy (2022)</MotionText>
          </Box>

          <MotionHeading as="h2" size="3xl" mb={8}>Extracurricular Activities</MotionHeading>
          <Box className="activities-section">
            <MotionText fontSize="lg" mb={4}>Core Member, Content Team - Dev Code Community: Hosted Dev Talks Podcasts and CodeHack Hackathon</MotionText>
            <MotionText fontSize="lg" mb={4}>Project Collaborator - Omdena local project: Monitored water quality in Bhopal using satellite imagery and GIS techniques</MotionText>
            <MotionText fontSize="lg" mb={4}>Attendee - Rendezvous event at IIT Delhi: Networked with industry leaders like Rajat Sharma and Aman Gupta</MotionText>
          </Box>
        </MotionContainer>
      </Box>
    </ChakraProvider>
  );
}

export default App;