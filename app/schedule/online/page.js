"use client"
import React from "react";

const scheduleData = [
  { session: "Technical Session-1", id: "13", title: "CNN-Based Nerve Block Segmentation", presenter: "Ravi Teja Gundimeda", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "24", title: "Design and Implementation of Carry Look-Ahead Adder using PTL with Comparative Analysis Against Transmission Gate Logic", presenter: "Chezhiyan M", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "27", title: "Evolving Tactics in Social Engineering Attacks in the Current Era: A Multi-Platform Honeypot Approach for Awareness and Defense", presenter: "Klk Charith", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "52", title: "Classiﬁcation of Gene Expression Data Using Ensemble Learning with Eﬀective Feature Selection and Optimization Techniques", presenter: "Sivaprakash Sriram", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "58", title: "Comparative Analysis of Neural Network-Based Models for Sentiment Analysis on Twitter Data", presenter: "Arvind Mewada", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "86", title: "IOT BASED VEHICLE ACCIDENT PREVENTION AND DETECTION SYSTEM USING MOBILE APPLICATION", presenter: "Madhan S", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "95", title: "Integrating Artiﬁcial Intelligence with Virtual Reality and Augmented Reality for Enhanced Military Training and Simulations", presenter: "Amanpreet Kaur", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "120", title: "SMART WASTE MANAGEMENT WITH AI POWERED CLASSIFICATION AND ROUTING: THE THINK ZERO WASTE APP (TZE APP)", presenter: "Brindha A", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "126", title: "Exploring the Synergy and Challenges of Blockchain Technology in the Quantum Cryptography Era A Comprehensive Review", presenter: "Ayush Giri", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-1", id: "143", title: "Energy Management Strategies for Optimal Performance of ESS Supported Fuel Cell-Hybrid Electric Vehicles", presenter: "Billa Pardhasaradhi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "149", title: "Brain MRI Classiﬁcation Using Deep Learning Algorithm", presenter: "Chitra Thinger", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "162", title: "QUANTUM TRANSFER LEARNING FOR BREAST CANCER DETECTION", presenter: "Alok Kumar Srivastava", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "163", title: "A Hybrid Classical-Quantum Model for Enhanced MRI-Based Brain Tumor Classiﬁcation Using Transfer Learning and Quantum Neural Networks", presenter: "Alok Kumar Sri", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "176", title: "Metric-Scale 3D Scene Reconstruction Using Dual Images from a Calibrated Camera", presenter: "Mukesh Kumar Verma", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "210", title: "Assistive Vision: Intelligent Blind Stick", presenter: "Hithesh Guptha V", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "215", title: "Heart Attack Risk Prediction Using Retinal Fundus Images and CNN Based Deep Neural Network", presenter: "Shubhi Chandra", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "228", title: "Blockchain Enabled Approach for Secure and Transparent Courier Tracking", presenter: "Raj Kumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "289", title: "Detecting Wildﬁre hazards using Convolutional Neural Networks", presenter: "Manthena Sivanuja", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "291", title: "Hybrid Deep Learning with Multi-Level Context for Pain Assessment Using Physiological Signals", presenter: "Vatsavai Harini", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-2", id: "292", title: "Predicting Public Sector Energy Eﬃciency with Cloud Data Centre using a Consolidation of Machine Learning", presenter: "Tiyas Sarkar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "301", title: "Implementing a resilient and pairing-free aggregate signature scheme for healthcare internet of things networks", presenter: "M.Selvam", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "302", title: "Advanced Health Care Monitoring in IoMT Systems through Integrated CNN and LSTM", presenter: "Mr J Sulthan Alikhan", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "303", title: "Utilising Machine Learning Techniques to Evaluate the Survival Probability of Head and Neck Cancer Patients Based on Their Smoking Habits and Medical History", presenter: "Pratibha C. Kaladeep Yalagi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "305", title: "Cooperative Intelligence Constructing an Internet of Things for Diverse Discourse", presenter: "Arun Kumar Arigela", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "306", title: "Enhanced Scheduling Adaptability in Internet of Things (IoT) Networks via Collaborative Policy Learning and Federated Reinforcement Models", presenter: "Dr R Jayanthi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "317", title: "High-Speed and Energy Eﬃcient Universal Shift Register using Novel Hybrid CNTFET-MOSFET D Flip-Flops for Modern VLSI Systems", presenter: "Bejish S", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "323", title: "A Blockchain-based IoMT Framework using cloud computing: A Comprehensive Review", presenter: "Vidya Srivastava", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "329", title: "Deep Learning Applications in Natural Language Processing for Sentiment Analysis: Unlocking Consumer Behavior Trends", presenter: "Ms. Aakansha Soy", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "330", title: "Deep Learning for Image and Video Processing in Surveillance Systems: Advancing Security with AI-Driven Insights", presenter: "I. Sudha", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "331", title: "Deep Learning in Autonomous Vehicles for Dynamic Decision-Making: Enhancing Safety and Navigation", presenter: "Ashu Nayak", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "332", title: "Predictive Maintenance in Industries Using Deep Learning Models: Reducing Downtime and Increasing Eﬃciency", presenter: "Thinakaran K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "333", title: "Improving Disease Diagnosis through Medical Data Mining and Predictive Analysis: Towards Data-Driven Healthcare", presenter: "Thinakaran K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "334", title: "Dynamic Resource Management in IoT Ecosystems Using Reinforcement Learning: Towards Scalable and Eﬃcient Solutions", presenter: "F Rahman", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-3", id: "335", title: "Energy-Eﬃcient IoT Systems for Smart Cities: Powering the Urban Transformation", presenter: "P.S.Ramesh", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "336", title: "Geospatial Data Mining for Disaster Management: Enhancing Emergency Response Capabilities", presenter: "A.Ponmalar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "337", title: "Leveraging IoT for Environmental Monitoring: Real-Time Data Collection and Analysis for Sustainable Development", presenter: "Sudha Narang", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "338", title: "Secure Data Transmission in IoT Networks Using Blockchain and Lightweight Cryptography: Safeguarding the Connected Future", presenter: "V.Naveen", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "339", title: "Deep Learning Advancement for Brain-Tumor Classiﬁcation and Comprehensive Diagnosis", presenter: "Bedamsetty Visali", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "340", title: "Detection and Classiﬁcation Approach of Denial of Service Attack in SDN", presenter: "Pooja Chaturvedi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "355", title: "Analysis of the Connectivity Protocols to the Internet of Things and Impacts on Precision Agriculture Practiced in Open Spaces", presenter: "Pamulapati Lakshmi Satya", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "356", title: "CAC Training - A Uniﬁed Cybersecurity Training Program for Military Staﬀ", presenter: "Nookala Venu", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-4", id: "362", title: "Assessing the Importance and Pertinence of Cybersecurity Content via Textual Similarity and a Cybersecurity Knowledge Graph", presenter: "Vivekanandan.Research @Gmail.Com", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "363", title: "Optimizing the Placement of Virtual Network Functions for Energy Eﬃciency in a Wireless Mesh Network", presenter: "Nookala Venu", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "404", title: "CROP YEILD PREDICTION FOR SMART FARMING", presenter: "Vansh Gupta , Sourabh , Veer Pratap, Ajay Kumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "420", title: "NeuroPark Guide: Cutting-Edge AI for Parking Solutions", presenter: "Anil Baikani", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "501", title: "AI-Powered Segmentation of Tumors in Multi-Modal Medical Images\" has been peer-reviewed and accepted for consideration at \"2025 3rd International Conference on Communication, Security, and Artiﬁcial Intelligence", presenter: "Nilkanth Mukund Deshpande", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "502", title: "Deep Learning-Based Object Detection Across Multiple Visual Domains", presenter: "Nilkanth Mukund Deshpande", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "507", title: "Evaluating Sentiment Classiﬁcation Techniques for Analyzing COVID-19 Vaccination Opinions on Twitter data", presenter: "Ashutosh Mishra", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "525", title: "Adaptive Network Security Using Machine Learning for Real-Time Threat Detection", presenter: "S.B.Prakalya", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-5", id: "526", title: "Association Rule Mining for Optimizing Inventory Management in Retail: Improving Stock Control and Reducing Costs Using ML Model", presenter: "Swathi Agarwal", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "527", title: "Data Mining Techniques for Customer Segmentation in E-Commerce Platforms: Unlocking the Power of Personalization", presenter: "B. Lakshma Reddy", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "528", title: "Developing Self-Healing Networks with Bio-Inspired Algorithms: Enhancing Resilience in Modern Networks", presenter: "Thinakaran K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "529", title: "Dynamic Load Balancing in Cloud Networks Using Multi-Agent Systems: Ensuring High Availability and Eﬃciency", presenter: "K. Krishnakumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "530", title: "Hybrid Routing Protocols for Eﬃcient Data Transfer in Wireless Networks", presenter: "K. Krishnakumar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "545", title: "Design of Smart System for Mitigating Wild Animal Intrusion in Agricultural farms using IoT and Deep Learning", presenter: "A. Prasanth", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "577", title: "AI-Driven Crop Disease Diagnosis for Sustainable Agriculture Using Convolutional Neural Networks", presenter: "B.J. Job Karuna Sagar", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "579", title: "Implementing Zero Trust Architecture for Securing Financial Transactions in Banking Apps Using Homomorphic Encryption and Advanced Access Control Algorithms", presenter: "R. Pradeep", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "580", title: "Personalized Learning Systems Using AI for Adaptive Educational Content Delivery Based on Reinforcement Learning Algorithms", presenter: "B. Lakshma Reddy", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "581", title: "Adaptive Quantum Computing Algorithms for Real-Time Data Processing in High-Dimensional Systems", presenter: "D. Suganthi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-6", id: "582", title: "Predictive Maintenance in Smart Factories Using IoT and Big Data Analytics Enhanced by Long Short-Term Memory Networks", presenter: "Sathiyamurthi K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "584", title: "Deep Learning-Based Drug Discovery and Molecular Analysis Accelerating the Future of Medicine", presenter: "P. Nagarajan", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "590", title: "Revolutionizing Human-Computer Interaction with Deep Learning for Speech Recognition and Voice Assistants", presenter: "Nidhi Mishra", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "593", title: "Improving Urban Traﬃc Management with Big Data-Driven Forecasting Models Using ARIMA and Prophet Algorithms", presenter: "Priya Vij", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "790", title: "Deep Model Exposure and Classiﬁcation of Diabetic Retinopathy Using Fundus Imaging", presenter: "Ankur Kaushik", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1056", title: "Integrated Deep Learning Framework for Precision Crop Yield Prediction Using Satellite Imagery and Real-Time Environmental Data", presenter: "Kadaveru Bhavana", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1186", title: "Real-Time Human Intrusion Detection in Wireless Sensor Networks Using YOLOv7 for Enhanced Perimeter Security", presenter: "Thinakaran K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1431", title: "HBSP: A Lightweight Framework for Transparent Software Protection Using Hardware Virtualization", presenter: "Niketa Penumajji", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1513", title: "A Smarter Way to Filter Reviews and Identify Fake Reviews using Random Forest for an Improved Online Shopping Experience", presenter: "Bharath Kumar L", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1514", title: "Enhanced Security with Deep Learning-Based Intrusion Detection", presenter: "Bharath Kumar L", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1651", title: "CHAOS THEORY-DRIVEN IMAGE ENCRYPTION IN IoT ECOSYSTEMS", presenter: "Rompilli Bhanuprakash", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1675", title: "Enhancing Cybersecurity Risk Assessment with Text Mining of Security Bulletins and Advisory Data", presenter: "Suresh Kumar. S", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1679", title: "Semantic Interoperability Framework for Multi-Center Healthcare Big Data Using Conceptual Modeling and SPARQL-Based Analysis", presenter: "Rohith Bhat", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1693", title: "Generating Music with Retention based Latent Transformer Models", presenter: "Viswanathan V", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-7", id: "1730", title: "Fusion of Cloud and Internet of Things towards sustainable Healthcare", presenter: "Arghya Pratim Ghosh", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1744", title: "Ego Vehicle Localization with GPS-IMU Fusion: A Key to Eﬀective Scenario Generation", presenter: "Mukesh Kumar Verma", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1751", title: "Integrated Surveillance System for Real-Time Face Recognition and Image-Based Video Retrieval Using OpenCV and DeepFace", presenter: "Palivela Thanishka", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1842", title: "VITAMIN DEFICIENCY DETECTION USING CNN-BASED IMAGE ANALYSIS OF SKIN, TONGUE AND NAILS", presenter: "Kishore Kumar G", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1892", title: "Real Time Hand Gesture Detection and Recognition to Control PowerPoint Slides", presenter: "Sumita Gupta", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1896", title: "Optimized PCA-ABE with Compression for Eﬃciency in Edge Computing", presenter: "Sneha Arora", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1916", title: "Virtual Mouse Using Machine Learning", presenter: "Krishnamoorthi T;Aakash K", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "1987", title: "The Impact of Neuromorphic Computing on Brain-Inspired Robotics: A Novel Architectural Paradigm", presenter: "Sumanshu Jindal", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-8", id: "2053", title: "Enhanced Link Prediction Using Integrated Classiﬁer", presenter: "Rahul Jaggi", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "2057", title: "A Small Pentagonal Patch MIMO Antenna for 5G and WLAN Devices", presenter: "Ashish Phalswal", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "2069", title: "Fake Indian Currency Detection using Computer Vision", presenter: "Lovely", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "2071", title: "Enhanced Deep Learning Approach for Potato Leaf Disease Detection", presenter: "Sweta Kumari", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "2121", title: "Automated Trading Decisions", presenter: "Harsh Srivastava", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "2242", title: "GhostNet Model Based Brain Tumor Classiﬁcation Using MRI Images", presenter: "Vishakha Yadav", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "1945", title: "Helmet Verify: AI Detection System for Safety Check", presenter: "Pratham Sherawat", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "2006", title: "Short-Term Weather Forecasting", presenter: "Pratyush Gupta", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-9", id: "43", title: "Integration of IoT & Blockchain using AI for Optimizing Multi-Echelon Inventory System", presenter: "Tanmay Sharma", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-10",id: "1584", title: "Brain Tumor Detection Using U-Net: A Deep Learning Approach", presenter: "Pratishtha Verma", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "1617", title: "AI-BASED COW DETECTION AND TRACKING TO MONITOR REAL-LIFE LIVESTOCK FARMING", presenter: "Pratishtha Verma", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "1659", title: "Optimizing Dataset Management with Blockchain Based Cryptographic Hashing and Proof-of-Work", presenter: "Kartikey Jaiswal", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "1694", title: "AgroBuddy: Empowering Indian Farmers Through Precision Farming Chatbot", presenter: "Rayaan Sheikh", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "1798", title: "Early Stage Prediction of Type 2 Diabetes Mellitus using Prominent Genemarkers", presenter: "Adithya N Reddy", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "2007", title: "XceptionSELite: Lightweight and Eﬃcient Network for Traﬃc Sign Recognition", presenter: "S. Deivanayaki", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "2045", title: "Change Detection for Land-Cover Classiﬁcation Using Deep Learning", presenter: "Bishal Choudhury", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "2060", title: "GAS FEES OPTIMIZATION", presenter: "SHASHWAT SHUKLA", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "2134", title: "Attention-Driven CNN-LSTM Hybrid Models for Secure Dynamic Signature Veriﬁcation", presenter: "Ms. Atiya Raﬁq Kazi", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-10",id: "2219", title: "Comprehensive Study on Integrating AI-Powered Threat Intelligence Using Large Language Models", presenter: "Nishith P", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-11",id: "2231", title: "Harnessing the Power of Machine Learning in Multi-Agent Systems for B2C E-Commerce Optimization", presenter: "Manoj Kumar Mishra", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-11",id: "2235", title: "Real-Time Monitoring and Ambulance Prioritization Using YOLOv9 and Deep Learning", presenter: "Gokul D", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-11",id: "1588", title: "Exploring the Implementation of Artiﬁcial Intelligence in the Indian Legal System", presenter: "Munish Kumar", track: "Track 15:Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a  Sustainable Future" },
  { session: "Technical Session-11",id: "1637", title: "Driver Drowsiness Detection System Using Computer Vision", presenter: "Aniket Dogra", track: "Track 15:Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a  Sustainable Future" },
  { session: "Technical Session-11",id: "1830", title: "Analysis of Eﬃcient Task Scheduling Algorithms in Fog Computing Environment", presenter: "Prince Gupta", track: "Track 15:Revolutionizing Connectivity: The Power of IIoT, IoT, and IMOT for a  Sustainable Future" },
  { session: "Technical Session-11",id: "1974", title: "ECO DYNAMIC DYGESTER: A PIONEERING APPROACH TO GENERATE CLEAN ENERGY FROM ORGANIC FOOD WASTE", presenter: "Chanapathi Yamini", track: "Track 16:Emerging Electrical  and Electronic Technologies  for Innovations, and Energy and Environmental  Sustainability" },
  { session: "Technical Session-11",id: "2064", title: "Energy-Eﬃcient Approximate Compressor Design for Image Processing Applications", presenter: "Aluvoju Vivek", track: "Track 16:Emerging Electrical  and Electronic Technologies  for Innovations, and Energy and Environmental  Sustainability" },
  { session: "Technical Session-11",id: "78", title: "IOT-Enabled Smart Home Automation with YOLOv5 Human Detection", presenter: "Raman Sharma", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-11",id: "110", title: "MRI-Based Brain Tumor Classiﬁcation Using Transfer Learning", presenter: "Soham Misal", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-11",id: "142", title: "Deep Learning Approaches for viral Infectious Disease Detection from Chest X-rays image dataset.", presenter: "Juli Kumari", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-11",id: "183", title: "A Machine Learning Approach to Early Detection and Classiﬁcation of Kidney Disease", presenter: "Ashwani Kumar", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-11",id: "249", title: "LYNX-RNA: A Scalable Nextflow Workﬂow for RNA-Seq Analysis with Integrated Large Language Models for comprehensive Result Interpretation", presenter: "Devanshi Sharma", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-11",id: "262", title: "Evaluating Multi-Layer Perceptron and Recurrent Neural Networks for Speech Emotion Recognition", presenter: "Satyam Solanki", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-11",id: "313", title: "Dynamic Traﬃc Optimization through Cloud Enabled Big Data Analytics and Machine Learning for Enhanced Urban Mobility", presenter: "Ettedi Anvesh", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "405", title: "A Comparative Study of Deep Learning and Fuzzy Logic in the Diagnosis of Ovarian Cancer", presenter: "Parul Parihar", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "494", title: "Optimizing Hybrid Learning Outcomes via Clustering-Guided Data Mining Techniques in Higher Education", presenter: "Brijesh Kumar Verma", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "496", title: "A Comparative Study on Denoising of MRI Images and Classiﬁcation of Brain Tumor Images Using Deep Learning Techniques", presenter: "Ramshankar N", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "497", title: "Accelerating Antenna Development: The Role of Machine Learning Algorithms", presenter: "Rashmi Sachin Tikar", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "566", title: "Deep Learning-Driven System for Automated Identiﬁcation of Plant Nutrient Deﬁciencies", presenter: "Shravya Miriyanam", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "574", title: "Enhancing Convolutional Neural Network Performance for Image Classiﬁcation: A Comparative Study", presenter: "Tasmiya Mujawar", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "656", title: "Model Outcome Comparison Analysis of Legal Text Summarization Techniques Abstractive vs Extractive Approaches", presenter: "Pranav S", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-12",id: "677", title: "Lung-retinaNet Lung Cancer Detection Using A RetinaNet With Multi-Scale Feature Fusion And Context Module", presenter: "Vachimappagari Tharun", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "728", title: "Virtual Learning Analysis using Complex Rule-based Approach in the Context of Cloud Computing", presenter: "Yadala Sucharitha", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "896", title: "Sequential Story Illustration Generation with Fine-Tuned Diﬀusion Model for Children Stories", presenter: "Matan P", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "997", title: "Recognition and Parsing of Complex Mathematical Expressions Using CNNs", presenter: "Palak Desai", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "1110", title: "NAÏVE BAYES-BASED ANALYSIS FOR PREDICTING HEART DISEASE", presenter: "Eniyavanan A", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "1214", title: "Enhanced Rice Leaf Diseases Diagnosis Using Deep Learning Model with GAN-Based Synthetic Data Augmentation", presenter: "Shaveta Jain", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "1570", title: "Hybrid RBC Morphology analysis and Diagnostic Framework for β-Thalassemia Using SEBlock-CBAM Enhanced MobileNetV2, TabNet with Optuna Optimization and SMOTE-ENN Resampling", presenter: "Garima Shukla", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-13",id: "1657", title: "A Review on: A lightweight DCCN system for real-time surveillance that detects abandoned objects", presenter: "Neha Thotapalli", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-13",id: "1676", title: "LUNG CANCER PREDICTION USING MACHINE LEARNING", presenter: "S.Priyanka", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" }
];

const scheduleData2 = [
  { session: "Technical Session-14",id: "1708", title: "Automated Transparent Glass Detection System Using Semantic Segmentation", presenter: "Vaibhav More", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "1718", title: "From Diagnosis to Treatment: A Systematic Review of Machine Learning Technologies in Depression Care Management", presenter: "Ajay Sudhir Bale", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "1719", title: "Deep Learning-Based Automatic Fake News Recognition on Online Social Networks", presenter: "Pragya Goswami", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "1807", title: "Combating Cyber Abuse: A Toxic Comment Detection Model Using Deep Learning", presenter: "Sriyanshu Awasthi", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "1837", title: "A Review On Use of Deep Learning and Hyperspectral Data Integration For Early Stage Crop Disease Detection", presenter: "Dhiraj Bhise", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "2058", title: "An Architecture for Model Monitoring System with Automated Data Validation and Failure Handling", presenter: "Sairamakrishna Karri", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "1499", title: "A Robust Intelligent License Plate Recognition System for Vehicle Surveillance and Security Control", presenter: "Ch Reshma", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-14",id: "2156", title: "Revolutionizing Medical Diagnosis: A Deep Learning Approach for Content-Based Image Retrieval", presenter: "Anupama N", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "2204", title: "Mindscape: an AI-powered study companion integrating Natural Language Processing Algorithms", presenter: "Riya Rajesh Sawant", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-14",id: "2100", title: "Computer Virus Propagation Models: A Mathematical Review", presenter: "Om Prakash", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-15",id: "179", title: "Sustainable Smart EdTech Ecosystems: Innovations in Communication, Security, AI, and Management Practices", presenter: "Abhijit Chandratreya", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "374", title: "AI in Education: Transforming Communication, Security, and Management in Smart EdTech Ecosystems", presenter: "Dr. Priyanka Darekar", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "417", title: "Pioneering wireless power transfer for electric vehicle charging", presenter: "B Lavanya", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "506", title: "Arc-Shaped Planar Monopole Antenna for Next-Generation 5G Communication", presenter: "Suryansh Rajawat", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "616", title: "Optimizing Cost Management and Energy Consumption in Power Plants through Predictive Modelling", presenter: "Gouri Shrivastava", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "952", title: "DESIGN AND DEVELOPMENT OF SOLAR-BASED COLD STORAGE AND DRYER SYSTEM FOR AGRI - PRODUCTS", presenter: "Nithya P", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "1841", title: "Interpretable AI for Cyber Security: Enhancing DDoS Detection with LIME and Population-Based Training Models", presenter: "D.M.V. SATYA SIVA SAI", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "2031", title: "Diagonal Based Clustering Protocol to Enhance the Lifespan of Wireless Sensor Network", presenter: "Deepak Kannaujaiya", track: "Track-10: Sustainable Smart EdTech Ecosystems: Innovations  in Communication, Security, AI, and Management Practices" },
  { session: "Technical Session-15",id: "968", title: "Quantum-Driven Healthcare IoT (QH-IoT)", presenter: "Ms. Shriya Kaushal", track: "Track-11: The Convergence of Generative AI and Quantum Computing: Unlocking the Next Frontier of Innovation" },
  { session: "Technical Session-15",id: "250", title: "Unveiling the Bhagavad Gita: AI-Powered Sanskrit Translation and Interactive Insights", presenter: "Sayali Dadasaheb Patil", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-15",id: "280", title: "Deep Learning-Driven COVID-19 Lesion Segmentation in CT scans with R-EDNet", presenter: "Anima Kujur", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-15",id: "416", title: "Proactive Conservation: Predicting Deforestation Risks Using Machine Learning and Satellite Imagery Analysis", presenter: "Ettedi Rishwanth", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-15",id: "418", title: "Novel Pothole Detection System using YOLOv8 Algorithm", presenter: "Shruti Shukla", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-15",id: "458", title: "Empowering B2B Sales through AI-Driven Human Resource Strategies: Bridging Marketing and HR for Enhanced Sales Performance", presenter: "Meghasham Chaudhari", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-15",id: "532", title: "Roadside Tree Image-Based Air Quality Estimation of Gurugram City, Haryana, India", presenter: "Neelam Yadav", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "630", title: "Real-Time Social Media Sentiment Analysis Using VADER and TextBlob", presenter: "Swetha C.B", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "743", title: "Precision Agriculture: Enhancing Temperature Control through Deep Learning Algorithms and Regional Environmental Parameters", presenter: "Vanshita Gupta S", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "1008", title: "Mapping Human-AI Collaboration - A Skill Framework for the Eﬀective Use of AI", presenter: "Shenali Somaratne", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "1535", title: "Gender Segregation of Silkworm pupae using Transfer Learning", presenter: "Rahul Satish Vadhyar", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "2012", title: "Optimizing Ethical Investment Decisions with Hybrid Heuristic", presenter: "Ashish Bhosale", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "2143", title: "An application-based AI Fitness Trainer integrating Multilayer Perceptron Network & Computer Vision", presenter: "Riya Rajesh Sawant", track: "Track-12: Transformation with AI, Deep Learning Breakthroughs  and Real  World Applications" },
  { session: "Technical Session-16",id: "481", title: "A Hybrid Approach to Intrusion Detection: Autoencoders and Decision Trees for Cybersecurity", presenter: "Kriti Srivastava", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-16",id: "498", title: "Object-as-a-Service (OaaS): A Mixed Method Approach to Balance Computational Overheads in Serverless Cloud Computing", presenter: "Jhanvi Mehra", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-16",id: "961", title: "Enhanced Public Key Security Using Cuckoo Search Optimization and Improved AES Algorithm", presenter: "Maalavika S", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "962", title: "Stochastic Forensic Analysis for Detecting Data Theft", presenter: "Sutheekshan B", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "1069", title: "Real-Time Tweet Sentiment Analysis Using Docker Kafka and Django", presenter: "Dhara Lakshmi Kusumanchi", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "1467", title: "Comparative Analysis of Stock Price Prediction with Multiple Machine Learning Model", presenter: "Kawerinder Singh Sidhu", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "1469", title: "Handling Security Aspects in the Internet of Things: Latest Challenges and Measures to Mitigate Risks", presenter: "Kawerinder Singh Sidhu", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "1474", title: "Lightweight Deep Learning for Knee Osteoarthritis Analysis: A MobileNet Perspective", presenter: "Kapil Joshi", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "1683", title: "Identity and Proxy Orientation based Remote Data Integration Checking and Uploading in Public Clouds", presenter: "N. Sampreeth Chowdary", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-17",id: "53", title: "Blockchain-Based Voting System: Comprehensive Analysis and Future Prospects", presenter: "Ramanjeet Singh", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-17",id: "169", title: "Intelligent Real Time Monitoring Module Designed for Helmet and Number Plate Detection", presenter: "Harendra Singh Negi", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-17",id: "401", title: "A study to investigate eﬀective tools and framework for blockchain based healthcare environment", presenter: "Kritika Sharma", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "424", title: "Deep Diving Into Blockchain Frameworks and Their Issues", presenter: "Sowmya M", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "513", title: "EcoBot: A Smart and Sustainable System for Floating Garbage Collection", presenter: "Aashna Patil", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "565", title: "Geolocation-Based Attendance Tracking System: A Comprehensive Review", presenter: "Shrey Kumar Gupta", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "761", title: "Enhancing Practical Learning Through Augmented Reality: A Case Study in Virtual Labs", presenter: "Manisha Pathania", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "763", title: "The Impact of Augmented Reality on Student Engagement and Retention in STEM Education", presenter: "Chander Partap Singh", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "1647", title: "ST VERSE: AR / VR SIMULATION EXPERIENCE", presenter: "Alkesh Benny", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "1771", title: "Comprehensive Study to Blockchain Frameworks and Performance Evaluation Tools", presenter: "Rakesh Raushan", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "1780", title: "Deep Learning-Based IoT Framework for Real-Time Health Monitoring", presenter: "Amit Sundas", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-18",id: "1890", title: "Campus Navigation and Augmented Reality Guided Mobile Application", presenter: "Riya Patel", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-19",id: "1926", title: "A Secure IoMT Framework for Next-Gen Healthcare Systems Using Machine Learning", presenter: "Amit Sundas", track: "Track-2: Immersive Futures: Merging Realities with Intelligent Systems" },
  { session: "Technical Session-19",id: "116", title: "A Comparative Analysis of Deep Learning Approaches for Email Spam Detection", presenter: "Ashwani Kumar", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "212", title: "An Adaptive Neuro Fuzzy Based Intelligent Load Frequency Control in Diverse Hybrid Power Systems", presenter: "Shasya Shukla", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "226", title: "GLOBAL RESILIENCE INITIATIVE PREVENTING ILLEGAL LOGGING AND MONITORING RESTRICTED", presenter: "Rakshitha Babu", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "373", title: "Video to Text using Google API", presenter: "Shubhang Pareek", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "463", title: "Scalable Deployment Solutions for RSUs in VANETs Using Predictive Traﬃc Analysis Algorithms", presenter: "R-Ezumalai", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "464", title: "Real-Time Detection of Malicious Nodes using Poplar optimized Sparsity-Aware Network for Improving VANET Security", presenter: "R-Ezumalai", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "465", title: "A Cluster-Based Routing Strategy For Extending The Lifetime Of Internet Of Things Networks Using Quantum Dilated Convolutional Neural Networks With Emperor Penguin Optimizer", presenter: "S.Jamuna Rani", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-19",id: "466", title: "Harnessing Quantum Convolutional Neural Networks for Enhanced Coverage Hole Detection and Eﬃcient Routing in IoT-Assisted WSNs", presenter: "S-Jamuna Rani", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "467", title: "Intrusion Node Detection And Energy-Eﬃcient Centralized Clustering Using A Similarity-Navigated Graph Neural Network In Wireless Sensor Networks", presenter: "S.Jamuna Rani", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "470", title: "Optimizing Traﬃc Safety: A Dual Multi-Scale Attention Network for Anomaly Detection in VANETs", presenter: "R-Ezumalai", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "520", title: "Implementation and Optimization of a Fuzzy Rule-based Classiﬁer for Multi-class Classiﬁcation Using Horizontal Federated Learning", presenter: "Deepak Upadhyay", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "583", title: "Optimizing Bidirectional Power Flow in EV Charging Systems: Topologies and AI-Based Control for V2G/G2V and Renewable Energy Integration", presenter: "Roshan Chitranshi", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "588", title: "NOVA: Advance Virtual Assistant Empowered by Sentiment Analysis for Precision and Accuracy", presenter: "Ankur Singh", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "657", title: "Maximizing the Reliability of Machine Learning based Invasion Detection Systems on a Modern, Unbalanced Dataset", presenter: "R. Saravanakumar", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "660", title: "Machine Learning Techniques For Intrusion Detection In Malware-Infected Android Devices", presenter: "R. Saravanakumar", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "1048", title: "Dynamic Neural Network Training for Self-Driving Cars in Generative Virtual Environments", presenter: "Riya Pandey", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-20",id: "1498", title: "FSS-Based Band Pass Filter Design for C-Band Satellite Downlink Interference Mitigation", presenter: "Kannappan P", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "1735", title: "A Comprehensive Review of Fake News on Social Media and Its Inﬂuence on Modern Society", presenter: "Neha Tyagi", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "1911", title: "AI-Powered Energy Optimization for Carbon Emission Reduction and Sustainability", presenter: "Divya Mishra", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "1947", title: "Comparative Analysis of Diﬀerent Attention Mechanisms in Hybrid Deep Learning Model for In-Vehicle Intrusion Detection Systems.", presenter: "Vismaya Kk", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "1956", title: "AI-Driven Individual Identiﬁcation in Surveillance Systems: Leveraging Vision Transformers and Graph Neural Networks for Enhanced Drone Surveillance", presenter: "Brithicksha D", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "1977", title: "Leveraging Machine Learning for Early Detection and Prediction of Suicidal Tendencies in Women", presenter: "Vedatrayee Chatterjee", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "2150", title: "Simplifying Medical report: A Novel Approach to Medical Reporting using OCR technology", presenter: "Ritesh Verma", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "2210", title: "Analysis of Blocking Probability in OBS Networks using PWA Technique", presenter: "Gayatri Tiwari", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "541", title: "Performance and Analysis of Solar Powered Water Trash Collector Boat", presenter: "Harsh Yadav", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "1320", title: "Performance Analysis of Diﬀerent Data Embedding Techniques: Cryptography, Steganography and Watermarking", presenter: "VIJAY KRISHNA PALLAW", track: "Track-3: Artiﬁcial  Intelligence and Soft Computing in Power, Energy, Communication, and Security Systems" },
  { session: "Technical Session-21",id: "145", title: "Edge Computing for Predictive Braking in Software-Deﬁned Vehicles", presenter: "Nikhilesh Prafulla Sawarkar", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "281", title: "Marker-Based Augmented Reality in Unity: Enhancing Education through Interactive Visualization", presenter: "Neha Garg", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "282", title: "Immersive Virtual Reality: The Future Of Pain Management", presenter: "Neha Garg", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "564", title: "AgroMarket: Empowering Agriculture with smart Auction", presenter: "Salunkhe Lokesh Dattatray", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "760", title: "Evaluating the Inﬂuence of User Engagement Metrics on a Hyper-Casual Game", presenter: "Manisha Pathania", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "1210", title: "Amalgamation of cloud computing with IOT Novel ClouT Architecture.", presenter: "Neera Chaudhary", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "1523", title: "A Review of Virtual Reality-Based Technology for Treatment Upper limb Rehabilitation", presenter: "Parul Gahelot", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "1812", title: "Exploring Arduino Board Applications in Embedded Systems: The Role of AI, Cloud Computing, and Edge Computing", presenter: "Neha Garg", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "1996", title: "Authentication using Static and Continuous Keystroke Dynamics in Classical and Quantum Environments", presenter: "Namisha Bhasin", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "1997", title: "Comparative Analysis of diﬀerent methods of RSA hardware implementation on FPGA", presenter: "Dr. Amanpreet Kaur", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-22",id: "2066", title: "A Detailed Study of Vulnerability Detection using Common Vulnerabilities and Exposures from NVD using Machine Learning and Deep Learning Models", presenter: "Puninder Kaur", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-23",id: "2130", title: "Smart Living: The Role of IoT in Next Generation Home Automation System", presenter: "Harshit Gupta", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-23",id: "2131", title: "IoT-Driven Vehicle Tracking: Approach for Real-Time Navigation Management", presenter: "Raghav Goel", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-23",id: "1487", title: "GAN AI for Predictive Threat Detection with Explainable Risk Insights", presenter: "Priyal Shilasrao Patange", track: "Track-5: Recent Trends  and Innovations  in Generative AI" },
  { session: "Technical Session-23",id: "284", title: "EEG-Based Real-Time Feedback for Meditation Performance Optimization", presenter: "Kishore Kanna R", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23",id: "287", title: "Edge Computing and AI powered Drone Magnometers Module Applications", presenter: "Dr Priyanka Singh", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23",id: "1195", title: "Medical Image-Based Cancer Diagnosis and Detection using Deep Learning", presenter: "K Rama Rao", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23",id: "1532", title: "Predicting Medical Costs Using Machine Learning: A Data-Driven Approach", presenter: "Aryan Pradhan", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-23",id: "285", title: "Integrating Cognitive and Neuroimaging Data to Enhance Alzheimer's Disease Diagnosis", presenter: "Kishore Kanna R", track: "Track-7: Advances  in Adversarial  and Multi- Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-23",id: "286", title: "IoT in Healthcare: Bridging Technological Innovation and Societal Impact", presenter: "Kishore Kanna", track: "Track-7: Advances  in Adversarial  and Multi- Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-23",id: "495", title: "Impact of Diet, Colors and Virtual Reality on Mental Well-Being of an Individual: A Pre-Test Analysis", presenter: "Bhanu Sharma", track: "Track-7: Advances  in Adversarial  and Multi- Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-24",id: "744", title: "Enhancing Oral Health Sustainability through Deep Learning: A Focus on Tooth Decay Detection and Risk Analysis", presenter: "N L Padma Swati", track: "Track-7: Advances  in Adversarial  and Multi- Source Transfer learning for secure and Robust Modern Healthcare System" },
  { session: "Technical Session-24",id: "178", title: "Sugarcane disease detection and classiﬁcation using deep learning techniques", presenter: "Taranpreet", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-24",id: "1531", title: "BNS Mitra: RAG-optimized LLM based AI-powered Legal Virtual Assistant", presenter: "Bhavesh Patil", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-24",id: "1969", title: "Multimodal Deep Learning System for Nutritional Deﬁciency Assessment and Dietary Recommendation", presenter: "Gita Kolate", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-24",id: "2011", title: "Survey of Optimization Techniques for Phishing Website Detection", presenter: "Santosh Kumar Birthriya", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-24",id: "2147", title: "C^3 - Code Commit Collab - A collaborative Code Editor using Repository Level LLM", presenter: "Rohan Shirish Waghode", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-24",id: "311", title: "DEAMN: Advanced Multi-Drone Navigation and Coordination for Dynamic Environments Using ROS-Based System", presenter: "Lade Gunakar Rao", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "372", title: "Improved methods for predicting ﬂight delay using machine learning techniques", presenter: "Neha Goyal", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "433", title: "Client Defection Prediction using Machine Learning Techniques with Data Analytics", presenter: "Karlyn Hannah P", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "516", title: "Optimizing Machine Learning Models with CUDA: A Comprehensive Performance Analysis", presenter: "Niteesh L", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "538", title: "Advancements in Botnet Detection: An Extensive Analysis of Machine Learning Techniques", presenter: "Priya", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "548", title: "Predictive Maintenance for Industrial Equipment ( Motar ) Using IoT", presenter: "Saurabh Pandey", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "622", title: "KDD on CIFAR 10 Dataset by Deep Learning Models", presenter: "Mohan E", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "662", title: "Application of Machine Learning to Optical Network Traﬃc-Driven Provisioning Services", presenter: "R. Saravanakumar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-24",id: "719", title: "Natural Killer Cells in Intrusion Detection: A CIS-Based Approach for Improving Detection Accuracy", presenter: "R.Roselinkiruba", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "721", title: "CONTEXT AWARE APPROACH FOR SERVER SCEHEDULING PROCESS IN MACHINE LEARNING", presenter: "Dr.R.Roselinkiruba", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "754", title: "White Light Medical Image Based Oral Cancer Diagnosis Using an Ensemble Deep Learning Model", presenter: "Kola Anantha Venkata Sai", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1417", title: "AQUAFORECAST: PREDICTING CHENNAI'S WATER AVAILABILITY AND DEMAND", presenter: "Priyanka M", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1522", title: "Implementation and optimization of object detection on FPGA-based CPU+NPU heterogeneous system", presenter: "Cuiping Shao", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1559", title: "Crop Disease Prediction using AI", presenter: "Nagaraju Bogiri", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1575", title: "Performance Analysis of Machine Learning Models and Deep Learning Model for Credit Card Fraud Detection", presenter: "Liza Dagar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1715", title: "Enhancing Protein Secondary Structure Prediction with a Bi-LSTM Model and Random Sampling Technique", presenter: "Vaibhav Verma", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1747", title: "Sarcasm Detection in Social Media Text Using GloVe Word Embeddings in Machine Learning", presenter: "Birbal Kumar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-25",id: "1750", title: "Comparative Study of Sarcasm Detection Using GloVe + LSTM Technique in Machine Learning", presenter: "Birbal Kumar", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-26",id: "1822", title: "Intelligent Detection of DDoS Attacks in Software Deﬁned Networks Using Deep Learning", presenter: "Alok Kumar Ranjan", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-26",id: "1863", title: "From Data to Decisions: Evaluating Deep Learning Models for Stock Price Prediction in Volatile Markets", presenter: "Dhaval Mehta", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-26",id: "1831", title: "AI-Driven Dermatological Diagnosis and Treatment System", presenter: "Kshitij Sharma", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26",id: "2192", title: "Risk Assessment and Prediction of Floods and Droughts using Attention-LSTM", presenter: "Sonal Rajesh Sonarghare", track: "Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques  and Applications" },
  { session: "Technical Session-26",id: "700", title: "Multi-plant leaf disease detection using AlexNet and MobileNet CNN Methods", presenter: "M. Chandraprabha", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26",id: "1451", title: "Leveraging Machine Learning for Real-Time Crowd Control and Safety at Kumbh Mela", presenter: "Augustya Shukla", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26",id: "2139", title: "VerdictEye - Predict Court Judgements", presenter: "Abhishek Kumar Singh", track: "Track 14:Revolutionizing Industries: Deep Learning, LLMs, and Federated Learning in Healthcare, Agriculture, Intelligent Systems, and Beyond" },
  { session: "Technical Session-26",id: "561", title: "Basica: A Lightweight Interpreted Language for Streamlined Mobile Development", presenter: "Dhruv", track: "Track-4: Innovative and Disruptive Technologies" },
  { session: "Technical Session-26",id: "1204", title: "Exploring Blockchain Technology for Secure Electronic Voting Systems : A Review", presenter: "Pravin Raghunath Pachorkar", track: "Track-13: Blockchain, Cybersecurity, and AI: Building Resilient Systems  for the Future" },
  { session: "Technical Session-27",id: "270", title: "Perception of essential Sound in Cochlear Implants: Prediction using Deep learning techniques", presenter: "A.SHARAN JASMINE", track: "Main Track: ICCSAI 2025" },
  { session: "Technical Session-27",id: "1949", title: "Study of Track Obstacles Detection System", presenter: "Rishabh Verma", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-27",id: "1813", title: "Detection of Poly-Cystic Ovarian Syndrome (PCOS) using Image Processing Techniques", presenter: "Adhithyan Aravind", track: "Track-6: Federated Learning for Predictive Healthcare Paradigm" },
  { session: "Technical Session-27",id: "810", title: "nsuring the Security and Privacy of Healthcare IoT Data: A System for the Safe Administration of Patient Records", presenter: "Jay shree", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-27",id: "824", title: "Employing Artiﬁcial Intelligence and Machine Learning to Create Adaptive Models for Improved Predictive Accuracy in Dynamical Real-World Applications", presenter: "kamatchi s", track: "Track-8: Emerging Trends  with Generative AI, Multimodal  Federated Intelligence, and XAI transforming the next generation connected technologies" },
  { session: "Technical Session-27",id: "1624", title: "Water Quality Prediction: Machine Learning Approaches for Sustainable Resource Management", presenter: "Prajjwal Kumar Yadav", track: "Track-1: Emerging Trends  and Applications  in Machine Learning and Deep Learning" },
  { session: "Technical Session-27",id: "843", title: "Development and Implementation of SiC MOSFET in Electric vehicles in MATLAB Simulink", presenter: "Dr.R.Sathiya", track: "Main Track: ICCSAI 2025" }
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto p-6 overflow-x-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Online Technical Paper Presentation Schedule</h1>
        
        {/* Day 1 - Slot 1 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-4">Day 1 (9:00 AM - 12:30 PM), 05 April 2025 (Slot 1)</h2>
          <div className="bg-red-600 text-white text-center font-bold py-2 px-4 rounded-lg shadow-lg mb-6">
            ONLINE - Technical Sessions 1-13
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border p-3">Technical Session</th>
                  <th className="border p-3">Paper ID</th>
                  <th className="border p-3">Paper Title</th>
                  <th className="border p-3">Presenter</th>
                  <th className="border p-3">Track Name</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData
                  .filter(item => {
                    const sessionNum = parseInt(item.session.split('-')[1]);
                    return sessionNum >= 1 && sessionNum <= 13;
                  })
                  .map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-red-50' : 'bg-white'}>
                      <td className="border p-3 text-center">{item.session}</td>
                      <td className="border p-3 text-center">{item.id}</td>
                      <td className="border p-3">{item.title}</td>
                      <td className="border p-3">{item.presenter}</td>
                      <td className="border p-3">{item.track}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Day 1 - Slot 2 */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-4">Day 1 (12:00 PM - 3:30 PM), 05 April 2025 (Slot 2)</h2>
          <div className="bg-red-600 text-white text-center font-bold py-2 px-4 rounded-lg shadow-lg mb-6">
            ONLINE - Technical Sessions 14-27
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border p-3">Technical Session</th>
                  <th className="border p-3">Paper ID</th>
                  <th className="border p-3">Paper Title</th>
                  <th className="border p-3">Presenter</th>
                  <th className="border p-3">Track Name</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData2
                  .filter(item => {
                    const sessionNum = parseInt(item.session.split('-')[1]);
                    return sessionNum >= 14 && sessionNum <= 27;
                  })
                  .map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-red-50' : 'bg-white'}>
                      <td className="border p-3 text-center">{item.session}</td>
                      <td className="border p-3 text-center">{item.id}</td>
                      <td className="border p-3">{item.title}</td>
                      <td className="border p-3">{item.presenter}</td>
                      <td className="border p-3">{item.track}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Day 3 - Leftover Papers */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-center mb-4">Day 3 (9:30 AM - 1:00 PM), 06 April 2025</h2>
          <div className="bg-red-600 text-white text-center font-bold py-2 px-4 rounded-lg shadow-lg mb-6">
            ONLINE - Leftover Papers
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border p-3">Technical Session</th>
                  <th className="border p-3">Paper ID</th>
                  <th className="border p-3">Paper Title</th>
                  <th className="border p-3">Presenter</th>
                  <th className="border p-3">Track Name</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">404</td>
                  <td className="border p-3">CROP YEILD PREDICTION FOR SMART FARMING</td>
                  <td className="border p-3">Vansh Gupta , Sourabh , Veer Pratap, Ajay Kumar</td>
                  <td className="border p-3">Main Track: ICCSAI 2025</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">1987</td>
                  <td className="border p-3">The Impact of Neuromorphic Computing on Brain-Inspired Robotics: A Novel Architectural Paradigm</td>
                  <td className="border p-3">Sumanshu Jindal</td>
                  <td className="border p-3">Main Track: ICCSAI 2025</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">497</td>
                  <td className="border p-3">Accelerating Antenna Development: The Role of Machine Learning Algorithms</td>
                  <td className="border p-3">Rashmi Sachin Tikar</td>
                  <td className="border p-3">Track-1: Emerging Trends and Applications in Machine Learning and Deep Learning</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">622</td>
                  <td className="border p-3">KDD on CIFAR 10 Dataset by Deep Learning Models</td>
                  <td className="border p-3">Mohan E</td>
                  <td className="border p-3">Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">719</td>
                  <td className="border p-3">Natural Killer Cells in Intrusion Detection: A CIS-Based Approach for Improving Detection Accuracy</td>
                  <td className="border p-3">R.Roselinkiruba</td>
                  <td className="border p-3">Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">721</td>
                  <td className="border p-3">CONTEXT AWARE APPROACH FOR SERVER SCEHEDULING PROCESS IN MACHINE LEARNING</td>
                  <td className="border p-3">Dr.R.Roselinkiruba</td>
                  <td className="border p-3">Track-9: Machine Learning and Deep Learning: Methods, Designs, Implementations, Techniques and Applications</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">140</td>
                  <td className="border p-3">AI-Augmented Cybersecurity Protocols for Secure Multi-Hop Wireless Communication in 6G Networks</td>
                  <td className="border p-3">Renu Kumawat</td>
                  <td className="border p-3">Main Track: ICCSAI2025</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">159</td>
                  <td className="border p-3">Crop Recommendation Using Machine Learning Algorithms</td>
                  <td className="border p-3">Ankur Sharma</td>
                  <td className="border p-3">Main Track: ICCSAI2025</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">1215</td>
                  <td className="border p-3">An Examination of Brain Tumor Using the ABC and ANN Algorithms</td>
                  <td className="border p-3">Amar Singh</td>
                  <td className="border p-3">Track-6: Federated Learning for Predictive Healthcare Paradigm</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">1634</td>
                  <td className="border p-3">An Explainable AI-Centric Approach for Healthcare: A Review</td>
                  <td className="border p-3">Sumit Sharma</td>
                  <td className="border p-3">Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border p-3 text-center">Leftover</td>
                  <td className="border p-3 text-center">2153</td>
                  <td className="border p-3">Integrating Explainability in AI for Retinal Imaging: Enhancing Diabetic Retinopathy Diagnosis Accuracy</td>
                  <td className="border p-3">Sumit Sharma</td>
                  <td className="border p-3">Track-8: Emerging Trends with Generative AI, Multimodal Federated Intelligence, and XAI transforming the next generation connected technologies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;