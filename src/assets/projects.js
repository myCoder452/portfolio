
// import linkUpLogo from './project_images/linkup.jpg';
import hackTheTrackLogo from './project_images/hackthetrack.png';
import codeRescueLogo from './project_images/coderescue.png';
import pactChainLogo from './project_images/pactchain.jpg';
// import holdMySpotLogo from './project_images/holdmyspot.png';
import xmr2adaLogo from './project_images/xmr2ada.png';
import pongLogo from './project_images/pong.png';
import dragonLogo from './project_images/dragon.png';
import autoVehicleLogo from './project_images/auto_vehicle.png';
import robotArmLogo from './project_images/robot_arm.png';

const projectsData = [
    {
        "name": "hackTheTrack",
        "description": "The Enterprise GR Strategy Center is a racing analytics platform that transforms Toyota GR Cup racing data into championship-winning insights through multiple insightful capabilities: Simulation Engine, Live Data Processing, Predictive Analytics, Track/Driver Psychology Analysis, Performance Visualization, Strategy Reports.",
        "logo": hackTheTrackLogo,
        "logoClass": "rounded-2xl",
        "images": [
            "hackTheTrack_Pics/picture5.png",
            "hackTheTrack_Pics/picture11.png",
            "hackTheTrack_Pics/picture3.png",
            "hackTheTrack_Pics/picture2.png"
        ]
    },
    {
        "name": "linkUp",
        "description": "It's an integrated content management system in which the users can create, publish, and engage with the blog posts. The primary aim is to create an online collaborative community that enables knowledge sharing along with the user interaction through comment and feedback mechanisms.",
        "logo": "/linkUp_Pics/linkUpMainLogo.png",
        "logoClass": "rounded-full !w-20 !h-20",
        "logoImageClass": "scale-125 -translate-x-[2.5px] translate-y-px",
        "images": [
            "linkUp_Pics/linkUp1.jpg"
        ]
    },
    {
        "name": "codeRescue",
        "description": "A comprehensive crisis management platform built with React and Vite, designed to coordinate emergency responses across Africa using OpenStreetMap integration, real-time messaging, and cryptocurrency wallet functionality.",
        "logo": codeRescueLogo,
        "logoClass": "rounded-2xl mix-blend-screen",
        "images": [
            "codeRescue_Pics/picture5.png",
            "codeRescue_Pics/picture11.png",
            "codeRescue_Pics/picture3.png",
            "codeRescue_Pics/picture2.png"
        ]
    },
    {
        "name": "holdMySpot",
        "description": "HoldMySpot is an advanced AI-powered platform designed to reclaim your time. By leveraging agentic AI, we navigate complex phone trees, wait on hold, and negotiate with service providers on your behalf. Our mission is simple: Never Wait on Hold Again.",
        "logo": "/holdMySpot_Pics/holdMySpot_logo.png",
        "images": [
            "holdMySpot_Pics/picture05.png",
            "holdMySpot_Pics/picture03.png",
            "holdMySpot_Pics/picture11.png",
            "holdMySpot_Pics/picture13.png"
        ]
    },
    {
        "name": "pactChain",
        "description": "I created an end-to-end full-stack app for signing and handling digital agreements on a custom blockchain. Frontend: stateful React + TypeScript (Vite) with secure state, auth, wallet integration, and signing/viewing UI. Backend: Node.js + Express for off-chain computation.",
        "logo": pactChainLogo,
        "images": [
            "pactChain_Pics/pactChain1.jpg",
            "pactChain_Pics/pactChain2.jpg"
        ]
    },
    {
        "description": "XMR2ADA is a multi-module prototype that combines Monero mining/wallet, an automated swap template, and Cardano node/wallet functionality to enable a flow from mined XMR to staked ADA.",
        "logo": xmr2adaLogo,
        "imageClass": "rounded-3xl",
        "images": [
            "xmr2ada_Pics/xmr2ada_pic2.png",
            "xmr2ada_Pics/xmr2ada_pic4.png"
        ]
    },
    {
        "name": "3D Pong Game",
        "description": "Built a unique 3D Pong game in C++ using OpenGL (Graphic Rendering API). Utilized Github to assist in online communication and software development between group members.",
        "logo": pongLogo,
        "images": []
    },
    {
        "name": "Dragon's Hollow",
        "description": "Built a 2D simulated game using Object Oriented techniques, written in C++ on a Linux machine. It runs by randomizing each iteration and outputting the states of each step until the final outcome.",
        "logo": dragonLogo,
        "images": []
    },
    {
        "name": "Autonomous Vehicle",
        "description": "Using reinforced & supervised learning to train an RC car, using an Arduino, to traverse a course. Raspberry Pi & Python used to program the neural network model of the machine learning.",
        "logo": autoVehicleLogo,
        "images": []
    },
    {
        "name": "Inverse Kinematic Articulating Robotic System",
        "description": "Designing a robotic arm controlled by inverse kinematics. Collaborating with teammates to draft PowerPoint presentations for a technical audience.",
        "logo": robotArmLogo,
        "images": []
    }
];

export default projectsData;
