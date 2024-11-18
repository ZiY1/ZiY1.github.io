import { Typography } from '@/components/typography'
import { contact } from '@/data'
import Image from 'next/image'

export const Contact = () => {
    return (
        <section className="flex flex-col space-y-8 pb-20 pt-4">
            <Typography variant="h2" underline>
                📫 Let&apos;s Connect
            </Typography>
            <div className="flex flex-col space-y-12">
                <p className="text-center text-xl text-muted-foreground lg:text-left">
                    Feel free to reach out regarding job opportunities, collaborations, projects, or anything else 😃! 
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {contact.map((item) => (
                            item.link ? (
                                <a
                                    key={item.link}
                                    href={item.link}
                                    className="group flex items-center space-x-2 text-lg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    download
                                >
                                    <span className={`${item.icon} size-6`} />
                                    <p className="transition-colors group-hover:underline">{item.label}</p>
                                </a>
                            ) : (
                                <div
                                    key={item.label}
                                    className="flex items-center space-x-2 text-lg"
                                    aria-label={item.label}
                                >
                                    <span className={`${item.icon} size-6`} />
                                    <p>{item.label}</p>
                                </div>
                            )
                        ))}
                    </div>
                    <p className="text-lg text-primary">I look forward to hearing from you!</p>
                </div>
            </div>
        </section>
    )
}
