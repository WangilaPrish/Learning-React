import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import Header from './components/Header.tsx';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

const App = () => (
    <div className="min-h-screen bg-base-200">
        <Header />
        <Tabs defaultValue="home" className="container mx-auto p-4">
            <TabsList className="flex justify-center gap-4">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="home"><Home /></TabsContent>
            <TabsContent value="about"><About /></TabsContent>
            <TabsContent value="projects"><Projects /></TabsContent>
            <TabsContent value="courses"><Courses /></TabsContent>
            <TabsContent value="contact"><Contact /></TabsContent>
        </Tabs>
    </div>
);

export default App;
