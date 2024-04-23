import Link from "next/link";
// import directus from '@/lib/directus';
// import { readItems } from '@directus/sdk';
// import moment from "moment";

// async function getArticles() {
//     try {
//         const articles = await directus.request(readItems('articles'));
//         return articles;
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }

export default async function Articles() {
    // const articles = await getArticles();
    return (
        <>
            <div className="container mx-auto mt-5 px-5">
                <div className="hidden md:flex items-center text-xss space-x-2">
                    <Link href="/" className="underline">Home</Link>
                    <span>/</span>
                    <p>Articles</p>
                </div>
            </div>
            <div className="container mx-auto space-y-6 mt-12 px-5">
                <h1 className="text-3xl">Articles</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        // articles.map((article) => (
                        //     <div className="bg-white border border-brand-gray-200 p-5" key={article.id}>
                        //         <div className="space-y-2">
                        //             <p className="text-xss">{moment(article.post_date).format("MMMM Do YYYY")}</p>
                        //             <Link className="font-bold link-tansition" href={`/articles/${article.id}`}>
                        //                 {article.title}
                        //             </Link>
                        //             <div className="text-sm line-clamp-5" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                        //         </div>
                        //     </div>
                        // ))
                    }
                </div>
            </div>
        </>
    );
}
