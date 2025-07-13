import { useGetContentsOfUser } from "../queries";
import { ContentItem } from "./content-item";

export const ListContents = () => {
    const contents = useGetContentsOfUser();
    return (
        <div>
            <h1 className="text-2xl font-bold">Your uploaded contents</h1>
            {(contents as string[]).map((content: string) => (
                <div className="mt-4" key={content}>
                    <ContentItem content={content} />
                </div>
            ))}
        </div>
    )
}