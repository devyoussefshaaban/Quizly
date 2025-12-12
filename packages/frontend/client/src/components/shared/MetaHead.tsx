import { Helmet } from "react-helmet-async";

export default function MetaHead({ title, description }: { title: string, description: string }) {
    return (
        <Helmet>
            <title>{title} | Quizly</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}