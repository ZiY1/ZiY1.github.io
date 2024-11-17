import { Layout } from '@/components/layout'
import { Projects } from '@/components/sections/projects'
import { OPEN_GRAPH_IMAGE } from '@/config'
import type { Metadata } from 'next'

const title = 'Projects'
const description =
    'Explore projects by Ziyi Huang.'

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        images: [
            {
                url: OPEN_GRAPH_IMAGE,
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        title,
        description,
        images: [OPEN_GRAPH_IMAGE],
    },
}

const ProjectsPage = () => {
    return (
        <Layout>
            <Projects />
        </Layout>
    )
}

export default ProjectsPage
