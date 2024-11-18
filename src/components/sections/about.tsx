import { SkillsCarousel } from '@/components/skills-carousel'
import { Typography } from '@/components/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { biography, education, experience } from '@/data'

// Reusable component for rendering lists in Education and Work Experience
const InfoSection = ({
    title,
    data,
}: {
    title: string
    data: { title: string; subtitle: string; description: string }[]
}) => (
    <div className="flex flex-col space-y-6">
        <Typography variant="h2">{title}</Typography>
        <div className="flex flex-col gap-3">
            {data.map((item) => (
                <div key={item.title} className="flex flex-col space-y-2 border-l-4 border-primary pl-4">
                    <Typography variant="h3">{item.title}</Typography>
                    <p className="text-md text-muted-foreground">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
)

export const About = () => {
    return (
        <section className="flex flex-col space-y-8 py-4">
            <Typography variant="h1" underline>
                📝 About Me
            </Typography>

            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Summary</Typography>
                <p className="text-lg text-muted-foreground">
                    Results-driven software engineer with 4+ years of experience across internships, research, and
                    projects, including Java web applications, recommendation systems, and entrepreneurship practice in
                    software development. Proficient in Java, Python, SQL, HTML, CSS, and JavaScript, with strong
                    programming, problem-solving, and analytical skills.
                </p>
            </div>

            <InfoSection title="Education" data={education} />
            <InfoSection title="Work Experience" data={experience} />

            <div className="flex flex-col space-y-6">
                <Typography variant="h2">Biography</Typography>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {biography.map((item) => (
                        <Card key={item.year} className="w-full">
                            <CardHeader>
                                <CardTitle>{item.year}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="flex flex-col space-y-6">
                <Typography variant="h2">My Skills</Typography>
                <SkillsCarousel />
            </div>
        </section>
    )
}
