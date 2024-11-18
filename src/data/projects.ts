/* 
title: 'Project Title' - The title of the project.
description: 'Project description.' - The description of the project.
image: '/images/projects/project-image.webp' - The path to the project image.
status: {
    text: 'Status' - The status of the project. (e.g. View Source, Coming Soon, Private Repository)
    link: 'Link' - The link to the project status. (e.g. GitHub Repository, Website)
    icon: 'icon-class' - The icon for the status. https://icon-sets.iconify.design/tabler/?query=mail&prefixes=tabler
}
note: 'Note' - A note for the project. (e.g. In development, Coming Soon)
isFeatured: true - Show the project in the featured section.
isFullWidth: true - Make the project image full width.
*/

export const projects = [
    {
        title: {
            text: 'NexEvent',
            link: 'http://ec2-18-189-189-52.us-east-2.compute.amazonaws.com/Jupiter/#',
        },
        description:
            'A full-stack web service with to improve the event searching and recommendation experience for users built with Apache Tomcat, Java Servlets, RESTful APIs, MySQL and MongoDB, deployed on AWS EC2.',
        image: '/images/projects/nexevent.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/ZiY1/Jupiter',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
        isFullWidth: true,
    },
    {
        title: {
            text: 'Autism Bridge',
            link: 'https://www.youtube.com/watch?v=aEtxebdYNaQ',
        },
        description:
            'An mobile app to prepare individuals with autism spectrum disorder for employment by providing resume building and job application process built with Flutter and Firebase.',
        image: '/images/projects/autismbridge.gif',
        status: {
            text: 'View Source',
            link: 'https://github.com/ZiY1/Autism-Bridge',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
        isFullWidth: false,
    },
    {
        title: {
            text: 'Virtual Reality Interview',
            link: 'https://www.youtube.com/watch?v=aEtxebdYNaQ',
        },
        description:
            'An Virtual Reality Interview Training Program to prepare individuals with autism spectrum disorder for job interviews built with Unity 3D and C#.',
        image: '/images/projects/vrinterview.gif',
        status: {
            text: 'View Source',
            link: 'https://github.com/ZiY1/Autism-Bridge-Virtual-Reality-Interview',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
        isFullWidth: false,
    },
]
