import Link from "next/link";
// import directus from '@/lib/directus';
// import { readItem } from '@directus/sdk';

interface ArticlePageProps {
    params: {
        articleId: string;
    };
}

// const getArticle = async (articleId: string) => {
//     try {
//         const article = await directus.request(readItem('articles', articleId));
//         return article;
//     } catch (error) {
//         console.log(error);
//         return {};
//     }
// }

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
    // const article = await getArticle(params.articleId);

    return (
        <>
            <div className="container mx-auto mt-5 px-5">
                <div className="hidden md:flex items-center text-xss space-x-2">
                    <Link href="/" className="underline">Home</Link>
                    <span>/</span>
                    <Link href="/articles" className="underline">Articles</Link>
                    <span>/</span>
                    <p>...</p>
                </div>
            </div>

            {/* <div className="container lg:max-w-26 mx-auto text-sm space-y-6 mt-12 px-5">
                <h1 className="text-center text-3xl">{article.title}</h1>
                <div className="space-y-4">
                    <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
                </div>
            </div> */}
        </>
    );
}
export default ArticlePage;
