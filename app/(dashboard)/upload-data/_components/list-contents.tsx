import { useGetContentsOfUser } from "../queries";

export const ListContents = () => {
    const contents = useGetContentsOfUser();
    console.log(contents)
    return (
        <div>
            <h1 className="text-2xl font-bold">Your uploaded contents</h1>
            {(contents as string[]).map((content: string) => (
                <ContentItem key={content} content={content} />
            ))}
        </div>
    )
}

function ContentItem({ content }: { content: string }) {
    return (
        <div>
            <h1>{content}</h1>
        </div>
    )
}